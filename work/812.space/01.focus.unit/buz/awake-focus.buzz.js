"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awakeFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const awakeFocus = async (cpy, bal, ste) => {
    if (bal.val == 1) {
        bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1, dat: { awake: true } });
        bit = await ste.hunt(ActFoc.UPDATE_FOCUS, { idx: bal.idx });
        bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1 });
    }
    else {
        bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1, dat: { awake: false, viewList: [] } });
        bit = await ste.hunt(ActFoc.UPDATE_FOCUS, { idx: bal.idx });
        bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, val: 1 });
    }
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "awake-focus", dat } });
};
exports.awakeFocus = awakeFocus;
//# sourceMappingURL=awake-focus.buzz.js.map