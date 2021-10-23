import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../helpers/api.service';
import { CategoryDto } from '../models/models';



@Injectable({
    providedIn: "root",
})
export class CategoryControllerService {

    constructor(private apiService: ApiService) {
    }

    /**
     * addCategory
     * 
     * @param category category
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addCategory(category: CategoryDto): Observable<any> {
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling addCategoryUsingPOST.');
        }

        return this.apiService.post(`categories`,
            category
        );
    }

    /**
     * deleteCategory
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCategory(id: number): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCategoryUsingDELETE.');
        }

        return this.apiService.delete(`categories/${encodeURIComponent(String(id))}`
        );
    }

    /**
     * getAllCategories
     * 
     * @param page page
     * @param size size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCategories(params: any): Observable<any> {
        return this.apiService.get(`categories`,
            params
        );
    }


    /**
   * getAllCategories List
   * 
   */
    public getAllCategoriesList(): Observable<any> {
        return this.apiService.get(`categories/list`);
    }

    /**
     * getCategory
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategory(id: number,): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCategoryUsingGET.');
        }



        return this.apiService.get(`categories/${encodeURIComponent(String(id))}`
        );
    }

    /**
     * updateCategory
     * 
     * @param category category
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCategory(category: CategoryDto, id: number): Observable<any> {

        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling updateCategoryUsingPUT.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCategoryUsingPUT.');
        }



        return this.apiService.put(`categories/${encodeURIComponent(String(id))}`,
            category
        );
    }

}
