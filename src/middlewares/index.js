const selects = require('../repository/selects');

exports.selectTodos = function() {
    try {
        return selects.selectData('todos', { ordering: ['id'], order: 'desc' })
    } catch (error) {
        throw error;
    }

}