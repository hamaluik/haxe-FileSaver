# haxe-FileSaver
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/FuzzyWuzzie/haxe-FileSaver/blob/master/LICENSE)

Haxe externs for [eligrey/FileSaver.js](https://github.com/eligrey/FileSaver.js)

## Supported browsers
From [eligrey/FileSaver.js#supported-browsers](https://github.com/eligrey/FileSaver.js#supported-browsers):

|      Browser       | Constructs as | Filenames | Max Blob Size | Dependencies |
| ------------------ | ------------- | --------- | ------------- | ------------ |
| Firefox 20+        | Blob          | Yes       | 800 MiB       | None         |
| Firefox < 20       | data: URI     | No        | n/a           | [Blob.js][1] |
| Chrome             | Blob          | Yes       | [500 MiB][2]  | None         |
| Chrome for Android | Blob          | Yes       | [500 MiB][2]  | None         |
| IE 10+             | Blob          | Yes       | 600 MiB       | None         |
| Opera 15+          | Blob          | Yes       | 500 MiB       | None         |
| Opera < 15         | data: URI     | No        | n/a           | [Blob.js][1] |
| Safari 6.1+*       | Blob          | No        | ?             | None         |
| Safari < 6         | data: URI     | No        | n/a           | [Blob.js][1] |

## Syntax

```haxe
FileSaver.saveAs(blob:js.html.Blob, fileName:String, disableAutoBOM:Bool = false);
```

## Examples

### Saving text

```haxe
var blob:js.html.Blob = new js.html.Blob(["Hello world!"], { type: "text/plain;charset=utf-8" });
FileSaver.saveAs(blob, "hello world.txt");

### Live Sample

A [live sample](http://FuzzyWuzzie.github.io/haxe-FileSaver/) is available, which provides you with a poem!

[1]: https://github.com/eligrey/Blob.js
[2]: https://code.google.com/p/chromium/issues/detail?id=375297