/**
 * Sort array using jump down sort algorithm.
 *
 * @param {Array} array
 * @return {Array}
 * @api public
 */

module.exports = function(array, distance) {
  distance = distance || ((prev, next) => prev < next)
  array = array.slice(0)
  var i = 1
  var length = array.length
  while(i < length) {
    var j = 0
    while(j < i) {
      var tmp = array[i]
      if(distance(tmp, array[j])) {
        array[i] = array[j]
        array[j] = tmp
      }
      j++
    }
    i++
  }
  return array
}
