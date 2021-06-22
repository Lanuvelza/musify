"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../styles");
var Wrapper = styles_1.styled('div')({
    margin: '0 auto',
    position: 'relative',
    '> div': {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 0,
        boxSizing: 'border-box',
        height: 0,
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 0,
    },
}, function (_a) {
    var style = _a.style;
    var pulse = styles_1.keyframes({
        '0%': {
            height: 0,
            width: 0,
        },
        '30%': {
            borderWidth: styles_1.px(8),
            height: styles_1.px(style.loaderSize),
            opacity: 1,
            width: styles_1.px(style.loaderSize),
        },
        '100%': {
            borderWidth: 0,
            height: styles_1.px(style.loaderSize),
            opacity: 0,
            width: styles_1.px(style.loaderSize),
        },
    });
    return {
        height: styles_1.px(style.loaderSize),
        width: styles_1.px(style.loaderSize),
        '> div': {
            animation: pulse + " 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1)",
            borderColor: style.loaderColor,
        },
    };
}, 'LoaderRSWP');
function Loader(_a) {
    var _b = _a.styles, loaderColor = _b.loaderColor, loaderSize = _b.loaderSize;
    return (React.createElement(Wrapper, { style: { loaderColor: loaderColor, loaderSize: loaderSize } },
        React.createElement("div", null)));
}
exports.default = Loader;
//# sourceMappingURL=Loader.js.map