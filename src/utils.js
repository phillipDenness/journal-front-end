
exports.convertFormToResource = function(body) {
    let resource = {
        name: body.name,
        url: body.url,
        languageName: body.languagename,
        frameworkName: body.frameworkname
    };
    console.log(JSON.stringify(resource));
    return JSON.stringify(resource);
};
