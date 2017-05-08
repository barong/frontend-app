import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HTML from './common/constants/HTML';

export default class RouterFront extends Backbone.Router {

    constructor() {
        super({routes: {
            "": "home",
            "home(/)": "home",
            "*actions": "home"
        }
        });
    }

    /**
     * Default route for home page and any other unregistered routes
     */
    public home() {
        var contentContainer : JQuery = $('#' + HTML.CONTENT_ID);
        if (contentContainer.length) {
            ReactDOM.unmountComponentAtNode(contentContainer.get(0));
            ReactDOM.render(
                <h1>Frontend App</h1>,
                document.getElementById(HTML.CONTENT_ID)
            );
        }
    }
}