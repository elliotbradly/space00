"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchSpace = exports.cloudSpace = exports.testSpace = exports.mergeSpace = exports.patchSpace = exports.readySpace = exports.editSpace = exports.updateSpace = exports.runSpace = exports.openSpace = exports.initSpace = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActFoc = require("../../01.focus.unit/focus.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActSpc = require("../../00.space.unit/space.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActPvt = require("../../act/pivot.action");
const ActDsk = require("../../act/disk.action");
var SHADE = global.shade;
var bit, val, idx, dex, lst, dat, src;
const initSpace = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActFoc, ActSpc, ActMap], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-space" } });
    return cpy;
};
exports.initSpace = initSpace;
const openSpace = async (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ spcBit: { idx: "open-space" } });
    return cpy;
};
exports.openSpace = openSpace;
const runSpace = async (cpy, bal, ste) => {
    return cpy;
};
exports.runSpace = runSpace;
const updateSpace = async (cpy, bal, ste) => {
    var lstMsg = [];
    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '812.space' });
    lstMsg = lstMsg.concat(bit.pvtBit.lst);
    idx = "../811.earth/812.space/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/812.space/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    bal.slv({ spcBit: { idx: "update-space", lst: lstMsg } });
    //const { exec } = require('child_process');
    //exec('tsc -b 110.shade', async (err, stdout, stderr) => {
    //    if (err) {
    //        console.error(`exec error: ${err}`);
    //    }
    //process.chdir("./999.vurt");
    //    bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "002.space" });
    //process.chdir("../../110.shade");
    //    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/002.space.js' })
    //var shade = bit.dskBit.dat;
    // bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/110.shade.js', dat: shade })
    //bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
    //var html = bit.dskBit.dat;
    //bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
    //var index = bit.dskBit.dat;
    //bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
    //bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })
    //bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })
    //    setTimeout(() => {
    //        if (bal.slv != null) bal.slv({ shdBit: { idx: "update-shade" } });
    //    }, 3);
    //});
    return cpy;
};
exports.updateSpace = updateSpace;
const editSpace = (cpy, bal, ste) => {
    return cpy;
};
exports.editSpace = editSpace;
const readySpace = async (cpy, bal, ste) => {
    if (bal.src != null) {
        cpy.readyBit = bal.src;
        if (bal.slv != null)
            bal.slv({ spcBit: { idx: "replace-ready-space" } });
        return;
    }
    bit = await ste.hunt(cpy.readyBit, {});
    if (bal.slv != null)
        bal.slv({ spcBit: { idx: "ready-space" } });
    return cpy;
};
exports.readySpace = readySpace;
const patchSpace = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, { src: '../gillisse/src', idx: './source' });
    if (bal.slv != null)
        bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });
    return cpy;
};
exports.patchSpace = patchSpace;
const mergeSpace = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/hexmap' });
    lst = bit.dskBit.lst;
    lst.forEach((a, b) => {
        lst[b] = '../gillisse/public/dat/hexmap/' + a;
    });
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './data/hexmap', idx: '../gillisse/public/dat/hexmap' });
    if (bal.slv != null)
        bal.slv({ spcBit: { idx: "merge-space", lst } });
    return cpy;
};
exports.mergeSpace = mergeSpace;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const testSpace = async (cpy, bal, ste) => {
    //bit = await ste.hunt( ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.fmeBit.dat });
    bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00' });
    bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    //bit = await ste.hunt(ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00' });
    //bit = await ste.hunt(ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    const response = await fetch("./dat/hexmap/000.swamp.json");
    const jsonData = await response.json();
    bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx: 'map00', dat: { gph: 'gph00', dat: jsonData } });
    dat = bit.mapBit.dat;
    bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat });
    //bit = await SHADE.hunt(SHADE.ActFme.WRITE_FRAME, { idx: 'fme00', src: 'vsg00' });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.fmeBit.dat });
    //bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph00', src: 'vsg00' });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    //bit = await SHADE.hunt(SHADE.ActGph.WRITE_GRAPHIC, { idx: 'gph01', src: 'vsg00' });
    //bit = await SHADE.hunt(SHADE.ActCan.ADD_CONTAINER, { idx: 'fce-can-00', dat: bit.gphBit.dat });
    //bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: 'map00', dat: { gph: 'gph00' } });
    //var hexmap = bit.mapBit.dat;
    //bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'vsg00', dat: { dat: hexmap } });
    //bit = await ste.hunt( ActFoc.WRITE_FOCUS, { idx: 'foc00', dat: { gph: 'gph01' } });
    //var focus = bit.focBit.dat;
    //bit = await SHADE.hunt(SHADE.ActHex.WRITE_HEXAGON, { idx: 'hex01', src: 'vsg00', dat: {dat:focus}   });
    return cpy;
};
exports.testSpace = testSpace;
const cloudSpace = async (cpy, bal, ste) => {
    return cpy;
};
exports.cloudSpace = cloudSpace;
const batchSpace = async (cpy, bal, ste) => {
    var bit;
    const next = async (lst) => {
        console.log('batch size : ' + lst.length);
        if (lst.length == 0) {
            if (bal.slv != null)
                bal.slv({ spcBit: { idx: "batch-space", bit } });
            return;
        }
        var itm = lst.shift();
        itm = S(itm).collapseWhitespace().s;
        console.log(itm + ' idx : ' + bal.idx + ' src: ' + bal.src);
        if (itm == null)
            return next(lst);
        bit = await ste.hunt(itm, { idx: bal.idx, src: bal.src });
        next(lst);
    };
    next(bal.lst);
    return cpy;
};
exports.batchSpace = batchSpace;
const S = require("string");
//# sourceMappingURL=space.buzz.js.map