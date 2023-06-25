import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { plainToClass } from 'class-transformer';


export class SerializeInterceptor implements NestInterceptor {
  intercept(context :ExecutionContext, next : CallHandler) : Observable<any>{
    // Run something before a request is handled
    // by the request handler
    console.log("I'm running before the handler")

    return next.handle().pipe(
      map((data : any) => {
        console.log('Sending back respond')
      })
    )
  }
}