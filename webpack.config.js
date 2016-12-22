'use strict';
const Production = require('./compile/production');
const Development = require('./compile/development');
let result;

switch (process.env.NODE_ENV) {
    case "production":
        result = Production;
        break;
    case "development":
        result = Development;
        break;
}

module.exports = result;