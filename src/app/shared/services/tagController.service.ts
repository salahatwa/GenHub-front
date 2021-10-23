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
// import { PagedResponseOfTag } from '../model/pagedResponseOfTag';
// import { Tag } from '../model/tag';

// import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
// import { Configuration }                                     from '../configuration';


// @Injectable()
// export class TagControllerService {

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
//      * addTag
//      * 
//      * @param tag tag
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public addTagUsingPOST(tag: Tag, observe?: 'body', reportProgress?: boolean): Observable<Tag>;
//     public addTagUsingPOST(tag: Tag, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tag>>;
//     public addTagUsingPOST(tag: Tag, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tag>>;
//     public addTagUsingPOST(tag: Tag, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (tag === null || tag === undefined) {
//             throw new Error('Required parameter tag was null or undefined when calling addTagUsingPOST.');
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

//         return this.httpClient.post<Tag>(`${this.basePath}/api/tags`,
//             tag,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * deleteTag
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public deleteTagUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
//     public deleteTagUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
//     public deleteTagUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
//     public deleteTagUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteTagUsingDELETE.');
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

//         return this.httpClient.delete<ApiResponse>(`${this.basePath}/api/tags/${encodeURIComponent(String(id))}`,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * getAllTags
//      * 
//      * @param page page
//      * @param size size
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getAllTagsUsingGET(page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagedResponseOfTag>;
//     public getAllTagsUsingGET(page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagedResponseOfTag>>;
//     public getAllTagsUsingGET(page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagedResponseOfTag>>;
//     public getAllTagsUsingGET(page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

//         return this.httpClient.get<PagedResponseOfTag>(`${this.basePath}/api/tags`,
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
//      * getTag
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getTagUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Tag>;
//     public getTagUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tag>>;
//     public getTagUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tag>>;
//     public getTagUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getTagUsingGET.');
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

//         return this.httpClient.get<Tag>(`${this.basePath}/api/tags/${encodeURIComponent(String(id))}`,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * updateTag
//      * 
//      * @param id id
//      * @param tag tag
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public updateTagUsingPUT(id: number, tag: Tag, observe?: 'body', reportProgress?: boolean): Observable<Tag>;
//     public updateTagUsingPUT(id: number, tag: Tag, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tag>>;
//     public updateTagUsingPUT(id: number, tag: Tag, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tag>>;
//     public updateTagUsingPUT(id: number, tag: Tag, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling updateTagUsingPUT.');
//         }

//         if (tag === null || tag === undefined) {
//             throw new Error('Required parameter tag was null or undefined when calling updateTagUsingPUT.');
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

//         return this.httpClient.put<Tag>(`${this.basePath}/api/tags/${encodeURIComponent(String(id))}`,
//             tag,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

// }