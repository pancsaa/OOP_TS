import { NumberSeries, type BaseOp } from "./numberSeries.js";

export class NumberSeries2 extends NumberSeries{
    constructor(count:number,border:number){
        super(count, border),
        this._list=[1,2,3,45,6,6,7]
    }
    /*     div(){
        return this._list[0]
    } */
    override mode():number{
        const statistic: Record<number,number>={};
        for(let n of this._list){
            statistic[n]=(statistic[n]??0)+1
        }
        let best=this._list[0];
        for(const k in statistic){
            const key=Number(k)
            if(statistic[key]!<statistic[best!]!){
                best=key
            }
        }
        return best!;
    }

}