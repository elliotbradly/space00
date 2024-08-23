"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectHexmap = exports.seekHexmap = exports.replaceHexmap = exports.nameHexmap = exports.loadHexmap = exports.listHexmap = exports.storeHexmap = exports.saveHexmap = exports.toolHexmap = exports.geojsonHexmap = exports.copyHexmap = exports.readHexmap = exports.writeHexmap = exports.addHexmap = exports.openHexmap = exports.defocusHexmap = exports.focusingHexmap = exports.updateHexmap = exports.initHexmap = void 0;
const ActMap = require("../hexmap.action");
const ActFoc = require("../../01.focus.unit/focus.action");
const ActCol = require("../../97.collect.unit/collect.action");
const ActDsk = require("../../act/disk.action");
var bit, idx, lst, dat, val, src;
const initHexmap = (cpy, bal, ste) => {
    var lst = [ActMap.OPEN_HEXMAP];
    bal.slv({ intBit: { idx: "init-focus", lst } });
    return cpy;
};
exports.initHexmap = initHexmap;
const updateHexmap = (cpy, bal, ste) => {
    return cpy;
};
exports.updateHexmap = updateHexmap;
const focusingHexmap = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: bal.idx });
    var hexmap = bit.mapBit.dat;
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.src });
    var focus = bit.focBit.dat;
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: focus.idx, dat: { map: hexmap.idx } });
    var focus = bit.focBit.dat;
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "focusing-hexmap", dat: { idx: hexmap.idx, src: focus.idx, dat: focus } } });
    return cpy;
};
exports.focusingHexmap = focusingHexmap;
const defocusHexmap = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.defocusHexmap = defocusHexmap;
const openHexmap = async (cpy, bal, ste) => {
    if (bal.idx.includes('.') == false)
        bal.idx = bal.src;
    var url = 'https://www.fictiq.com/dat/hexmap/' + bal.idx + '.json';
    bit = await fetch(url, { method: 'GET', headers: { 'head': 'none' } });
    dat = await bit.json();
    bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx: bal.idx, dat: { dat, gph: 'gph00' } });
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "open-hexmap", dat } });
    return cpy;
};
exports.openHexmap = openHexmap;
const addHexmap = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'hex000';
    dat = { frm: 'geojson', bit: bal.dat.dat, gph: bal.dat.gph };
    bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: bal.idx, dat });
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "add-hexmap", dat: bit.mapBit.dat } });
    return cpy;
};
exports.addHexmap = addHexmap;
const writeHexmap = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActMap.CREATE_HEXMAP });
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "write-hexmap", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeHexmap = writeHexmap;
const readHexmap = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'map00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActMap.CREATE_HEXMAP });
    if (slv != null)
        slv({ mapBit: { idx: "read-hexmap", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readHexmap = readHexmap;
const copyHexmap = async (cpy, bal, ste) => {
    return cpy;
};
exports.copyHexmap = copyHexmap;
var geojson = false;
const geojsonHexmap = async (cpy, bal, ste) => {
    debugger;
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "geojson-hexmap", dat: cpy.geoJsonNow } });
    return cpy;
};
exports.geojsonHexmap = geojsonHexmap;
const toolHexmap = async (cpy, bal, ste) => {
    if (geojson == true) {
        if (bal.slv != null)
            bal.slv({ mapBit: { idx: "tool-hexmap" } });
        return;
    }
    geojson = true;
    var link = ["https://geoman.io/geojson-editor", "https://www.keene.edu/campus/maps/tool/"];
    var Chance = require("chance");
    var fate = new Chance();
    var now = fate.pickone(link);
    const open = require('open');
    var loc = './vew.shd.bat';
    bit = await open(now);
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "tool-hexmap", src: now } });
    return cpy;
};
exports.toolHexmap = toolHexmap;
const saveHexmap = async (cpy, bal, ste) => {
    bal.src = S(bal.src).slugify().s;
    if (bal.val == null)
        bal.val = 10;
    val = String(bal.val).padStart(5, '0');
    bit = await ste.bus(ActDsk.ENSURE_DISK, { src: cpy.hexmapLoc });
    src = cpy.hexmapLoc + bal.src + '.' + val + '.json';
    bit = await ste.bus(ActDsk.WRITE_DISK, { idx: null, src, dat: cpy.atlasNow, val: 1 });
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "save-hexmap", src } });
    return cpy;
};
exports.saveHexmap = saveHexmap;
const storeHexmap = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx: bal.idx, dat: { gph: bal.src, dat: bal.dat } });
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "store-hexmap", dat: bal.dat } });
    return cpy;
};
exports.storeHexmap = storeHexmap;
const listHexmap = async (cpy, bal, ste) => {
    dat = null;
    bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActMap.CREATE_HEXMAP });
    if (bit.clcBit.dat == null)
        lst = [];
    else
        dat = bit.clcBit.dat;
    if (dat != null) {
        lst = [];
        dat.bitList.forEach((a) => {
            lst.push((a.idx));
        });
    }
    lst;
    //process.chdir("../002.space")
    //src = cpy.hexmapLoc
    //bit = await ste.bus(ActDsk.LIST_DISK, { idx: null, src })
    //lst = bit.dskBit.lst
    //if (bal.idx != null) process.chdir(bal.idx)
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "list-hexmap", lst } });
    return cpy;
};
exports.listHexmap = listHexmap;
const loadHexmap = async (cpy, bal, ste) => {
    if (bal.idx != null)
        process.chdir("../002.space");
    if (bal.val != null)
        val = String(bal.val).padStart(5, '0');
    if (bal.val != null)
        bal.src = S(bal.src).slugify().s;
    bit = await ste.bus(ActDsk.ENSURE_DISK, { src: cpy.hexmapLoc });
    if (val != null)
        src = cpy.hexmapLoc + bal.src + '.' + val + '.json';
    else
        src = cpy.hexmapLoc + bal.src;
    bit = await ste.bus(ActDsk.READ_DISK, { idx: null, src, val: 1 });
    dat = bit.dskBit.dat;
    if (bal.idx != null)
        process.chdir(bal.idx);
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "load-hexmap", dat } });
    return cpy;
};
exports.loadHexmap = loadHexmap;
const nameHexmap = (cpy, bal, ste) => {
    cpy.mapNomNow = bal.idx;
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "name-hexmap", dat: cpy.atlasNow } });
    return cpy;
};
exports.nameHexmap = nameHexmap;
const replaceHexmap = (cpy, bal, ste) => {
    cpy.atlasNow = bal.dat;
    cpy.sizeNow = cpy.atlasNow.length;
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "replace-hexmap", dat: cpy.atlasNow } });
    return cpy;
};
exports.replaceHexmap = replaceHexmap;
const seekHexmap = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.seekHexmap = seekHexmap;
const selectHexmap = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActMap.READ_HEXMAP, { idx: bal.idx });
    var hexmap = bit.mapBit.dat;
    cpy.select = hexmap;
    if (bal.slv != null)
        bal.slv({ mapBit: { idx: "select-hexmap", dat: cpy.select } });
    return cpy;
};
exports.selectHexmap = selectHexmap;
const S = require("string");
//# sourceMappingURL=00.hexmap.buzz.js.map