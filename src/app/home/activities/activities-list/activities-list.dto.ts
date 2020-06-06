import { baseDto } from 'src/app/shared/Dto/BaseDto';

export class activitiesListDto extends baseDto{
    
    title: string;
    description: string;
    isActive: boolean;
    isDone: boolean;
    _id:string;

    // animation flags
    isListItemHover:boolean;
    isDeleteButtonHover:boolean;
    //isBookMaeked:boolean
}