"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateURI = exports.round = exports.parseVolume = exports.loadSpotifyPlayer = exports.isNumber = exports.isEqualArray = exports.getSpotifyURIType = exports.TYPE = exports.STATUS = exports.canUseDOM = void 0;
var exenv_1 = require("exenv");
var canUseDOM = function () { return exenv_1.canUseDOM; };
exports.canUseDOM = canUseDOM;
exports.STATUS = {
    ERROR: 'ERROR',
    IDLE: 'IDLE',
    INITIALIZING: 'INITIALIZING',
    READY: 'READY',
    RUNNING: 'RUNNING',
    UNSUPPORTED: 'UNSUPPORTED',
};
exports.TYPE = {
    DEVICE: 'device_update',
    FAVORITE: 'favorite_update',
    PLAYER: 'player_update',
    PROGRESS: 'progress_update',
    STATUS: 'status_update',
    TRACK: 'track_update',
};
function getSpotifyURIType(uri) {
    var _a = __read(uri.split(':'), 2), _b = _a[1], type = _b === void 0 ? '' : _b;
    return type;
}
exports.getSpotifyURIType = getSpotifyURIType;
function isEqualArray(A, B) {
    if (!Array.isArray(A) || !Array.isArray(B) || A.length !== B.length) {
        return false;
    }
    var result = true;
    A.forEach(function (a) {
        return B.forEach(function (b) {
            result = a === b;
        });
    });
    return result;
}
exports.isEqualArray = isEqualArray;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function loadSpotifyPlayer() {
    return new Promise(function (resolve, reject) {
        var scriptTag = document.getElementById('spotify-player');
        if (!scriptTag) {
            var script = document.createElement('script');
            script.id = 'spotify-player';
            script.type = 'text/javascript';
            script.async = false;
            script.defer = true;
            script.src = 'https://sdk.scdn.co/spotify-player.js';
            script.onload = function () { return resolve(); };
            script.onerror = function (error) { return reject(new Error("loadScript: " + error.message)); };
            document.head.appendChild(script);
        }
        else {
            resolve();
        }
    });
}
exports.loadSpotifyPlayer = loadSpotifyPlayer;
function parseVolume(value) {
    if (!isNumber(value)) {
        return 1;
    }
    if (value > 1) {
        return value / 100;
    }
    return value;
}
exports.parseVolume = parseVolume;
/**
 * Round decimal numbers
 */
function round(number, digits) {
    if (digits === void 0) { digits = 2; }
    var factor = Math.pow(10, digits);
    return Math.round(number * factor) / factor;
}
exports.round = round;
function validateURI(input) {
    var validTypes = ['album', 'artist', 'playlist', 'show', 'track'];
    /* istanbul ignore else */
    if (input && input.indexOf(':') > -1) {
        var _a = __read(input.split(':'), 3), key = _a[0], type = _a[1], id = _a[2];
        /* istanbul ignore else */
        if (key === 'spotify' && validTypes.indexOf(type) >= 0 && id.length === 22) {
            return true;
        }
    }
    return false;
}
exports.validateURI = validateURI;
//# sourceMappingURL=utils.js.map