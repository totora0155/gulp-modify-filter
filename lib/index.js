'use strict';

const fs = require('fs');
const through = require('through2');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-modify-filter';

const cache = {};

function gulpModifyFilter() {

  return through.obj(function(file, enc, cb) {
    if (!cache[file.history[0]]) {
      cache[file.history[0]] = Date.parse(file.stat.mtime);
      cb(null, file);
      return;
    }

    if (cache[file.history[0]] < Date.parse(file.stat.mtime)) {
      cache[file.history[0]] = Date.parse(file.stat.mtime);
      cb(null, file);
      return;
    }

    cb();
  });
}

// Exporting the plugin main function
module.exports = gulpModifyFilter;
