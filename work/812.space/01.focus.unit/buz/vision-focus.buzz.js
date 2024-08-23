"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visionFocus = void 0;
const ActFoc = require("../focus.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
var bit, val, idx, dex, lst, dat;
const visionFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.src });
    var map = bit.mapBit.dat;
    var grid = map.grid;
    var size = 3;
    var check = [{ face: spot.face, x: spot.x, y: spot.y }];
    switch (spot.face) {
        case DIRECTION.EAST:
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
            break;
        case DIRECTION.WEST:
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
            break;
        case DIRECTION.NORTH_EAST:
            check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            break;
        case DIRECTION.NORTH_WEST:
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
            break;
        case DIRECTION.SOUTH_EAST:
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
            break;
        case DIRECTION.SOUTH_WEST:
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            check.push({ face: spot.face, x: spot.x, y: spot.y - 1 });
            break;
        case DIRECTION.SOUTH_EAST:
            check.push({ face: spot.face, x: spot.x, y: spot.y + 1 });
            check.push({ face: spot.face, x: spot.x + 1, y: spot.y - 1 });
            break;
    }
    var output = [];
    check.forEach((a, b) => {
        var last = grid.get({ x: a.x, y: a.y });
        for (var i = 0; i < size; i++) {
            if (last != null) {
                var item = grid.neighborsOf(last, compassConvertor(a.face));
                if (item[0] != null) {
                    var data = { idx: "listing-vison-focus", src: spot.src, x: item[0].x, y: item[0].y, corners: [], h: null };
                    last = grid.get({ x: data.x, y: data.y });
                    //grabCorners(cpy, data, ste);
                    output.push(last.hex);
                }
            }
        }
    });
    output;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "vision-focus", lst: output } });
    //var item = grid.neighborsOf(hex, compassConvertor(RCT.EAST));
    //if (item[0] != null) output.push({ x: item[0].x, y: item[0].y });
    //foci.viewList = output;
    //commented out on 3.30
    //cpy.readFocus = foci;
    //commented out on 3.30
    return cpy;
};
exports.visionFocus = visionFocus;
const compassConvertor = (val) => {
    var result = 0;
    switch (val) {
        case DIRECTION.NORTH_EAST:
            result = 5;
            break;
        case DIRECTION.EAST:
            result = 0;
            break;
        case DIRECTION.SOUTH_EAST:
            result = 1;
            break;
        case DIRECTION.SOUTH_WEST:
            result = 2;
            break;
        case DIRECTION.WEST:
            result = 3;
            break;
        case DIRECTION.NORTH_WEST:
            result = 4;
            break;
    }
    return result;
};
const DIRECTION = require("../../val/direction");
//# sourceMappingURL=vision-focus.buzz.js.map