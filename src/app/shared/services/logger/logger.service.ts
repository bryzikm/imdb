import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public static logError(error: HttpErrorResponse) {
    console.log(error);
  }

  public static logMessage(message: string) {
    console.log(message);
  }
}
