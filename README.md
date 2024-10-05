## Map App with Geolocation, Directions, and Real-time Tracking

This project is a simple map application built using HTML, CSS, and JavaScript, utilizing the Mapbox GL JS library for interactive maps and Mapbox Directions for route planning. 

**Key Features:**

* **Geolocation:** The app utilizes the browser's geolocation API to get the user's current location.
* **Interactive Map:** Displays a Mapbox map centered on the user's location or a default location if geolocation is not available.
* **Navigation Control:** Provides intuitive navigation controls for zooming and panning the map.
* **Directions Feature:** Enables route planning between two points on the map using the Mapbox Directions plugin.
* **Real-time Tracking:** Continuously tracks the user's location using the `watchPosition` method and updates the marker on the map accordingly.
* **User Interface:** A basic front-end structure with a button for navigating to a Home page, a link to a Weather page, and a responsive design to adapt to different screen sizes.

**Functionality:**

1. **Initial Loading:**
   - Attempts to get the user's current location.
   - If geolocation is successful, initializes the map centered on the user's location.
   - If geolocation fails, defaults to a predetermined location in the UK.
2. **Navigation Controls:**
   - Provides zooming and panning controls on the map.
3. **Directions:**
   - Enables users to input starting and ending points for directions.
   - Calculates and displays a route between the specified locations.
4. **Real-time Tracking:**
   - Continuously monitors the user's location using the browser's geolocation API.
   - Updates the user's marker on the map in real-time as they move.
   - Smoothly animates the map to follow the user's position.

**Technical Details:**

**HTML:**
* Uses `index.html` for the landing page with a button to navigate to the `main.html` map page.
* `main.html` contains the structure for the map and links to the Mapbox GL JS library and the Mapbox Directions plugin.
* `weather.html` implements a simple weather forecast feature using OpenWeatherMap API.

**CSS:**
* Provides styling for the map container, header, navigation links, and the weather page.
* Uses responsive design to adapt the layout to different screen sizes.

**JavaScript (script.js):**
* **Map initialization:** Sets up the map with the Mapbox style, initial center, and zoom level.
* **Geolocation:** Uses `navigator.geolocation.getCurrentPosition` and `navigator.geolocation.watchPosition` for getting and tracking the user's location.
* **Directions:** Initializes and adds the Mapbox Directions plugin to the map.
* **Marker:** Adds a marker to the map to represent the user's location.
* **Real-time tracking:** Updates the marker and smoothly animates the map to follow the user's position in real-time.

**Dependencies:**

* Mapbox GL JS library: For interactive maps and functionalities.
* Mapbox Directions plugin: For route planning features.
* OpenWeatherMap API: For weather forecast in the `weather.html` page.

**Project Files:**

* `index.html`: Landing page with navigation button.
* `main.html`: The main page containing the map.
* `weather.html`: Weather forecast page.
* `script.js`: Contains JavaScript code for map functionality.
* `front.css`: CSS file for the front page.

**Instructions:**

1. Ensure you have a Mapbox account and access token. Replace `"pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdG1kZTA0MDNiejJ2c2JtMmRlaG02OSJ9._xGChZrx9OZlwpcv3dXVqQ"` in `script.js` with your own Mapbox access token.
2. Replace the OpenWeatherMap API key in `weather.js` with your own API key.
3. Open `index.html` in your browser.
4. Allow access to your location if prompted.

**To-Do:**

* Implement more advanced user interface elements for better interaction with the map.
* Add markers for points of interest based on user input or pre-defined data.
* Integrate other Mapbox plugins for features like clustering, heatmaps, or Geocoding.
* Add features like traffic information, real-time weather updates, and street view.

This README provides a basic overview of the map app. You can explore the source code further to understand the implementation details and customize the functionality to your specific needs.
