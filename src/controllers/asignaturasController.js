function asignaturas(req, res){
    res.render('asignaturas/asignaturas');
}

function crearAsignaturas(req, res){
    res.render("asignaturas/crearAsignaturas");
}

function verAsignaturas(req, res){
    req.getConnection((err,conn) =>{
        conn.query("SELECT * FROM asignaturas",(err,asignaturas)=>{
          if (err){
            res.json(err);
          }
          res.render('asignaturas/verAsignaturas',{asignaturas});
        });
    });
}

function subirAsignaturas(req, res) {  
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
      conn.query("INSERT INTO asignaturas SET ?", [data], (err, rows) => {
        res.redirect("/verAsignaturas");
      });
    });
    console.log(req.body);
}

function destroy(req, res){
    const data = req.body.codigo;
    req.getConnection((err,conn) =>{
      conn.query('DELETE FROM asignaturas WHERE codigo = ?', [data], (err,rows)=>{
        res.redirect('/verAsignaturas');
      });
    });
  }

function edit(req,res){
    const valor = req.params.codigo;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM asignaturas WHERE codigo = ?",[valor], (err, asignaturas) => {
        if (err) {
          res.json(err);  
        }
        res.render("asignaturas/editarAsignaturas",{asignaturas});
      });
    });
}

function update(req,res) {
    const valor = req.params.codigo;
    const data = req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE asignaturas SET ? WHERE codigo = ?', [data,valor], (err,rows) =>{
        res.redirect('/verAsignaturas');
      })
    });  
  }

module.exports = {
    asignaturas: asignaturas,
    crearAsignaturas: crearAsignaturas,
    verAsignaturas: verAsignaturas,
    subirAsignaturas: subirAsignaturas,
    destroy: destroy,
    edit:edit,
    update: update,
};