
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/studentsdb';
//                                     user         password                            database
//exports.DATABASE_URL ="mongodb+srv://<username>:<password>@cluster0-wxjd9.mongodb.net/test?retryWrites=true&w=majority"
//exports.DATABASE_URL = "mongodb+srv://admin2:admin@cluster0-wxjd9.mongodb.net/studentsdb?retryWrites=true&w=majority"
exports.TOKEN = process.env.API_TOKEN || 'password12345';
exports.PORT = process.env.PORT || '8080';



