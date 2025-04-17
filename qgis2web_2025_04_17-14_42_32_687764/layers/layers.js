var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_1.png" /> lab1'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_building_2,lyr_highway_3];
lyr_lab1_1.set('fieldAliases', {'name': 'name', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:province': 'addr:province', 'religion': 'religion', 'opening_hours': 'opening_hours', 'name': 'name', 'community_centre:for': 'community_centre:for', 'community_centre': 'community_centre', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:region': 'addr:region', 'addr:housenumber': 'addr:housenumber', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'address': 'address', });
lyr_highway_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehicle': 'motor_vehicle', 'maxspeed': 'maxspeed', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'access': 'access', 'noname': 'noname', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', });
lyr_lab1_1.set('fieldImages', {'name': 'TextEdit', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:province': '', 'religion': '', 'opening_hours': '', 'name': '', 'community_centre:for': '', 'community_centre': '', 'amenity': '', 'addr:street': '', 'addr:region': '', 'addr:housenumber': '', 'addr:district': '', 'addr:country': '', 'addr:city': '', 'building:levels': '', 'address': '', });
lyr_highway_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehicle': '', 'maxspeed': '', 'horse': '', 'foot': '', 'bicycle': '', 'access': '', 'noname': '', 'name:etymology:wikidata': '', 'name': '', 'surface': '', 'ref': '', 'lanes': '', });
lyr_lab1_1.set('fieldLabels', {'name': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:province': 'no label', 'religion': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'community_centre:for': 'no label', 'community_centre': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:region': 'no label', 'addr:housenumber': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'address': 'no label', });
lyr_highway_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehicle': 'no label', 'maxspeed': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'access': 'no label', 'noname': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', });
lyr_highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});