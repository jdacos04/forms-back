const { use } = require("passport");
const User = require('../models/User');
const passport = require("passport");
const {Query,QueryResult} = require ('pg');
userCtrl={};

//registor temporal
userCtrl.signup= async (req,res) => {


    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};

userCtrl.

module.exports = userCtrl;