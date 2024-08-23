"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrownianFocus = exports.BROWNIAN_FOCUS = exports.ModelFocus = exports.MODEL_FOCUS = exports.SelectFocus = exports.SELECT_FOCUS = exports.VisionFocus = exports.VISION_FOCUS = exports.LocateFocus = exports.LOCATE_FOCUS = exports.BondFocus = exports.BOND_FOCUS = exports.CenterFocus = exports.CENTER_FOCUS = exports.BackwardFocus = exports.BACKWARD_FOCUS = exports.ForwardFocus = exports.FORWARD_FOCUS = exports.SpinLeftFocus = exports.SPIN_LEFT_FOCUS = exports.SpinRightFocus = exports.SPIN_RIGHT_FOCUS = exports.ListFocus = exports.LIST_FOCUS = exports.CornerFocus = exports.CORNER_FOCUS = exports.DeleteFocus = exports.DELETE_FOCUS = exports.RemoveFocus = exports.REMOVE_FOCUS = exports.WriteFocus = exports.WRITE_FOCUS = exports.ReadFocus = exports.READ_FOCUS = exports.CreateFocus = exports.CREATE_FOCUS = exports.OpenFocus = exports.OPEN_FOCUS = exports.UpdateFocus = exports.UPDATE_FOCUS = exports.AwakeFocus = exports.AWAKE_FOCUS = exports.InitFocus = exports.INIT_FOCUS = void 0;
// Focus actions
exports.INIT_FOCUS = "[Focus action] Init Focus";
class InitFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_FOCUS;
    }
}
exports.InitFocus = InitFocus;
exports.AWAKE_FOCUS = "[Focus action] Awake Focus";
class AwakeFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.AWAKE_FOCUS;
    }
}
exports.AwakeFocus = AwakeFocus;
exports.UPDATE_FOCUS = "[Focus action] Update Focus";
class UpdateFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_FOCUS;
    }
}
exports.UpdateFocus = UpdateFocus;
exports.OPEN_FOCUS = "[Focus action] Open Focus";
class OpenFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_FOCUS;
    }
}
exports.OpenFocus = OpenFocus;
exports.CREATE_FOCUS = "[Focus action] Create Focus";
class CreateFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_FOCUS;
    }
}
exports.CreateFocus = CreateFocus;
exports.READ_FOCUS = "[Read action] Read Focus";
class ReadFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_FOCUS;
    }
}
exports.ReadFocus = ReadFocus;
exports.WRITE_FOCUS = "[Write action] Write Focus";
class WriteFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_FOCUS;
    }
}
exports.WriteFocus = WriteFocus;
exports.REMOVE_FOCUS = "[Remove action] Remove Focus";
class RemoveFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_FOCUS;
    }
}
exports.RemoveFocus = RemoveFocus;
exports.DELETE_FOCUS = "[Delete action] Delete Focus";
class DeleteFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_FOCUS;
    }
}
exports.DeleteFocus = DeleteFocus;
exports.CORNER_FOCUS = "[Corner action] Corner Focus";
class CornerFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CORNER_FOCUS;
    }
}
exports.CornerFocus = CornerFocus;
exports.LIST_FOCUS = "[List action] List Focus";
class ListFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_FOCUS;
    }
}
exports.ListFocus = ListFocus;
exports.SPIN_RIGHT_FOCUS = "[List action] Spin Left Focus";
class SpinRightFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SPIN_RIGHT_FOCUS;
    }
}
exports.SpinRightFocus = SpinRightFocus;
exports.SPIN_LEFT_FOCUS = "[List action] Spin Right Focus";
class SpinLeftFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SPIN_LEFT_FOCUS;
    }
}
exports.SpinLeftFocus = SpinLeftFocus;
exports.FORWARD_FOCUS = "[List action] Forward Focus";
class ForwardFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FORWARD_FOCUS;
    }
}
exports.ForwardFocus = ForwardFocus;
exports.BACKWARD_FOCUS = "[List action] Backward Focus";
class BackwardFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BACKWARD_FOCUS;
    }
}
exports.BackwardFocus = BackwardFocus;
exports.CENTER_FOCUS = "[List action] Center Focus";
class CenterFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CENTER_FOCUS;
    }
}
exports.CenterFocus = CenterFocus;
exports.BOND_FOCUS = "[Bond action] Bond Focus";
class BondFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BOND_FOCUS;
    }
}
exports.BondFocus = BondFocus;
exports.LOCATE_FOCUS = "[Locate action] Locate Focus";
class LocateFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOCATE_FOCUS;
    }
}
exports.LocateFocus = LocateFocus;
exports.VISION_FOCUS = "[Vision action] Vision Focus";
class VisionFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.VISION_FOCUS;
    }
}
exports.VisionFocus = VisionFocus;
exports.SELECT_FOCUS = "[Select action] Select Focus";
class SelectFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SELECT_FOCUS;
    }
}
exports.SelectFocus = SelectFocus;
exports.MODEL_FOCUS = "[Select action] Model Focus";
class ModelFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MODEL_FOCUS;
    }
}
exports.ModelFocus = ModelFocus;
exports.BROWNIAN_FOCUS = "[Select action] Brownian Focus";
class BrownianFocus {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BROWNIAN_FOCUS;
    }
}
exports.BrownianFocus = BrownianFocus;
//# sourceMappingURL=focus.action.js.map