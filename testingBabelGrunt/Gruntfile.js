module.exports = grunt => {
  
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
      },
      dist: {
        files:[
            {
                expand: true,
                cwd: 'src/js',
                src: ['*.js'],
                dest: 'dist/js'
            }
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['babel']);

};