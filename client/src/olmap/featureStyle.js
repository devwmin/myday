import { Circle, Fill, Icon, Style, Text } from "ol/style";

export function selectdStyle() {
   return new Style({
      image: new Circle({
         radius: 5,
         fill: new Fill({ color: "#202420" }),
      }),
      fill: new Fill({ color: "#202420" }),
   });
}
export function originalStyle() {
   return new Style({
      image: new Circle({
         radius: 6,
         fill: new Fill({
            color: "#3399CC",
         }),
      }),
   });
}

export function markerStyle() {
   return new Style({
      image: new Icon({
         opacity: 1,
         scale: 0.7,
         src: process.env.PUBLIC_URL + "/img/marker.png",
      }),
   });
}

export function clusterStyle(text) {
   return new Style({
      image: new Circle({
         radius: 10,
         fill: new Fill({
            color: "#3399CC",
         }),
      }),
      text: new Text({
         text: text,
         fill: new Fill({
            color: "#fff",
         }),
      }),
   });
}

/**
 * 
 * https://openlayers.org/en/latest/examples/kml-earthquakes.html
 * 주황빛 서클
const styleFunction = function (feature) {
  // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
  // standards-violating <magnitude> tag in each Placemark.  We extract it from
  // the Placemark's name instead.
  const name = feature.get('name');
  const magnitude = parseFloat(name.substr(2));
  const radius = 5 + 20 * (magnitude - 5);
  let style = styleCache[radius];
  if (!style) {
    style = new Style({
      image: new CircleStyle({
        radius: radius,
        fill: new Fill({
          color: 'rgba(255, 153, 0, 0.4)',
        }),
        stroke: new Stroke({
          color: 'rgba(255, 204, 0, 0.2)',
          width: 1,
        }),
      }),
    });
    styleCache[radius] = style;
  }
  return style;
};

*/
