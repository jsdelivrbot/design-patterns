export const data = {
  name: "Proxy",
  definition: "Provide a surrogate or placeholder for another object to control access to it",
  diagram: "",
  codePrint: `
    function GeoCoder() {
      this.getLatLng = function(address) {
        if (address === "Amsterdam") {
          return "52.3700° N, 4.8900° E";
        } else if (address === "London") {
          return "51.5171° N, 0.1062° W";
        } else if (address === "Paris") {
          return "48.8742° N, 2.3470° E";
        }
      };
    }

    function GeoProxy() {
        var geocoder = new GeoCoder();
        var geocache = {};

        return {
            getLatLng: function(address) {
                if (!geocache[address]) {
                    geocache[address] = geocoder.getLatLng(address);
                }
                return geocache[address];
            },
            getCount: function() {
                var count = 0;
                for (var code in geocache) { count++; }
                return count;
            }
        };
    };

    var geo = new GeoProxy();

    log(
      'Paris: ' + geo.getLatLng("Paris"),
      'Paris: ' + geo.getLatLng("Paris"),
      'Amsterdam: ' + geo.getLatLng("Amsterdam"),
      'Amsterdam: ' + geo.getLatLng("Amsterdam"),
      'London: ' + geo.getLatLng("London"),
      'Cache size: ' geo.getCount(),
    );
  `,
}
