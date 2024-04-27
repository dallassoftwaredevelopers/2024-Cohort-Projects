
const ExceptionHandler = (nutrient, ID, set) => {

    if (ID === "1050" && set.hasOwnProperty("1005")) {
        delete set["1005"];

        set["1050"] = JSON.parse(JSON.stringify(nutrient));
        return false;
    } else if (ID === "1005" && set.hasOwnProperty("1050")) {
        return false;
    }

    return true;
}

export default ExceptionHandler;