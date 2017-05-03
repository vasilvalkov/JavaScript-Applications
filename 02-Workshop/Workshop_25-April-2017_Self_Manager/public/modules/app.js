import {templateLoader} from 'templateLoader';
// import {registerController} from 'registerController';
// import {loginController} from 'loginController';
// import {logoutController} from 'logoutController';
// import {userController} from 'userController';
import {homeController} from 'homeController';
import {todosController} from 'todosController';
import {eventsController} from 'eventsController';

// $(window).ready(function () {
    const currentPage = location.hash;
    $(`a[href="${currentPage}"`).parent().addClass('active');
// });
// let currentlyLoggedUser = firebase.auth().currentUser;

// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         // User is signed in.
//         $('#loginBtn').addClass('hidden');
//         $('#registerBtn').addClass('hidden');
//         $('#currentUser').removeClass('hidden').text(`Hello, ${currentlyLoggedUser.displayName}`);
//         $('#logoutBtn').removeClass('hidden').on('click', () => logoutController(currentlyLoggedUser));
//         // ...
//     } else {
//         // User is signed out.
//         // ...
//     }
// });

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
        '/todos': () => todosController(),
        '/events': () => eventsController()
        // '/logout': () => logoutController(),
    })
    .notFound(function () { templateLoader.getPage('notFound', {})})
    .resolve();

$('#bs-example-navbar-collapse-1')
    .on('click', (ev) => {
        $('#bs-example-navbar-collapse-1').find('.active').removeClass('active');
        $(ev.target.parentNode).addClass('active');
    });