function convertToOunces(measurement, ounce) {
    switch(measurement) {
        case("tablespoon"):
            return Number(Math.round((ounce * 0.5)+'e2')+'e-2');
        case("cup"):
            return Number(Math.round((ounce * 8)+'e2')+'e-2');
        case("pound"):
            return Number(Math.round((ounce * 16)+'e2')+'e-2');
        default:
            return ounce;
    }
}

export default convertToOunces;