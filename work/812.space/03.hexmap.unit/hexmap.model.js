"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexmapModel = void 0;
class HexmapModel {
    constructor() {
        //idx:string;
        this.sizeNow = 0;
        this.mapNomNow = 'none';
        this.platBits = {};
        this.hexmapLoc = './data/hexmap/';
        //legacy  
        this.hexmapBitList = [];
        this.hexmapBits = {};
        this.hc = {
            hexFactoryList: [],
            hexFactories: {},
            gridFactoryList: [],
            gridFactories: {},
            gridList: [],
            grids: {},
            hexList: [],
            hexs: {},
        };
        this.dex = 0;
        this.count = 0;
    }
}
exports.HexmapModel = HexmapModel;
//# sourceMappingURL=hexmap.model.js.map