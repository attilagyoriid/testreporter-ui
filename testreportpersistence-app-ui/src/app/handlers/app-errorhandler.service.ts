/**
 * Created by eattgyo on 7/26/2018.
 */
import { ErrorHandler, Inject, Injector, Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

constructor(@Inject(Injector) private injector: Injector) {
   super();
}

// Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
  private get toastrService(): ToastsManager {
    return this.injector.get(ToastsManager);
  }

   public handleError(error: any): void {
     // this.toastrService.error('An unexpected error has occurred.', 'Error',
     //   {
     //    closeButton: true,
     //     timeOut: 5000,
     //     onActivateTick: true
     //   }
     // );
     setTimeout(() => {
       this.toastrService.error('Error', 'valami');
     });

     super.handleError(error);
   }
 }

// import { ErrorHandler, Inject, Injector} from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
//
// export class AppErrorHandler implements ErrorHandler {
//   constructor(@Inject(Injector) private injector: Injector) { }
//
//   private get toastrService(): ToastrService {
//     return this.injector.get(ToastrService);
//   }
//
//   public handleError(error: any): void {
//     this.toastrService.error('Show me an error message');
//     throw error;
//   }
// }
// import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
//
// /**
//  * Handle any errors thrown by Angular application
//  */
// @Injectable()
// export class AppErrorHandler extends ErrorHandler {
//
//   constructor(
//     @Inject(Injector) private readonly injector: Injector
//   ) {
//     super();
//   }
//
//   handleError(error) {
//     console.log('Handling error: ' + error);
//
//     this.toastrService.error('testing', null, { onActivateTick: true });
//
//     super.handleError(error);
//   }
//
//   /**
//    * Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
//    * @returns {}
//    */
//   private get toastrService(): ToastrService {
//     return this.injector.get(ToastrService);
//   }
//
// }

// import { ErrorHandler, Inject, Injector, NgZone, isDevMode } from '@angular/core';
// import { Response } from '@angular/http';
// import { ToastrService } from 'ngx-toastr';
//
// import * as Raven from 'raven-js'
//
// export class AppErrorHandler implements ErrorHandler {
//   constructor(@Inject(NgZone) private ngZone: NgZone, @Inject(Injector) private injector: Injector) { }
//
//   private get toastr(): ToastrService {
//     return this.injector.get(ToastrService);
//   }
//
//   public handleError(error: any): void {
//     this.ngZone.run(() => {
//       let errorTitle = 'Error';
//       let errMsg = 'An unexpected error ocurred';
//
//       if (error instanceof Response) {
//         const contentType = error.headers.get('Content-Type')
//
//         if (contentType && contentType == 'application/json') {
//           const body = error.json();
//           errorTitle = body.message || errorTitle;
//           errMsg = body.detailedMessage || JSON.stringify(body);
//         } else {
//           errMsg = error.text();
//         }
//       }
//       this.toastr.error(errMsg, errorTitle);
//     });
//
//     // if (!isDevMode())
//     //   Raven.captureException(error.originalError || error);
//     // else
//     //   throw error;
//   }
// }
