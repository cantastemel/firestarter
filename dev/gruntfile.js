module.exports = function(grunt){
	var $jsFiles = 'js/**/*.js';
	var $SassFiles = 'scss/**/*.scss';
	var $mainSass = 'scss/main.scss';
	// Configure tasks here
	grunt.initConfig({
 
		jshint: {
			files: [$jsFiles]
		},

		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'js',
					src: '**/*.js',
					dest: '../dist/assets/js/'
				}]
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
					loadPath: [
			          'bower_components/bourbon/app/assets/stylesheets',
			          'bower_components/neat/app/assets/stylesheets'
			        ]
				},
				files: {
					'../dist/assets/css/main.css': $mainSass
				}
			}
		},

		watch: {
			grunt: { 
				files: ["gruntfile.js"], 
				tasks: ["default"] 
			},

			script: {
				files: $jsFiles,
				tasks: ['default']
			},

			sass: {
				files: $SassFiles,
				tasks: ["default"]
			}
		}
	});

	// Load tasks here
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Register tasks here
	grunt.registerTask('default', ['jshint', 'uglify', 'sass']);
	
}