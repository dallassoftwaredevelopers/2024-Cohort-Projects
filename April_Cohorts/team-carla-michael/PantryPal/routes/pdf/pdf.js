import express from 'express';
import PDFBuilder from '../../pdf/recipe.js';
import isAuthenticated from '../oauth/isAuthenticated.js';
const router = express.Router();

router.use("/*", (req, res, next) => {
    console.log(req.session);
    isAuthenticated(req, res, next);
});

router.get("/recipe", (req, res) => {
    PDFBuilder(req, res);
});

export default router;