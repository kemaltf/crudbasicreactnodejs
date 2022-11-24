// import sequilize
import { Sequelize } from "sequelize";

// import koneksi yang diambil dari file Database.js pada folder config
import db from "../config/Database.js";

// DataTypes merupakan fungsi dari Sequelize
const { DataTypes } = Sequelize;

// buat stuktur tabelnya
// db.define("nama tabel",{field}, {opsi})
const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

// buat fungsi yang berfungsi untuk mengenerate tabel jika tabel user tidak terdapat di database.
// karena ini asinkronus
// dan kita bisa langsung menjalankan fungsinya dengan menambahkan ()
// fungsi ini akan running ketika kita memanggil file UserModel
(async () => {
  await db.sync();
})();
