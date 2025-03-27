'use strict';

const frogFeLint = require('..');
const assert = require('assert').strict;

assert.strictEqual(frogFeLint(), 'Hello from frogFeLint');
console.info('frogFeLint tests passed');
