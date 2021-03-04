const pool = require("../database");
//single-selection
const formsSSCtrl={};
//single-selection-questions
const formsSSQCtrl={};



formsSSCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM single_selection  WHERE single_selectID= $1', [id]);
    res.json(response.rows);
};




formsSSCtrl.createFrom =async (req,res)=>{
    const{answer} =req.body;
    const response =await pool.query('INSERT INTO single_selection (answer) VALUES ($1)')
     res.json({
        message: 'fomr Added successfully',
        body: {
            fomrs: {answer}
        }
     })
}

formsSSCtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {answer}= req.body;
    const response= await pool.query('UPDATE single_selection_questions set answer  =$1 WHERE single_selectID =$2',[
        answer,
        id
    ]);
    res.json(' Updated Successfully');
}



formsSSCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM single_selection where single_selectID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};

//single-selection-questions

formsSSQCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM single_selection_questions WHERE single_selection_qID = $1', [id]);
    res.json(response.rows);
};




formsSSQCtrl.createFrom =async (req,res)=>{
    const{questions} =req.body;
    const response =await pool.query('INSERT INTO single_selection_questions (questions) VALUES ($1)')
     res.json({
        message: 'fomr Added successfully',
        body: {
            fomrs: {questions}
        }
     })
}

formsSSQCtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {questions}= req.body;
    const response= await pool.query('UPDATE single_selection_questions set questions=$1 WHERE single_selection_qID=$2',[
        questions,
        id
    ]);
    res.json(' Updated Successfully');
}



formsSSQCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM single_selection_questions where single_selection_qID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};

module.exports = formsSSCtrl
module.exports = formsSSQCtrl