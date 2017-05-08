module.exports =  function (grunt) {
    'use strict';
    return {
        production: {
            options: {
                advanced: false,
                aggressiveMerging: false,
                shorthandCompacting: false
            },
            expand: true,
            cwd: "<%= pathConfig.assets %>",
            src: ['**/*.css', '!**/*.min.css'],
            dest: "<%= pathConfig.assets %>"
        }
    };
};
