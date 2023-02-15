const path = require("path");

module.exports = ({ env }) => ({
  connection0: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "47.102.127.65"),
      port: env.int("DATABASE_PORT", 5433),
      database: env(
        "DATABASE_NAME",
        "db51c50e1e9434410087470fc77160e156verticode"
      ),
      user: env("DATABASE_USERNAME", "anyverticode"),
      password: env("DATABASE_PASSWORD", "adminroot123!"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
});
