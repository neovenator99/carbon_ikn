var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var lyr_Carbon_Prediction_IKN1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Carbon_Prediction_IKN (1)<br />\
    <img src="styles/legend/Carbon_Prediction_IKN1_1_0.png" /> 0,0000<br />\
    <img src="styles/legend/Carbon_Prediction_IKN1_1_1.png" /> 50,0000<br />\
    <img src="styles/legend/Carbon_Prediction_IKN1_1_2.png" /> 100,0000<br />\
    <img src="styles/legend/Carbon_Prediction_IKN1_1_3.png" /> 202,4235<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Carbon_Prediction_IKN1_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12953830.000000, -175832.267645, 13046290.000000, -90173.003786]
        })
    });

lyr_DarkMatter_0.setVisible(true);lyr_Carbon_Prediction_IKN1_1.setVisible(true);
var layersList = [lyr_DarkMatter_0,lyr_Carbon_Prediction_IKN1_1];
