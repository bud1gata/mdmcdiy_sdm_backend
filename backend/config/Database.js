//koneksi database
import { Sequelize } from "sequelize";

const db = new Sequelize('mdmcdiy_sdm','root','Mbuh12345#',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;



