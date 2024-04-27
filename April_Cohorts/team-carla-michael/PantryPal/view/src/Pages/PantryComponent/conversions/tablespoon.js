function convertFromTableSpoon(measurement, tbsp) {
    switch(measurement) {
        case("ounce"):
            return Math.ceil(tbsp * 2);
        case("cup"):
            return Math.ceil(tbsp * 16);
        case("pound"):
            return Math.ceil(tbsp * 31.63);
        default:
            return tbsp;
    }
}

export default convertFromTableSpoon;