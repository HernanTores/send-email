const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jordan.ferry91@ethereal.email',
            pass: 's4PUE5ABrggupWp6MZ'
        }
    })

    let info = await transporter.sendMail({
        from: '<hernan_tores@hotmail.com>',
        to: 'motivateestudio@gmail.com',
        subject: 'project',
        text: 'sending email with nodejs'
    })
    res.json(info)
}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'motivateestudio@gmail.com',
        from: 'hernan_tores@hotmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const result = await sgMail.send(msg)
    res.json(result)
}

module.exports = sendEmail