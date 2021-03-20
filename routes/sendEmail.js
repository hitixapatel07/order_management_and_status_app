var express = require('express');
var router = express.Router();
const Order = require('../models/order');

const sgMail = require('@sendgrid/mail');

const sendgridAPIKey='';
sgMail.setApiKey(sendgridAPIKey);


/* GET home page. */
router.get('/', function(req, res, next) {
    
        const email = req.params.email;
        console.log("email ==> ", email);
        Order.find({email}, (err,data)=>{
            if(err) {
                res.status(500).send(err);
            }
            
            else{
                console.log("data ==> ", data);

                const msg = {
                    to: email,
                    from: 'hitixa@abc.com',
                    subject: 'Your Order Status',
                    text: 'here is your order detail',
                    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                };
                sgMail.send(msg);
                //console.log("msg ==> ", msg)
                res.send("Email sent to " + email);
            }
        })
});


module.exports = router;
