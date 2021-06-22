"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../styles");
var Wrapper = styles_1.styled('p')({
    textAlign: 'center',
    width: '100%',
}, function (_a) {
    var style = _a.style;
    return ({
        borderTop: "1px solid " + style.errorColor,
        color: style.errorColor,
        height: styles_1.px(style.h),
        lineHeight: styles_1.px(style.h),
    });
}, 'ErrorRSWP');
function ErrorMessage(_a) {
    var children = _a.children, _b = _a.styles, errorColor = _b.errorColor, height = _b.height;
    return React.createElement(Wrapper, { style: { errorColor: errorColor, h: height } }, children);
}
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map