export const timeSlots = {
    "TS79": "7am-9am",
    "TS911": "9am-11am",
    "TS111": "11am-1am",
    "TS13": "1pm-3pm",
    "TS35": "3pm-5pm",
    "TS57": "5pm-7pm"
}

export const sideNavItems = [
    {
        label: "Dashboard",
        href: "/admin/dashboard"
    },
    {
        label: "Appointments",
        href: "/admin/appointments"
    },
    {
        label: "Inventory",
        href: "/admin/inventory"
    }
]

export const appointmentAttributes = ["Id","Name", "Time", "Service", "Parts Needed"];
export const partsAttributes = ["Id", "Name", "Threshold", "Quantity"];

export const statesList = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

export const servicesList = [
    {"name": "Drain Cleaning", "id": "s10001", "partsNeeded": ["p10001", "p10002"]},
    {"name": "Leak Repair", "id": "s10002", "partsNeeded": ["p10003", "p10004"]},
    {"name": "Faucet Installation", "id": "s10003", "partsNeeded": ["p10005", "p10006"]},
    {"name": "Toilet Repair", "id": "s10004", "partsNeeded": ["p10007", "p10008"]},
    {"name": "Sewer Line Repair", "id": "s10005", "partsNeeded": ["p10009", "p10010"]},
    {"name": "Water Heater Installation", "id": "s10006", "partsNeeded": ["p10011", "p10012"]},
    {"name": "Garbage Disposal Repair", "id": "s10007", "partsNeeded": ["p10013", "p10014"]},
    {"name": "Sump Pump Installation", "id": "s10008", "partsNeeded": ["p10015", "p10016"]},
    {"name": "Pipe Replacement", "id": "s10009", "partsNeeded": ["p10017", "p10018"]},
    {"name": "Hydro Jetting", "id": "s10010", "partsNeeded": ["p10019", "p10020"]},
    {"name": "Septic System Repair", "id": "s10011", "partsNeeded": ["p10021", "p10022"]},
    {"name": "Water Filtration System Installation", "id": "s10012", "partsNeeded": ["p10023", "p10024"]},
    {"name": "Bathroom Remodeling", "id": "s10013", "partsNeeded": ["p10025", "p10026"]},
    {"name": "Kitchen Plumbing", "id": "s10014", "partsNeeded": ["p10027", "p10028"]},
    {"name": "Emergency Plumbing", "id": "s10015", "partsNeeded": ["p10029", "p10030"]}
]

export const partsList = [
    {"id": "p10001", "name": "Seal", "quantity": 30, "threshold": 3},
    {"id": "p10002", "name": "Drain Pipe", "quantity": 15, "threshold": 2},
    {"id": "p10003", "name": "Washer", "quantity": 50, "threshold": 5},
    {"id": "p10004", "name": "O-Ring", "quantity": 45, "threshold": 4},
    {"id": "p10005", "name": "Faucet Handle", "quantity": 25, "threshold": 3},
    {"id": "p10006", "name": "Mounting Hardware", "quantity": 20, "threshold": 2},
    {"id": "p10007", "name": "Flapper", "quantity": 40, "threshold": 4},
    {"id": "p10008", "name": "Valve", "quantity": 30, "threshold": 3},
    {"id": "p10009", "name": "Sewer Pipe", "quantity": 10, "threshold": 1},
    {"id": "p10010", "name": "Coupling", "quantity": 25, "threshold": 3},
    {"id": "p10011", "name": "Heating Element", "quantity": 15, "threshold": 2},
    {"id": "p10012", "name": "Thermostat", "quantity": 20, "threshold": 2},
    {"id": "p10013", "name": "Disposal Blade", "quantity": 10, "threshold": 1},
    {"id": "p10014", "name": "Gasket", "quantity": 50, "threshold": 5},
    {"id": "p10015", "name": "Sump Pump", "quantity": 5, "threshold": 1},
    {"id": "p10016", "name": "Check Valve", "quantity": 15, "threshold": 2},
    {"id": "p10017", "name": "Copper Pipe", "quantity": 20, "threshold": 3},
    {"id": "p10018", "name": "PVC Pipe", "quantity": 25, "threshold": 2},
    {"id": "p10019", "name": "Jet Nozzle", "quantity": 15, "threshold": 2},
    {"id": "p10020", "name": "Hose", "quantity": 20, "threshold": 3},
    {"id": "p10021", "name": "Septic Filter", "quantity": 20, "threshold": 3},
    {"id": "p10022", "name": "Sealant", "quantity": 30, "threshold": 3},
    {"id": "p10023", "name": "Pressure Regulator", "quantity": 15, "threshold": 2},
    {"id": "p10024", "name": "Expansion Tank", "quantity": 20, "threshold": 3},
    {"id": "p10025", "name": "Pipe Insulation", "quantity": 25, "threshold": 3},
    {"id": "p10026", "name": "Water Heater Element", "quantity": 10, "threshold": 1},
    {"id": "p10027", "name": "Float Valve", "quantity": 20, "threshold": 2},
    {"id": "p10028", "name": "Overflow Drain", "quantity": 15, "threshold": 2},
    {"id": "p10029", "name": "Backflow Preventer", "quantity": 10, "threshold": 1},
    {"id": "p10030", "name": "Union", "quantity": 20, "threshold": 3}
]


