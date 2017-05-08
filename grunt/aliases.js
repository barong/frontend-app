
module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('default', ['production']);
    
    grunt.registerTask('webpack', ['webpack']);
    
    grunt.registerTask('concat', ['concat']);
    
    grunt.registerTask('pack-js-css', [
        'cssmin:production',
        'uglify:production'
    ]);
    
    grunt.registerTask('production', [
        'concat:js',
        'webpack:prod',
        'pack-js-css'
    ]);

    grunt.registerTask('development', [
        'concat:js'
    ]);
};
