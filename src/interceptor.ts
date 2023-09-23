import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import {map} from 'rxjs';
export class CustomInterceptor implements NestInterceptor{
   intercept(context: ExecutionContext, handler: CallHandler){
       console.log('this is interceting the request', context)

       return handler.handle().pipe(
           map(data=>{
               const response = {
                   ...data,
                   created_att: data.createdAt, 
               }
               return response;
           })
       )
   }
}