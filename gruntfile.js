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
                src: ['js/components/**/*.js', 'js/components/interface.js'],
                dest: 'js/app.js'
            }
        },
        // Clean the app.js file
        clean: ['js/app.js'],
        // Watch the files
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            js: {
                files: ['js/components/**/*.js', 'js/components/interface.js'],
                tasks: ['clean', 'concat']
            },
            grunt: {
                files: ['./gruntfile.js'],
                tasks: ['watch']
            },
            index: {
                files: ['./index.html'],
                tasks: ['watch']
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default Grunt Task
    grunt.registerTask('default', ['connect', 'watch']);
    // grunt.registerTask('default', 'watch');
};
