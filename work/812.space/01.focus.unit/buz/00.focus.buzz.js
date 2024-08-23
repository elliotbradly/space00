"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelFocus = exports.openFocus = exports.selectFocus = exports.locateFocus = exports.centerFocus = exports.listFocus = exports.deleteFocus = exports.removeFocus = exports.writeFocus = exports.readFocus = exports.initFocus = void 0;
const ActFoc = require("../focus.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initFocus = (cpy, bal, ste) => {
    var lst = [ActFoc.OPEN_FOCUS];
    bal.slv({ intBit: { idx: "init-focus", lst } });
    return cpy;
};
exports.initFocus = initFocus;
const readFocus = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "foc00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActFoc.CREATE_FOCUS });
    if (slv != null)
        slv({ focBit: { idx: "read-focus", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readFocus = readFocus;
const writeFocus = async (cpy, bal, ste) => {
    //debugger
    if (bal.idx == null)
        bal.idx = "foc00";
    //if (bal.val != 1) ste.hunt(ActFoc.UPDATE_FOCUS, { idx: bal.idx })
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFoc.CREATE_FOCUS });
    var spot = bit.clcBit.dat;
    //debugger
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "write-focus", dat: spot } });
    return cpy;
};
exports.writeFocus = writeFocus;
const removeFocus = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeFocus = removeFocus;
const deleteFocus = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteFocus = deleteFocus;
const listFocus = async (cpy, bal, ste) => {
    dat = null;
    bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActFoc.CREATE_FOCUS });
    if (bal.src == null)
        bal.src = FOCUS.AMBT;
    src = bal.src;
    if (bit.clcBit.dat == null)
        lst = [];
    else
        dat = bit.clcBit.dat;
    dat;
    if (dat != null) {
        lst = [];
        var bitList = dat.bitList;
        var bits = dat.bits;
        dat.bitList.forEach((a) => {
            src;
            var itm = bitList[a.dex];
            if (bal.src.toUpperCase() != itm.typ.toUpperCase())
                return;
            lst.push(itm);
        });
    }
    lst;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: 'list-focus', lst } });
    return cpy;
};
exports.listFocus = listFocus;
const centerFocus = async (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "center-focus", dat } });
};
exports.centerFocus = centerFocus;
const locateFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.map });
    var map = bit.mapBit.dat;
    var grid = map.dat;
    var hex = grid.get({ x: spot.x, y: spot.y });
    var idx = spot.map + "-" + spot.x + "-" + spot.y;
    spot.loc = hex;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "locate-focus", dat: spot } });
    return cpy;
};
exports.locateFocus = locateFocus;
const selectFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    cpy.select = spot;
    //bit = await ste.hunt( ActFoc.VISION_FOCUS, { idx: bal.idx })
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "select-focus", dat: cpy.select } });
    return cpy;
};
exports.selectFocus = selectFocus;
const openFocus = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "open-focus", dat: {} } });
    return cpy;
};
exports.openFocus = openFocus;
//grab all the model data 
const modelFocus = async (cpy, bal, ste) => {
    if (bal.src == null)
        bal.src = 'GET';
    switch (bal.src) {
        case 'GET':
            bit = await ste.hunt(ActCol.GET_COLLECT, { idx: 'focus' });
            dat = bit.clcBit.dat;
            break;
        case 'PUT':
            break;
    }
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "model-focus", dat } });
    return cpy;
};
exports.modelFocus = modelFocus;
const FOCUS = require("../../val/focus");
//# sourceMappingURL=00.focus.buzz.js.map