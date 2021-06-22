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
var styles_1 = require("../styles");
var ClickOutside_1 = require("./ClickOutside");
var Devices_1 = require("./icons/Devices");
var Wrapper = styles_1.styled('div')({
    'pointer-events': 'all',
    position: 'relative',
    zIndex: 20,
    '> div': {
        display: 'flex',
        flexDirection: 'column',
        padding: styles_1.px(8),
        position: 'absolute',
        right: "-" + styles_1.px(3),
        button: {
            display: 'block',
            padding: styles_1.px(8),
            whiteSpace: 'nowrap',
            '&.rswp__devices__active': {
                fontWeight: 'bold',
            },
        },
    },
    '> button': {
        fontSize: styles_1.px(26),
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
            _b.button = {
                color: style.c,
            },
            _b),
    });
}, 'DevicesRSWP');
var Devices = /** @class */ (function (_super) {
    __extends(Devices, _super);
    function Devices(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickSetDevice = function (e) {
            var onClickDevice = _this.props.onClickDevice;
            var dataset = e.currentTarget.dataset;
            /* istanbul ignore else */
            if (dataset.id) {
                onClickDevice(dataset.id);
                _this.setState({ isOpen: false });
            }
        };
        _this.handleClickToggleDevices = function () {
            _this.setState(function (state) { return ({ isOpen: !state.isOpen }); });
        };
        _this.state = {
            isOpen: props.open,
        };
        return _this;
    }
    Devices.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        var _a = this.props, currentDeviceId = _a.currentDeviceId, deviceId = _a.deviceId, devices = _a.devices, playerPosition = _a.playerPosition, _b = _a.styles, activeColor = _b.activeColor, altColor = _b.altColor, color = _b.color, bgColor = _b.bgColor;
        return (React.createElement(Wrapper, { style: {
                altColor: altColor,
                bgColor: bgColor,
                c: currentDeviceId && deviceId && currentDeviceId !== deviceId ? activeColor : color,
                p: playerPosition,
            } }, !!devices.length && (React.createElement(React.Fragment, null,
            isOpen && (React.createElement(ClickOutside_1.default, { onClick: this.handleClickToggleDevices }, devices.map(function (d) { return (React.createElement("button", { key: d.id, className: d.id === currentDeviceId ? 'rswp__devices__active' : undefined, "data-id": d.id, onClick: _this.handleClickSetDevice, type: "button" }, d.name)); }))),
            React.createElement("button", { type: "button", onClick: this.handleClickToggleDevices },
                React.createElement(Devices_1.default, null))))));
    };
    return Devices;
}(React.PureComponent));
exports.default = Devices;
//# sourceMappingURL=Devices.js.map