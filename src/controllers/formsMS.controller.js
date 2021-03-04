const pool = require("../database");


const formsMSCtrl={};


formsMSCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM multiple_selection  WHERE multiple_selectionID = $1', [id]);
    res.json(response.rows);
};




formsMSCtrl.createFromQuestions =async (req,res)=>{
    const{questions} =req.body;
    const response =await pool.query('INSERT INTO multiple_selection (questions) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {questions}
        }
     })
}



formsMSCtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {questions}= req.body;
    const response= await pool.query('UPDATE multiple_selection set questions =$1 WHERE multiple_selectionID =$2',[
        questions,
        id
    ]);
    res.json(' Updated Successfully');
}



formsMSCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM multiple_selection WHERE multiple_selectionID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= formsMSCtrl;