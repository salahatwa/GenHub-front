// /**
//  * Api Documentation
//  * Api Documentation
//  *
//  * OpenAPI spec version: 1.0
//  * 
//  *
//  * NOTE: This class is auto generated by the swagger code generator program.
//  * https://github.com/swagger-api/swagger-codegen.git
//  * Do not edit the class manually.
//  */
// /* tslint:disable:no-unused-variable member-ordering */

// import { Inject, Injectable, Optional }                      from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams,
//          HttpResponse, HttpEvent }                           from '@angular/common/http';
// import { CustomHttpUrlEncodingCodec }                        from '../encoder';

// import { Observable }                                        from 'rxjs/Observable';

// import { ApiResponse } from '../model/apiResponse';
// import { PagedResponseOfTodo } from '../model/pagedResponseOfTodo';
// import { Todo } from '../model/todo';

// import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
// import { Configuration }                                     from '../configuration';


// @Injectable()
// export class TodoControllerService {

//     protected basePath = 'https://localhost:8080';
//     public defaultHeaders = new HttpHeaders();
//     public configuration = new Configuration();

//     constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
//             this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }

//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (const consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }


//     /**
//      * addTodo
//      * 
//      * @param todo todo
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public addTodoUsingPOST(todo: Todo, observe?: 'body', reportProgress?: boolean): Observable<Todo>;
//     public addTodoUsingPOST(todo: Todo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Todo>>;
//     public addTodoUsingPOST(todo: Todo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Todo>>;
//     public addTodoUsingPOST(todo: Todo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (todo === null || todo === undefined) {
//             throw new Error('Required parameter todo was null or undefined when calling addTodoUsingPOST.');
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//             'application/json'
//         ];
//         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
//         if (httpContentTypeSelected != undefined) {
//             headers = headers.set('Content-Type', httpContentTypeSelected);
//         }

//         return this.httpClient.post<Todo>(`${this.basePath}/api/todos`,
//             todo,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * completeTodo
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public completeTodoUsingPUT(id: number, observe?: 'body', reportProgress?: boolean): Observable<Todo>;
//     public completeTodoUsingPUT(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Todo>>;
//     public completeTodoUsingPUT(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Todo>>;
//     public completeTodoUsingPUT(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling completeTodoUsingPUT.');
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//             'application/json'
//         ];

//         return this.httpClient.put<Todo>(`${this.basePath}/api/todos/${encodeURIComponent(String(id))}/complete`,
//             null,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * deleteTodo
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public deleteTodoUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
//     public deleteTodoUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
//     public deleteTodoUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
//     public deleteTodoUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteTodoUsingDELETE.');
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//         ];

//         return this.httpClient.delete<ApiResponse>(`${this.basePath}/api/todos/${encodeURIComponent(String(id))}`,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * getAllTodos
//      * 
//      * @param page page
//      * @param size size
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getAllTodosUsingGET(page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagedResponseOfTodo>;
//     public getAllTodosUsingGET(page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagedResponseOfTodo>>;
//     public getAllTodosUsingGET(page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagedResponseOfTodo>>;
//     public getAllTodosUsingGET(page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



//         let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
//         if (page !== undefined && page !== null) {
//             queryParameters = queryParameters.set('page', <any>page);
//         }
//         if (size !== undefined && size !== null) {
//             queryParameters = queryParameters.set('size', <any>size);
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//         ];

//         return this.httpClient.get<PagedResponseOfTodo>(`${this.basePath}/api/todos`,
//             {
//                 params: queryParameters,
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * getTodo
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getTodoUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Todo>;
//     public getTodoUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Todo>>;
//     public getTodoUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Todo>>;
//     public getTodoUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getTodoUsingGET.');
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//         ];

//         return this.httpClient.get<Todo>(`${this.basePath}/api/todos/${encodeURIComponent(String(id))}`,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * unCompleteTodo
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public unCompleteTodoUsingPUT(id: number, observe?: 'body', reportProgress?: boolean): Observable<Todo>;
//     public unCompleteTodoUsingPUT(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Todo>>;
//     public unCompleteTodoUsingPUT(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Todo>>;
//     public unCompleteTodoUsingPUT(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling unCompleteTodoUsingPUT.');
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//             'application/json'
//         ];

//         return this.httpClient.put<Todo>(`${this.basePath}/api/todos/${encodeURIComponent(String(id))}/unComplete`,
//             null,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * updateTodo
//      * 
//      * @param id id
//      * @param newTodo newTodo
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public updateTodoUsingPUT(id: number, newTodo: Todo, observe?: 'body', reportProgress?: boolean): Observable<Todo>;
//     public updateTodoUsingPUT(id: number, newTodo: Todo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Todo>>;
//     public updateTodoUsingPUT(id: number, newTodo: Todo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Todo>>;
//     public updateTodoUsingPUT(id: number, newTodo: Todo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling updateTodoUsingPUT.');
//         }

//         if (newTodo === null || newTodo === undefined) {
//             throw new Error('Required parameter newTodo was null or undefined when calling updateTodoUsingPUT.');
//         }

//         let headers = this.defaultHeaders;

//         // authentication (JWT) required
//         if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
//             headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
//         }

//         // to determine the Accept header
//         let httpHeaderAccepts: string[] = [
//             '*/*'
//         ];
//         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
//         if (httpHeaderAcceptSelected != undefined) {
//             headers = headers.set('Accept', httpHeaderAcceptSelected);
//         }

//         // to determine the Content-Type header
//         const consumes: string[] = [
//             'application/json'
//         ];
//         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
//         if (httpContentTypeSelected != undefined) {
//             headers = headers.set('Content-Type', httpContentTypeSelected);
//         }

//         return this.httpClient.put<Todo>(`${this.basePath}/api/todos/${encodeURIComponent(String(id))}`,
//             newTodo,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

// }
