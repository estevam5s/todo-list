module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['your-js-files.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
