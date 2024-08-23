import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";

import * as ActPut from "../../act/input.action";
import * as ActChc from "../../act/choice.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";
import * as ActGrd from "../../act/grid.action";

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex, idx, dat;

export const yieldMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, w: 5, H: 5 } })
  bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx: "hexmap00", dat: { bit: { grid: bit.mapBit.dat.dat.bit } } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit.mapBit.dat) })

  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc00', src: 'hexmap00', dat: { typ: FOCUS.AVAS } })
  var avas = bit.focBit.dat

  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc01', src: 'hexmap00', dat: { typ: FOCUS.AVAS } })
  var avas = bit.focBit.dat

  bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc02', src: 'hexmap00', dat: { typ: FOCUS.AVAS } })
  var avas = bit.focBit.dat

  bit = await ste.hunt(ActFoc.LIST_FOCUS, { src: FOCUS.AVAS })

  lst = bit.focBit.lst
  

  lst.forEach(async (a) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'yeilding: '+  JSON.stringify(a) })
  })

  bal.slv({ intBit: { idx: "yield-menu" } });
  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { HexmapModel } from "812.space/03.hexmap.unit/hexmap.model";

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";