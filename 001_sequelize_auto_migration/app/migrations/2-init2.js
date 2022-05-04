'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "published" from table "tutorials"
 * addColumn "published2" to table "tutorials"
 *
 **/

var info = {
    "revision": 2,
    "name": "init2",
    "created": "2022-05-03T16:54:29.359Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["tutorials", "published"]
    },
    {
        fn: "addColumn",
        params: [
            "tutorials",
            "published2",
            {
                "type": Sequelize.BOOLEAN,
                "field": "published2"
            }
        ]
    }
];

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
