
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActMpr from "../maprpg.action";
import * as ActDsk from "../../act/disk.action"

var bit, val, idx, dex, lst, dat;

export const initMaprpg = (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {
    debugger
    return cpy;
};


export const createMaprpg = async (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}

    bal.dat;

    var dat: MapRBit = { idx };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }

    bal.slv({ mprBit: { idx: 'create-rpgmap', dat } });
    return cpy;
};

export const updateMaprpg = async (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {

    bit = await ste.hunt(ActMpr.UPDATE_MAPRPG, { idx: bal.idx });
    dat = bit.rpmBit;

    bal.slv({ rmpBit: { idx: "update-rpgmap", dat } });

    return cpy;
};


export const writeMaprpg = async (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {
    
    var slv = bal.slv;

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMpr.CREATE_MAPRPG });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt( ActMpr.UPDATE_MAPRPG, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ mprBit: { idx: "write-maprpg", dat: item } });
    return cpy;

    return cpy;
};

export const readMaprpg = async (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'mpr00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActMpr.CREATE_MAPRPG });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ mprBit: { idx: "read-maprpg", dat: item } });

    return cpy;
};

export const removeMaprpg = async (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActMpr.CREATE_MAPRPG })
    if (bal.slv != null) bal.slv({ mprBit: { idx: "remove-maprpg", dat: bit.clcBit } });
    return cpy;
};

export const deleteMaprpg = (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {
    debugger
    return cpy;
};


export const loadMaprpg = async (cpy: MaprpgModel, bal: MaprpgBit, ste: State) => {

    bit = await ste.bus(ActDsk.READ_DISK, { src: './data/maprpg/' + bal.src  });
    dat = JSON.parse( bit.dskBit.dat) 
    bal.slv({ mprBit: { idx: "load-maprpg", src:bal.src, dat } });

    return cpy;
};


export const originMaprpg = (cpy: MaprpgModel, bal:MaprpgBit, ste: State) => {
 debugger
 return cpy;
 };
import { MaprpgModel } from "../maprpg.model";
import MaprpgBit from "../fce/maprpg.bit";
import State from "../../99.core/state";
import MapRBit from "../fce/mapr.bit";
