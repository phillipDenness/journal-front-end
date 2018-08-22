
exports.convertCreateFormToResource = function(body) {
    let resource = {
        name: body.name,
        url: body.url,
        languageName: body.languagename,
        frameworkName: body.frameworkname
    };
    return resource;
};


exports.convertUpdateFormToResource = function(body) {
    let resource = {
        name: body[0],
        url: body[1],
        frameworkName: body[2],
        languageName: body[3] 
    };
    return resource;
};
