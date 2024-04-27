/**@module router/google
 * @requires module:oauth/google_data_client
 * @requires module:oauth/google_token_client
 * @requires module:controller/google
 */
import express from "express";
import "dotenv/config";
import token_client from "../../oauth/google/google_token_client.js";
import data_client from "../../oauth/google/google_data_client.js";
import controller from "../../controller/googleController.js";
const router = express.Router();

const google_ID = process.env.GOOGLE_ID;
const google_scope = process.env.GOOGLE_SCOPE;
const google_redirect = process.env.GOOGLE_REDIRECT;

/**Sends users to the oauth consent screen
 * @author Tyler Del Rosario
 * @name auth/google
 * @function
 * @param req {request}
 * @param res {response} redirects user
 */
router.get("/", (req, res) => {
  const authRedirect =
    "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=" +
    google_redirect +
    "&prompt=consent&response_type=code&client_id=" +
    google_ID +
    "&scope=" +
    google_scope +
    "&access_type=offline";
  res.redirect(authRedirect);
});

/**Receives authorization code from the user accepting google oauth and
 * pushes the code into {@link module:oauth/google_token_client} to retrieve
 * an access token.
 * @name auth/google/callback_token
 * @function
 * @author Tyler Del Rosario
 * @inner
 * @param req {request} Should contain an authorization code to be passed onto
 * {@link module:oauth/google_token_client}
 * @param res {response} If user denied authorization, redirect them back to
 * home page with an error.
 * @param next {function} If the retrieval of an access_token from {@link module:oauth/google_token_client}
 *  is successful, push the token into the next router module.
 */
router.get("/callback", async (req, res, next) => {
  const code = req.query.code;
  console.log("code", code);

  if (code != undefined) {
    await token_client(code)
      .then((response) => {
        req.google_tokens = response;

        //store tokens inside request and push it to the next module.
        next();
      })
      .catch((error) => {
        return res.status(400).send({
          message: error.message,
        });
      });
  } else {
    //HANDLE DENIAL HERE.
    return res.status(400).send({
      message: "Invalid or missing code",
    });
  }
});

/**Receives access token, sends it to
 * {@link module:oauth/google_data_client} and
 * retrieves user's google profile data.
 * @author Tyler Del Rosario
 * @name auth/google/callback_data
 * @function
 * @inner
 * @param req {request} Should contain a JSON object containing the access_token.
 * @param res {response} Should redirect back to homepage with error if any errors are
 * thrown.
 * @param next {function} If the data retrieval from
 *  {@link module:oauth/google_data_client}
 * is successful, push the users data to the controller.
 */
router.get("/callback", async (req, res, next) => {
  await data_client(req.google_tokens)
    .then((response) => {
      req.google = {};
      req.google.id = response.id;
      req.google.name = response.name;
      req.google.profilePicture = response.picture;

      next();
    })
    .catch((error) => {
      return res.status(400).send({
        message: error.message,
      });
    });
});

/**Receives user's google data and pushes it to {@link module:controller/google}.
 * @author Tyler Del Rosario
 * @name auth/google/callback_controller
 * @function
 * @inner
 */
router.get("/callback", controller);

//TEST ROUTE. TEMPORARY
router.get("/user", (req, res) => {
  res.send(req.session.userID);
});

router.get("/test", (req, res) => {
  console.log("Test route hit!");
  res.json({ message: "Test route successful" });
});

export default router;
