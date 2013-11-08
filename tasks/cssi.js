/*
 * grunt-cssi
 * https://github.com/makingoff/cssi/
 *
 * Copyright (c) 2013 makingoff <mail@makingoff.name>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cssi', 'Concat css-files to css-file with @import lines', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      prefix: ''
    });

    var beforeText = '@import url("',
        afterText = '");\n',
        separator = '");\n@import url("';

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else if (grunt.file.isFile(filepath)) {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return options.prefix + filepath;
      }).join(grunt.util.normalizelf(separator));

      // Write the destination file.
      grunt.file.write(f.dest, beforeText + src + afterText);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
