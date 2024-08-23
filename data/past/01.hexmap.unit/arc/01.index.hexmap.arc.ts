import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../hexmap.action";
import HexmapBit from "../fce/hexmap.bit";

export default class IndexHexmapArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: HexmapBit) => this.path.move(this.state, Act.INIT_HEXMAP, dat);
  update = (dat: HexmapBit) => this.path.move(this.state, Act.UPDATE_HEXMAP, dat);
  add = (dat: HexmapBit) => this.path.move(this.state, Act.ADD_HEXMAP, dat);
  read = (dat: HexmapBit) => this.path.move(this.state, Act.READ_HEXMAP, dat);
  fetch = (dat: HexmapBit) => this.path.move(this.state, Act.FETCH_HEXMAP, dat);
}
