import { baseDto } from 'src/app/shared/Dto/BaseDto';

export class LoginDto extends baseDto{
    username:string;
    password:string;
}