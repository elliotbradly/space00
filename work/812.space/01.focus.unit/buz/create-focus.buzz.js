"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const createFocus = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, typ: FOCUS.AMBT };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (dat.gph == null)
        dat.gph = 'None';
    dat.gph;
    if (dat.frm == null)
        dat.frm = SHAPE.RECTANGLE;
    if (dat.x == null)
        dat.x = 0;
    if (dat.y == null)
        dat.y = 0;
    if (dat.h == null)
        dat.h = 1;
    if (dat.w == null)
        dat.w = 1;
    if (dat.awake == null)
        dat.awake = false;
    if (dat.face == null)
        dat.face = 'E';
    if (dat.past == null)
        dat.past = [];
    if (dat.update == null)
        dat.update = 0;
    if (dat.clock == null)
        dat.clock = 0;
    if (dat.updateSpeed == null)
        dat.updateSpeed = 11;
    if (dat.turnSpeed == null)
        dat.turnSpeed = 11;
    if (dat.spin == null)
        dat.spin = true;
    bit = await ste.hunt(ActFoc.CORNER_FOCUS, { idx: dat.src, dat });
    dat.corners = bit.focBit.lst;
    bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: bal.idx, src: dat.face, dat });
    var bonds = bit.focBit.dat;
    dat.bonds = bonds;
    bal.slv({ focBit: { idx: "create-focus", dat } });
    return cpy;
};
exports.createFocus = createFocus;
const SHAPE = require("../../val/shape");
const FOCUS = require("../../val/focus");
//# sourceMappingURL=create-focus.buzz.js.map