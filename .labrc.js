'use strict';

module.exports = {
    coverage: true,
    threshold: 100,
    lint: true,
    'coverage-exclude': ['client", "dist'],
    reporter: ['console', 'html'],
    output: ['stdout', 'coverage.html']
};

