function estudiar(req,res){
    res.render('estudiar/estudiar');
}

function crearEstudiar(req,res){
    res.render('estudiar/crearEstudiar');
}

function verEstudiar(req,res){
    req.getConnection((err,conn)=>{
        conn.query("SELECT * FROM estudiar",(err,estudiar)=>{
            if(err){
                res.json(err);
            }
            res.render('estudiar/verEstudiar',{estudiar});
        });
    });
}

function subirEstudiar(req,res){
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query("INSERT INTO estudiar SET ?", [data], (err, rows) =>{
            res.redirect("/verEstudiar");
        });
    });
}

function destroy(req,res){
    const data = req.body.estudiante;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM estudiar WHERE estudiante = ?', [data], (err,rows)=>{
            res.redirect('/verEstudiar');
        });
    });
}

function edit(req,res){
    const valor = req.params.estudiante;
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM estudiar WHERE estudiante = ?', [valor], (err,estudiar)=>{
            if (err){
                res.json(err);
            }
            res.render('estudiar/editarEstudiar',{estudiar});
        });
    });
}

function update(req,res){
    const valor = req.params.estudiante;
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE estudiar SET ? WHERE estudiante = ?', [data,valor], (err,rows)=>{
            res.redirect('/verEstudiar');
        });
    });
}

module.exports = {
    estudiar: estudiar,
    crearEstudiar: crearEstudiar,
    verEstudiar: verEstudiar,
    subirEstudiar: subirEstudiar,
    destroy: destroy,
    edit:edit,
    update: update,
}