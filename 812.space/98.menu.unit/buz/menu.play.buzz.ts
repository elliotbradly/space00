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

var bit, lst, dex, idx, dat, src;

var playIDX = ''

export const updateFocusPlayMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: playIDX })

  var spot: SpotBit = bit.focBit.dat;

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'focus ' + spot.idx })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'face ' + spot.face })
  
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: spot.x + ' ::::: ' + spot.y })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'corners:' + JSON.stringify(spot.corners) })


  //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit.focBit.dat) })

  lst = [ActFoc.FORWARD_FOCUS, ActFoc.BACKWARD_FOCUS, ActFoc.SPIN_RIGHT_FOCUS, ActFoc.SPIN_LEFT_FOCUS,  ActFoc.BROWNIAN_FOCUS]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
  src = bit.chcBit.src;

  switch (src) {

    case ActFoc.FORWARD_FOCUS:
      bit = await ste.hunt(ActFoc.FORWARD_FOCUS, { idx: playIDX })
      var spot: SpotBit = bit.focBit.dat
      // debugger
      bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})
      break

    case ActFoc.BROWNIAN_FOCUS:
      bit = await ste.hunt(ActFoc.BROWNIAN_FOCUS, { idx: playIDX })
      bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})
      break

    case ActFoc.SPIN_RIGHT_FOCUS:
      bit = await ste.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: playIDX })
      bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})
      break

    case ActFoc.SPIN_LEFT_FOCUS:
      bit = await ste.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: playIDX })
      bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})
      break

    case ActFoc.BACKWARD_FOCUS:
      bit = await ste.hunt(ActFoc.BACKWARD_FOCUS, { idx: playIDX })
      bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})
      break

  }


  bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})

}

export const focusPlayMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var focMod: FocusModel = ste.value.focus;

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Play Menu" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  bit = await ste.hunt(ActFoc.LIST_FOCUS, { src: FOCUS.AVAS })
  lst = bit.focBit.lst

  lst.forEach((a, b) => {
    lst[b] = JSON.stringify(a)
  })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  var pistol = JSON.parse(src)

  playIDX = pistol.idx

  bit = await ste.hunt(ActMnu.UPDATE_FOCUS_PLAY_MENU, {})

  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { FocusModel } from "812.space/01.focus.unit/focus.model";
import SpotBit from "812.space/01.focus.unit/fce/spot.bit";

import * as Color from '../../val/console-color';
import * as Align from '../../val/align';

import * as FOCUS from '../../val/focus'
