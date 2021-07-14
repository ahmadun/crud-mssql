const sql = require("mssql");

const config = {
  user: process.env.DB_USER || "sa",
  password: process.env.DB_PASSWORD || "ahmadun",
  server: process.env.DB_SERVER || "PC-AHMADUN",
  database: process.env.DB_DATABASE || "test",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

sql.connect(config, (err) => {
  if (err) {
    console.log("Failed to open a SQL Database connection.", err.stack);
    process.exit(1);
  }
});

module.exports = sql;
