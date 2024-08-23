"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveGeojson = exports.captureGeojson = exports.indexGeojson = exports.loadGeojson = exports.updateGeojson = exports.initGeojson = void 0;
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat, src;
const initGeojson = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initGeojson = initGeojson;
const updateGeojson = (cpy, bal, ste) => {
    return cpy;
};
exports.updateGeojson = updateGeojson;
const loadGeojson = async (cpy, bal, ste) => {
    src = bal.src;
    bit = await ste.bus(ActDsk.READ_DISK, { src: cpy.geoSrc + '/' + src, val: 1 });
    dat = bit.dskBit.dat;
    src = bal.src.split('.')[0] + '.' + bal.src.split('.')[1];
    if (bal.slv != null)
        bal.slv({ geoBit: { idx: "load-geojson", dat, src } });
    return cpy;
};
exports.loadGeojson = loadGeojson;
const indexGeojson = async (cpy, bal, ste) => {
    dat = null;
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: cpy.geoSrc });
    lst = bit.dskBit.lst;
    if (bal.slv != null)
        bal.slv({ geoBit: { idx: "list-geojson", lst } });
    return cpy;
};
exports.indexGeojson = indexGeojson;
const captureGeojson = async (cpy, bal, ste) => {
    var open = require('open');
    await open(bal.src);
    if (bal.slv != null)
        bal.slv({ geoBit: { idx: "capture-geojson", src: bal.src } });
    return cpy;
};
exports.captureGeojson = captureGeojson;
const saveGeojson = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: "./data/geojson/" });
    lst = bit.dskBit.lst;
    var dex = lst.length;
    var out = String(dex).padStart(3, '0');
    var srcDir = "./data/geojson/" + out + '.' + bal.src + '.json';
    var clipboardy = require("clipboardy");
    var geo;
    try {
        geo = clipboardy.readSync();
    }
    catch (e) {
        console.log("hmmm " + e);
        if (bal.slv != null)
            bal.slv({ geoBit: { idx: "save-geojson-error" } });
        return;
    }
    if (geo.includes("coordinates") == false) {
        if (bal.slv != null)
            bal.slv({ geoBit: { idx: "save-geojson-error" } });
        return;
    }
    if (geo.includes("type") == false) {
        if (bal.slv != null)
            bal.slv({ geoBit: { idx: "save-geojson-error" } });
        return;
    }
    bit = await ste.bus(ActDsk.WRITE_DISK, { idx: srcDir, dat: geo });
    if (bal.slv != null)
        bal.slv({ geoBit: { idx: "save-geojson", src: bal.src } });
    return cpy;
};
exports.saveGeojson = saveGeojson;
//# sourceMappingURL=geojson.buzz.js.map