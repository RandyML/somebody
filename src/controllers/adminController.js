const controller ={};

controller.list=(req, res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM administradores',(err, administradores)=>{
            if(err){
                res.json(err);
            }
            
            res.render('admins',{
                data:administradores
            });
            
        });
    });
};
controller.save=(req, res)=>{
    const data=req.body;
  req.getConnection((err,conn)=>{
    conn.query('INSERT INTO administradores set ?',[data],(err, administrador)=>{
        console.log(administrador);
        res.redirect('/'); 
    });
  })
};
controller.edit=(req, res)=>{
    const {adminId} = req.params;
    req.getConnection((err ,conn)=>{
        conn.query('SELECT * FROM administradores WHERE adminId = ?',[adminId],(err,admins)=>{
            res.render('adminModal',{
                data:admins[0]
            });
            
        });
    })
};
controller.update=(req, res)=>{
    const {adminId} = req.params;
    const newAdmin=req.body;
    req.getConnection((err ,conn)=>{
        conn.query('UPDATE administradores set? WHERE adminId = ?',[newAdmin, adminId],(err,admins)=>{
            res.redirect('/')
            
        });
    })
    
};

controller.delete=(req, res)=>{
    const {adminId} = req.params;
    req.getConnection((err ,conn)=>{
        conn.query('DELETE FROM administradores WHERE adminId = ?',[adminId],(err,admins)=>{
            res.redirect('/');
        });
    })
};

module.exports=controller;