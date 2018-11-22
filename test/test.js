const assert = require('assert');
const Graph = require('simple.graphs.js');

const scalar = require("./../src/scalar.js");
const orth = require("./../src/orthogonalizer.js");
const normalize = require("./../src/normalize.js");

describe('projection', function() {
///to do maybe
})

describe('normalize', function() {
/// to do maybe
})


describe('gramschmidt', function() {
//to do
})


describe('orthogonalizer', function() {

  for (p of [2, 3, 5, 10, 50, 100]) {
    for (d of [0, 0.025, 0.25, 0.5, 0.75, 1]) {
      it(`${p} x ${p} matrix, d= ${d}`, () => {
        let g = Graph.random(p, d);
        let M = new Float64Array(new ArrayBuffer(p * p * 8));
        for (let i = 0; i < p * p; i++) {
          M[i] = Math.random();
        }
        orth({
          x: M,
          g: g
        })

        for (let i = 0; i < p; i++) {
          for (let j = 0; j < p; j++) {
            if (g.hasEdge(i, j)) {
              assert.equal(Math.abs(scalar({
                x: M,
                p: p,
                i: i,
                j: j
              })) > 1e-10, true);
            } else if (i == j) {
              assert.equal(Math.abs(scalar({
                x: M,
                p: p,
                i: i,
                j: j
              }) - 1) <= 1e-14, true);
            } else {
              assert.equal(Math.abs(scalar({
                x: M,
                p: p,
                i: i,
                j: j
              })) < 1e-14, true);
            }
          }
        }
      })
    }
  }
})
