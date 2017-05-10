module.exports = function( grunt ) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        watch: {
            CSS: { //task watch
                files: './src/scss/**/*.scss', // что отслеживать
                tasks: [ 'sass', 'cssmin'] //какие задачи выполнять если произошли изменения
            },
            JS: {
                files: './build/js/main.js',
                tasks: 'uglify'
            }
        }
        ,
        sass: { // task sass
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true, // 1
                    sourcemap: 'none'
                },
                files: [{
                    expand: true, // 2
                    cwd: './src/scss', //откуда берем исходник
                    src: [ '**/*.scss' ], //что ищем
                    dest: './build/css', //куда складываем
                    ext: '.css'
                }]
            }
        }, // 2
        cssmin:  {
            my_target: {
                files: [{
                    expand: true,
                    cwd: './build/css', //где находиться
                    src: [ '*.css', '!*.min.css' ], // что ищем (файл с расширением .css но не .min.css
                    dest: './build/css/', //куда ложим результат
                    ext: '.min.css' //под каким именем
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    './build/js/main.min.js': './build/js/main.js'
                }
            }
        }
    });
};