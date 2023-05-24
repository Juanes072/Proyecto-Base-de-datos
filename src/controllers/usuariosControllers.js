function usuarios(req, res) {
  res.render("usuarios/usuarios");
}

function crearUsuarios(req, res) {
  res.render("usuarios/crearUsuarios");
}

function verUsuarios(req, res) {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuarios", (err, usuarios) => {
      if (err) {
        res.json(err);
      }
      res.render("usuarios/verUsuarios",{usuarios});
    });
  });
}

function subirUsuarios(req, res) {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO usuarios SET ?", [data], (err, rows) => {
      res.redirect("/verUsuarios");
    });
  });
  console.log(req.body);
}

function destroy(req, res){
  const valor = req.body.usuario;
  req.getConnection((err,conn) =>{
    conn.query('DELETE FROM usuarios WHERE usuario = ?', [valor], (err,rows)=>{
      res.redirect('/verUsuarios');
    });
  });
}

function edit(req,res){
  const valor = req.params.usuario;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM usuarios WHERE usuario = ?",[valor], (err, usuarios) => {
      if (err) {
        res.json(err);
      }
      res.render("usuarios/editarUsuarios",{usuarios});
    });
  });
}

function update(req,res) {
  const valor = req.params.usuario;
  const data = req.body;
  req.getConnection((err,conn)=>{
    conn.query('UPDATE usuarios SET ? WHERE usuario = ?', [data,valor], (err,rows) =>{
      res.redirect('/verUsuarios');
    })
  });  
}

module.exports = {
  usuarios: usuarios,
  crearUsuarios: crearUsuarios,
  verUsuarios: verUsuarios,
  subirUsuarios: subirUsuarios,
  destroy: destroy,
  edit,edit,
  update: update,
};
