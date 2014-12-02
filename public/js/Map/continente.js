
        $(function () {
          var map = new GMaps({
          div: "#map",
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
        
        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map.setStyle("map_style");


        polygon1 = map.drawPolygon({
          paths: path1,
          strokeColor: '#ff0404',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#ff0404',
          fillOpacity: 0.6
        });

        polygon2 = map.drawPolygon({
          paths: path2,
          strokeColor: '#ff0404',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#ff0404',
          fillOpacity: 0.6
        });
        polygon3 = map.drawPolygon({
          paths: path3,
          strokeColor: '#ff6200',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#ff6200',
          fillOpacity: 0.6
        });
        polygon4 = map.drawPolygon({
          paths: path4,
          strokeColor: '#ff6200',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#ff6200',
          fillOpacity: 0.6
        });
        polygon5 = map.drawPolygon({
          paths: path5,
          strokeColor: '#fdc600',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#fdc600',
          fillOpacity: 0.6
        });
        polygon6 = map.drawPolygon({
          paths: path6,
          strokeColor: '#fdc600',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#fdc600',
          fillOpacity: 0.6
        });

        polygon7 = map.drawPolygon({
          paths: path7,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon8 = map.drawPolygon({
          paths: path8,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon9 = map.drawPolygon({
          paths: path9,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon10 = map.drawPolygon({
          paths: path10,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon11 = map.drawPolygon({
          paths: path11,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon12 = map.drawPolygon({
          paths: path12,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon13 = map.drawPolygon({
          paths: path13,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon14 = map.drawPolygon({
          paths: path14,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon15_1 = map.drawPolygon({
          paths: path15_1,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon15_2 = map.drawPolygon({
          paths: path15_2,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon16_1 = map.drawPolygon({
          paths: path16_1,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon17_1 = map.drawPolygon({
          paths: path17_1,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });

        polygon17_2 = map.drawPolygon({
          paths: path17_2,
          strokeColor: '#64c500',
          strokeOpacity: 1,
          strokeWeight: 2.4,
          fillColor: '#64c500',
          fillOpacity: 0.6
        });


        map.addMarker({
            lat: -19.674272,
            lng: -72.04834,
            icon: "js/Map/img/sismo.png"
        });



      });
