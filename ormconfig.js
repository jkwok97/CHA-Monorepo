const dbConfig = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
};

module.exports = dbConfig;
