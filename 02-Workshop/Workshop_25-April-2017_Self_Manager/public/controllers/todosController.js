import { templateLoader } from 'templateLoader';
import { User } from 'user';

const todosController = function () {
    // templateLoader.getPage('todos', {})
    // .done(() => {
    const user = new User();

    $.get('api/todos')
        .done((resp) => {
            templateLoader.getPage('todos', resp);
        });
    // });
};

export { todosController };