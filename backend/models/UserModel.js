//membuat database menggunakan sequelize;
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('anggota',{
    name: DataTypes.STRING,
    namalengkap: DataTypes.STRING,
    gelardepan: DataTypes.STRING,
    gelarbelakang: DataTypes.STRING,
    gender: DataTypes.STRING,
    tempatlahir: DataTypes.STRING,
    tanggallahir: DataTypes.STRING,
    golongandarah: DataTypes.STRING,
    pendidikanterakhir: DataTypes.STRING,
    pesantren: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    tempatkerja: DataTypes.STRING,
    statusnikah: DataTypes.STRING,
    alamattinggal: DataTypes.STRING,
    alamatasal: DataTypes.STRING,
    email: DataTypes.STRING,
    nowa: DataTypes.STRING,
    notel: DataTypes.STRING,
    medsos: DataTypes.STRING,
    ukuran: DataTypes.STRING,
    tinggi: DataTypes.INTEGER,
    berat: DataTypes.INTEGER,
    penglat: DataTypes.STRING,
    pengres: DataTypes.STRING,
    namaortu: DataTypes.STRING,
    notelortu: DataTypes.STRING,
    alergi: DataTypes.STRING,
    riwayatkes: DataTypes.STRING,
    ktp: DataTypes.STRING,
    pasfoto: DataTypes.STRING,
    BPJS: DataTypes.STRING,

},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();