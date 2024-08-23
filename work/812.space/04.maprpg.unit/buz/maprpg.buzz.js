"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMaprpg = exports.deleteMaprpg = exports.removeMaprpg = exports.readMaprpg = exports.writeMaprpg = exports.updateMaprpg = exports.createMaprpg = exports.initMaprpg = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActMpr = require("../maprpg.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initMaprpg = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initMaprpg = initMaprpg;
const createMaprpg = async (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    bal.dat;
    var dat = { idx };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    bal.slv({ mprBit: { idx: 'create-rpgmap', dat } });
    return cpy;
    return cpy;
};
exports.createMaprpg = createMaprpg;
const updateMaprpg = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActMpr.UPDATE_MAPRPG, { idx: bal.idx });
    dat = bit.rpmBit;
    bal.slv({ rmpBit: { idx: "update-rpgmap", dat } });
    return cpy;
};
exports.updateMaprpg = updateMaprpg;
const writeMaprpg = async (cpy, bal, ste) => {
    var slv = bal.slv;
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMpr.CREATE_MAPRPG });
    var item = bit.clcBit.dat;
    if (bit.clcBit.val == 1)
        await ste.hunt(ActMpr.UPDATE_MAPRPG, { idx: bal.idx, dat: bal.dat });
    if (slv != null)
        slv({ mprBit: { idx: "write-maprpg", dat: item } });
    return cpy;
    return cpy;
};
exports.writeMaprpg = writeMaprpg;
const readMaprpg = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'mpr00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActMpr.CREATE_MAPRPG });
    var item = bit.clcBit.dat;
    if (slv != null)
        slv({ mprBit: { idx: "read-maprpg", dat: item } });
    return cpy;
};
exports.readMaprpg = readMaprpg;
const removeMaprpg = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMpr.CREATE_MAPRPG });
    if (bal.slv != null)
        bal.slv({ mprBit: { idx: "remove-maprpg", dat: bit.clcBit } });
    return cpy;
};
exports.removeMaprpg = removeMaprpg;
const deleteMaprpg = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteMaprpg = deleteMaprpg;
const loadMaprpg = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.READ_DISK, { src: './data/maprpg/' + bal.src });
    dat = JSON.parse(bit.dskBit.dat);
    bal.slv({ mprBit: { idx: "load-maprpg", src: bal.src, dat } });
    return cpy;
};
exports.loadMaprpg = loadMaprpg;
//# sourceMappingURL=maprpg.buzz.js.map