/**
 * Let's do GRUNT!
 */
module.exports = function(grunt) {
    'use strict';
    // Set the livereload PORT
    var livereloadPORT = 3003;
    // INIT Grunt Thingy Majegy
    grunt.initConfig({
        // Concat all files into one file
        concat: {
            js: {
                src: ['js/**/*.js'],
                dest: 'js/app.js'
            }
        },
        // Clean the app.js file
        clean: {
            js: ['js/app.js'],
            // sass: ['css/styles/default.css', 'css/styles/default.css.map'],
            options: {
                force: true
            }
        },
        // Compile SASS file
        sass: {
            default: {
                options: {
                    style: 'expanded',
                    trace: true
                },
                files: {
                    'css/styles/default.css': 'css/themes/theme-default.scss'
                }
            }
        },
        // Watch the files
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['clean:js', 'concat:js']
            },
            scss: {
                files: ['css/**/*.scss'],
                tasks: ['sass:default']
            },
            grunt: {
                files: ['./gruntfile.js'],
                tasks: ['clean:js', 'concat:js', 'sass:default']
            },
            index: {
                files: ['./index.html'],
                tasks: ['clean:js', 'concat:js', 'sass:default']
            }
        },
        // Connect and serve the app
        connect: {
            server: {
                options: {
                    host: 'localhost',
                    port: livereloadPORT,
                    base: '.',
                    livereload: true,
                    open: true
                }
            }
        }
    });
    // Load in NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default Grunt Task
    grunt.registerTask('default', ['clean:js', 'concat:js', 'sass:default', 'connect', 'watch']);
    // grunt.registerTask('default', 'watch');
};
