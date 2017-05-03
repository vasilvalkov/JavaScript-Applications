const requester = (function () {
    function send(method, url, options) {
        options = options || {};

        const headers = options.headers || {},
            data = options.data || undefined;

        const promise = new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                method: method,
                contentType: 'application/json',
                headers: headers,
                data: JSON.stringify(data),
                success: function (res) {
                    resolve(res);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
        return promise;
    }
});

export { requester };