const assert = require('assert')
const ex = require('../out/index.js')

assert.equal(ex.testRun(), true)
assert.equal(ex.testRun(true), false)
