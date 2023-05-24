function profesores(req, res){
    res.render('profesores/profesores');
}

function crearProfesores(req, res){
    res.render('profesores/crearProfesores');
}

function verProfesores(req, res){
    req.getConnection((err,conn) =>{
        conn.query("SELECT * FROM profesores",(err,profesores)=>{
            if (err){
                res.json(err);
            }
            res.render('profesores/verProfesores',{profesores});
        });
    });
}

function subirProfesor(req, res) {  
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
      conn.query("INSERT INTO profesores SET ?", [data], (err, rows) => {
        res.redirect("/verProfesores");
      });
    });
    console.log(req.body);
}

function destroy(req, res){
    const data = req.body.documento;
    req.getConnection((err,conn) =>{
      conn.query('DELETE FROM profesores WHERE documento = ?', [data], (err,rows)=>{
        res.redirect('/verProfesores');
      });
    });
  }

function edit(req,res){
    const valor = req.params.documento;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM profesores WHERE documento = ?",[valor], (err, profesores) => {
        if (err) {
          res.json(err);  
        }
        res.render("profesores/editarProfesores",{profesores});
      });
    });
}

function update(req,res) {
    const valor = req.params.documento;
    const data = req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE profesores SET ? WHERE documento = ?', [data,valor], (err,rows) =>{
        res.redirect('/verProfesores');
      })
    });  
  }

module.exports = {
    profesores: profesores,
    crearProfesores: crearProfesores,
    verProfesores: verProfesores,
    subirProfesor: subirProfesor,
    destroy: destroy,
    edit:edit,
    update: update,
};