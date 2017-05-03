import 'cryptojs';
import {requester} from 'requester';

class User {
    register(user) {
        const reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString()
        };

        requester.post('api/users', {
                data: reqUser
            })
            .then(function (resp) {
                const user = resp.result;

                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);

                return {
                    username: resp.result.username
                };
            });
    }

    signIn(user) {
        const reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.username + user.password).toString()
        };

        const options = {
            data: reqUser
        };

        return requester.put('api/users/auth', options)
            .then(function (resp) {
                const user = resp.result;

                localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, user.username);
                localStorage.setItem(LOCAL_STORAGE_AUTHKEY_KEY, user.authKey);

                return user;
            });
    }

    signOut() {
        const promise = new Promise(function (resolve, reject) {
            localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
            localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
            resolve();
        });

        return promise;
    }
}

export { User };