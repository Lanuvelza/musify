"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_range_slider_1 = require("@gilbarbara/react-range-slider");
var styles_1 = require("../styles");
var ClickOutside_1 = require("./ClickOutside");
var VolumeHigh_1 = require("./icons/VolumeHigh");
var VolumeLow_1 = require("./icons/VolumeLow");
var VolumeMute_1 = require("./icons/VolumeMute");
var Wrapper = styles_1.styled('div')({
    'pointer-events': 'all',
    position: 'relative',
    zIndex: 20,
    '> div': {
        display: 'flex',
        flexDirection: 'column',
        padding: styles_1.px(12),
        position: 'absolute',
        right: "-" + styles_1.px(3),
    },
    '> button': {
        fontSize: styles_1.px(26),
    },
    '@media (max-width: 1023px)': {
        display: 'none',
    },
}, function (_a) {
    var _b;
    var style = _a.style;
    return ({
        '> button': {
            color: style.c,
        },
        '> div': (_b = {
                backgroundColor: style.bgColor,
                boxShadow: style.altColor ? "1px 1px 10px " + style.altColor : 'none'
            },
            _b[style.p] = '120%',
            _b),
    });
}, 'VolumeRSWP');
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    function Volume(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            _this.setState(function (state) { return ({ isOpen: !state.isOpen }); });
        };
        _this.handleChangeSlider = function (_a) {
            var y = _a.y;
            var setVolume = _this.props.setVolume;
            var volume = Math.round(y) / 100;
            clearTimeout(_this.timeout);
            _this.timeout = window.setTimeout(function () {
                setVolume(volume);
            }, 250);
            _this.setState({ volume: volume });
        };
        _this.handleAfterEnd = function () {
            setTimeout(function () {
                _this.setState({ isOpen: false });
            }, 100);
        };
        _this.state = {
            isOpen: false,
            volume: props.volume,
        };
        return _this;
    }
    Volume.prototype.componentDidUpdate = function (prevProps) {
        var volumeState = this.state.volume;
        var volume = this.props.volume;
        if (prevProps.volume !== volume && volume !== volumeState) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ volume: volume });
        }
    };
    Volume.prototype.render = function () {
        var _a = this.state, isOpen = _a.isOpen, volume = _a.volume;
        var _b = this.props, playerPosition = _b.playerPosition, _c = _b.styles, altColor = _c.altColor, bgColor = _c.bgColor, color = _c.color;
        var icon = React.createElement(VolumeHigh_1.default, null);
        if (volume === 0) {
            icon = React.createElement(VolumeMute_1.default, null);
        }
        else if (volume <= 0.5) {
            icon = React.createElement(VolumeLow_1.default, null);
        }
        return (React.createElement(Wrapper, { style: { altColor: altColor, bgColor: bgColor, c: color, p: playerPosition } },
            isOpen && (React.createElement(ClickOutside_1.default, { onClick: this.handleClick },
                React.createElement(react_range_slider_1.default, { axis: "y", className: "rrs", styles: {
                        options: {
                            thumbBorder: "2px solid " + color,
                            thumbBorderRadius: 12,
                            thumbColor: bgColor,
                            thumbSize: 12,
                            padding: 0,
                            rangeColor: altColor || '#ccc',
                            trackColor: color,
                            width: 6,
                        },
                    }, onAfterEnd: this.handleAfterEnd, onChange: this.handleChangeSlider, y: volume * 100, yMin: 0, yMax: 100 }))),
            React.createElement("button", { type: "button", onClick: !isOpen ? this.handleClick : undefined }, icon)));
    };
    return Volume;
}(React.PureComponent));
exports.default = Volume;
//# sourceMappingURL=Volume.js.map