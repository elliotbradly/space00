import { Action } from "../99.core/interface/action.interface";
import  MaprpgBit  from "./fce/maprpg.bit";

// Maprpg actions

export const INIT_MAPRPG = "[Maprpg action] Init Maprpg";
export class InitMaprpg implements Action {
 readonly type = INIT_MAPRPG;
 constructor(public bale: MaprpgBit) {}
}

export const UPDATE_MAPRPG = "[Maprpg action] Update Maprpg";
export class UpdateMaprpg implements Action {
 readonly type = UPDATE_MAPRPG;
 constructor(public bale: MaprpgBit) {}
}

export const WRITE_MAPRPG = "[Write action] Write Maprpg";
 export class WriteMaprpg implements Action {
 readonly type = WRITE_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export const READ_MAPRPG = "[Read action] Read Maprpg";
 export class ReadMaprpg implements Action {
 readonly type = READ_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export const REMOVE_MAPRPG = "[Remove action] Remove Maprpg";
 export class RemoveMaprpg implements Action {
 readonly type = REMOVE_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export const DELETE_MAPRPG = "[Delete action] Delete Maprpg";
 export class DeleteMaprpg implements Action {
 readonly type = DELETE_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export const CREATE_MAPRPG = "[Create action] Create Maprpg";
 export class CreateMaprpg implements Action {
 readonly type = CREATE_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export const LOAD_MAPRPG = "[Load action] Load Maprpg";
 export class LoadMaprpg implements Action {
 readonly type = LOAD_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export const ORIGIN_MAPRPG = "[Origin action] Origin Maprpg";
 export class OriginMaprpg implements Action {
 readonly type = ORIGIN_MAPRPG;
 constructor(public bale: MaprpgBit) {}
 }
 
export type Actions = | InitMaprpg | UpdateMaprpg 
| WriteMaprpg
| ReadMaprpg
| RemoveMaprpg
| DeleteMaprpg
| CreateMaprpg
| LoadMaprpg
| OriginMaprpg