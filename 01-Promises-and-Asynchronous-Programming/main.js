const mapWrapper = document.getElementById('mapWrapper');
const academyPosition = {
    lat: 42.6507961,
    lng: 23.3801200
};

document.getElementById('root')
    .addEventListener('click', function (ev) {
        const getLocation = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => resolve(pos), (err) => reject(err));
        });

        getLocation.then(
            pos => {
                let currentPosition;
                const infoWindow = new google.maps.InfoWindow;

                if (ev.target.id === 'locateMe') {
                    currentPosition = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    };
                    infoWindow.setContent('You are here!');
                } 
                else if (ev.target.id === 'locateAcademy') {
                    currentPosition = academyPosition;
                    infoWindow.setContent('Telerik Academy is here!');
                }

                const map = new google.maps.Map(mapWrapper, {
                    center: currentPosition,
                    zoom: 15
                });

                infoWindow.setPosition(currentPosition);
                infoWindow.open(map);
            },
            err => {
                mapWrapper.innerHTML = err.message;
            });
    });

    setTimeout(() => {
        window.location.replace("http://stackoverflow.com");
    }, 2000);

    document.getElementById('redirect')
      addEventListener('click', function () {
        const promise = new Promise((resolve, reject) => {
            window.location.replace("http://stackoverflow.com");
        })
      });