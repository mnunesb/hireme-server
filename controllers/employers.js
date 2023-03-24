const express = require('express');
const router = express.Router();
const Employer = requiere('../models/employer');

/* GET /api/employers */
router.get('/', async (req, res) => {
   /*  Callback syntax before mongoose 7
   Employer.find((err, employers) => {
        if (err){
            res.json(employers).status(400);
        }
        res.json(employers).status(200);
    }); */
    try{
        const employers = await Employer.find();
        return res.json(employers).status(200);
    }
    catch (err){
        return res.json(err).status(400);
    }

})



module.exports = router;