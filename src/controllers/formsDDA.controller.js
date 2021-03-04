const pool = require("../database");


const fomrsDDACtrl={};


fomrsDDACtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM drop_down_answer  WHERE drop_down_aID = $1', [id]);
    res.json(response.rows);
};




fomrsDDACtrl.createFromQuestions =async (req,res)=>{
    const{answer} =req.body;
    const response =await pool.query('INSERT INTO drop_down_answer (answer) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {answer}
        }
     })
}



fomrsDDACtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {answer}= req.body;
    const response= await pool.query('UPDATE drop_down_answer set answer =$1 WHERE drop_down_aID =$2',[
        answer,
        id
    ]);
    res.json(' Updated Successfully');
}



fomrsDDACtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM drop_down_answer WHERE drop_down_aID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= fomrsDDACtrl;