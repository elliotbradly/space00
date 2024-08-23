import Arc from "../../00.core/form/arc.form";
import State from "../../00.core/state";
import PathProcess from "../../00.core/title/prc/path.process";
import { Inject } from "typescript-ioc";

import * as Act from "../focus.action";
import FocusBit from "../fce/focus.bit";

export default class IndexFocusArc extends Arc {
  @Inject private path: PathProcess;

  constructor(private state: State) {
    super(state);
  }

  init = (dat: FocusBit) => this.path.move(this.state, Act.INIT_FOCUS, dat);
  update = (dat: FocusBit) => this.path.move(this.state, Act.UPDATE_FOCUS, dat);
  open = (dat: FocusBit) => this.path.move(this.state, Act.OPEN_FOCUS, dat);
  read = (dat: FocusBit) => this.path.move(this.state, Act.READ_FOCUS, dat);
}
