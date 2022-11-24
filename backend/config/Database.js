// buat koneksinya
import { Sequelize } from "sequelize";

// buat variabel
const db = new Sequelize("crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
// export
export default db;
