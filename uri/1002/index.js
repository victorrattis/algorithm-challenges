var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const PI = 3.14159
const calculateArea = (radius) => PI * radius * radius

var radius = parseFloat(lines.shift())
var result = calculateArea(radius).toFixed(4)

console.log(`A=${result}`)
