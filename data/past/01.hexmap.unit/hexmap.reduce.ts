import * as clone from "clone-deep";
import * as Act from "./hexmap.action";
import { HexmapModel } from "./mod/hexmap.model";
import * as Buzz from "./hexmap.buzzer";
import State from "../00.core/state";

export function reducer(model: HexmapModel = new HexmapModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.UPDATE_HEXMAP:
      return Buzz.updateHexmap(clone(model), act.bale, state);

    case Act.LOAD_HEXMAP:
      return Buzz.loadHexmap(clone(model), act.bale, state);

    case Act.FETCH_HEXMAP:
      return Buzz.fetchHexmap(clone(model), act.bale, state);

    case Act.SELECT_HEXMAP:
      return Buzz.selectHexmap(clone(model), act.bale, state);

    case Act.UPDATE_HEXDATA:
      return Buzz.updateHexdata(clone(model), act.bale, state);

    case Act.ADD_HEXMAP:
      return Buzz.addHexMap(clone(model), act.bale, state);

    case Act.INIT_HEXMAP:
      return Buzz.initHexmap(clone(model), act.bale, state);

    case Act.OPEN_HEXDATA:
      return Buzz.openHexdata(clone(model), act.bale, state);

    case Act.READ_HEXMAP:
      return Buzz.readHexmap(clone(model), act.bale, state);

    case Act.OPEN_HEXMAP:
      return Buzz.openHexmap(clone(model), act.bale, state);

    default:
      return model;
  }
}
