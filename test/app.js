"use strict";
const nodemailer = require("nodemailer");

async function main() {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        transportMethod: "SMTP",
        secureConnection: true,
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: "kevin98zamora@gmail.com",
            pass: "ndebsogiwwxhmygq",
        },
    });

    let info = await transporter.sendMail(
        {
            from: "kevin98zamora@gmail.com",
            to: "kevin98zamora@gmail.com",
            subject: "Este es un mensaje de Prueba",
            text: "I hope this message gets delivered!",
            html: "<b>Hello world?</b>", // html body
        },
        (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info.envelope);
                console.log(info.messageId);
            }
        }
    );
    console.log(info);
}

main()