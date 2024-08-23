"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMenu = void 0;
const ActTrm = require("../../act/terminal.action");
const ActVsg = require("../../act/visage.action");
const ActHex = require("../../act/hexagon.action");
var bit, lst, dex, idx, dat;
const renderMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActVsg.SIZE_VISAGE, { dat: { w: 520, h: 520 } }, 'remote');
    //bit = await ste.bus( ActVsg.FULLSCREEN_VISAGE, {idx:"fce00"}, 'remote')
    //bit = await ste.bus( ActGph.WRITE_GRAPHIC, { idx: 'gph00' }, 'remote')
    var mapMod = ste.value.hexmap;
    lst = mapMod.atlasNow;
    bit = await ste.bus(ActHex.WRITE_HEXAGON, { idx: 'hex00', src: 'gph00', dat: { lst } }, 'remote');
    bal.slv({ intBit: { idx: "render-menu" } });
    return cpy;
};
exports.renderMenu = renderMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=menu.render.buzz.js.map