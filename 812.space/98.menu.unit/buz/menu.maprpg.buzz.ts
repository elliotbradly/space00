import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActMpr from "../../04.maprpg.unit/maprpg.action";

import * as ActPut from "../../act/input.action";
import * as ActChc from "../../act/choice.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";
import * as ActGrd from "../../act/grid.action";
import * as ActDsk from "../../act/disk.action"

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex, idx, dat, src;

export const maprpgMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "MapRPG Menu" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  lst = [ActMpr.LOAD_MAPRPG, ActMpr.WRITE_MAPRPG, ActMnu.UPDATE_MENU]


  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
  src = bit.chcBit.src;



  switch (src) {

    case ActMpr.LOAD_MAPRPG:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/maprpg/' });
      lst = bit.dskBit.lst;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;
      bit = await ste.hunt(ActMpr.LOAD_MAPRPG, { src })

      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Loaded.. " + bit.mprBit.src })
  
      //bit = await ste.hunt(ActMnu.PRINT_MENU, bit.mprBit.src)
      break


    case ActMpr.WRITE_MAPRPG:


      bit = await ste.hunt(ActMpr.WRITE_MAPRPG, { src })
      break


    case ActMnu.UPDATE_MENU:

      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      break

  }

  bit = await ste.hunt(ActMnu.MAPRPG_MENU, {})
  cpy
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { HexmapModel } from "812.space/03.hexmap.unit/hexmap.model";

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as Color from '../../val/console-color';
import * as Align from '../../val/align';