"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./focus.action");
const focus_model_1 = require("./focus.model");
const Buzz = require("./focus.buzzer");
function reducer(model = new focus_model_1.FocusModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_FOCUS:
            return Buzz.updateFocus(clone(model), act.bale, state);
        case Act.AWAKE_FOCUS:
            return Buzz.awakeFocus(clone(model), act.bale, state);
        case Act.OPEN_FOCUS:
            return Buzz.openFocus(clone(model), act.bale, state);
        case Act.CREATE_FOCUS:
            return Buzz.createFocus(clone(model), act.bale, state);
        case Act.INIT_FOCUS:
            return Buzz.initFocus(clone(model), act.bale, state);
        case Act.READ_FOCUS:
            return Buzz.readFocus(clone(model), act.bale, state);
        case Act.WRITE_FOCUS:
            return Buzz.writeFocus(clone(model), act.bale, state);
        case Act.REMOVE_FOCUS:
            return Buzz.removeFocus(clone(model), act.bale, state);
        case Act.DELETE_FOCUS:
            return Buzz.deleteFocus(clone(model), act.bale, state);
        case Act.CORNER_FOCUS:
            return Buzz.cornerFocus(clone(model), act.bale, state);
        case Act.LIST_FOCUS:
            return Buzz.listFocus(clone(model), act.bale, state);
        case Act.SPIN_LEFT_FOCUS:
            return Buzz.spinLeftFocus(clone(model), act.bale, state);
        case Act.SPIN_RIGHT_FOCUS:
            return Buzz.spinRightFocus(clone(model), act.bale, state);
        case Act.FORWARD_FOCUS:
            return Buzz.forwardFocus(clone(model), act.bale, state);
        case Act.BACKWARD_FOCUS:
            return Buzz.backwardFocus(clone(model), act.bale, state);
        case Act.CENTER_FOCUS:
            return Buzz.centerFocus(clone(model), act.bale, state);
        case Act.BOND_FOCUS:
            return Buzz.bondFocus(clone(model), act.bale, state);
        case Act.LOCATE_FOCUS:
            return Buzz.locateFocus(clone(model), act.bale, state);
        case Act.VISION_FOCUS:
            return Buzz.visionFocus(clone(model), act.bale, state);
        case Act.SELECT_FOCUS:
            return Buzz.selectFocus(clone(model), act.bale, state);
        case Act.MODEL_FOCUS:
            return Buzz.modelFocus(clone(model), act.bale, state);
        case Act.BROWNIAN_FOCUS:
            return Buzz.brownianFocus(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=focus.reduce.js.map