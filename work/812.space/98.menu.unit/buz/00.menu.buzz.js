"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMenu = exports.createMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActSpc = require("../../00.space.unit/space.action");
const ActPvt = require("../../96.pivot.unit/pivot.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    //bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {})
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 7, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Spaced PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    //lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, , ActMnu.RENDER_MENU]
    lst = [ActSpc.UPDATE_SPACE, ActMnu.MAPRPG_MENU, ActMnu.HEXMAP_MENU, ActMnu.FOCUS_MENU, ActMnu.YIELD_MENU, ActMnu.GEOJSON_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActSpc.UPDATE_SPACE:
            await updateSpace(ste);
            break;
        case ActMnu.GEOJSON_MENU:
            bit = await ste.hunt(ActMnu.GEOJSON_MENU, {});
            break;
        case ActMnu.HEXMAP_MENU:
            bit = await ste.hunt(ActMnu.HEXMAP_MENU, {});
            break;
        case ActMnu.MAPRPG_MENU:
            bit = await ste.hunt(ActMnu.MAPRPG_MENU, {});
            break;
        case ActMnu.FOCUS_MENU:
            bit = await ste.hunt(ActMnu.FOCUS_MENU, {});
            break;
        case ActMnu.YIELD_MENU:
            bit = await ste.hunt(ActMnu.YIELD_MENU, {});
            break;
        //   case ActPvt.CLOUD_PIVOT:
        //     bit = await ste.hunt(ActPvt.CLOUD_PIVOT, {})
        //     break;
        //  case ActMnu.YIELD_MENU:
        //    bit = await ste.hunt(ActMnu.YIELD_MENU, {})
        //    break;
        //  case ActFoc.MODEL_FOCUS:
        //    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "MODEL FOCUS...", bit: 'local' })
        //    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
        //   bit = await ste.hunt(ActFoc.MODEL_FOCUS, {})
        //   break;
        // case ActPvt.EDIT_PIVOT:
        //   bit = await ste.hunt(ActPvt.EDIT_PIVOT, {})
        //   bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
        //   bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
        //   lst = [ActSpc.PATCH_SPACE]
        //   bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
        //   bit = await ste.hunt(ActPvt.PATCH_PIVOT, {})
        //   break;
        case ActPvt.UPDATE_PIVOT:
            bit = await ste.hunt(ActPvt.UPDATE_PIVOT, {});
            break;
        case ActSpc.MERGE_SPACE:
            bit = await ste.hunt(ActSpc.MERGE_SPACE, {});
            lst = bit.spcBit.lst;
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---merging...", val: 2, bit: "local" });
            lst.forEach(async (a) => {
                bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---" + a, val: 2, bit: "local" });
            });
            break;
        case ActPvt.OPEN_PIVOT:
            bit = await ste.hunt(ActPvt.OPEN_PIVOT, {});
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src });
    (0, exports.updateMenu)(cpy, bal, ste);
    //var lst = [ ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, ActMnu.YIELD_MENU, ActMnu.RENDER_MENU]
    //lst.push(ActFoc.MODEL_FOCUS)
    //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
    // bit = bit.trmBit;
    // var idx = lst[bit.val];
    //updateMenu(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
const createMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.createMenu = createMenu;
const printMenu = async (cpy, bal, ste) => {
    dat = bal;
    if (dat == null)
        return bal.slv({ mnuBit: { idx: "print-menu", dat } });
    var itm = JSON.stringify(dat);
    lst = itm.split(",");
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
    //ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });
    bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};
exports.printMenu = printMenu;
var updateSpace = async (ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating space....' });
    var bitUp = await ste.hunt(ActSpc.UPDATE_SPACE, {});
    bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp);
};
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map