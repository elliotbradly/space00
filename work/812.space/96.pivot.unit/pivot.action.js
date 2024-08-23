"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudPivot = exports.CLOUD_PIVOT = exports.PatchPivot = exports.PATCH_PIVOT = exports.EditPivot = exports.EDIT_PIVOT = exports.RunPivot = exports.RUN_PIVOT = exports.OpenPivot = exports.OPEN_PIVOT = exports.UpdatePivot = exports.UPDATE_PIVOT = exports.InitPivot = exports.INIT_PIVOT = void 0;
// Pivot actions
exports.INIT_PIVOT = "[Pivot action] Init Pivot";
class InitPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PIVOT;
    }
}
exports.InitPivot = InitPivot;
exports.UPDATE_PIVOT = "[Pivot action] Update Pivot";
class UpdatePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PIVOT;
    }
}
exports.UpdatePivot = UpdatePivot;
exports.OPEN_PIVOT = "[Pivot action] Open Pivot";
class OpenPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_PIVOT;
    }
}
exports.OpenPivot = OpenPivot;
exports.RUN_PIVOT = "[Pivot action] Run Pivot";
class RunPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_PIVOT;
    }
}
exports.RunPivot = RunPivot;
exports.EDIT_PIVOT = "[Pivot action] Edit Pivot";
class EditPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_PIVOT;
    }
}
exports.EditPivot = EditPivot;
exports.PATCH_PIVOT = "[Pivot action] Patch Pivot";
class PatchPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_PIVOT;
    }
}
exports.PatchPivot = PatchPivot;
exports.CLOUD_PIVOT = "[Pivot action] Cloud Pivot";
class CloudPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOUD_PIVOT;
    }
}
exports.CloudPivot = CloudPivot;
//# sourceMappingURL=pivot.action.js.map