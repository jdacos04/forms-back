const pool = require("../database");


formsMSQCtrl={};


formsMSQCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM multiple_selection_questions  WHERE multiple_selection_oID = $1', [id]);
    res.json(response.rows);
};




formsMSQCtrl.createFromQuestions =async (req,res)=>{
    const{options} =req.body;
    const response =await pool.query('INSERT INTO multiple_selection_questions (options) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {options}
        }
     })
}



formsMSQCtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {options}= req.body;
    const response= await pool.query('UPDATE multiple_selection_questions set options =$1 WHERE multiple_selection_oID =$2',[
        options,
        id
    ]);
    res.json(' Updated Successfully');
}



formsMSQCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM multiple_selection_questions WHERE multiple_selection_oID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= formsMSQCtrl;