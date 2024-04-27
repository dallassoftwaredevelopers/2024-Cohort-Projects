import express from 'express';
import isAuthenticated from '../../oauth/isAuthenticated';
const router = express.Router();

router.use("/*", (req, res, next) => {
    console.log(req.session);
    isAuthenticated(req, res, next);
});

router.post("/", (req, res) => {
    const {query} = req.query;
    const result = null;
    
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(500);
    }
});