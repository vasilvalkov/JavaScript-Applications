import { templateLoader } from 'templateLoader';

const eventsController = function () {
    templateLoader.getPage('events', {})
        .done();
};

export { eventsController };