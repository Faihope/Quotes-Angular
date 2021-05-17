

export class Quotes {
    showQuotes:boolean;

    constructor(public id?:number,public name?:string,public author?:string,public quote?:string,
        public completeDate?: Date,public upvote?:number, public downvote?:number){
        this.showQuotes=false;
    }
   
    
}

