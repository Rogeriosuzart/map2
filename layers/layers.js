var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Abusocontraoidoso_1 = new ol.format.GeoJSON();
var features_Abusocontraoidoso_1 = format_Abusocontraoidoso_1.readFeatures(json_Abusocontraoidoso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Abusocontraoidoso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abusocontraoidoso_1.addFeatures(features_Abusocontraoidoso_1);
var lyr_Abusocontraoidoso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abusocontraoidoso_1, 
                style: style_Abusocontraoidoso_1,
                popuplayertitle: 'Abuso contra o idoso',
                interactive: true,
                title: '<img src="styles/legend/Abusocontraoidoso_1.png" /> Abuso contra o idoso'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Abusocontraoidoso_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Abusocontraoidoso_1];
lyr_Abusocontraoidoso_1.set('fieldAliases', {'fid': 'fid', 'geocodigo': 'geocodigo', 'nome': 'Estado', 'valor': 'Abuso', 'ano': 'ano', });
lyr_Abusocontraoidoso_1.set('fieldImages', {'fid': 'Hidden', 'geocodigo': 'Hidden', 'nome': 'TextEdit', 'valor': 'TextEdit', 'ano': 'TextEdit', });
lyr_Abusocontraoidoso_1.set('fieldLabels', {'nome': 'no label', 'valor': 'no label', 'ano': 'no label', });
lyr_Abusocontraoidoso_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});