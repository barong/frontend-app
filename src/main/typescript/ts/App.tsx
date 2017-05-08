import 'app/app.less'; // app.less
import * as React from 'react';
import {Common} from "./common/common";
import Router from './Router.tsx';


class App {

    constructor() {
        $(document).ready(function () {
            Common.init();
            new Router();
            Backbone.history.start();
        });
    }
}

export var app = new App();