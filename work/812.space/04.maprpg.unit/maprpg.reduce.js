"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./maprpg.action");
const maprpg_model_1 = require("./maprpg.model");
const Buzz = require("./maprpg.buzzer");
function reducer(model = new maprpg_model_1.MaprpgModel(), act, state) {
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
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=maprpg.reduce.js.map