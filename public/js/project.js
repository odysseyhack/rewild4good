let drawingManager;
let selectedShape;
let polygons = [];
let colors = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
let selectedColor;
let colorButtons = {};

function clearSelection() {
    if (selectedShape) {
        selectedShape.setEditable(false);
        //selectedShape = null;
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setSelection(shape) {
    clearSelection();
    selectedShape = shape;
    shape.setEditable(true);
    selectColor(shape.get('fillColor') || shape.get('strokeColor'));
}

function deleteSelectedShape() {
    if (selectedShape) {
        selectedShape.setMap(null);
    }
}


function selectColor(color) {
    selectedColor = color;

    // Retrieves the current options from the drawing manager and replaces the
    // stroke or fill color as appropriate.
    let polylineOptions = drawingManager.get('polylineOptions');
    polylineOptions.strokeColor = color;
    drawingManager.set('polylineOptions', polylineOptions);

    let polygonOptions = drawingManager.get('polygonOptions');
    polygonOptions.fillColor = color;
    drawingManager.set('polygonOptions', polygonOptions);

    elements = document.getElementsByClassName("polycolored");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor=color+'30';
    }
}

function setSelectedShapeColor(color) {
    if (selectedShape) {
        if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
            selectedShape.set('strokeColor', color);
        } else {
            selectedShape.set('fillColor', color);
        }
    }
}

function makeColorButton(color) {
    let button = document.createElement('span');
    button.className = 'color-button';
    button.style.backgroundColor = color;
    google.maps.event.addDomListener(button, 'click', function () {
        selectColor(color);
        setSelectedShapeColor(color);
    });

    return button;
}

function buildColorPalette() {
    let colorPalette = document.getElementById('color-palette');
    for (let i = 0; i < colors.length; ++i) {
        let currColor = colors[i];
        let colorButton = makeColorButton(currColor);
        colorPalette.appendChild(colorButton);
        colorButtons[currColor] = colorButton;
    }
    selectColor(colors[0]);
}

function initialize() {

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(-1.245961, 116.858238),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDefaultUI: false,
        zoomControl: true
    });

    let polyOptions = {
        strokeWeight: 0,
        fillOpacity: 0.45,
        editable: true
    };
    // Creates a drawing manager attached to the map that allows the user to draw
    // markers, lines, and shapes.
    drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON]
        },
        markerOptions: {draggable: true},
        polylineOptions: {editable: true},
        polygonOptions: polyOptions,
        map: map
    });


    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
        drawingManager.setDrawingMode(null);

        // Add an event listener that selects the newly-drawn shape when the user
        // mouses down on it.
        if (e.type != google.maps.drawing.OverlayType.MARKER) {
            // Switch back to non-drawing mode after drawing a shape.
            let newShape = e.overlay;
            newShape.type = e.type;
            google.maps.event.addListener(newShape, 'click', function () {
                setSelection(newShape);
            });
            setSelection(newShape);
        }
    });

    google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
        let path = polygon.getPath()
        let coordinates = [];
        let area  = google.maps.geometry.spherical.computeArea(path);

        for (let i = 0; i < path.length; i++) {
            coordinates.push({
                lat: path.getAt(i).lat(),
                lng: path.getAt(i).lng()
            });
        }
        polygons.push({size:area, points:coordinates});
    });

    // Clear the current selection when the drawing mode is changed, or when the
    // map is clicked.
    google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
    google.maps.event.addListener(map, 'click', clearSelection);

    google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', deleteSelectedShape);
    // google.maps.event.addDomListener(document.getElementById('get-coods-button'), 'click', getCoodinates);

    buildColorPalette();
}


function getPolygons() {
    console.log(polygons);
}

setTimeout(function () {
    initialize();
}, 1000);