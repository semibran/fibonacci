module.exports = function fibonacci(length, offset) {
  offset = offset || 0
  var result = new Array(length)
  var number = 1
  var prev = 0
  var next
  for (var i = 0; i < offset + length; i++) {
    if (i >= offset) {
      result[i - offset] = number
    }
    next = prev + number
    prev = number
    number = next
  }
  return result
}
