const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const os = require('os');
const usuariosRoutes = require('./routes/usuarios');
const estudiantesRoutes = require('./routes/estudiantes');
const institucionRoutes = require('./routes/instituciones');
const profesoresRoutes = require('./routes/profesores');
const asignaturasRoutes = require('./routes/asignaturas');
const estudiarRoutes = require('./routes/estudiar');

const networkInterfaces = os.networkInterfaces();
const app = express();
app.set('port', 3030);
for (const interfaceName in networkInterfaces) {
    const interface = networkInterfaces[interfaceName];
    for (info of interface) {
      if (info.family === 'IPv4' && !info.internal) {
        console.log('contectarse a la red http://'+info.address+'/'+app.get('port'));
        break;
      }
    }
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.set('views', __dirname + '/views');
app.engine('.html',engine({
    extname: '.html',
}));

app.set('view engine', 'html');

app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'juan',
    port: '3306',
    database: 'Institucion'
},'single'));


app.listen(app.get('port'),()=>{
    console.log('el servidor esta funcionando en el puerto ', app.get('port'));
});



app.use('/', estudiantesRoutes);
app.use('/', usuariosRoutes);
app.use('/', institucionRoutes);
app.use('/', profesoresRoutes);
app.use('/', asignaturasRoutes);
app.use('/', estudiarRoutes);

app.get('/', (req,res)=>{
    res.render('principal');
});