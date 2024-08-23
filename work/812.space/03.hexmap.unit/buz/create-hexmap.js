"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHexmap = void 0;
var bit, idx, lst, dat, val, src;
const createHexmap = async (cpy, bal, ste) => {
    var clone = require("clone-deep");
    var dat = { idx: bal.idx, typ: HEXMAP.AMBT };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    dat;
    const Hex = Honeycomb.extendHex({
        size: Number(1),
        orientation: "pointy",
    });
    const Grid = Honeycomb.defineGrid(Hex);
    dat.bit;
    if (dat.bit == null)
        bal.slv({ mapBit: { idx: "create-hexmap-error", src: "no bit present" } });
    dat.bit.grid;
    var copied = clone(dat.bit.grid);
    dat.grid = Grid(copied);
    debugger;
    var size = dat.grid.length;
    if (dat.bit == null) {
        if (bal.slv != null)
            bal.slv({ mapBit: { idx: "create-hexmap-error", src: "no bit present" } });
        return;
    }
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "create-hexmap", dat } });
    //var next = async ()=>{
    //  size -= 1;
    //  var itm = dat.grid[ size ]
    //  var hex = itm.hex;
    //11.07.23 this had been set to use the bus and it cause big trouble
    //  bit = await ste.hunt( ActFoc.WRITE_FOCUS, { idx:hex, src: dat.idx, dat:{  x: itm.x, y: itm.y, } })
    //  if ( size == 0 )
    //  {
    //    return
    //  }
    //   await next()
    // }
    // next()
    return cpy;
};
exports.createHexmap = createHexmap;
const Honeycomb = require("honeycomb-grid");
const HEXMAP = require("../../val/hexmap");
//# sourceMappingURL=create-hexmap.js.map