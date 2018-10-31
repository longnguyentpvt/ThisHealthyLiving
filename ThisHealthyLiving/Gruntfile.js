module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            coding: {
                src: ["src/main/webapp/resources/js/compiled-js/*"]
            },
            produce: {
                src: ["src/main/webapp/resources/uglify-js/*", "src/main/webapp/resources/product-js/*"]
            }
        },
        babel: {
            coding: {
                options: {
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    cwd: "src/main/webapp/resources/js/dev-js/",
                    src: ["*.js"],
                    dest: "src/main/webapp/resources/js/compiled-js/"
                }]
            },
            produce: {
                options: {
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    cwd: "src/main/webapp/resources/dev-js/",
                    src: ["*.js"],
                    dest: "src/main/webapp/resources/uglify-js/"
                }]
            }
        },
        uglify: {
            options: {
                sourceMap: false,
            },
            files: {
                expand: true,
                cwd: "src/main/webapp/resources/uglify-js/",
                src: ["*.js"],
                dest: "src/main/webapp/resources/product-js/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('compiled', ['clean:coding', 'babel:coding']);
};