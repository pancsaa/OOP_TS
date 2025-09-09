type BaseOp="sum"|"multiplier"|"mode"|"print"

class NumberSeries{
    //Attribútumok-tulajdonságok(osztály változói)
    private _count: number; //hány szám legyen a listában
    private _border: number; //a generált számok felső határa
    private _list: number[]; //itt tároljuk a számokat

    //Konstruktor(létrehozza az objektumot: inicializálja az attribútumokat)
    constructor(
        count:number,
        border: number,
        rng:(max:number)=>number //toDo
    ){
        if(count<=0)throw new Error("Számok pozitív egész számok legyenek!");
        if(border<=0)throw new Error("A felső határ pozitív egész legyen!");
        this._count=count
        this._border=border
        this._list=Array.from({length: count},item=>rng(border));
    }

    //Propertik: "get/set" elérők
    get getValues():readonly number[]{
        return this._list;
    }

    set setValues(array:number[]){
        if(array.length===0)throw new Error("Nem lehet üres a lista!");
        if(!array.every(item=>Number.isFinite(item)&& item>=0))throw new Error("Minden elem pozitív egész szám legyen!");

        this._list=[...array]; //így a lista eleminek a másolata kerül a "_list"-be!
        this._count=array.length;
        this._border=Math.max(...array)
    }

    //Csak olvashato propertik:
    get count():number{return this._count};
    get border():number{return this._border};

    //Objektum metódusok:
    mode():number{
        const statistic: Record<number,number>={};
        for(let n of this._list){
            statistic[n]=(statistic[n]??0)+1
        }
        let best=this._list[0];
        for(const k of Object.keys(statistic)){
            const key=Number(k)
            if(statistic[key]!>statistic[best!]!){
                best=key
            }
        }
        return best!;
    }
    sum(){return this._list.reduce((acc,n)=>acc+n,0)};
    multiplier(){return this._list.reduce((acc,n)=>acc*n,1)}

    //router (switch-case) sim,multiplier, mode, print
    run(op: BaseOp){
        switch(op){
            case "sum":
                console.log("Összeg: "+this.sum());
                break;
            case "multiplier":
                console.log("Szorzat: "+this.multiplier);
                break;
            case "mode":
                console.log("Leggyakoribb szám: "+this.mode());
                break;
            case "print":
                console.log("Kiírás: "+this.getValues.join(", "));
                break;
            default:
                console.log("Helytelen művelet!");
                break;
        }
    }

    //statikus metódusok:
    static help():void{
        console.log("Elérhető műveletek: sum, multiplier,mode,print");
    }

    static rand(max:number):number{
        return Math.floor(Math.random()*max)+1;
    }
}