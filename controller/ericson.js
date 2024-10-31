const Ericson = require('../model/ericson');

const createEricson = (req, res) =>{
    const ericson = Ericson({
        nama : req.body.nama,
        pariwisata : req.body.pariwisata,
        tempat : req.body.tempat

    });
    console.log(ericson);
    ericson.save()
    .then((createEricson)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",
            ericsonId : createEricson._id
        });
    })
    .catch((err) =>{
        res.status(500).json({
            message : "Internal server Error",
        });
    });
};