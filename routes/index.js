var express = require('express');
var router = express.Router();
var monk = require('monk');

var db = monk('localhost:27017/clgnews');
var trainings=db.get('trainings');
var workshops=db.get('workshops');
var seminars=db.get('seminars');
var eventgallery=db.get('eventgallery');
var placedcandidates=db.get('placedcandidates');
var cdrive=db.get('cdrive');
var exam=db.get('exam');
var techs=db.get('techbit');
var articles=db.get('articles');
var trainers=db.get('trainers');
var slider=db.get('slider');
var notice=db.get('notice');
var circular=db.get('circular');
router.get('/user', function(req, res) { 
	 
	     
		 res.render('admin');
 });
router.get('/adminpanel', function(req, res) { 
     
         
         res.render('adminpanel');
 });
router.get('/', function(req, res) { 
		trainings.find({},{}, function(e, trainings){ 
            articles.find({},{}, function(e, articles){ 
             techs.find({},{}, function(e, techs){  
           cdrive.find({},{}, function(e, cdrive){
            circular.find({},{}, function(e, circular){
                exam.find({},{}, function(e, exam){
           seminars.find({},{}, function(e, seminars){
                notice.find({},{}, function(e, notice){
       res.render('index', {   

                 'articles': articles, 
            
            'trainings': trainings,
            'cdrive':cdrive,
            'circular':circular,
             'exam':exam,
             
             'techs':techs,
             'notice':notice

           }); 


        }); }); }); }); }); }); }); 
 });  });
           
 

router.post('/trainings_venue', function(req, res) {
    console.log(req.body.sno);
    var id = req.body.sno;
    trainings.find({"_id":id}, function(err,docs){
        console.log(docs);
      res.send(docs);
    });

});
router.post('/trainer', function(req, res) {
    console.log(req.body.sno);
    var trainerid = req.body.sno;
    trainers.find({"trainerid":trainerid}, function(err,docs){
        console.log(docs);
      res.send(docs);
    });
});


module.exports = router;
