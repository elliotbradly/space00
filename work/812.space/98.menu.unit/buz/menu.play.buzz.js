"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusPlayMenu = exports.updateFocusPlayMenu = void 0;
const ActMnu = require("../menu.action");
const ActFoc = require("../../01.focus.unit/focus.action");
const ActChc = require("../../act/choice.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
var playIDX = '';
const updateFocusPlayMenu = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: playIDX });
    var spot = bit.focBit.dat;
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'focus ' + spot.idx });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'face ' + spot.face });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: spot.x + ' ::::: ' + spot.y });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'corners:' + JSON.stringify(spot.corners) });
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit.focBit.dat) })
    lst = [ActFoc.FORWARD_FOCUS, ActFoc.BACKWARD_FOCUS, ActFoc.SPIN_RIGHT_FOCUS, ActFoc.SPIN_LEFT_FOCUS, ActFoc.BROWNIAN_FOCUS];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActFoc.FORWARD_FOCUS:
            bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: playIDX });
            var spot = bit.focBit.dat;
            // debugger
            bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
            break;
        case ActFoc.BROWNIAN_FOCUS:
            bit = await ste.hunt(ActFoc.BROWNIAN_FOCUS, { idx: playIDX });
            bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
            break;
        case ActFoc.SPIN_RIGHT_FOCUS:
            bit = await ste.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: playIDX });
            bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
            break;
        case ActFoc.SPIN_LEFT_FOCUS:
            bit = await ste.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: playIDX });
            bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
            break;
        case ActFoc.BACKWARD_FOCUS:
            bit = await ste.hunt(ActFoc.BACKWARD_FOCUS, { idx: playIDX });
            bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
            break;
    }
    bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
};
exports.updateFocusPlayMenu = updateFocusPlayMenu;
const focusPlayMenu = async (cpy, bal, ste) => {
    var focMod = ste.value.focus;
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Play Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.hunt(ActFoc.LIST_FOCUS, { src: FOCUS.AVAS });
    lst = bit.focBit.lst;
    lst.forEach((a, b) => {
        lst[b] = JSON.stringify(a);
    });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    var pistol = JSON.parse(src);
    playIDX = pistol.idx;
    bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {});
    return cpy;
};
exports.focusPlayMenu = focusPlayMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
const FOCUS = require("../../val/focus");
//# sourceMappingURL=menu.play.buzz.js.map