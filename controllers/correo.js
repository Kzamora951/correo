'use strict';
const { json } = require('body-parser');
const CORREO = require('../models/correo');


exports.enviar = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor proporciona todos los campos requeridos !' });
    } else {

        const correo = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            mensaje: req.body.mensaje
        };

        const nuevo_correo = new CORREO(correo);

        CORREO.enviar(nuevo_correo, function (err, sms) {
            if (err)
                res.send(err);
            req.flash('message', 'Producto Creado Correctamente !');
            res.redirect('/enviado');
        })
    }
}