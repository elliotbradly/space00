import * as ActMnu from "../menu.action";
import * as ActSpc from "../../00.space.unit/space.action";
import * as ActFoc from "../../01.focus.unit/focus.action";
import * as ActMap from "../../03.hexmap.unit/hexmap.action";
import * as ActGeo from "../../02.geojson.unit/geojson.action";

import * as ActPut from "../../act/input.action";
import * as ActChc from "../../act/choice.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";
import * as ActGrd from "../../act/grid.action";

import * as ActTrm from "../../act/terminal.action";

var bit, lst, dex, idx, dat, src;

var playIDX = ''

export const geojsonMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Geojson Menu" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  lst = [ActGeo.CAPTURE_GEOJSON, ActGeo.SAVE_GEOJSON, ActMnu.UPDATE_MENU]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
  src = bit.chcBit.src;

  switch (src) {

    case ActGeo.CAPTURE_GEOJSON:

      var geoMod: GeojsonModel = ste.value.geojson;
      lst = geoMod.captureLocationList;

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 })
      bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      src = bit.chcBit.src;

      bit = await ste.hunt(ActGeo.CAPTURE_GEOJSON, { src })
      break


    case ActGeo.SAVE_GEOJSON:

      bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 })
      bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'label geojson', net: bit.grdBit.dat })
      src = bit.putBit.src
      bit = await ste.hunt(ActGeo.SAVE_GEOJSON, { src })
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'saving..' + bit.geoBit.src })
      break


    case ActMnu.UPDATE_MENU:

      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      break

  }


  bit = await ste.hunt(ActMnu.GEOJSON_MENU, {})

}

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
import { FocusModel } from "812.space/01.focus.unit/focus.model";
import SpotBit from "812.space/01.focus.unit/fce/spot.bit";

import * as Color from '../../val/console-color';
import * as Align from '../../val/align';

import * as FOCUS from '../../val/focus'
import { GeojsonModel } from "812.space/02.geojson.unit/geojson.model";

