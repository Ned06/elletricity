function isRetina(){var i="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return window.devicePixelRatio>1?!0:window.matchMedia&&window.matchMedia(i).matches?!0:!1}function retina(){isRetina()&&$("img.2x").map(function(i,e){var n=$(e).attr("src");n=n.replace(".png","@2x.png"),n=n.replace(".jpg","@2x.jpg"),$(e).attr("src",n)})}
$(document).ready(retina);