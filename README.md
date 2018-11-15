## gmat-js



The implementation use `TypedArray` and `ArrayBuffer`, and matrices are
passed by reference to functions, e.g `al.normalize_r(o)` normalize the
ith row of matrix passed as `o.x`

```
const {al} = require("gmat-js");
const p = 10;
const i = 2;
const x = new Float64Array( new ArrayBuffer(p*p*8)); //matrix p x p in array form
for (let i=0; i < p*p; i++){
        x[i] = Math.random();
    }

al.normalize_r({
  x: x, //pass the array as reference
  p: p, //pass the dimension
  i: i  //pass the row index
});

//compute the squared norm of the ith row
console.log(
  al.scalar_r({
    x: x,
    p: p,
    i: i,
    j: i
  })
  );
```  
