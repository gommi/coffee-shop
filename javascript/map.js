mapboxgl.accessToken = 'pk.eyJ1IjoiZ29tbWkiLCJhIjoiY2s0YjZ6aWt2MGF0aDNtbXhsZWwxbGlnOSJ9.pCsu9C-0cBmFLBc1n9ivxw';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [18.01, 45.14], // starting position [lng, lat]
                zoom: 12 // starting zoom
            });