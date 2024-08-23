import Focus from "./fce/Focus.interface";
import FocusBit from "./fce/focus.bit";

export class FocusModel implements Focus {
  readFocus: any;
  fociList: FocusBit[] = [];
  foci: any = {};
  count: number = 0; //gives you the number of foci present
  lastUpdate: number = 0;
  currentFoci: string;
  test: any;
}
