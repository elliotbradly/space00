import HoneycombCollection from "./fce/honeycomb-collection.bit";
import Hexmap from "./fce/Hexmap.interface";
import HexmapBit from "./fce/hexmap.bit";

export class HexmapModel implements Hexmap {
  hexData: any = {
    'florida': require("../../../data/space/00000.florida.json"),
    'janky': require("../../../data/space/00001.janky-apartment.json")
  }
  //hexmapSrcLst = require("../../../index/dat/hexmap.json");
  loadHex: any;

  readHexmap: HexmapBit;

  currentSrc: string;
  currentMap: any;
  currentGrid: any;
  currentCord: any;

  readMap: HexmapBit;
  readGrid: any;

  hexBitList: HexmapBit[] = [];
  hexBits: any = {};
  count: number = 0;
  scale: number = -1;
  idxMap: string = "xxx";

  hc: HoneycombCollection = {
    hexFactoryList: [],
    hexFactories: {},

    gridFactoryList: [],
    gridFactories: {},

    gridList: [],
    grids: {},

    hexList: [],
    hexs: {},
  };

  test: any;
}
