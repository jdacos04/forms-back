const pool = require("../database");


formsACtrl={};


formsACtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM form_answer  WHERE answerID = $1', [id]);
    res.json(response.rows);
};




formsACtrl.createFromQuestions =async (req,res)=>{
    const{questions} =req.body;
    const response =await pool.query('INSERT INTO form_answer (questions) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {questions}
        }
     })
}



formsACtrl.createFromAnswer =async (req,res)=>{
    const{answer} =req.body;
    const response =await pool.query('INSERT INTO form_answer (answer) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {answer}
        }
     })
}


formsACtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {answer}= req.body;
    const response= await pool.query('UPDATE form_answer  set answer =$1 WHERE id =$2',[
        answer,
        id
    ]);
    res.json(' Updated Successfully');
}



formsACtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM form_answe where id = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= formsACtrl;