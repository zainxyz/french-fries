/**
 * Let's do GRUNT!
 */
module.exports = function(grunt) {
    grunt.initConfig({
        // Babel task to convert react from JSX to regular JS ...
        // babel: {
        //     options: {
        //         plugins: ['transform-react-jsx'],
        //         presets: ['es2015', 'react']
        //     },
        //     jsx: {
        //         files: [{
        //             expand: true,
        //             cwd: 'scripts/',
        //             src: ['*.js'],
        //             dest: 'scripts/compiled/',
        //             ext: '.js'
        //         }]
        //     }
        // },
        // Concat all files into one file
        concat: {
            js: {
                src: 'js/components/**/*.js',
                dest: 'js/app.js'
            }
        },
        // Clean the app.js file
        clean: ['js/app.js'],
        // Uglify ... do I need to say more?
        // uglify: {
        //     options: {
        //         mangle: false,
        //     },
        //     my_target: {
        //         files: {
        //             'scripts/app.min.js': ['scripts/app.js']
        //         }
        //     }
        // },

    });

    // Load the required NPM Tasks
    // grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // Register the Tasks
    // Run Babel then Concat stuff
    // grunt.registerTask('babel-it', ['babel', 'concat']);
    // Just Concat stuff
    // grunt.registerTask('concat-js', 'concat');
    // Just Uglify stuff
    // grunt.registerTask('uglify-js', 'uglify');
    // Default Grunt Task
    grunt.registerTask('default', ['clean', 'concat']);
};
