"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadMaprpg = exports.LOAD_MAPRPG = exports.CreateMaprpg = exports.CREATE_MAPRPG = exports.DeleteMaprpg = exports.DELETE_MAPRPG = exports.RemoveMaprpg = exports.REMOVE_MAPRPG = exports.ReadMaprpg = exports.READ_MAPRPG = exports.WriteMaprpg = exports.WRITE_MAPRPG = exports.UpdateMaprpg = exports.UPDATE_MAPRPG = exports.InitMaprpg = exports.INIT_MAPRPG = void 0;
// Maprpg actions
exports.INIT_MAPRPG = "[Maprpg action] Init Maprpg";
class InitMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_MAPRPG;
    }
}
exports.InitMaprpg = InitMaprpg;
exports.UPDATE_MAPRPG = "[Maprpg action] Update Maprpg";
class UpdateMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_MAPRPG;
    }
}
exports.UpdateMaprpg = UpdateMaprpg;
exports.WRITE_MAPRPG = "[Write action] Write Maprpg";
class WriteMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_MAPRPG;
    }
}
exports.WriteMaprpg = WriteMaprpg;
exports.READ_MAPRPG = "[Read action] Read Maprpg";
class ReadMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_MAPRPG;
    }
}
exports.ReadMaprpg = ReadMaprpg;
exports.REMOVE_MAPRPG = "[Remove action] Remove Maprpg";
class RemoveMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_MAPRPG;
    }
}
exports.RemoveMaprpg = RemoveMaprpg;
exports.DELETE_MAPRPG = "[Delete action] Delete Maprpg";
class DeleteMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_MAPRPG;
    }
}
exports.DeleteMaprpg = DeleteMaprpg;
exports.CREATE_MAPRPG = "[Create action] Create Maprpg";
class CreateMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_MAPRPG;
    }
}
exports.CreateMaprpg = CreateMaprpg;
exports.LOAD_MAPRPG = "[Load action] Load Maprpg";
class LoadMaprpg {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_MAPRPG;
    }
}
exports.LoadMaprpg = LoadMaprpg;
//# sourceMappingURL=maprpg.action.js.map