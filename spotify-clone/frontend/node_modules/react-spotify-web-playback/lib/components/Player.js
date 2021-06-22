"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../styles");
styles_1.put('.PlayerRSWP', {
    boxSizing: 'border-box',
    fontSize: 'inherit',
    width: '100%',
    '*': {
        boxSizing: 'border-box',
    },
    button: {
        appearance: 'none',
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 0,
        color: 'inherit',
        cursor: 'pointer',
        display: 'inline-flex',
        lineHeight: 1,
        padding: 0,
        ':focus': {
            outlineColor: '#000',
            outlineOffset: 3,
        },
    },
    p: {
        margin: 0,
    },
});
var Player = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.styles, bgColor = _b.bgColor, height = _b.height;
    return (React.createElement("div", { ref: ref, className: "PlayerRSWP", style: { backgroundColor: bgColor, minHeight: styles_1.px(height) } }, children));
});
exports.default = Player;
//# sourceMappingURL=Player.js.map