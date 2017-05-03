import {templateLoader} from 'templateLoader';

const homeController = function () {
    templateLoader.getPage('home', {})
        .done();
};

export {homeController};