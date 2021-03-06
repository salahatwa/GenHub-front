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

// import { Album } from '../model/album';
// import { AlbumRequest } from '../model/albumRequest';
// import { AlbumResponse } from '../model/albumResponse';
// import { ApiResponse } from '../model/apiResponse';
// import { PagedResponseOfAlbumResponse } from '../model/pagedResponseOfAlbumResponse';
// import { PagedResponseOfPhotoResponse } from '../model/pagedResponseOfPhotoResponse';

// import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
// import { Configuration }                                     from '../configuration';


// @Injectable()
// export class AlbumControllerService {

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
//      * addAlbum
//      * 
//      * @param albumRequest albumRequest
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public addAlbumUsingPOST(albumRequest: AlbumRequest, observe?: 'body', reportProgress?: boolean): Observable<Album>;
//     public addAlbumUsingPOST(albumRequest: AlbumRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Album>>;
//     public addAlbumUsingPOST(albumRequest: AlbumRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Album>>;
//     public addAlbumUsingPOST(albumRequest: AlbumRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (albumRequest === null || albumRequest === undefined) {
//             throw new Error('Required parameter albumRequest was null or undefined when calling addAlbumUsingPOST.');
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

//         return this.httpClient.post<Album>(`${this.basePath}/api/albums`,
//             albumRequest,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * deleteAlbum
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public deleteAlbumUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<ApiResponse>;
//     public deleteAlbumUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApiResponse>>;
//     public deleteAlbumUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApiResponse>>;
//     public deleteAlbumUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteAlbumUsingDELETE.');
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

//         return this.httpClient.delete<ApiResponse>(`${this.basePath}/api/albums/${encodeURIComponent(String(id))}`,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * getAlbum
//      * 
//      * @param id id
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getAlbumUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Album>;
//     public getAlbumUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Album>>;
//     public getAlbumUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Album>>;
//     public getAlbumUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getAlbumUsingGET.');
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

//         return this.httpClient.get<Album>(`${this.basePath}/api/albums/${encodeURIComponent(String(id))}`,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

//     /**
//      * getAllAlbums
//      * 
//      * @param page page
//      * @param size size
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getAllAlbumsUsingGET(page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagedResponseOfAlbumResponse>;
//     public getAllAlbumsUsingGET(page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagedResponseOfAlbumResponse>>;
//     public getAllAlbumsUsingGET(page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagedResponseOfAlbumResponse>>;
//     public getAllAlbumsUsingGET(page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

//         return this.httpClient.get<PagedResponseOfAlbumResponse>(`${this.basePath}/api/albums`,
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
//      * getAllPhotosByAlbum
//      * 
//      * @param id id
//      * @param page page
//      * @param size size
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public getAllPhotosByAlbumUsingGET(id: number, page?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<PagedResponseOfPhotoResponse>;
//     public getAllPhotosByAlbumUsingGET(id: number, page?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagedResponseOfPhotoResponse>>;
//     public getAllPhotosByAlbumUsingGET(id: number, page?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagedResponseOfPhotoResponse>>;
//     public getAllPhotosByAlbumUsingGET(id: number, page?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getAllPhotosByAlbumUsingGET.');
//         }



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

//         return this.httpClient.get<PagedResponseOfPhotoResponse>(`${this.basePath}/api/albums/${encodeURIComponent(String(id))}/photos`,
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
//      * updateAlbum
//      * 
//      * @param id id
//      * @param newAlbum newAlbum
//      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
//      * @param reportProgress flag to report request and response progress.
//      */
//     public updateAlbumUsingPUT(id: number, newAlbum: AlbumRequest, observe?: 'body', reportProgress?: boolean): Observable<AlbumResponse>;
//     public updateAlbumUsingPUT(id: number, newAlbum: AlbumRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AlbumResponse>>;
//     public updateAlbumUsingPUT(id: number, newAlbum: AlbumRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AlbumResponse>>;
//     public updateAlbumUsingPUT(id: number, newAlbum: AlbumRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling updateAlbumUsingPUT.');
//         }

//         if (newAlbum === null || newAlbum === undefined) {
//             throw new Error('Required parameter newAlbum was null or undefined when calling updateAlbumUsingPUT.');
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

//         return this.httpClient.put<AlbumResponse>(`${this.basePath}/api/albums/${encodeURIComponent(String(id))}`,
//             newAlbum,
//             {
//                 withCredentials: this.configuration.withCredentials,
//                 headers: headers,
//                 observe: observe,
//                 reportProgress: reportProgress
//             }
//         );
//     }

// }
