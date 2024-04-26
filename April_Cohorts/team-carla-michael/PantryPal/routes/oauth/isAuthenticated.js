
function isAuthenticated(req, res, next) {
    const userID = req.session.userID;
    console.log(req.session);
    if (!userID) {
        res.status(302).send("Not logged in");
    } else {
        next();
    }
}

export default isAuthenticated;