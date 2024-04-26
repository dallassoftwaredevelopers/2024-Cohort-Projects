package com.dsd.reservationsystem.database;

import com.dsd.reservationsystem.models.*;
import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.*;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class Db {
    private Environment env;
    private Firestore database = null;
    private String credentialsPath = "credentials.json";

    public Db(Environment env) throws IOException {
        credentialsPath = env.getProperty("credentials.path");
        // String credentialsPath = "/etc/secrets/credentials.json";
        // String environment = System.getenv("environment");
        // if (environment != "prod") {
        // credentialsPath = "credentials.json";
        // }

        System.out.println(credentialsPath);
        if (this.database == null) {
            InputStream serviceAccount = new FileInputStream(credentialsPath);
            GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(credentials)
                    .build();

            // Check if FirebaseApp has already been initialized
            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
            }

            this.database = FirestoreClient.getFirestore();
        }
    }

    public List<Part> getAllParts() {
        QuerySnapshot partsCollection;
        ApiFuture<QuerySnapshot> query = database.collection("parts").get();

        try {
            ArrayList<Part> docs = new ArrayList<>();
            partsCollection = query.get();
            List<QueryDocumentSnapshot> documents = partsCollection.getDocuments();

            for (QueryDocumentSnapshot document : documents) {

                Map<String, Object> doc = document.getData();
                String id = document.getId();
                String name = (String) doc.get("name");
                Long quantity = (Long) doc.get("quantity");
                Long threshold = (Long) doc.get("threshold");
                docs.add(new Part(id, name, quantity, threshold));
            }

            return docs;
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            return new ArrayList<Part>();
        }
    }

    public List getTimeSlots() {

        // empty snapshot
        QuerySnapshot timeSlotsCollection;

        // request to firebase for timeslots collection
        ApiFuture<QuerySnapshot> query = database.collection("timeSlots").get();

        try {
            // get snapshot from query
            timeSlotsCollection = query.get();

            // set new empty list
            ArrayList docs = new ArrayList();

            // get list of all documents from snapshot
            List<QueryDocumentSnapshot> documents = timeSlotsCollection.getDocuments();

            // loop all documents in snapshot and get the data
            for (QueryDocumentSnapshot document : documents) {
                docs.add(document.getData()); // add data of each doc to arraylist
            }

            return docs;

        } catch (Exception exception) {
            return new ArrayList<>(Arrays.asList(new HashMap<>() {
                {
                    put("id", "failed to get timeslots");
                }
            }));
        }
    }

    public ArrayList<Map> getAllServices() {
        ApiFuture<QuerySnapshot> query = database.collection("services").get();

        try {
            ArrayList<Map> docs = new ArrayList();
            QuerySnapshot servicesCollection = query.get();
            List<QueryDocumentSnapshot> servicesDocuments = servicesCollection.getDocuments();

            for (QueryDocumentSnapshot service : servicesDocuments) {
                Map doc = service.getData();

                docs.add(doc);
            }

            return docs;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }

    // timeslots
    public DaySchedule getTimeSlotsForDay(String dateStr) throws Exception {
        // request to firebase for timeslots collection
        DocumentReference docRef = database.collection("timeSlots").document(dateStr);
        try {
            ApiFuture<DocumentSnapshot> query = docRef.get();

            // get snapshot from query
            DocumentSnapshot document = query.get();

            if (document.exists()) {
                // extract appointments from document
                HashMap<String, Appointment> appointments = getAppointmentHashMap(document);
                return new DaySchedule(dateStr, appointments);
            }

            // no document found send new file
            return new DaySchedule(dateStr, new HashMap<String, Appointment>());

        } catch (Exception exception) {
            System.out.println(exception.getMessage());
            throw new Exception("database failed to get timeslots for day" + dateStr);
        }
    }

    // timeslot utility for getting timeslot info
    private static HashMap<String, Appointment> getAppointmentHashMap(DocumentSnapshot document) {
        HashMap<String, Appointment> appointments = new HashMap<>();
        Map<String, Object> doc = document.getData();

        // loop through hash map of day timeslots
        for (Map.Entry<String, Object> timeSlot : doc.entrySet()) {
            String tsCode = timeSlot.getKey();
            // HashMap<String, String> timeSlotData = (HashMap<String, String>)
            // timeSlot.getValue();

            Appointment appointment = new Appointment();
            appointments.put(tsCode, appointment);
        }
        return appointments;
    }

    public Customer createCustomer(Customer customer) {
        customer.setId(UUID.randomUUID().toString());
        // Save the customer to Firestore
        database.collection("customerInfo").document(String.valueOf(customer.getId())).set(customer);
        return customer;
    }

    public Appointment createAppointment(Appointment appointment) {

        // Generate a unique ID for the appointment
        String id = UUID.randomUUID().toString();
        appointment.setConfirmationNumber(id);

        // Save the appointment to Firestore
        database.collection("appointments").document(id).set(appointment);

        // return appointment;
        return appointment;
    }

    public void updateTimeSlotsForDay(String day, Map<String, Appointment> appointments) {
        // Get the document reference for the specific day
        DocumentReference dayRef = database.collection("timeSlots").document(day);

        // Prepare the updates
        Map<String, Object> updates = new HashMap<>();
        for (Map.Entry<String, Appointment> entry : appointments.entrySet()) {
            updates.put(entry.getKey(), entry.getValue());
        }

        // Update the document
        dayRef.update(updates);
    }

    public Customer getCustomerById(String id) {
        DocumentReference docRef = database.collection("customerInfo").document(id);
        ApiFuture<DocumentSnapshot> query = docRef.get();

        try {
            DocumentSnapshot document = query.get();
            if (document.exists()) {
                return document.toObject(Customer.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void createPart(Part part) {
        // Convert the Part object to a Map
        Map<String, Object> partMap = new HashMap<>();
        partMap.put("id", part.getId());
        partMap.put("name", part.getName());
        partMap.put("quantity", part.getQuantity());
        partMap.put("threshold", part.getThreshold());

        // Add the part to the Firestore collection
        database.collection("parts").document(part.getId()).set(partMap);
    }

    public Part getPartById(String id) {
        DocumentReference docRef = database.collection("parts").document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document;
        try {
            document = future.get();
            if (document.exists()) {
                return document.toObject(Part.class);
            } else {
                return null;
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }

    public CollectionReference collection(String collectionName) {
        return database.collection(collectionName);
    }

    public Map<String, Object> getAppointmentsForDay(String date) throws ExecutionException, InterruptedException {
        // Create a query to get all appointments on the specified date

        DocumentReference docRef = database.collection("timeSlots").document(date);

        ApiFuture<DocumentSnapshot> future = docRef.get();

        DocumentSnapshot document = future.get();

        if (!document.exists()) {
            return new HashMap<String, Object>();
        }

        List<Appointment> appointmentsList = new ArrayList<Appointment>();
        Map<String, Object> doc = document.getData();

        return doc;


    }

    public void setEnv(Environment env) {
        this.env = env;
    }

    public void setDatabase(Firestore database) {
        this.database = database;
    }

    public void setCredentialsPath(String credentialsPath) {
        this.credentialsPath = credentialsPath;
    }

}
