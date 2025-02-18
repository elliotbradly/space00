import * as clone from "clone-deep";
import * as Act from "./maprpg.action";
import { MaprpgModel } from "./maprpg.model";
import * as Buzz from "./maprpg.buzzer";
import State from "../99.core/state";

export function reducer(model: MaprpgModel = new MaprpgModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_MAPRPG:
 return Buzz.updateMaprpg(clone(model), act.bale, state);

 case Act.INIT_MAPRPG:
 return Buzz.initMaprpg(clone(model), act.bale, state);

case Act.WRITE_MAPRPG:
 return Buzz.writeMaprpg(clone(model), act.bale, state);
 
case Act.READ_MAPRPG:
 return Buzz.readMaprpg(clone(model), act.bale, state);
 
case Act.REMOVE_MAPRPG:
 return Buzz.removeMaprpg(clone(model), act.bale, state);
 
case Act.DELETE_MAPRPG:
 return Buzz.deleteMaprpg(clone(model), act.bale, state);
 
case Act.CREATE_MAPRPG:
 return Buzz.createMaprpg(clone(model), act.bale, state);
 
case Act.LOAD_MAPRPG:
 return Buzz.loadMaprpg(clone(model), act.bale, state);
 
case Act.ORIGIN_MAPRPG:
 return Buzz.originMaprpg(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
