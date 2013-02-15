module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-closure-compiler');

  // Project configuration.
  grunt.initConfig({
    'closure-compiler': {
      js:      [
        'src/n64.js',
        'r4300.js',
        'debugger.js',
        'disassemble.js',
        'hle.js',
        'romdb.js',
        'sync.js'
      ],
      externs: [
        '<%= process.env.CLOSURE_PATH %>/contrib/externs/jquery-1.7.js',
        '<%= process.env.CLOSURE_PATH %>/contrib/externs/json.js',
        'src/build/externs/webstorage.js',
        'src/build/externs/Stats.js'
      ],

      // Generates a minified version of the script.
      min:     {
        js:           '<config:closure-compiler.js>',
        jsOutputFile: 'n64.min.js',
        options:      {
          externs:              '<config:closure-compiler.externs>',
          compilation_level:    'SIMPLE_OPTIMIZATIONS',
          create_source_map:    'n64.min.js.map',
          source_map_format:    'v3'
        }
      }
    }

  });

  // Default task.
  grunt.registerTask('default', 'closure-compiler:min');

};
