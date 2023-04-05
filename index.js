import {OneEuroFilter} from "./OneEuroFilter.js";
import {Filter_2D} from "./2D-Filter.js";

let filter=new Filter_2D(0);

for (let i=0;i<100;i++)
    console.log(filter.predict(i,i,i+1))