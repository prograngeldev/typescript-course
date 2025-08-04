module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ts');

  grunt.initConfig({
    ts: {
      main: {
        src: ['ts/**/*.ts'],
        dest: 'javascript/',
      }
    }
  });

  grunt.registerTask('default', ['ts']);
}