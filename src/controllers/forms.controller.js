const pool = require("../database");

const formsCtrl={};



formsCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM forms WHERE formID= $1', [id]);
    res.json(response.rows);
};




formsCtrl.createFrom =async (req,res)=>{
    const{formname} =req.body;
    const response =await pool.query('INSERT INTO forms (form_name) VALUES ($1)')
     res.json({
        message: 'fomr Added successfully',
        body: {
            fomrs: {formname}
        }
     })
}

formsCtrl.updateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {formname}= req.body;
    const response= await pool.query('UPDATE form set form_name =$1 WHERE formID =$2',[
        formname,
        id
    ]);
    res.json('U Updated Successfully');
}



formsCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM form where formID= $1', [
        id
    ]);
    res.json(`form ${id} deleted Successfully`);
};










module.exports = formsCtrl