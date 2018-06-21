#!/usr/bin/env node
const Promise = require('bluebird');

global.Promise = Promise;

require('../dist');
