//a sample of using functions to do destructuring and restructuring
function ajaxOptions({
    //destructuring is first performed when passing the arguments
    url = "http:/some.url",
    method = "post",//these provides the default values
    data,
    callback,
    headers:[
        headers0 = "myheader",
        ...otherHeaders
    ] = []
} = {}){
    //this one perfoms the restructuring with the defaults in place
    return {url, 
    method, data,callback,
    method,data,headers:[
        headers0,
        ...otherHeaders
    ]
    };
}
var defaults = ajaxOptions();
console.log(defaults);