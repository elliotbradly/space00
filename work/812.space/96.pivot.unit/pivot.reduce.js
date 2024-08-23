"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./pivot.action");
const pivot_model_1 = require("./pivot.model");
const Buzz = require("./pivot.buzzer");
function reducer(model = new pivot_model_1.PivotModel(), act, state) {
    switch (act.type) {
        case Act.OPEN_PIVOT:
            return Buzz.openPivot(clone(model), act.bale, state);
        case Act.RUN_PIVOT:
            return Buzz.runPivot(clone(model), act.bale, state);
        case Act.EDIT_PIVOT:
            return Buzz.runPivot(clone(model), act.bale, state);
        case Act.PATCH_PIVOT:
            return Buzz.patchPivot(clone(model), act.bale, state);
        case Act.UPDATE_PIVOT:
            return Buzz.updatePivot(clone(model), act.bale, state);
        case Act.CLOUD_PIVOT:
            return Buzz.cloudPivot(clone(model), act.bale, state);
        case Act.INIT_PIVOT:
            return Buzz.initPivot(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=pivot.reduce.js.map