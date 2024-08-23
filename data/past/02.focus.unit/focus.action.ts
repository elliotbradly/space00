import { Action } from "../00.core/interface/action.interface";
import FocusUpdateBit from "./fce/focus-update.bit.interface";
import FocusBit from "./fce/focus.bit";

//focus
export const WRITE_FACE_FOCUS = "[Focus action] Writeface Focus";
export class WriteFaceFocus implements Action {
  readonly type = WRITE_FACE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const ADD_FOCUS = "[Focus action] Add Focus";
export class AddFocus implements Action {
  readonly type = ADD_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const MOVE_FOWARD_FOCUS = "[Focus action] Move Forward Focus";
export class MoveForwardFocus implements Action {
  readonly type = MOVE_FOWARD_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const MOVE_BACKWARD_FOCUS = "[Focus action] Move Backward Focus";
export class MoveBackwardFocus implements Action {
  readonly type = MOVE_BACKWARD_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const SPIN_RIGHT_FOCUS = "[Focus action] Spin Right Focus";
export class SpinRightFocus implements Action {
  readonly type = SPIN_RIGHT_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const SPIN_LEFT_FOCUS = "[Focus action] Spin Left Focus";
export class SpinLeftFocus implements Action {
  readonly type = SPIN_LEFT_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const LIST_VISON_FOCUS = "[Focus action] List Vison Focus";
export class ListVisonFocus implements Action {
  readonly type = LIST_VISON_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const INIT_FOCUS = "[Focus action] Init Focus";
export class InitFocus implements Action {
  readonly type = INIT_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const OPEN_FOCUS = "[Focus action] Open Focus";
export class OpenFocus implements Action {
  readonly type = OPEN_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const UPDATE_FOCUS = "[Focus action] Update Focus";
export class UpdateFocus implements Action {
  readonly type = UPDATE_FOCUS;
  constructor(public bale: FocusUpdateBit) {}
}

export const RESIZE_FOCUS = "[Focus action] Resize Focus";
export class ResizeFocus implements Action {
  readonly type = RESIZE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const REPLACE_FOCUS = "[Focus action] Replace Focus";
export class ReplaceFocus implements Action {
  readonly type = REPLACE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const CLOSE_FOCUS = "[Focus action] Close Focus";
export class CloseFocus implements Action {
  readonly type = CLOSE_FOCUS;
  constructor(public bale: FocusBit) {}
}

export const READ_FOCUS = "[Focus action] Read Focus";
export class ReadFocus implements Action {
  readonly type = READ_FOCUS;
  constructor(public bale: FocusBit) {}
}

export type Actions =
  | InitFocus
  | OpenFocus
  | UpdateFocus
  | WriteFaceFocus
  | ResizeFocus
  | ReplaceFocus
  | CloseFocus
  | ReadFocus
  | ListVisonFocus
  | AddFocus
  | MoveForwardFocus
  | SpinRightFocus
  | SpinLeftFocus
  | MoveBackwardFocus; //focus
