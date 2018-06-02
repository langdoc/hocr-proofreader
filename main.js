'use strict';

// Download function copied from Stack Overflow:
// https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

Util.onReady(function () {
    var hocrProofreader = new HocrProofreader({
        layoutContainer: 'layout-container',
        editorContainer: 'editor-container'
    });

    document.getElementById('toggle-layout-image').addEventListener('click', function () {
        hocrProofreader.toggleLayoutImage();
    });

    document.getElementById('zoom-page-full').addEventListener('click', function () {
        hocrProofreader.setZoom('page-full');
    });

    document.getElementById('zoom-page-width').addEventListener('click', function () {
        hocrProofreader.setZoom('page-width');
    });

    document.getElementById('zoom-original').addEventListener('click', function () {
        hocrProofreader.setZoom('original');
    });

    document.getElementById('button-save').addEventListener('click', function () {
        var hocr = hocrProofreader.getHocr();
        download(hocr, 'demo_corrected.hocr', 'text/html')
    });

    var hocrBaseUrl = 'demo/';
    var hocrUrl = hocrBaseUrl + 'demo.hocr';

    Util.get(hocrUrl, function (err, hocr) {
        if (err) return Util.handleError(err);

        hocrProofreader.setHocr(hocr, hocrBaseUrl);
    });
});
