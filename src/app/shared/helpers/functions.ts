import { HttpErrorResponse } from "@angular/common/http";

export const exctractApiError = (
  resError: HttpErrorResponse
): any=> {
  let error ={ title: "Error!", detail: "Ooops, something went wrong!" };
  console.log(resError);
  if (resError && resError?.error) {
    console.log( resError?.error?.message);
    error = resError.error.message;
  }

  return error;
};
