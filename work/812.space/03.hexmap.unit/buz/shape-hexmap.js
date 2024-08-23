"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shapeHexmap = void 0;
var bit, idx, lst, dat, val, src;
const shapeHexmap = async (cpy, bal, ste) => {
    var dat = bal.dat;
    if (dat == null)
        return bal.slv({ mapBit: { idx: "shape-hexmap-error" } });
    if (dat.frm == null)
        dat.frm = SHAPE.RECTANGLE;
    if (dat.w == null)
        dat.w = 3;
    if (dat.h == null)
        dat.h = 3;
    const Hex = Honeycomb.extendHex({
        size: Number(1),
        orientation: 'pointy', // default: 'pointy'
    });
    const Grid = Honeycomb.defineGrid(Hex);
    var grid;
    switch (dat.frm) {
        case SHAPE.RECTANGLE:
            grid = Grid.rectangle({ width: dat.w, height: dat.h });
            break;
        case SHAPE.TRIANGLE:
            grid = Grid.triangle({ size: dat.w });
            break;
        case SHAPE.HEXAGON:
            grid = Grid.hexagon({ radius: dat.w, center: [dat.w, dat.w] });
            break;
        case SHAPE.PARALLELOGRAM:
            grid = Grid.parallelogram({ width: dat.w, height: dat.h });
            break;
    }
    var Chance = require('chance');
    var chance = new Chance();
    grid.forEach((a) => {
        a.hex = chance.bb_pin();
    });
    dat.bit = grid;
    //bit = await ste.hunt(ActMap.REPLACE_HEXMAP, { dat: grid })
    var shape = { frm: dat.frm, bit: dat.bit, w: dat.w, h: dat.h };
    //bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: bal.idx, dat: shape })
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "shape-hexmap", dat: { idx: bal.idx, dat: shape } } });
    return cpy;
};
exports.shapeHexmap = shapeHexmap;
const SHAPE = require("../../val/shape");
const Honeycomb = require("honeycomb-grid");
//# sourceMappingURL=shape-hexmap.js.map