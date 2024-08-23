"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maprpgMenu = void 0;
const ActMnu = require("../menu.action");
const ActMpr = require("../../04.maprpg.unit/maprpg.action");
const ActChc = require("../../act/choice.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
const ActDsk = require("../../act/disk.action");
var bit, lst, dex, idx, dat, src;
const maprpgMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "MapRPG Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActMpr.LOAD_MAPRPG, ActMpr.WRITE_MAPRPG, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActMpr.LOAD_MAPRPG:
            bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/maprpg/' });
            lst = bit.dskBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActMpr.LOAD_MAPRPG, { src });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Loaded.. " + bit.mprBit.src });
            //bit = await ste.hunt(ActMnu.PRINT_MENU, bit.mprBit.src)
            break;
        case ActMpr.WRITE_MAPRPG:
            bit = await ste.hunt(ActMpr.WRITE_MAPRPG, { src });
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    bit = await ste.hunt(ActMnu.MAPRPG_MENU, {});
    cpy;
};
exports.maprpgMenu = maprpgMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.maprpg.buzz.js.map