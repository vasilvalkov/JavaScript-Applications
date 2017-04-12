function redirect() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("http://stackoverflow.com");
        }, 2000);
    });
};

function notifyUser() {
    const modalWrap = document.createElement('div');
    modalWrap.className = 'modal';
    modalWrap.style.display = 'block';

    const modal = document.createElement('div')
    modal.className = 'modal-content';

    const note = document.createElement('p');
    note.innerHTML = 'You will be redirected to StackOverflow in 2 seconds';

    modal.appendChild(note);
    modalWrap.appendChild(modal);

    document.getElementById('wrapper').appendChild(modalWrap);
}

document.getElementById('redirect')
    .addEventListener('click', () => {
            notifyUser();
            redirect()
                .then(loc => {
                    window.location.assign(loc);
                });
        }
    );