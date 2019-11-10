// function handleFileSelect(evt) {
//     let file = evt.target.files[0];
//     if (!file.type.match('text.*')) {
//         return alert(file.name + " is not a valid text file.");
//     }
//     let reader = new FileReader();
//     reader.readAsText(file);
//     reader.onload = function (e) {
//         document.getElementById('content-file').value=reader.result;
//         let textToArray = reader.result.split("\n").map(function (x) { return x.split(",") });
//     };
// }

// window.onload = function () {
//     document.getElementById('open-file').addEventListener('change', handleFileSelect, false);
// }
function handleFileSelect(evt) {
    let file = evt.target.files[0];
    if (!file.type.match('text.*')) {
        return alert(file.name + " is not a valid text file.");
    }
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        let array = reader.result.split('\n');
        let points = [];
        let lines = [];
        for (let i = 0; i < array.length; i++) {
            let subarr = array[i].split(',');
            if (subarr.length > 1 && subarr.length < 3) lines.push(array[i]);
            if (subarr.length > 3 && subarr.length < 5) points.push(array[i]);
        }
        readInTextarea(document.getElementById('points'),points);
        readInTextarea(document.getElementById('lines'),lines);
    };
    function readInTextarea(textarea,array){
        let stringArray = ''
        array.forEach(element => {
            stringArray += element+'\n';
        });
        textarea.value = stringArray;
    }
    // reader.onload = function (e) {
    //     document.getElementById('points').value=reader.result;
    //     let textToArray = reader.result.split("\n").map(function (x) { return x.split(",") });
    // };
}

window.onload = function () {
    document.getElementById('open-file').addEventListener('change', handleFileSelect, false);
}
