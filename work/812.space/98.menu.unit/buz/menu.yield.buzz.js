"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yieldMenu = void 0;
const ActFoc = require("../../01.focus.unit/focus.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat;
const yieldMenu = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, w: 5, H: 5 } });
    bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: "hexmap00", dat: { bit: { grid: bit.mapBit.dat.dat.bit } } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit.mapBit.dat) });
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc00', src: 'hexmap00', dat: { typ: FOCUS.AVAS } });
    var avas = bit.focBit.dat;
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc01', src: 'hexmap00', dat: { typ: FOCUS.AVAS } });
    var avas = bit.focBit.dat;
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc02', src: 'hexmap00', dat: { typ: FOCUS.AVAS } });
    var avas = bit.focBit.dat;
    bit = await ste.hunt(ActFoc.LIST_FOCUS, { src: FOCUS.AVAS });
    lst = bit.focBit.lst;
    lst.forEach(async (a) => {
        bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'yeilding: ' + JSON.stringify(a) });
    });
    bal.slv({ intBit: { idx: "yield-menu" } });
    return cpy;
};
exports.yieldMenu = yieldMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const SHAPE = require("../../val/shape");
const FOCUS = require("../../val/focus");
//# sourceMappingURL=menu.yield.buzz.js.map