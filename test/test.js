const assert = require('assert');


describe('projection', function(){
 describe('#constructor()', function(){
    it('should create graph with the provided node set', function(){
       assert.equal((new Graph(["a","b","c"])).nodes(), ["a","b","c"])
    })
 })
})
