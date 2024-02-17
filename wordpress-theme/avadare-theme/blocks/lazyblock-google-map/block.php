<section class="container-fluid no-padding content-map-section no-padding" id="Map">
    <div class="google_map" id="google_map"></div>
</section>
<script>
    var pyrmont = { lat: <?php echo $attributes['google-map-latitude']; ?>, lng: <?php echo $attributes['google-map-longitude']; ?> };
    initMap( pyrmont );
</script>