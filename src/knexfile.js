// Update with your config settings.
const utilities = require('./utilities');
module.exports = {

    development: {
        client: 'oracledb',
        connection: {
            user: utilities.user,
            password: utilities.password,
            connectString: utilities.connectString

        }
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    },

    staging: {
        client: 'oracledb',
        connection: {
            host: utilities.connectString,
            user: utilities.user,
            password: utilities.password,
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'oracledb',
        connection: {
            user: utilities.user,
            password: utilities.password,
            connectString: utilities.connectString

        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};