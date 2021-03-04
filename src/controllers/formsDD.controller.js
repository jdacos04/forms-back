const pool = require("../database");


formsDDCtrl={};


formsDDCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM drop_down  WHERE drop_downID = $1', [id]);
    res.json(response.rows);
};




formsDDCtrl.createFromQuestions =async (req,res)=>{
    const{questions} =req.body;
    const response =await pool.query('INSERT INTO drop_down (questions) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {questions}
        }
     })
}



formsDDCtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {questions}= req.body;
    const response= await pool.query('UPDATE drop_down set questions =$1 WHERE drop_downID =$2',[
        questions,
        id
    ]);
    res.json(' Updated Successfully');
}



formsDDCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM drop_down WHERE drop_downID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= formsDDCtrl;