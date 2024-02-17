var pyrmont = {
    lat: 25.095955978927307,
    lng: 55.15785222882362
};
// Media City Address
// 25.095955978927307, 55.15785222882362
var map;

function initMap(mpp) {
    if (mpp) {
        pyrmont = mpp
    }
    map = new google.maps.Map(document.getElementById('google_map'), {
        center: pyrmont,
        zoom: 16,
    });
    setTimeout(function() {
        getPlace(pyrmont);
    }, 1500);
}
var marker;

function getPlace(mpp) {
    var latlng = new google.maps.LatLng(mpp.lat, mpp.lng);
    map.setCenter(latlng);
    var myLatLng = {
        lat: mpp.lat,
        lng: mpp.lng
    };
    if (marker) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });
}

function markStore(storeInfo) {
    const image = "https://digitalventure1.com/pic_store/";
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: storeInfo.location,
        title: storeInfo.name,
        // icon     : image,
    });
    // show store info when marker is clicked
    marker.addListener('click', function() {
        showStoreInfo(storeInfo);
    });
}

function showStoreInfo(storeInfo) {
    var info_div = document.getElementById('info_div');
    info_div.innerHTML = 'Store name: ' +
        storeInfo.name +
        '<br>Hours: ' + storeInfo.hours;
}