"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./geojson.action");
const geojson_model_1 = require("./geojson.model");
const Buzz = require("./geojson.buzzer");
function reducer(model = new geojson_model_1.GeojsonModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GEOJSON:
            return Buzz.updateGeojson(clone(model), act.bale, state);
        case Act.INIT_GEOJSON:
            return Buzz.initGeojson(clone(model), act.bale, state);
        case Act.LOAD_GEOJSON:
            return Buzz.loadGeojson(clone(model), act.bale, state);
        case Act.INDEX_GEOJSON:
            return Buzz.indexGeojson(clone(model), act.bale, state);
        case Act.CAPTURE_GEOJSON:
            return Buzz.captureGeojson(clone(model), act.bale, state);
        case Act.SAVE_GEOJSON:
            return Buzz.saveGeojson(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=geojson.reduce.js.map