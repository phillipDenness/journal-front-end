
exports.convertFormToResource = function(body) {
    let resource = {
        name: body.resource.name,
        url: body.resource.url,
        languageName: body.language.name,
        frameworkName: body.framework.name
    };

    return JSON.stringify(resource);
};