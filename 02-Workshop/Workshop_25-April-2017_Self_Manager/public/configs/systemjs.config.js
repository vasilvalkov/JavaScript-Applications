SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        //SystemJS files\\ 
        "plugin-babel": "../node_modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js",
        
        //App files\\
        "app": "../modules/app.js",
        "templateLoader": "../modules/templateLoader.js",
        "homeController": "./controllers/homeController.js",
        "eventsController": "../controllers/eventsController.js",
        "todosController": "../controllers/todosController.js",
        "requester": "../modules/requester.js",
        "user": "../modules/data.js",

        //Libraries\\
        "cryptojs" : "../node_modules/cryptojs/cryptojs.js"
        //Routing:
        // "navigo": "../node_modules/navigo/lib/navigo.min.js",
        //HTML:
        // "handlebars": "../node_modules/handlebars/dist/handlebars.js",
        //Popup messages
        // "toastr" : "../node_modules/toastr/toastr.js",
        //UI stuffs (autocomplete, calendar etc.)
        // "jqueryUi": "../node_modules/jquery-ui-dist/jquery-ui.js",
        // "bootstrap": "node_modules/bootstrap/dist/js/bootstrap.min.js"

    }
});