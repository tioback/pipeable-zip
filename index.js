const
  { Transform, PassThrough } = require("stream")
  , Packer = require('zip-stream')
;

class SingleFileZipCompressor extends Transform {
  constructor({fileName = "anyFile.txt", ...options}) {
    super(options);

    this.fileName = fileName;
    this.inner = new PassThrough();

    this.packer = new Packer();
    this.packer.entry(this.inner, {name: fileName}, this.forwardErrors.bind(this));

    super.pipe(this.inner, {});

    this.packer.finalize();
  }

  forwardErrors(err) {
    this.emit('error', err);
    this.end();
  }

  pipe(destination, options) {
    return this.packer.pipe(destination, options);
  }

  _transform(chunk, encoding, callback) {
    callback(null, chunk);
  }
}

module.exports = {
  SingleFileZipCompressor
};
