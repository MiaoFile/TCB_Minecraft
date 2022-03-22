function getParamValue(key) {
    var url = window.location.href;
    var paramsUrl = url.substring(url.indexOf("?") + 1, url.length);
    var params = [];
    if (paramsUrl.indexOf("&") != -1) {
        params = paramsUrl.split("&");
    } else {
        if (key == paramsUrl.split("=")[0]) return paramsUrl.split("=")[1];
        else return null;
    }
    var result = new Object();
    result.key = new Array();
    result.value = new Array();
    result.get = function(value) {
        for (var x = 0; x < this.key.length; x++) {
            if (this.key[x] == value) {
                return this.value[x];
            }
        }
        return null;
    }
    for (var x = 0; x < params.length; x++) {
        var temp = params[x].split("=");
        result.key[x] = temp[0];
        result.value[x] = temp[1];
    }
    return result.get(key);
}

function toUrl(v) {
    if (v == "210106a") return window.location = "https://www.miaofile.com/update.html?version=" + v + "&from=miaomc";
    // window.location = "https://www.miaofile.com/update.html?version" + version + "&from=miaomc";
}

toUrl(getParamValue("v"));