module.exports = function ( grunt ) {
  'use strict';

  // Define the configuration
  grunt.initConfig({
  
    // Watch files and process the above tasks
    watch: {
      options: {
        livereload: false
      },
      grunt: {
        files: [
          'Gruntfile.js'
        ],
        options: {
          reload: true
        }
      },
      sass: {
        files: [
          'src/**/*.scss'
        ],
        tasks: [
          'sass',
          'autoprefixer'
        ]
      }
    },
    
    // Clear files and folders
    clean: {
      all: [ 'dist' ]
    },
    
    // Compile Sass files to CSS
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dev: {
        files: {
          'dist/Milligrid.css': 'src/**/Milligrid.scss',
          'dist/MilligridExtended.css': 'src/**/MilligridExtended.scss'
        }
      }
    },

    // Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
    autoprefixer: {
      default: {
        options: {
          browsers: [
            'last 1 versions'
          ],
          map: true
        },
        files: {
          'dist/Milligrid.css': 'dist/Milligrid.css',
          'dist/MilligridExtended.css': 'dist/MilligridExtended.css'
        }
      }
    }
  });

  // Default task
  grunt.registerTask( 'default', [
    'build',
    'watch'
  ]);

  // Build task
  grunt.registerTask( 'build', [
    'clean',
    'sass',
    'autoprefixer'
  ]);

  // Automatically loading Grunt tasks
  require( 'load-grunt-tasks' )( grunt );

  // Display the elapsed execution time of Grunt tasks
  require( 'time-grunt' )( grunt );
};
