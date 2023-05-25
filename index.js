const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path"); // Path


const session = require("express-session");
app.use(
  session({ secret: "mySecret", resave: false, saveUninitialized: false })
);

const flash = require("express-flash");
app.use(flash());

// EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(bodyParser.urlencoded({ extended: true }));

// Peticiones de tipo application/json
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.render('enviar')
})

app.get('/enviado', (request, response) => {
    response.render('enviado')
})


const ruta_correo = require("./routes/correo");
app.use("/correo", ruta_correo)



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})