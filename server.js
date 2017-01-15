var express = require("express");
var app = express();
app.get('/',function(req,res){
    var ip = req.headers['x-forwarded-for'];
    var language = req.headers["accept-language"].split(',')[0];
    var userAgent =  req.headers['user-agent'];
   res.json({'ip':ip,'language':language,'software':  userAgent.match(/\(.*?\)/)[0]});
    
})
app.listen(process.env.PORT || 3000);