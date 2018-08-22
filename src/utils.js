
exports.convertFormToResource = function(body) {
    let resource = {
        name: body.name,
        url: body.url,
        languageName: body.languagename,
        frameworkName: body.frameworkname
    };
    return resource;
};

exports.convertFormToResources = function(body) {
    let stringRes = []
    for(let i=0; i< body.length; i++){
        let resource = {
            name: body[i].name,
            url: body[i].url,
            languageName: body[i].languagename,
            frameworkName: body[i].frameworkname
        }
        stringRes.push(JSON.stringify(resource))
    }
    return stringRes
}
