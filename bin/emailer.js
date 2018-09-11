var mailer = require('nodemailer');

var Mailer = function(smtp){
    if(smtp){
        this.transporter = mailer.createTransport({
            pool: process.env.SMTP_POOL || false,
            host: process.env.SMTP_SERVER,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE || true,
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }else{
        this.email = process.env.EMAIL_USER;
        this.transporter = mailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
};

Mailer.prototype.send = function(recipient, content, cb){
    var mail = {
        from: this.email,
        to: recipient,
        subject: content.subject,
        html: content.body,
    };
    var emailer_status = process.env.EMAILER_STATUS || true;
    if(emailer_status != "false"){
        this.transporter.sendMail(mail,function(err,info){
            if(err) return cb(err);
            cb(null, info.response);
        });
    }else{
        cb(null, "disabled, enable on .env EMAILER_STATUS to true");
    }
};

module.exports = Mailer;