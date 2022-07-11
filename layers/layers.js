var wms_layers = [];

var format_County_Boundaries_24K_0 = new ol.format.GeoJSON();
var features_County_Boundaries_24K_0 = format_County_Boundaries_24K_0.readFeatures(json_County_Boundaries_24K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_Boundaries_24K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_Boundaries_24K_0.addFeatures(features_County_Boundaries_24K_0);
var lyr_County_Boundaries_24K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_Boundaries_24K_0, 
                style: style_County_Boundaries_24K_0,
                interactive: true,
    title: 'County_Boundaries_24K<br />\
    <img src="styles/legend/County_Boundaries_24K_0_0.png" /> Adams<br />\
    <img src="styles/legend/County_Boundaries_24K_0_1.png" /> Ashland<br />\
    <img src="styles/legend/County_Boundaries_24K_0_2.png" /> Barron<br />\
    <img src="styles/legend/County_Boundaries_24K_0_3.png" /> Bayfield<br />\
    <img src="styles/legend/County_Boundaries_24K_0_4.png" /> Brown<br />\
    <img src="styles/legend/County_Boundaries_24K_0_5.png" /> Buffalo<br />\
    <img src="styles/legend/County_Boundaries_24K_0_6.png" /> Burnett<br />\
    <img src="styles/legend/County_Boundaries_24K_0_7.png" /> Calumet<br />\
    <img src="styles/legend/County_Boundaries_24K_0_8.png" /> Chippewa<br />\
    <img src="styles/legend/County_Boundaries_24K_0_9.png" /> Clark<br />\
    <img src="styles/legend/County_Boundaries_24K_0_10.png" /> Columbia<br />\
    <img src="styles/legend/County_Boundaries_24K_0_11.png" /> Crawford<br />\
    <img src="styles/legend/County_Boundaries_24K_0_12.png" /> Dane<br />\
    <img src="styles/legend/County_Boundaries_24K_0_13.png" /> Dodge<br />\
    <img src="styles/legend/County_Boundaries_24K_0_14.png" /> Door<br />\
    <img src="styles/legend/County_Boundaries_24K_0_15.png" /> Douglas<br />\
    <img src="styles/legend/County_Boundaries_24K_0_16.png" /> Dunn<br />\
    <img src="styles/legend/County_Boundaries_24K_0_17.png" /> Eau Claire<br />\
    <img src="styles/legend/County_Boundaries_24K_0_18.png" /> Florence<br />\
    <img src="styles/legend/County_Boundaries_24K_0_19.png" /> Fond du Lac<br />\
    <img src="styles/legend/County_Boundaries_24K_0_20.png" /> Forest<br />\
    <img src="styles/legend/County_Boundaries_24K_0_21.png" /> Grant<br />\
    <img src="styles/legend/County_Boundaries_24K_0_22.png" /> Green<br />\
    <img src="styles/legend/County_Boundaries_24K_0_23.png" /> Green Lake<br />\
    <img src="styles/legend/County_Boundaries_24K_0_24.png" /> Iowa<br />\
    <img src="styles/legend/County_Boundaries_24K_0_25.png" /> Iron<br />\
    <img src="styles/legend/County_Boundaries_24K_0_26.png" /> Jackson<br />\
    <img src="styles/legend/County_Boundaries_24K_0_27.png" /> Jefferson<br />\
    <img src="styles/legend/County_Boundaries_24K_0_28.png" /> Juneau<br />\
    <img src="styles/legend/County_Boundaries_24K_0_29.png" /> Kenosha<br />\
    <img src="styles/legend/County_Boundaries_24K_0_30.png" /> Kewaunee<br />\
    <img src="styles/legend/County_Boundaries_24K_0_31.png" /> La Crosse<br />\
    <img src="styles/legend/County_Boundaries_24K_0_32.png" /> Lafayette<br />\
    <img src="styles/legend/County_Boundaries_24K_0_33.png" /> Langlade<br />\
    <img src="styles/legend/County_Boundaries_24K_0_34.png" /> Lincoln<br />\
    <img src="styles/legend/County_Boundaries_24K_0_35.png" /> Manitowoc<br />\
    <img src="styles/legend/County_Boundaries_24K_0_36.png" /> Marathon<br />\
    <img src="styles/legend/County_Boundaries_24K_0_37.png" /> Marinette<br />\
    <img src="styles/legend/County_Boundaries_24K_0_38.png" /> Marquette<br />\
    <img src="styles/legend/County_Boundaries_24K_0_39.png" /> Menominee<br />\
    <img src="styles/legend/County_Boundaries_24K_0_40.png" /> Milwaukee<br />\
    <img src="styles/legend/County_Boundaries_24K_0_41.png" /> Monroe<br />\
    <img src="styles/legend/County_Boundaries_24K_0_42.png" /> Oconto<br />\
    <img src="styles/legend/County_Boundaries_24K_0_43.png" /> Oneida<br />\
    <img src="styles/legend/County_Boundaries_24K_0_44.png" /> Outagamie<br />\
    <img src="styles/legend/County_Boundaries_24K_0_45.png" /> Ozaukee<br />\
    <img src="styles/legend/County_Boundaries_24K_0_46.png" /> Pepin<br />\
    <img src="styles/legend/County_Boundaries_24K_0_47.png" /> Pierce<br />\
    <img src="styles/legend/County_Boundaries_24K_0_48.png" /> Polk<br />\
    <img src="styles/legend/County_Boundaries_24K_0_49.png" /> Portage<br />\
    <img src="styles/legend/County_Boundaries_24K_0_50.png" /> Price<br />\
    <img src="styles/legend/County_Boundaries_24K_0_51.png" /> Racine<br />\
    <img src="styles/legend/County_Boundaries_24K_0_52.png" /> Richland<br />\
    <img src="styles/legend/County_Boundaries_24K_0_53.png" /> Rock<br />\
    <img src="styles/legend/County_Boundaries_24K_0_54.png" /> Rusk<br />\
    <img src="styles/legend/County_Boundaries_24K_0_55.png" /> Saint Croix<br />\
    <img src="styles/legend/County_Boundaries_24K_0_56.png" /> Sauk<br />\
    <img src="styles/legend/County_Boundaries_24K_0_57.png" /> Sawyer<br />\
    <img src="styles/legend/County_Boundaries_24K_0_58.png" /> Shawano<br />\
    <img src="styles/legend/County_Boundaries_24K_0_59.png" /> Sheboygan<br />\
    <img src="styles/legend/County_Boundaries_24K_0_60.png" /> Taylor<br />\
    <img src="styles/legend/County_Boundaries_24K_0_61.png" /> Trempealeau<br />\
    <img src="styles/legend/County_Boundaries_24K_0_62.png" /> Vernon<br />\
    <img src="styles/legend/County_Boundaries_24K_0_63.png" /> Vilas<br />\
    <img src="styles/legend/County_Boundaries_24K_0_64.png" /> Walworth<br />\
    <img src="styles/legend/County_Boundaries_24K_0_65.png" /> Washburn<br />\
    <img src="styles/legend/County_Boundaries_24K_0_66.png" /> Washington<br />\
    <img src="styles/legend/County_Boundaries_24K_0_67.png" /> Waukesha<br />\
    <img src="styles/legend/County_Boundaries_24K_0_68.png" /> Waupaca<br />\
    <img src="styles/legend/County_Boundaries_24K_0_69.png" /> Waushara<br />\
    <img src="styles/legend/County_Boundaries_24K_0_70.png" /> Winnebago<br />\
    <img src="styles/legend/County_Boundaries_24K_0_71.png" /> Wood<br />'
        });
var format_County_Centroids_1 = new ol.format.GeoJSON();
var features_County_Centroids_1 = format_County_Centroids_1.readFeatures(json_County_Centroids_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_Centroids_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_Centroids_1.addFeatures(features_County_Centroids_1);
var lyr_County_Centroids_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_Centroids_1, 
                style: style_County_Centroids_1,
                interactive: true,
                title: '<img src="styles/legend/County_Centroids_1.png" /> County_Centroids'
            });

lyr_County_Boundaries_24K_0.setVisible(true);lyr_County_Centroids_1.setVisible(true);
var layersList = [lyr_County_Boundaries_24K_0,lyr_County_Centroids_1];
lyr_County_Boundaries_24K_0.set('fieldAliases', {'County_Nam': 'County_Nam', });
lyr_County_Centroids_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'dnr_region': 'dnr_region', 'dnr_cnty_c': 'dnr_cnty_c', 'county_nam': 'county_nam', 'county_fip': 'county_fip', 'shapearea': 'shapearea', 'shapelen': 'shapelen', 'unitcd': 'unitcd', 'countycd': 'countycd', });
lyr_County_Boundaries_24K_0.set('fieldImages', {'County_Nam': 'TextEdit', });
lyr_County_Centroids_1.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'Range', 'dnr_region': 'TextEdit', 'dnr_cnty_c': 'Range', 'county_nam': 'TextEdit', 'county_fip': 'TextEdit', 'shapearea': 'TextEdit', 'shapelen': 'TextEdit', 'unitcd': 'TextEdit', 'countycd': 'Range', });
lyr_County_Boundaries_24K_0.set('fieldLabels', {'County_Nam': 'no label', });
lyr_County_Centroids_1.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'dnr_region': 'no label', 'dnr_cnty_c': 'no label', 'county_nam': 'no label', 'county_fip': 'no label', 'shapearea': 'no label', 'shapelen': 'no label', 'unitcd': 'no label', 'countycd': 'no label', });
lyr_County_Centroids_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});