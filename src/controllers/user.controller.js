const { use } = require("passport");
const User = require('../models/User');
const passport = require("passport");
const {Query,QueryResult} = require ('pg');
userCtrl={};

//registor temporal
userCtrl.getUser= async (req,res) => {


    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO user_1 (username, email) VALUES ($1, $2)', [username, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {username, email}
        }
    })
};

userCtrl.getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

userCtrl.createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};

userCtrl.updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.json('User Updated Successfully');
};

userCtrl.deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};














module.exports = userCtrl;

