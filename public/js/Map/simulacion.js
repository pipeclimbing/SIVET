
        $(function () {
          var map_simulacion = new GMaps({
          div: "#map_simulacion",
          lat: -31.615966,
          lng: -70.861816,
          zoom: 5, 
          zoomControl : true,
          zoomControlOpt: {
            style : "SMALL",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });


        
        var styles = [
            {featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},

            {featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},

            {featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},

            {featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},

            {featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},

            {featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},

            {featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},

            {featureType:"administrative.locality",stylers:[{visibility:"off"}]},

            {featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},

            {featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},

            {featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}
        ];
        
        map_simulacion.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map_simulacion.setStyle("map_style");


        map_simulacion.addMarker({
            lat: -19.674272,
            lng: -72.04834,
            icon: "js/Map/img/sismo.png"
        });



      });
