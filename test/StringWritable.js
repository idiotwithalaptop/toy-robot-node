const { Writable } = require('stream')
const { StringDecoder } = require('string_decoder')

module.exports = class StringWritable extends Writable {
  constructor (options) {
    super(options)
    this._decoder = new StringDecoder(options && options.defaultEncoding)
    this.data = ''
  }
  _write (chunk, encoding, callback) {
    if (encoding === 'buffer') {
      chunk = this._decoder.write(chunk)
    }
    this.data += chunk
    callback()
  }
  _final (callback) {
    this.data += this._decoder.end()
    callback()
  }
}
