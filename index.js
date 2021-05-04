var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.conect('mongodb://localhost:27017/eje05');

var Perfil = mongoose.model('Perfil', schema, 'perfil');

let perfil = new Perfil({
    title: "El amanecer",
    author: "Erick Nolasco",
    body: "En la noche cuando las estrellas salen, y despues el sol, amanece",
    comments: [{
        body: "Esto lo escribí gracias a un sueño",
        date: new Date('1999-06-05')
    }],
    date: new Date('1999-08-10'),
    hidden: false,
    meta: {
        votes: 5,
        favs: 2
    }
});

perfil.save(function (error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log('Se ha creado el perfil con éxito');
    process.exit(0);
});