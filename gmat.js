const scalar = require("./src/scalar.js");
const orth = require("./src/orthogonalizer.js");
const Graph = require("simple.graphs.js");
const normalize = require("./src/normalize.js");


exports.al = {};
exports.al.orthogonalizer = orth;
exports.al.normalize_r = normalize;
exports.al.scalar_r = scalar;

exports.genMatrix = function(options) {
  if (!options) return;
  if (!options.graph) {
    if (options.p) {
      options.graph = Graph.random(options.p, options.d);
    }
  }
  const p = options.p;
  const d = options.d;
  const M = new Float64Array(new ArrayBuffer(p * p * 8));
  const C = new Float64Array(new ArrayBuffer(p * p * 8));
  for (let i = 0; i < p * p; i++) {
    M[i] = Math.random();
  }
  orth({
    x: M,
    g: options.graph
  });
  for (let i = 0; i < p; i++) {
    for (let j = 0; j < p; j++) {
      C[i*p + j] = scalar({
       x: M,
       p: p,
       i: i,
       j: j
      });
    }
  }
  return C
}
