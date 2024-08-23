"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHexmap = exports.ADD_HEXMAP = exports.SelectHexmap = exports.SELECT_HEXMAP = exports.DefocusHexmap = exports.DEFOCUS_HEXMAP = exports.FocusingHexmap = exports.FOCUSING_HEXMAP = exports.SeekHexmap = exports.SEEK_HEXMAP = exports.NameHexmap = exports.NAME_HEXMAP = exports.ReplaceHexmap = exports.REPLACE_HEXMAP = exports.ListHexmap = exports.LIST_HEXMAP = exports.LoadHexmap = exports.LOAD_HEXMAP = exports.ShapeHexmap = exports.SHAPE_HEXMAP = exports.StoreHexmap = exports.STORE_HEXMAP = exports.SaveHexmap = exports.SAVE_HEXMAP = exports.ToolHexmap = exports.TOOL_HEXMAP = exports.GeojsonHexmap = exports.GEOJSON_HEXMAP = exports.AtlasHexmap = exports.ATLAS_HEXMAP = exports.CopyHexmap = exports.COPY_HEXMAP = exports.CreateHexmap = exports.CREATE_HEXMAP = exports.WriteHexmap = exports.WRITE_HEXMAP = exports.ReadHexmap = exports.READ_HEXMAP = exports.OpenHexmap = exports.OPEN_HEXMAP = exports.UpdateHexmap = exports.UPDATE_HEXMAP = exports.InitHexmap = exports.INIT_HEXMAP = void 0;
// Hexmap actions
exports.INIT_HEXMAP = "[Hexmap action] Init Hexmap";
class InitHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_HEXMAP;
    }
}
exports.InitHexmap = InitHexmap;
exports.UPDATE_HEXMAP = "[Hexmap action] Update Hexmap";
class UpdateHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_HEXMAP;
    }
}
exports.UpdateHexmap = UpdateHexmap;
exports.OPEN_HEXMAP = "[Hexmap action] Open Hexmap";
class OpenHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_HEXMAP;
    }
}
exports.OpenHexmap = OpenHexmap;
exports.READ_HEXMAP = "[Read action] Read Hexmap";
class ReadHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_HEXMAP;
    }
}
exports.ReadHexmap = ReadHexmap;
exports.WRITE_HEXMAP = "[Write action] Write Hexmap";
class WriteHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_HEXMAP;
    }
}
exports.WriteHexmap = WriteHexmap;
exports.CREATE_HEXMAP = "[Create action] Create Hexmap";
class CreateHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_HEXMAP;
    }
}
exports.CreateHexmap = CreateHexmap;
exports.COPY_HEXMAP = "[Copy action] Copy Hexmap";
class CopyHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COPY_HEXMAP;
    }
}
exports.CopyHexmap = CopyHexmap;
exports.ATLAS_HEXMAP = "[Atlas action] Atlas Hexmap";
class AtlasHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ATLAS_HEXMAP;
    }
}
exports.AtlasHexmap = AtlasHexmap;
exports.GEOJSON_HEXMAP = "[Geojson action] Geojson Hexmap";
class GeojsonHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.GEOJSON_HEXMAP;
    }
}
exports.GeojsonHexmap = GeojsonHexmap;
exports.TOOL_HEXMAP = "[Tool action] Tool Hexmap";
class ToolHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TOOL_HEXMAP;
    }
}
exports.ToolHexmap = ToolHexmap;
exports.SAVE_HEXMAP = "[Save action] Save Hexmap";
class SaveHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SAVE_HEXMAP;
    }
}
exports.SaveHexmap = SaveHexmap;
exports.STORE_HEXMAP = "[Store action] Store Hexmap";
class StoreHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.STORE_HEXMAP;
    }
}
exports.StoreHexmap = StoreHexmap;
exports.SHAPE_HEXMAP = "[Shape action] Shape Hexmap";
class ShapeHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SHAPE_HEXMAP;
    }
}
exports.ShapeHexmap = ShapeHexmap;
exports.LOAD_HEXMAP = "[Load action] Load Hexmap";
class LoadHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_HEXMAP;
    }
}
exports.LoadHexmap = LoadHexmap;
exports.LIST_HEXMAP = "[List action] List Hexmap";
class ListHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_HEXMAP;
    }
}
exports.ListHexmap = ListHexmap;
exports.REPLACE_HEXMAP = "[Replace action] Replace Hexmap";
class ReplaceHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REPLACE_HEXMAP;
    }
}
exports.ReplaceHexmap = ReplaceHexmap;
exports.NAME_HEXMAP = "[Name action] Name Hexmap";
class NameHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.NAME_HEXMAP;
    }
}
exports.NameHexmap = NameHexmap;
exports.SEEK_HEXMAP = "[Seek action] Seek Hexmap";
class SeekHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SEEK_HEXMAP;
    }
}
exports.SeekHexmap = SeekHexmap;
exports.FOCUSING_HEXMAP = "[Focusing action] Focusing Hexmap";
class FocusingHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FOCUSING_HEXMAP;
    }
}
exports.FocusingHexmap = FocusingHexmap;
exports.DEFOCUS_HEXMAP = "[Defocus action] Defocus Hexmap";
class DefocusHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DEFOCUS_HEXMAP;
    }
}
exports.DefocusHexmap = DefocusHexmap;
exports.SELECT_HEXMAP = "[Select action] Select Hexmap";
class SelectHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SELECT_HEXMAP;
    }
}
exports.SelectHexmap = SelectHexmap;
exports.ADD_HEXMAP = "[Select action] Add Hexmap";
class AddHexmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ADD_HEXMAP;
    }
}
exports.AddHexmap = AddHexmap;
//# sourceMappingURL=hexmap.action.js.map