import cup from './cup.js';
import ounce from './ounce.js';
import pound from './pounds.js';
import tablespoon from './tablespoon.js';

function conversion(toMeasurement, fromMeasurement, amount) {
    switch(toMeasurement) {
        case("ounce"):
            return ounce(fromMeasurement, amount);
        
        case("cup"):
            return cup(fromMeasurement, amount);

        case("tablespoon"):
            return tablespoon(fromMeasurement, amount);

        case("pound"):
            return pound(fromMeasurement, amount);
    }
}

export default conversion;