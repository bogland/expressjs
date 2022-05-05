'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "members", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "init",
    "created": "2022-05-05T02:16:54.118Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "members",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true
            },
            "name": {
                "type": Sequelize.STRING,
                "field": "name"
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
