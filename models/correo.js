const nodemailer = require("nodemailer");
'use strict';

var phone = "";
var mail = "";
var mesagge = "";
// Campos del producto (Objeto) 
var CORREO = function (datos) {
    this.nombre = datos.nombre;
    this.correo = datos.correo;
    this.mensaje = datos.mensaje;
    nombre = this.nombre;
    mail = this.correo;
    mesagge = this.mensaje;
};

CORREO.enviar = function (newEmp, result) {
    main()
    result(null);
};

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
            from: '"Kevin Z 😉" <kevin98zamora@gmail.com>',
            to: mail,
            subject: "Este es un mensaje de Prueba",
            text: mesagge,
            html: `<!DOCTYPE html>
            <html>
              <head>
                <title>Visualización de Correo</title>
                <style>body {font-family: Arial, sans-serif;background-color: #1d593d;padding: 20px;font-size: 150%;}.container {max-width: 70%;margin: 0 auto;background-color: #0a1e1c;border-radius: 14px;padding: 20px;text-align: center;font-size: 150%;}.container h2 {margin-bottom: 20px;color: #11a192;}.container .field {margin-bottom: 20px;}.container .field label {font-weight: bold;color: #296a63;}.container .field span {display: inline-block;margin-left: 5px;color: #8fa19f; max-width: 90%  }</style>
              </head>
              <body>
                <div class="container">
                  <h2>Gracias por usar Correo Test</h2>
                  <div class="field">
                    <span
                      >!Hola ${nombre}!, muchas Gracias por usar este programa raro</span
                    >
                  </div>
                  <div class="field">
                    <label>Mensaje:</label><br>
                    <span> ${mesagge}</span>
                  </div>
                </div>
              </body>
            </html>
            
            `
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


module.exports = CORREO;