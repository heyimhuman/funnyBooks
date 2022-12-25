<template>
    <div>
        <h1>You can do anything in here, just enjoy it</h1>
        <div id="location">
            <span>{{ location }}</span>
            <button @click="getCurrentLocation()">getLocation</button>
        </div>
    </div>
</template>

<script>

export default ({
    data() {
        return {
            location: String
        }
    },
    methods: {
        getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

                // alert('支持地理定位');
            } else {
                alert('不支持地理定位');
            }

            function successCallback(position) {
                alert(position);
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                location = "lat:" + lat + " long:" + long;
                console.log(location);
            }

            function errorCallback(error) {
                console.log(error);
                alert(error);
            }
        }
    }
})

</script>
