module.exports =  function (grunt) {
    'use strict';
    return {
        options: {
            // Specify mangle: false to prevent changes to your variable and function names.
            // mangle: false
            preserveComments: false
        },
        production: {
            files: [{
                expand: true,
                cwd: "<%= pathConfig.assets %>",
                src: ['**/*.js', '!**/*.min.js', '!**/*-min.js'],
                dest: "<%= pathConfig.assets %>",
                extDot: 'last' // Used to indicate where the period indicating the extension is located. Can take either 'first' (extension begins after the first period in the file name) or 'last' (extension begins after the last period), and is set by default to 'first' [Added in 0.4.3]
            }]
        }
    };
};
