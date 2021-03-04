const pool = require("../database");


fomrsDDQCtrl={};


fomrsDDQCtrl.getFormById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM drop_down_questios  WHERE drop_down_oID = $1', [id]);
    res.json(response.rows);
};




fomrsDDQCtrl.createFromOptions =async (req,res)=>{
    const{options} =req.body;
    const response =await pool.query('INSERT INTO drop_down_questios (questions) VALUES ($1)')
     res.json({
        message: ' Added successfully',
        body: {
            fomrs: {options}
        }
     })
}



fomrsDDQCtrl.UpdateFrom =async (res,req)=>{
    const id=parseint (req.body.id);
    const {options}= req.body;
    const response= await pool.query('UPDATE drop_down_questios set questions =$1 WHERE drop_down_oID =$2',[
        options,
        id
    ]);
    res.json(' Updated Successfully');
}



fomrsDDQCtrl.deleteForm = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM drop_down_questios WHERE drop_down_oID = $1', [id]);
    res.json(`form ${id} deleted Successfully`);
};


module.exports= fomrsDDQCtrl;