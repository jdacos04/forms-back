const passport = require("passport");
const pool = require("../database");
userCtrl={};

//registor temporal
userCtrl.getUser= async (req,res) => {


    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO user_1 (username, email) VALUES ($1, $2)', [username, email]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};

userCtrl.getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE users_IS= $1', [id]);
    res.json(response.rows);
};

userCtrl.createUser = async (req, res) => {
    const { name, email,password } = req.body;
    const response = await pool.query('INSERT INTO users (name, email,password) VALUES ($1, $2,$3)', [name, email,password]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email,password}
        }
    })
};

userCtrl.updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, email = $2 WHERE users_ID = $3', [
        name,
        email,
        id
    ]);
    res.json('User Updated Successfully');
};

userCtrl.deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where users_ID = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};














module.exports = userCtrl;

