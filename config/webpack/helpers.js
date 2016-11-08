const path = require('path');

var ROOT = path.resolve(__dirname, '../../');

function root(partialPath) {
  return path.join(ROOT, partialPath);
}

exports.root = root;
