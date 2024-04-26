package com.dsd.reservationsystem.service;

import com.dsd.reservationsystem.database.Db;
import com.dsd.reservationsystem.models.ServiceModel;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class ServicesService {
    private Db database;


    public ServicesService(Db database) {
        this.database = database;
    }


    public List getAll() {
        ArrayList<Map> servicesDocs = this.database.getAllServices();
        return servicesDocs;
    }

    public ServiceModel getServiceById(String id) {
        DocumentReference docRef = database.collection("services").document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document;
        try {
            document = future.get();
            if (document.exists()) {
                return document.toObject(ServiceModel.class);
            } else {
                return null;
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }
}
