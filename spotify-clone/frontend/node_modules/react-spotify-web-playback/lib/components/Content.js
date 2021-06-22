"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../styles");
var Wrapper = styles_1.styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    '> *': {
        width: '100%',
        '@media (min-width: 1024px)': {
            width: '33.3333%',
        },
    },
    '@media (min-width: 1024px)': {
        flexDirection: 'row',
    },
}, function (_a) {
    var style = _a.style;
    return ({
        minHeight: styles_1.px(style.h),
    });
}, 'ContentRSWP');
function Content(_a) {
    var children = _a.children, styles = _a.styles;
    return React.createElement(Wrapper, { style: { h: styles.height } }, children);
}
exports.default = Content;
//# sourceMappingURL=Content.js.map