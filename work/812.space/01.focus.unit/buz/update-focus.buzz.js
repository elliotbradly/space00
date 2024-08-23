"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
var flag = false;
const updateFocus = async (cpy, bal, ste) => {
    if (flag == false) {
        flag = true;
        if (bal.slv != null)
            bal.slv({ focBit: { idx: "update-focus" } });
        return;
    }
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    var viewList = [];
    if (spot.awake == true) {
        bit = await ste.hunt(ActFoc.VISION_FOCUS, { idx: bal.idx });
        viewList = bit.focBit.lst;
        // bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1, dat: { viewList } })
    }
    else {
        // bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1, dat: { viewList } })
    }
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "update-focus" } });
    return cpy;
};
exports.updateFocus = updateFocus;
//# sourceMappingURL=update-focus.buzz.js.map