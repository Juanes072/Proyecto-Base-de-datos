function estudiantes(req, res){
    res.render('estudiantes/estudiantes');
}

function crearEstudiantes(req, res){
    res.render('estudiantes/crearEstudiantes');
}

function verEstudiantes(req, res){
  req.getConnection((err,conn) =>{
    conn.query("SELECT * FROM estudiantes",(err,estudiantes)=>{
      if (err){
        res.json(err);
      }
      res.render('estudiantes/verEstudiantes',{estudiantes});
    });
  });
}

function subirEstudiante(req, res) {  
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
      conn.query("INSERT INTO estudiantes SET ?", [data], (err, rows) => {
        res.redirect("/verEstudiantes");
      });
    });
    console.log(req.body);
}

function destroy(req, res){
    const data = req.body.documento;
    req.getConnection((err,conn) =>{
      conn.query('DELETE FROM estudiantes WHERE documento = ?', [data], (err,rows)=>{
        res.redirect('/verEstudiantes');
      });
    });
  }

function edit(req,res){
    const valor = req.params.documento;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM estudiantes WHERE documento = ?",[valor], (err, estudiantes) => {
        if (err) {
          res.json(err);  
        }
        res.render("estudiantes/editarEstudiantes",{estudiantes});
      });
    });
}

function update(req,res) {
    const valor = req.params.documento;
    const data = req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE estudiantes SET ? WHERE documento = ?', [data,valor], (err,rows) =>{
        res.redirect('/verEstudiantes');
      })
    });  
  }

module.exports = {
    estudiantes: estudiantes,
    crearEstudiantes: crearEstudiantes,
    verEstudiantes: verEstudiantes,
    subirEstudiante: subirEstudiante,
    destroy: destroy,
    edit:edit,
    update: update,
};