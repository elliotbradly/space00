import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActMap from "../../03.hexmap.unit/hexmap.action"

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  //bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {})

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 7, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Spaced PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  //lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, , ActMnu.RENDER_MENU]

  

  lst = [ActSpc.UPDATE_SPACE, ActMnu.MAPRPG_MENU, ActMnu.HEXMAP_MENU, ActMnu.FOCUS_MENU, ActMnu.YIELD_MENU, ActMnu.GEOJSON_MENU]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActSpc.UPDATE_SPACE:
      await updateSpace(ste)
      break;

    case ActMnu.GEOJSON_MENU:
      bit = await ste.hunt(ActMnu.GEOJSON_MENU, {})
      break;


    case ActMnu.HEXMAP_MENU:
      bit = await ste.hunt(ActMnu.HEXMAP_MENU, {})
      break;

    case ActMnu.MAPRPG_MENU:
      
      bit = await ste.hunt(ActMnu.MAPRPG_MENU, {})
      break;

    case ActMnu.FOCUS_MENU:
      bit = await ste.hunt(ActMnu.FOCUS_MENU, {})
      break;


    case ActMnu.YIELD_MENU:
      bit = await ste.hunt(ActMnu.YIELD_MENU, {})
      break;


    //   case ActPvt.CLOUD_PIVOT:
    //     bit = await ste.hunt(ActPvt.CLOUD_PIVOT, {})
    //     break;

    //  case ActMnu.YIELD_MENU:
    //    bit = await ste.hunt(ActMnu.YIELD_MENU, {})
    //    break;

    //  case ActFoc.MODEL_FOCUS:

    //    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "MODEL FOCUS...", bit: 'local' })
    //    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })

    //   bit = await ste.hunt(ActFoc.MODEL_FOCUS, {})
    //   break;


    // case ActPvt.EDIT_PIVOT:

    //   bit = await ste.hunt(ActPvt.EDIT_PIVOT, {})
    //   bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "PATCHING...", bit: 'local' })
    //   bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------", bit: "local" })
    //   lst = [ActSpc.PATCH_SPACE]
    //   bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })
    //   bit = await ste.hunt(ActPvt.PATCH_PIVOT, {})
    //   break;




    case ActPvt.UPDATE_PIVOT:
      bit = await ste.hunt(ActPvt.UPDATE_PIVOT, {})
      break;

    case ActSpc.MERGE_SPACE:
      bit = await ste.hunt(ActSpc.MERGE_SPACE, {})
      lst = bit.spcBit.lst

      bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---merging...", val: 2, bit: "local" })

      lst.forEach(async (a) => {
        bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "---" + a, val: 2, bit: "local" })
      })

      break;

    case ActPvt.OPEN_PIVOT:
      bit = await ste.hunt(ActPvt.OPEN_PIVOT, {})
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

  updateMenu(cpy, bal, ste);

  //var lst = [ ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, ActMnu.YIELD_MENU, ActMnu.RENDER_MENU]
  //lst.push(ActFoc.MODEL_FOCUS)

  //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst })

  // bit = bit.trmBit;
  // var idx = lst[bit.val];


  //updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.bus(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  //ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var updateSpace = async (ste) => {

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating space....' })

  var bitUp = await ste.hunt(ActSpc.UPDATE_SPACE, {})
  bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp)

}

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

