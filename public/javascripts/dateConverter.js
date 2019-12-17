function convertDateShow(fecha, div) {
    let javaScriptRelease = Date.parse(fecha);
    if (!isNaN(javaScriptRelease)) {
        let date = new Date(javaScriptRelease);
        let options = { year: 'numeric', month: 'numeric', day: 'numeric', };
        let result = date.toLocaleDateString('es', options);
        div.innerHTML = result
    }
}

function convertDateEdit(fecha, div) {
    var javaScriptRelease = Date.parse(fecha);
    if (!isNaN(javaScriptRelease)) {
        var date = new Date(javaScriptRelease);
        var options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
        };
        var result = date.toLocaleDateString('es', options);
        result = result.split("/").reverse().join("/")
        div.value = result
    }
}

function checkDateEdit(div1, div2, div3){
    let div11 = document.getElementById(div1)
    let div22 = document.getElementById(div2)
    let div33 = document.getElementById(div3)
    if(div11.value.length < 8 || div11.value.length > 10 && div11.value != null){  
        div11.value = ""
    }
    if(div22.value.length < 8 || div22.value.length > 10 && div22.value != null){
        div22.value = ""
    }
    if(div33.value.length < 8 || div33.value.length > 10 && div33.value != null){
        div33.value = ""
    }
}   