"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchPivot = exports.cloudPivot = exports.editPivot = exports.runPivot = exports.openPivot = exports.updatePivot = exports.initPivot = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActSpc = require("../../00.space.unit/space.action");
const ActVrt = require("../../act/vurt.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initPivot = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActSpc], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-machine" } });
    return cpy;
};
exports.initPivot = initPivot;
const updatePivot = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    exec('tsc -b 002.space', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "002.space" });
        process.chdir("../002.space");
        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/002.space.js' });
        var space = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/002.space.js', dat: space });
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' });
        var html = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' });
        var index = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index });
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html });
        bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' });
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ shdBit: { idx: "update-space" } });
        }, 3);
    });
    return cpy;
};
exports.updatePivot = updatePivot;
const openPivot = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' });
    bit = await ste.hunt(ActSpc.RUN_SPACE, {});
    const open = require('open');
    var loc = './vrt.opn.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ spcBit: { idx: "open-space" } });
    }, 33);
    return cpy;
};
exports.openPivot = openPivot;
const runPivot = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = './vrt.gil.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ shdBit: { idx: "run-shade" } });
    });
    return cpy;
};
exports.runPivot = runPivot;
const editPivot = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("../../studio/");
    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../packages/110.shade");
        if (bal.slv != null)
            bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });
    });
    return cpy;
};
exports.editPivot = editPivot;
const cloudPivot = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/002.space.js' });
    var time = bit.dskBit.dat;
    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './cloud/002.space.js', dat: time });
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './cloud/', idx: '../../agent/002.space/' });
    const { exec } = require('child_process');
    process.chdir("../../agent/002.space");
    exec('vrt.pub.bat', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        //then open an address
        var open = require('open');
        open('https://002-space.beeing.workers.dev/');
        process.chdir("../../packages/002.space");
        if (bal.slv != null)
            bal.slv({ spcBit: { idx: "cloud-pivot" } });
    });
    return cpy;
};
exports.cloudPivot = cloudPivot;
const patchPivot = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.patchPivot = patchPivot;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=pivot.buzz.js.map