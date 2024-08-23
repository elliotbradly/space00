import { Action } from "../00.core/interface/action.interface";
import HexmapBit from "./fce/hexmap.bit";

// Hexmap actions
export const SELECT_HEXMAP = "[Hex action] Select Hex";
export class SelectHexmap implements Action {
  readonly type = SELECT_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const OPEN_HEXMAP = "[Hexmap action] Open Hexmap";
export class OpenHexmap implements Action {
  readonly type = OPEN_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const LOAD_HEXMAP = "[Hexmap action] Load Hexmap";
export class LoadHexmap implements Action {
  readonly type = LOAD_HEXMAP;
  constructor(public bale: HexmapBit) { }
}


export const INIT_HEXMAP = "[Hexmap action] Init Hexmap";
export class InitHexmap implements Action {
  readonly type = INIT_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const FETCH_HEXMAP = "[Hexmap action] Fetch Hexmap";
export class FetchHexmap implements Action {
  readonly type = FETCH_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const UPDATE_HEXMAP = "[Hexmap action] Update Hexmap";
export class UpdateHexmap implements Action {
  readonly type = UPDATE_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const OPEN_HEXDATA = "[Hexmap action] Open Hexdata";
export class OpenHexdata implements Action {
  readonly type = OPEN_HEXDATA;
  constructor(public bale: HexmapBit) { }
}

export const UPDATE_HEXDATA = "[Hexmap action] Update Hexdata";
export class UpdateHexdata implements Action {
  readonly type = UPDATE_HEXDATA;
  constructor(public bale: HexmapBit) { }
}

export const ADD_HEXMAP = "[Hexmap action] Add Hexmap";
export class AddHexmap implements Action {
  readonly type = ADD_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export const READ_HEXMAP = "[Hexmap action] Read Hexmap";
export class ReadHexmap implements Action {
  readonly type = READ_HEXMAP;
  constructor(public bale: HexmapBit) { }
}

export type Actions = SelectHexmap | InitHexmap | UpdateHexmap | AddHexmap | OpenHexdata | UpdateHexdata | ReadHexmap | FetchHexmap | OpenHexmap | LoadHexmap
  ;
