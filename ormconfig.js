const dbConfig = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [],
  synchronize: false,
};

module.exports = dbConfig;
