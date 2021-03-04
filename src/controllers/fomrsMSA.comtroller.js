const pool = require("../database");


formsMSACtrl={};


formsMSACtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM multiple_selection_answer  WHERE multiple_selection_aID = $1', [id]);
    res.json(response.rows);
};




formsMSACtrl.createFromanswer =async (req,res)=>{
    const{answer} =req.body;
    const response =await pool.query('INSERT INTO multiple_selection_answer (answer) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {answer}
        }
     })
}



formsMSACtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {answer}= req.body;
    const response= await pool.query('UPDATE multiple_selection_answer set answer =$1 WHERE multiple_selection_aID =$2',[
        answer,
        id
    ]);
    res.json(' Updated Successfully');
}



formsMSACtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM multiple_selection_answer WHERE multiple_selection_aID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= formsMSACtrl;