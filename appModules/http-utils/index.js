const parseBody = require("./parse-body");
const mimeTypes = require("./mime-types");
const staticFile = require("./static-file");

module.exports = {
    staticFile,
    mimeTypes,
    parseBody
}