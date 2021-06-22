"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../styles");
var Next_1 = require("./icons/Next");
var Pause_1 = require("./icons/Pause");
var Play_1 = require("./icons/Play");
var Previous_1 = require("./icons/Previous");
var Wrapper = styles_1.styled('div')({}, function (_a) {
    var style = _a.style;
    return ({
        alignItems: 'center',
        display: 'flex',
        height: styles_1.px(style.h),
        justifyContent: 'center',
        '@media (max-width: 767px)': {
            padding: styles_1.px(10),
        },
        '> div': {
            minWidth: styles_1.px(style.h),
            textAlign: 'center',
        },
        button: {
            color: style.c,
            fontSize: styles_1.px(16),
            '&.rswp__toggle': {
                fontSize: styles_1.px(28),
            },
        },
    });
}, 'ControlsRSWP');
function Controls(props) {
    var isExternalDevice = props.isExternalDevice, isPlaying = props.isPlaying, onClickNext = props.onClickNext, onClickPrevious = props.onClickPrevious, onClickTogglePlay = props.onClickTogglePlay, nextTracks = props.nextTracks, previousTracks = props.previousTracks, _a = props.styles, color = _a.color, height = _a.height;
    return (React.createElement(Wrapper, { style: { c: color, h: height } },
        React.createElement("div", null, (!!previousTracks.length || isExternalDevice) && (React.createElement("button", { type: "button", onClick: onClickPrevious, "aria-label": "Previous Track" },
            React.createElement(Previous_1.default, null)))),
        React.createElement("div", null,
            React.createElement("button", { type: "button", className: "rswp__toggle", onClick: onClickTogglePlay, "aria-label": isPlaying ? 'Pause' : 'Play' }, isPlaying ? React.createElement(Pause_1.default, null) : React.createElement(Play_1.default, null))),
        React.createElement("div", null, (!!nextTracks.length || isExternalDevice) && (React.createElement("button", { type: "button", onClick: onClickNext, "aria-label": "Next Track" },
            React.createElement(Next_1.default, null))))));
}
exports.default = Controls;
//# sourceMappingURL=Controls.js.map