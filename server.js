var express = require("express");
var cors = require("cors");
var app = express();


app.set('port', process.env.PORT || 3000);
app.use(cors());
app.get("/", content);
app.use('/public', express.static('./public'));


app.listen(app.get('port'), function(){
    console.log("listening at: http://localhost:3000");
});

function content(req, res){
    res.json({content: "Brewer's theorem states that no distributed system can achieve consistency, availability, and partition tolerance all at the same time...at most, two of the conditions can be fulfilled"});
}