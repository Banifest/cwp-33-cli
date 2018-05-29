const Sequelize = require('sequelize');
const config = require('../config.json');

const options = {
    host: config.db.host,
    dialect: 'mysql',
    logging: false
};
const sequelize = new Sequelize('postgres://dutgeskcuenfjf:9b7d1176c9edca7186606fa022f3f5189d55276e4eede7cb62dd8cbc4954a2fd@ec2-50-19-224-165.compute-1.amazonaws.com:5432/d2nr62v7uedcj8');

const Repo = require('./repo')(Sequelize, sequelize);
const Commit = require('./commit')(Sequelize, sequelize);

Commit.belongsTo(Repo, { foreignKey: 'repoId' });

const context = {
    repos: Repo,
    commits: Commit,

    Sequelize,
    sequelize,
};

module.exports = context;