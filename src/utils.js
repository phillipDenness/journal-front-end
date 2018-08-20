
exports.convertFormToResource = function(body) {
    let resource = {
        name: body.resource.name,
        url: body.resource.url,
        languageName: body.language.name,
        frameworkName: body.framework.name
    };
    console.log(JSON.stringify(resource));
    return JSON.stringify(resource);
};
