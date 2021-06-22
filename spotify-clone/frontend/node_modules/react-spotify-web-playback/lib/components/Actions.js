"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("../styles");
var Devices_1 = require("./Devices");
var Volume_1 = require("./Volume");
var Wrapper = styles_1.styled('div')({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: styles_1.px(10),
    'pointer-events': 'none',
    '> div + div': {
        marginLeft: styles_1.px(10),
    },
    '@media (max-width: 1023px)': {
        bottom: 0,
        position: 'absolute',
        right: 0,
        width: 'auto',
    },
}, function (_a) {
    var style = _a.style;
    return ({
        height: styles_1.px(style.h),
    });
}, 'ActionsRSWP');
function Actions(props) {
    var currentDeviceId = props.currentDeviceId, deviceId = props.deviceId, devices = props.devices, isDevicesOpen = props.isDevicesOpen, onClickDevice = props.onClickDevice, playerPosition = props.playerPosition, setVolume = props.setVolume, styles = props.styles, volume = props.volume;
    return (React.createElement(Wrapper, { style: { h: styles.height } },
        currentDeviceId && (React.createElement(Volume_1.default, { playerPosition: playerPosition, volume: volume, setVolume: setVolume, styles: styles })),
        React.createElement(Devices_1.default, { currentDeviceId: currentDeviceId, deviceId: deviceId, devices: devices, open: isDevicesOpen, onClickDevice: onClickDevice, playerPosition: playerPosition, styles: styles })));
}
exports.default = Actions;
//# sourceMappingURL=Actions.js.map