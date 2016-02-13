module.exports = function ( grunt ) {

	'use strict';


	// ================================================================
	// CONFIG TASKS
	// ================================================================

	// Define the configuration
	grunt.initConfig({

		// DEFAULT TASK
		// ================================================================

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
					'src/**/*.sass'
				],
				tasks: [
					'sass',
					'autoprefixer'
				]
			}
		},

		// BUILD TASKS
		// ================================================================

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
					'dist/MilliGrid.css': 'src/**/*.sass'
				}
			},
		},

		// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
		autoprefixer: {
			default: {
				options: {
					browsers: [
						'last 1 versions'
					],
					map: false
				},
				files: {
					'dist/MilliGrid.css': 'dist/MilliGrid.css'
				}
			}
		}

	});


	// ================================================================
	// REGISTER TASKS
	// ================================================================

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


	// ================================================================
	// LOAD TASKS
	// ================================================================

	// Automatically loading Grunt tasks
	require( 'load-grunt-tasks' )( grunt );

	// Display the elapsed execution time of Grunt tasks
	require( 'time-grunt' )( grunt );


};
