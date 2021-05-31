module.exports = {
  type: "postgres",
  host: "localhost",
  username: "docker",
  password: "ignite",
  port: 5433,
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
