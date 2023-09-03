import mysql, { createConnection } from "mysql";

const db = createConnection({
    host:"localhost",
    user:"root",
    password:"Xaajimacow3321",
    database:"loginregister"

});

export default db;