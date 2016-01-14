exports.config = {
    files: {
        javascripts: {
            joinTo: {
                "js/app.js": /^app/,
                "js/vendor.js": [/^vendor/, /^bower_components/]
            },
            order: {
                before: [/app.js/, /.+\.module.js/]
            }
        },

        stylesheets: {
            joinTo: {
                "css/common.css": [/^vendor/, /^bower_components/, /^app/]
            },
            order: {
                before: [/^app/]
            }
        }
    },

    // autoReload config to eliminate ws connection issues in DEV.   
    plugins: {
        autoReload: {
            enabled: true,
            port: [9485, 9486, 9487, 9488, 9489, 9490],
            delay: 200
        }
    }

};
