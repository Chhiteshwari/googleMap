mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdG1kZTA0MDNiejJ2c2JtMmRlaG02OSJ9._xGChZrx9OZlwpcv3dXVqQ"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric'
  });

  map.addControl(directions, "top-left")

  // Add marker for user's location
  const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(center)
    .addTo(map)

  // Watch user's position for real-time tracking
  navigator.geolocation.watchPosition(
    function (position) {
      const lng = position.coords.longitude
      const lat = position.coords.latitude
      marker.setLngLat([lng, lat])
      map.flyTo({
        center: [lng, lat],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      })
    },
    errorLocation,
    { enableHighAccuracy: true }
  )
}