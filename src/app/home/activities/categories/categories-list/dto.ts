export class categories{
    constructor(){
        this.items = [];
    }
errorMessage:string
items:item[];
}
 class item{
    categoryid:string;
    categoryName:string;
    activitiesCount:number;
    isListItemHover:boolean;
    isDeleteButtonHover:boolean;
}

export class AddNewCategory{
    categoryName:string;

}
