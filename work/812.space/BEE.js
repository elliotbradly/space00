"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const space_unit_1 = require("./00.space.unit/space.unit");
const focus_unit_1 = require("./01.focus.unit/focus.unit");
const geojson_unit_1 = require("./02.geojson.unit/geojson.unit");
const hexmap_unit_1 = require("./03.hexmap.unit/hexmap.unit");
const maprpg_unit_1 = require("./04.maprpg.unit/maprpg.unit");
const pivot_unit_1 = require("./96.pivot.unit/pivot.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const space_model_1 = require("./00.space.unit/space.model");
const focus_model_1 = require("./01.focus.unit/focus.model");
const geojson_model_1 = require("./02.geojson.unit/geojson.model");
const hexmap_model_1 = require("./03.hexmap.unit/hexmap.model");
const maprpg_model_1 = require("./04.maprpg.unit/maprpg.model");
const pivot_model_1 = require("./96.pivot.unit/pivot.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [space_unit_1.default, focus_unit_1.default, geojson_unit_1.default, hexmap_unit_1.default, maprpg_unit_1.default, pivot_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromSpace = require("./00.space.unit/space.reduce");
const reduceFromFocus = require("./01.focus.unit/focus.reduce");
const reduceFromGeojson = require("./02.geojson.unit/geojson.reduce");
const reduceFromHexmap = require("./03.hexmap.unit/hexmap.reduce");
const reduceFromMaprpg = require("./04.maprpg.unit/maprpg.reduce");
const reduceFromPivot = require("./96.pivot.unit/pivot.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    space: reduceFromSpace.reducer,
    focus: reduceFromFocus.reducer,
    geojson: reduceFromGeojson.reducer,
    hexmap: reduceFromHexmap.reducer,
    maprpg: reduceFromMaprpg.reducer,
    pivot: reduceFromPivot.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.space = new space_model_1.SpaceModel();
        this.focus = new focus_model_1.FocusModel();
        this.geojson = new geojson_model_1.GeojsonModel();
        this.hexmap = new hexmap_model_1.HexmapModel();
        this.maprpg = new maprpg_model_1.MaprpgModel();
        this.pivot = new pivot_model_1.PivotModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map