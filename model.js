// https://dev.to/lars124/how-i-structure-my-rest-apis-11k4
// https://github.com/aionic-org/aionic-core/tree/master/src
const colors = require('colors');
const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('main', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: msg => console.log(msg.magenta)
});
async function myslqstart() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
myslqstart()


const account = sequelize.define('accList', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    pass: {
        type: DataTypes.STRING,

    },
    email: {
        type: DataTypes.STRING,
    },
    followed: {
        type: DataTypes.BOOLEAN,
    },
}, {

});

account.sync({ alter: true });
exports.account = account;

