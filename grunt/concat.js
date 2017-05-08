module.exports =  function (grunt) {
    'use strict';
    return {
        js: {
            options: {
                separator: ';'
            },
            files: {
                "<%= pathConfig.assets %>/libs.js": [
                    "<%= pathConfig.js_vendor %>/jquery/jquery-1.8.3.min.js",
                    "<%= pathConfig.js_vendor %>/jquery.cookie/jquery.cookie.min.js",
                    "<%= pathConfig.js_vendor %>/json/json2.min.js",
                    "<%= pathConfig.js_vendor %>/underscore/underscore-min.js",
                    "<%= pathConfig.js_vendor %>/backbone/backbone-min.js",
                    "<%= pathConfig.js_vendor %>/react/react.min.js",
                    "<%= pathConfig.js_vendor %>/react/react-dom.min.js"
                ]
            }
        }
    };
};
