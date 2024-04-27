/**@module model/RouteID */

/** Creates short and simple IDs for use in URL endpoints while guaranteeing uniqueness.
 * @author Tyler Del Rosario
 * @param length {number} Defines the length of the routeID to generate.
*/
const RouteID = function(length) {
    const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    + "123456789";
    let routeID;

    routeID = "";

    //Build routeID by appending random characters from characterSet.
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        
        routeID += characterSet.charAt(randomIndex);
    }
    return routeID;
}

export default RouteID;