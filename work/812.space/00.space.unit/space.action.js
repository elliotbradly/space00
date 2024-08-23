"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchSpace = exports.BATCH_SPACE = exports.CloudSpace = exports.CLOUD_SPACE = exports.TestSpace = exports.TEST_SPACE = exports.MergeSpace = exports.MERGE_SPACE = exports.PatchSpace = exports.PATCH_SPACE = exports.RunSpace = exports.RUN_SPACE = exports.OpenSpace = exports.OPEN_SPACE = exports.EditSpace = exports.EDIT_SPACE = exports.ReadySpace = exports.READY_SPACE = exports.UpdateSpace = exports.UPDATE_SPACE = exports.InitSpace = exports.INIT_SPACE = void 0;
// Space actions
exports.INIT_SPACE = "[Space action] Init Space";
class InitSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SPACE;
    }
}
exports.InitSpace = InitSpace;
exports.UPDATE_SPACE = "[Space action] Update Space";
class UpdateSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SPACE;
    }
}
exports.UpdateSpace = UpdateSpace;
exports.READY_SPACE = "[Ready action] Ready Space";
class ReadySpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READY_SPACE;
    }
}
exports.ReadySpace = ReadySpace;
exports.EDIT_SPACE = "[Edit action] Edit Space";
class EditSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EDIT_SPACE;
    }
}
exports.EditSpace = EditSpace;
exports.OPEN_SPACE = "[Open action] Open Space";
class OpenSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_SPACE;
    }
}
exports.OpenSpace = OpenSpace;
exports.RUN_SPACE = "[Run action] Run Space";
class RunSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RUN_SPACE;
    }
}
exports.RunSpace = RunSpace;
exports.PATCH_SPACE = "[Patch action] Patch Space";
class PatchSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PATCH_SPACE;
    }
}
exports.PatchSpace = PatchSpace;
exports.MERGE_SPACE = "[Merge action] Merge Space";
class MergeSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MERGE_SPACE;
    }
}
exports.MergeSpace = MergeSpace;
exports.TEST_SPACE = "[Test action] Test Space";
class TestSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_SPACE;
    }
}
exports.TestSpace = TestSpace;
exports.CLOUD_SPACE = "[Cloud action] Cloud Space";
class CloudSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOUD_SPACE;
    }
}
exports.CloudSpace = CloudSpace;
exports.BATCH_SPACE = "[Cloud action] Batch Space";
class BatchSpace {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BATCH_SPACE;
    }
}
exports.BatchSpace = BatchSpace;
//# sourceMappingURL=space.action.js.map