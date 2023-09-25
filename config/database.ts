import { parse } from "pg-connection-string";

console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);

export default () => {
  const config = parse(process.env.DATABASE_URL);
  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: config.ssl
          ? {
              rejectUnauthorized: false,
            }
          : null,
      },
    },
  };
};
