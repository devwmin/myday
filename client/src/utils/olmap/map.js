import { Feature, Map as olMap, View } from "ol";
import Point from "ol/geom/Point";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import Control from "ol/control/Control";
import { Overlay } from "ol";
import "ol/ol.css";

import { originalStyle, selectdStyle } from "./featureStyle";
import { panTo } from "./moveAnimation";

const getLocation = async () => {
   const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
   });
   return fromLonLat([pos.coords.longitude, pos.coords.latitude]);
};

const move = (map, location) => {
   panTo(map, location);
};

export class OlMap {
   constructor(element, location) {
      this.vectorLayer = new VectorLayer({
         source: new VectorSource(),
         style: originalStyle(),
      });

      this.view = new View({
         zoom: 15,
      });
      this.markerOverlay = new Overlay({
         autoPan: {
            animation: {
               duration: 250,
            },
         },
      });

      this.olMap = new olMap({
         layers: [new TileLayer({ preload: 6, source: new OSM() }), this.vectorLayer],
         view: this.view,
      });
      this.olMap.addOverlay(this.markerOverlay);

      if (!location) {
         getLocation().then((location) => {
            this.location = location;
            move(this.olMap, this.location);
         });
      } else {
         this.location = location;
         move(this.olMap, this.location);
      }

      this.olMap.setTarget(element);
   }

   moveToDefault() {
      panTo(this.olMap, this.location);
   }
   moveToLocation(location) {
      panTo(this.olMap, location);
   }

   addControl(element, positioning = "bottom-right") {
      const control = new Control({
         element,
      });
      this.olMap.addControl(control);
   }

   addFeature(id, value, lon, lat) {
      const feature = new Feature({
         labelPoint: new Point([lon, lat]),
      });
      feature.setGeometryName("labelPoint");
      feature.setId(id);
      feature.value = value;
      feature.lon = lon;
      feature.lat = lat;
      this.vectorLayer.getSource().addFeature(feature);
   }
   selectFeature(featureId) {
      if (this.selectedFeature) {
         this.selectedFeature.setStyle(originalStyle);
      }
      const feature = this.vectorLayer.getSource().getFeatureById(featureId);
      this.selectedFeature = feature;
      feature.setStyle(selectdStyle);

      move(this.olMap, [feature.lon, feature.lat]);
   }
   getVisibleFeatures() {
      const extent = this.view.calculateExtent();
      const features = this.vectorLayer.getSource().getFeaturesInExtent(extent);
      return features;
   }
   getCoordinate() {
      //new Point(view.getCenter()).transform("EPSG:3857", "EPSG:4326");
      return new Point(this.view.getCenter()).getCoordinates();
   }
   setMarker(element, location) {
      this.markerOverlay.setElement(element);
      this.markerOverlay.setPosition(location);
   }

   on(type, listener) {
      this.olMap.on(type, listener);
   }
   un(type, listener) {
      this.olMap.un(type, listener);
   }

   clear() {
      this.olMap.setTarget(null);
   }
}
