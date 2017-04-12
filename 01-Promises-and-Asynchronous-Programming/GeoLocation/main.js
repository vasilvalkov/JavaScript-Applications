const mapWrapper = document.getElementById('mapWrapper');

document.getElementById('root')
    .addEventListener('click', function (ev) {
        const getLocation = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => resolve(pos), (err) => reject(err));
        });

        getLocation.then(
            pos => {
                let infoContent = '';
                let currentPosition;

                if (ev.target.id === 'locateMe') {
                    currentPosition = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    };
                    infoContent = 'You are here!';
                } 
                else if (ev.target.id === 'locateAcademy') {
                    currentPosition = {
                        lat: 42.6507961,
                        lng: 23.3795183
                    };
                    infoContent = 'Telerik Academy is here!';
                }

                const map = new google.maps.Map(mapWrapper, {
                    center: currentPosition,
                    zoom: 17
                });

                const infoWindow = new google.maps.InfoWindow;
                infoWindow.setContent(infoContent);
                infoWindow.setPosition(currentPosition);
                infoWindow.open(map);
            },
            err => {
                mapWrapper.innerHTML = err.message;
            });
    });