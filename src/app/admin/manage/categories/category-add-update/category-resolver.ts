import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { empty, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Category } from "src/app/shared/models/models";
import { CategoryControllerService } from "src/app/shared/services/categoryController.service";

@Injectable({
    providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {
    constructor(private categoryService: CategoryControllerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = route.queryParams['id'];

        if (!id || id == '' || id == 'new')
            return of(null);

        return this.categoryService.getCategory(id).pipe(
            catchError((error) => {
                return of(null);
            })
        );
    }
}