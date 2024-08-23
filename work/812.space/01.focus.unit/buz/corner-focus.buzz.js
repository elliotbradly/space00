"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cornerFocus = void 0;
const ActMap = require("../../03.hexmap.unit/hexmap.action");
var bit, val, idx, dex, lst, dat;
const cornerFocus = async (cpy, bal, ste) => {
    var spot = bal.dat;
    var grid;
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: spot.src });
    grid = bit.mapBit.dat.grid;
    if (grid == null)
        bal.slv({ focBit: { idx: "corner-focus-error", lst, dat: spot } });
    if (grid == null)
        return;
    var hex = grid.get({ x: spot.x, y: spot.y });
    const point = hex.toPoint();
    lst = hex.corners().map((corner) => corner.add(point));
    spot.corners = lst;
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "corner-focus", lst, bit: spot } });
    return cpy;
};
exports.cornerFocus = cornerFocus;
//# sourceMappingURL=corner-focus.buzz.js.map