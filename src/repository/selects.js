const knex = require('knex');

const knexFile = require('../knexfile').development;

const db = knex(knexFile);

exports.selectData = async function(tableName, options = { fields: [], filteringConditions: [], ordering: [], order: '' }) {

    const { fields, filteringConditions, ordering, order } = options

    return db(tableName)
        .select(fields)
        .where(builder => {
            if (filteringConditions) {
                filteringConditions.forEach(condition => {
                    builder.where(...condition)
                });
            }
        })
        .orderBy(ordering, order)
        .then(data => data)
        //.finally(() => db.destroy());
}

module.exports = exports