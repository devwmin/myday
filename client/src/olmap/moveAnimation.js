export function flyTo(map, location) {
   const view = map.getView();
   view.cancelAnimations();
   view.animate({
      center: location,
      duration: 2500,
   });
   view.animate(
      {
         zoom: view.getZoom() - 1,
         duration: 1000,
      },
      {
         zoom: view.getZoom(),
         duration: 1000,
      }
   );
}
export function panTo(map, location) {
   const view = map.getView();
   view.cancelAnimations();
   view.animate({
      center: location,
      duration: 500,
   });
}
