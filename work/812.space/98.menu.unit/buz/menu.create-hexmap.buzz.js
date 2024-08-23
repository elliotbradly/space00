"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHexmapMenu = void 0;
const ActMnu = require("../menu.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActChc = require("../../act/choice.action");
const ActTrm = require("../../act/terminal.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src, val;
const createHexmapMenu = async (cpy, bal, ste) => {
    var mapMod = ste.value.hexmap;
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Create Hexmap Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "CURRENT:" + cpy.mapNomNow });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "SHAPE:" + cpy.mapShape });
    if (cpy.shapeBit == null) {
        cpy.shapeBit = {};
    }
    cpy.shapeBit;
    if (cpy.atlasNow == null) {
        cpy.atlasNow = { size: 0 };
    }
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "SIZE:" + cpy.atlasNow.size });
    if (cpy.geoJsonNow == null) {
        cpy.geoJsonNow = [];
        cpy.geoJsonNow.coordinates = [];
    }
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "GEOJSON:" + cpy.geoJsonNow.coordinates.length });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "SHAPE:" + JSON.stringify(cpy.shapeBit) });
    lst = [ActMap.NAME_HEXMAP, ActMap.SHAPE_HEXMAP, ActMap.GEOJSON_HEXMAP, ActMap.ATLAS_HEXMAP, ActMap.SAVE_HEXMAP, ActMap.STORE_HEXMAP, ActMap.TOOL_HEXMAP, ActMnu.HEXMAP_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        //load geojson data from inside the network
        case ActMap.GEOJSON_HEXMAP:
            var FS = require('fs-extra');
            lst = FS.readdirSync('./data/geojson/');
            //bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/geojson/' })
            //lst = bit.dskBit.lst
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            src = FS.readFileSync('./data/geojson/' + src).toString();
            dat = JSON.parse(src);
            // idx = src.replace('.json', '');
            //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/geojson/' + src, val: 1 })
            //dat = bit.dskBit.dat
            cpy.geoJsonNow = dat;
            bit = await ste.hunt(ActMnu.CREATE_HEXMAP_MENU, {});
            break;
        case ActMap.ATLAS_HEXMAP:
            lst = ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 2, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            val = Number(src);
            dat = cpy.geoJsonNow;
            bit = await ste.hunt(ActMap.ATLAS_HEXMAP, { dat, val: Number(val) });
            dat = bit.mapBit.dat;
            cpy.atlasNow = dat;
            debugger;
            bit = await ste.hunt(ActMnu.CREATE_HEXMAP_MENU, {});
            break;
        case ActMnu.HEXMAP_MENU:
            bit = await ste.hunt(ActMnu.HEXMAP_MENU, {});
            break;
        case ActMap.NAME_HEXMAP:
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Name Hexmap"] });
            src = bit.trmBit.src;
            cpy.mapNomNow = src;
            bit = await ste.hunt(ActMnu.CREATE_HEXMAP_MENU, {});
            break;
        case ActMap.SHAPE_HEXMAP:
            lst = [];
            for (var key in SHAPE) {
                lst.push(SHAPE[key]);
            }
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            cpy.mapShape = src;
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "X VALUE"] });
            var x = Number(bit.trmBit.src);
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "Y VALUE"] });
            var y = Number(bit.trmBit.src);
            cpy.mapDimensions = x + '-' + y;
            bit = await ste.hunt(ActMap.SHAPE_HEXMAP, { src, dat: { x, y } });
            dat = bit.mapBit.dat;
            cpy.shapeBit = dat;
            cpy.sizeNow = dat.length;
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { va: 7, src: "SHAPE:" + JSON.stringify(cpy.shapeBit) });
            bit = await ste.hunt(ActMnu.CREATE_HEXMAP_MENU, {});
            break;
        case ActMap.SAVE_HEXMAP:
            src = cpy.mapNomNow;
            val = cpy.sizeNow;
            bit = await ste.hunt(ActMap.SAVE_HEXMAP, { src, val });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) });
            break;
        case ActMap.STORE_HEXMAP:
            bit = await ste.hunt(ActMap.STORE_HEXMAP, { dat: cpy.shapeBit });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) });
            break;
        case ActMap.TOOL_HEXMAP:
            bit = await ste.hunt(ActMap.TOOL_HEXMAP, {});
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    if (bal.slv != null)
        bal.slv({ mnuBit: { idx: "create-hexmap-menu" } });
};
exports.createHexmapMenu = createHexmapMenu;
const SHAPE = require("../../val/shape");
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.create-hexmap.buzz.js.map