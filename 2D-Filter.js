import {OneEuroFilter} from "./OneEuroFilter.js";

class Filter_2D {
    constructor(te,preX,preY)
    {
       this.te=te;
       this.preX=new OneEuroFilter(te);
       this.preY=new OneEuroFilter(te);
    }
    predict(x,y,te)
    {
        return [this.preX.predict(x, te), this.preY.predict(y, te)];
    }
}
export {Filter_2D}