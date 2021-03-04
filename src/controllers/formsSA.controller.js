const pool = require("../database");


formsSACtrl={};



formsSACtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM form_short_answer  WHERE form_short_answerID = $1', [id]);
    res.json(response.rows);
};




formsSACtrl.createFromQuestions =async (req,res)=>{
    const{questions} =req.body;
    const response =await pool.query('INSERT INTO form_short_answer (questions) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {questions}
        }
     })
}



formsSACtrl.createFromAnswer =async (req,res)=>{
    const{answer} =req.body;
    const response =await pool.query('INSERT INTO form_short_answer (answer) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {answer}
        }
     })
}







formsSACtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {answer}= req.body;
    const response= await pool.query('UPDATE form_short_answer set answer =$1 WHERE form_short_answerID =$2',[
        answer,
        id
    ]);
    res.json(' Updated Successfully');
}



formsSACtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM form_short_answer WHERE form_short_answerID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= formsSACtrl;