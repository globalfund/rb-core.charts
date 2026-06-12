const { dsvFormat } = require('d3-dsv')

module.exports = function (source) {
  const options = this.getOptions ? this.getOptions() : {}
  const delimiter = options.delimiter || ','
  const dsv = dsvFormat(delimiter)
  const parsed = dsv.parse(source)
  return `export default ${JSON.stringify(parsed)}`
}
