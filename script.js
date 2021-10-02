(() => {
    jsonKeyExtractor = (oParent, oResult) => {
        if (typeof oParent !== 'object') {
            return {};
        }
        Object.keys(oParent).forEach(function (sKey) {
            oResult[sKey] = {};
            jsonKeyExtractor(oParent[sKey], oResult[sKey]);
        });
        return oResult;
    }
    return jsonKeyExtractor(oRoot, {});
})(oRoot);