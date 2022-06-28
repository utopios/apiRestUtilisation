module.exports = {
  HOST: "demoapi.ctqpsfysnuso.eu-west-3.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "demoapi",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
