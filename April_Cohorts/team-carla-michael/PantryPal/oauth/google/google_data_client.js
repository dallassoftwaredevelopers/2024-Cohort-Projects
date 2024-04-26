/**@module oauth/google_data_client */

/**A module for making a fetch request to the google resource server.
* @author Tyler Del Rosario 
* @param json {json} A JSON object that must contain the access_token and token_type
* properties from the google authorization server.
* @returns Returns a JSON object containing the users profile data.
*/
async function dataClient(json) {
    const url = "https://www.googleapis.com/oauth2/v2/userinfo";
    const authHeader = " " + json.token_type + " " + json.access_token;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": authHeader
        }
    });

    return response.json();
}

export default dataClient;