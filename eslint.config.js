'use strict';

// const js = require('@eslint/js');
const HapiPlugin = require('@hapi/eslint-plugin');

module.exports = [
    {
        ignores: [
            'node_modules/*',
            'client/**/*.js',
            'dist/**/*.js'
        ]
    },
    ...HapiPlugin.configs.module
];
