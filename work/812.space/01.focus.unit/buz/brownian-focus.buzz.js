"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brownianFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const brownianFocus = async (cpy, bal, ste) => {
    var spot;
    var now = Math.floor(Math.random() * 11);
    switch (now) {
        case 0:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 1:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 2:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 3:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 4:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 5:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 6:
            bit = await ste.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 7:
            bit = await ste.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 8:
            bit = await ste.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 9:
            bit = await ste.hunt(ActFoc.BACKWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
        case 10:
            bit = await ste.hunt(ActFoc.BACKWARD_FOCUS, { idx: bal.idx });
            spot = bit.focBit.bit;
            break;
    }
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "vision-focus", bit: spot } });
    return cpy;
};
exports.brownianFocus = brownianFocus;
//# sourceMappingURL=brownian-focus.buzz.js.map