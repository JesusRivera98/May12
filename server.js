const express = require( 'express' );

const app = express();

let listOfStudents = [
    {
        name : "Marcel",
        id : 123
    },
    {
        name : "Martha",
        id : 456
    },
    {
        name : "Julieta",
        id : 789
    },
    {
        name: "Alfredo",
        id : 847
    }
];

app.get( '/api/students', ( req, res ) => {
    console.log( "Getting all students." );

    return res.status( 200 ).json( listOfStudents );
});

app.get( '/api/studentById', ( req, res ) => {
    console.log( "Getting a student by id using the query string." );

    console.log( req.query );

    let id = req.query.id; 

    if( !id ){
        res.statusMessage = "Please send the 'id' as parameter.";
        return res.status( 406 ).end();
    }

    let result = listOfStudents.find( ( student ) => {
        if( student.id ===  Number( id ) ){
            return student;
        }
    });

    if( !result ){
        res.statusMessage = `There are no students with the provided 'id=${id}'.`;
        return res.status( 404 ).end();
    }

    return res.status( 200 ).json( result ); 
});

app.get( '/api/getStudentById/:id', ( req, res ) => {
    console.log( "Getting a student by id using the integrated param." );
    console.log( req.params );

    let id = req.params.id;

    let result = listOfStudents.find( ( student ) => {
        if( student.id === Number( id ) ){
            return student;
        }
    });

    if( !result ){
        res.statusMessage = `There are no students with the provided 'id=${id}'.`;
        return res.status( 404 ).end();
    }

    return res.status( 200 ).json( result ); 
});

app.listen( 8080, () => {
    console.log( "This server is running on port 8080" );
});


// Base URL : http://localhost:8080/
// GET endpoint : http://localhost:8080/api/students
// GET by id in query : http://localhost:8080/api/studentById?id=123
// GET by id in param : http://localhost:8080/api/getStudentById/123