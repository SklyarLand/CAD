function handleFileSelect(evt) {
    let file = evt.target.files[0];
    if (!file.type.match('text.*')) {
        return alert(file.name + " is not a valid text file.");
    }
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        document.getElementById('content-file').value=reader.result;
        let textToArray = reader.result.split("\n").map(function (x) { return x.split(",") });
    };
}

window.onload = function () {
    document.getElementById('open-file').addEventListener('change', handleFileSelect, false);
}
