"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./menu.action");
const menu_model_1 = require("./menu.model");
const Buzz = require("./menu.buzzer");
function reducer(model = new menu_model_1.MenuModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_MENU:
            return Buzz.updateMenu(clone(model), act.bale, state);
        case Act.INIT_MENU:
            return Buzz.initMenu(clone(model), act.bale, state);
        case Act.TEST_MENU:
            return Buzz.testMenu(clone(model), act.bale, state);
        case Act.CLOSE_MENU:
            return Buzz.closeMenu(clone(model), act.bale, state);
        case Act.FOCUS_MENU:
            return Buzz.focusMenu(clone(model), act.bale, state);
        case Act.CREATE_MENU:
            return Buzz.createMenu(clone(model), act.bale, state);
        case Act.HEXMAP_MENU:
            return Buzz.hexmapMenu(clone(model), act.bale, state);
        case Act.MAPRPG_MENU:
            return Buzz.maprpgMenu(clone(model), act.bale, state);
        case Act.CREATE_HEXMAP_MENU:
            return Buzz.createHexmapMenu(clone(model), act.bale, state);
        case Act.RENDER_MENU:
            return Buzz.renderMenu(clone(model), act.bale, state);
        case Act.YIELD_MENU:
            return Buzz.yieldMenu(clone(model), act.bale, state);
        case Act.FOCUS_PLAY_MENU:
            return Buzz.focusPlayMenu(clone(model), act.bale, state);
        case Act.UPDATE_FOCUS_PLAY_MENU:
            return Buzz.updateFocusPlayMenu(clone(model), act.bale, state);
        case Act.GEOJSON_MENU:
            return Buzz.geojsonMenu(clone(model), act.bale, state);
        case Act.PRINT_MENU:
            return Buzz.printMenu(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=menu.reduce.js.map