import { baseDto } from 'src/app/shared/Dto/BaseDto';

export class activitiesAddeditDto extends baseDto {
    title: string;
    description: string;
    isActive: boolean;
    isDone: boolean;
    _id:string;
}