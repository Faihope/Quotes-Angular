

export class Quotes {
    showQuotes:boolean;

    constructor(public id?:number,public name?:string,public author?:string,public quote?:string,public completeDate?: Date,public likes?:number, public dislikes?:number){
        this.showQuotes=false;
    }
   
    
}

