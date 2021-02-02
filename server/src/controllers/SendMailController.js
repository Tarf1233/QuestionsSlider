const nodemailer = require('nodemailer');
const creds = require('../config/config');




const connection = require('../database/connection')

module.exports = {
    async SendMail (request, response){
        
        try {

            var transport = {
                host: 'smtp.gmail.com', // e.g. smtp.gmail.com
                auth: {
                  user: creds.USER,
                  pass: creds.PASS
                }
              }
              
              var transporter = nodemailer.createTransport(transport)
              
              const {name} = request.body
              const {email} = request.body
              const {message} = request.body
            
            
              var mail = {
                from: name,
                to: email,  
                subject: 'Contact form request',
                html: message
              }
            
              transporter.sendMail(mail, (err, data) => {
                if (err) {
                  response.json({
                    msg: 'fail'
                  })
                } else {
                  response.json({
                    msg: 'success'
                  })
                }
              })





            
          //      return response.json({'fine':'works'})
    } catch(err) {
        console.log(err)
        return response.json({'erro':'erro'})
    }
}
}