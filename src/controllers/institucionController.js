function instituciones(req, res){
    res.render('instituciones/instituciones');
}

function crearInstituciones(req, res){
    res.render('instituciones/crearInstituciones');
}

function verInstituciones(req, res){
    req.getConnection((err,conn) =>{
        conn.query("SELECT * FROM instituciones",(err,instituciones)=>{
          if (err){
            res.json(err);
          }
          res.render('instituciones/verInstituciones',{instituciones});
        });
      });
}

function subirInstituciones(req, res) {  
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) => {
      conn.query("INSERT INTO instituciones SET ?", [data], (err, rows) => {
        res.redirect("/verInstituciones");
      });
    });
    console.log(req.body);  
}

function destroy(req, res){
    const data = req.body.id;
    req.getConnection((err,conn) =>{
      conn.query('DELETE FROM instituciones WHERE id = ?', [data], (err,rows)=>{
        res.redirect('/verInstituciones');
      });
    });
  }

function edit(req,res){
    const valor = req.params.id;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM instituciones WHERE id = ?",[valor], (err, instituciones) => {
        if (err) {
          res.json(err);  
        }
        res.render("instituciones/editarInstituciones",{instituciones});
      });
    });
}

function update(req,res) {
    const valor = req.params.id;
    const data = req.body;
    req.getConnection((err,conn)=>{
      conn.query('UPDATE instituciones SET ? WHERE id = ?', [data,valor], (err,rows) =>{
        res.redirect('/verInstituciones');
      })
    });  
  }

module.exports = {
    instituciones: instituciones,
    crearInstituciones: crearInstituciones,
    verInstituciones: verInstituciones,
    subirInstituciones: subirInstituciones,
    destroy: destroy,
    edit:edit,
    update: update,
};