"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geojsonMenu = void 0;
const ActMnu = require("../menu.action");
const ActGeo = require("../../02.geojson.unit/geojson.action");
const ActPut = require("../../act/input.action");
const ActChc = require("../../act/choice.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
var playIDX = '';
const geojsonMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Geojson Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActGeo.CAPTURE_GEOJSON, ActGeo.SAVE_GEOJSON, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActGeo.CAPTURE_GEOJSON:
            var geoMod = ste.value.geojson;
            lst = geoMod.captureLocationList;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActGeo.CAPTURE_GEOJSON, { src });
            break;
        case ActGeo.SAVE_GEOJSON:
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'label geojson', net: bit.grdBit.dat });
            src = bit.putBit.src;
            bit = await ste.hunt(ActGeo.SAVE_GEOJSON, { src });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'saving..' + bit.geoBit.src });
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    bit = await ste.hunt(ActMnu.GEOJSON_MENU, {});
};
exports.geojsonMenu = geojsonMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.geojson.buzz.js.map