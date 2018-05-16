module.exports = function(v) {
    let sum = v.reduce((a, b) => {
        if (isNaN(b)) return a
        return a + b
    }, 0)
    return sum
}
