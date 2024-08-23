import * as clone from "clone-deep";
import * as Act from "./focus.action";
import { FocusModel } from "./focus.model";
import * as Buzz from "./focus.buzzer";
import State from "../00.core/state";

export function reducer(model: FocusModel = new FocusModel(), act: Act.Actions, state?: State) {
  switch (act.type) {
    case Act.INIT_FOCUS:
      return Buzz.initFocus(clone(model), act.bale, state);

    case Act.WRITE_FACE_FOCUS:
      return Buzz.writeFaceFocus(clone(model), act.bale, state);

    case Act.MOVE_FOWARD_FOCUS:
      return Buzz.moveForwardFocus(clone(model), act.bale, state);

    case Act.MOVE_BACKWARD_FOCUS:
      return Buzz.moveBackwardFocus(clone(model), act.bale, state);

    case Act.SPIN_RIGHT_FOCUS:
      return Buzz.spinRightFocus(clone(model), act.bale, state);

    case Act.SPIN_LEFT_FOCUS:
      return Buzz.spinLeftFocus(clone(model), act.bale, state);

    case Act.OPEN_FOCUS:
      return Buzz.openFocus(clone(model), act.bale, state);

    case Act.ADD_FOCUS:
      return Buzz.addFocus(clone(model), act.bale, state);

    case Act.UPDATE_FOCUS:
      return Buzz.updateFocus(clone(model), act.bale, state);

    case Act.RESIZE_FOCUS:
      return Buzz.resizeFocus(clone(model), act.bale, state);

    case Act.REPLACE_FOCUS:
      return Buzz.replaceFocus(clone(model), act.bale, state);

    case Act.CLOSE_FOCUS:
      return Buzz.closeFocus(clone(model), act.bale, state);

    case Act.READ_FOCUS:
      return Buzz.readFocus(clone(model), act.bale, state);

    case Act.LIST_VISON_FOCUS:
      return Buzz.listVisonFocus(clone(model), act.bale, state);

    default:
      return model;
  }
}
