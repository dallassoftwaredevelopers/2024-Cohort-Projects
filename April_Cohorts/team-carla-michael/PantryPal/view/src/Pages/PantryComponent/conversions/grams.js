function convertFromGrams(measurement, gram) {
    const perGram = Number(Math.round((gram / 100)+'e2')+'e-2');
    
        switch(measurement) {
            case("ounce"):
                return Math.ceil(28 * perGram);
            case("cup"):
                return Math.ceil(340 * perGram);
            case("pound"):
                return Math.ceil(453 * perGram);
            case("tablespoon"):
                return Math.ceil(14 * perGram);
        }
}

export default convertFromGrams;