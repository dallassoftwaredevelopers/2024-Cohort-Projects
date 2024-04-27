/**@module controller/user */
import mongoose from 'mongoose';
import User from '../model/user.js';
import Fridge from '../model/fridge.js';

async function readUserFromSession(req, res) {
    const userID = req.session.userID;
    console.log("userID,",userID);
    if(!userID){
        res.status(302).send("Not logged in");
    } else {
        await mongoose.connect(process.env.DB_URL).catch((error) => {
            console.error(error);
            res.status(500).send(error);
        });
    
        await User.findOne({_id: userID}).exec().then(async (user) => {
            await Fridge.findOne({owner_id: user._id}).select("routeID").exec().then((fridgeID) => {
                const profile = {
                    profile: user,
                    fridgeID: fridgeID
                }
                console.log(profile);
                res.json(profile);
            }).catch((error) => {
                console.error(error);
                res.status(500).send(error);
            });
        }).catch((error) => {
            console.error(error);
            res.status(500).send(error);
        });
    }
}

async function readUserFridgeID(req, res) {
    res.status(404).send();
}

export default {
    readProfile: readUserFromSession,
    readFridge: readUserFridgeID
}