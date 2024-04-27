function convertToPounds(measurement, pound) {
    switch(measurement) {
        case("tablespoon"):
            return Number(Math.round((pound / 32)+'e2')+'e-2');
        case("ounce"):
            return Number(Math.round((pound / 16)+'e2')+'e-2');
        case("cup"):
            return Number(Math.round((pound / 2)+'e2')+'e-2');
        default:
            return pound;
    }
}

export default convertToPounds;