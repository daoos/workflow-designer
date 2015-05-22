/**
 * Created by Rajitha on 2/22/2015.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        mocha: {
            all: {
                src: ["tests/TestRunner.html"],
                options: {
                    run: true,
                    log: true
                }
            }
        },
        jshint: {
            all: ["js/**/*.js", "tests/js/**/*.js"],
            options: {
                curly: true
            }
        },
        cssmin : {
            css:{
                src: 'css/styles.css',
                dest: 'dist/workflow-designer.min.css'
            }
        },
        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "require-config.js",
                    optimize: "uglify2",
                    generateSourceMaps: false,
                    name: "main",
                    out: "dist/workflow-designer.min.js"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask("default", ["mocha", "jshint", "cssmin", "requirejs"]);
};