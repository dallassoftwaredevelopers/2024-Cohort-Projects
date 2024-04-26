function convertToCup(measurement, cup) {
    switch(measurement) {
        case("tablespoon"):
            return Number(Math.round((cup / 16)+'e2')+'e-2');
        case("ounce"):
            return Number(Math.round((cup / 8)+'e2')+'e-2');
        case("pound"):
            return Number(Math.round((cup * 2)+'e2')+'e-2');
        default:
            return cup;
    }
}

export default convertToCup;