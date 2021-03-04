const { Router } = require('express');
const router = Router();
const formsCtrl = require('../controllers/forms.controller');
const formsSSCtrl =require('../controllers/formSS.controllers');
const formsSSQCtrl =require('../controllers/formSS.controllers');
const formsACtrl= require('../controllers/formsA.controller');
const formsSACtrl= require('../controllers/formsSA.controller');
const formsDDCtrl =require('../controllers/formsDD.controller');
const formsDDACtrl= require('../controllers/formsDDA.controller');
const formsDDQCtrl = require('../controllers/formsDDQ.controller');
const formsMSCtrl = require('../controllers/formsMS.controller');
const formsMSQCtrl = require('../controllers/formsMSQ.controller');
const formsMSACtrl= require('../controllers/formsMSA.comtroller')


//fomrs
router.get('/forms/:id',formsCtrl.getFormById);
router.post('/forms',formsCtrl.createFrom);
router.put('/forms/:id',formsCtrl.updateFrom);
router.delete('/forms/:id',formsCtrl.deleteForm);
//simple selection
router.get('/forms/sinle_Selection/:id',formsSSCtrl.getFormById);
router.post('/forms/sinle_Selection',formsSSCtrl.createFrom);
router.put('/forms/sinle_Selection/:id',formsSSCtrl.updateFrom);
router.delete('/forms/sinle_Selection/:id',formsSSCtrl.deleteForm);

//simeple selection questions
router.get('/forms/sinle_Selection_questions/:id',formsSSQCtrl.getFormById);
router.post('/forms/sinle_Selection_questions',formsSSQCtrl.createFrom);
router.put('/forms/sinle_Selection_questions/:id',formsSSQCtrl.updateFrom);
router.delete('/forms/sinle_Selection_questions/:id',formsSSQCtrl.deleteForm);


//simple selection
router.get('/forms/answer/:id',formsACtrl.getFormById);
router.post('/forms/answer',formsACtrl.createFromAnswer);
router.post('/forms/answer/questions',formsACtrl.createFromQuestions);
router.put('/forms/answer/:id',formsACtrl.updateFrom);
router.delete('/forms/answer/:id',formsACtrl.deleteForm);

//short answer
router.get('/forms/short_answer/:id',formsSACtrl.getFormById);
router.post('/forms/short_answer',formsSACtrl.createFromAnswer);
router.post('/formsshort_answer/questions',formsSACtrl.createFromQuestions);
router.put('/forms/short_answern/:id',formsSACtrl.updateFrom);
router.delete('/forms/short_answer/:id',formsSACtrl.deleteForm);

//drop down
router.get('/forms/drop_down/:id',formsDDCtrl.getFormById);
router.post('/forms/drop_down',formsDDCtrl.createFrom);
router.put('/forms/drop_down/:id',formsDDCtrl.updateFrom);
router.delete('/forms/drop_down/:id',formsDDCtrl.deleteForm);

//drop down questions
router.get('/forms/drop_down_questions:id',formsDDQCtrl.getFormById);
router.post('/forms/drop_down_questions',formsDDQCtrl.createFrom);
router.put('/forms/drop_down_questions/:id',formsDDQCtrl.updateFrom);
router.delete('/forms/drop_down_questions:id',formsDDQCtrl.deleteForm);
//drop down answer
router.get('/forms/drop_down_answer/:id',formsDDACtrl.getFormById);
router.post('/forms/drop_down_answer',formsDDACtrl.createFrom);
router.put('/forms/drop_down_answer/:id',formsDDACtrl.updateFrom);
router.delete('/forms/drop_down_answer/:id',formsDDACtrl.deleteForm);

//multiple selecton
router.get('/forms/multiple_selection/:id',formsMSCtrl.getFormById);
router.post('/formsmultiple_selection',formsMSCtrl.createFrom);
router.put('/forms/multiple_selection/:id',formsMSCtrl.updateFrom);
router.delete('/forms/multiple_selection/:id',formsMSCtrl.deleteForm);

//multiple selection questiosn
router.get('/forms/multiple_selection_question/:id',formsMSQCtrl.getFormById);
router.post('/forms/multiple_selection_question/',formsMSQCtrl.createFrom);
router.put('/forms/multiple_selection_question//:id',formsMSQCtrl.updateFrom);
router.delete('/forms/multiple_selection_question//:id',formsMSQCtrl.deleteForm);

//multiple selection answer
router.get('/forms/multiple_selection_answer/:id',formsMSACtrl.getFormById);
router.post('/forms/multiple_selection_answer',formsMSACtrl.createFrom);
router.put('/forms/multiple_selection_answer/:id',formsMSACtrl.updateFrom);
router.delete('/forms/multiple_selection_answer/:id',formsMSACtrl.deleteForm);









