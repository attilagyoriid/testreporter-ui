import {ErrorHandler, Injectable} from '@angular/core';
import {Toast, ToastsManager, ToastOptions} from 'ng2-toastr';
import {BAD_REQUEST, FORBIDDEN, UNAUTHORIZED} from 'http-status-codes';
import {Router} from '@angular/router';
import {Error} from 'tslint/lib/error';

@Injectable()
export class ErrorhandlerServiceService implements ErrorHandler {



  constructor(private router: Router, private toastManager: ToastsManager) { }

  public handleError(error: any) {

    console.error('valami' + error);
    // const httpErrorCode = error.httpErrorCode;
    // switch (httpErrorCode) {
    //   case UNAUTHORIZED:
        // this.router.navigateByUrl('/login');
      //   this.showError(error.message)
      //   break;
      // case FORBIDDEN:
      //   // this.router.navigateByUrl('/unauthorized');
      //   this.showError(error.message)
      //   break;
      // case BAD_REQUEST:
      //   this.showError(error.message);
      //   break;
      // default:
        this.showError('An error occurred: Please click this message to refresh');
    // }
  }

  private showError (message: string) {
    this.toastManager.error(message, 'Something went wrong', { dismiss: 'controlled'}).then((toast: Toast) => {
      const currentToastId: number = toast.id;
      this.toastManager.onClickToast().subscribe(clickedToast => {
        if (clickedToast.id === currentToastId) {
          this.toastManager.dismissToast(toast);
          window.location.reload();
        }
      });
    });
  }

}
