import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../hexmap.action";
import HexmapBit from "../fce/hexmap.bit";

export default class HexcodeHexmapArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  open = (dat: HexmapBit) => this.path.move(this.state, Act.OPEN_HEXDATA, dat);
  update = (dat: HexmapBit) =>
    this.path.move(this.state, Act.UPDATE_HEXDATA, dat);
}
