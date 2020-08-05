# pipeable-zip
A way to compress an output to zip format while piping a stream.

This project allows for easily compressing files with ZIP using [node-zip-stream](https://github.com/archiverjs/node-zip-stream), such as:

```javascript
reader
  .pipe(someTransformation)
  .pipe(new SingleFileZipCompressor({fileName: "name_inside_zip.txt"})
  .pipe(writer);
```

## TODO
Create ways to add multiple files.
Register in NPM.
Add working sample.
Add tests.
