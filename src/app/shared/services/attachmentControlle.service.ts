
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../helpers/api.service';
import { CustomHttpUrlEncodingCodec } from '../helpers/encoder';
import { Attachment, AttachmentDTO, AttachmentParam } from '../models/models';
import { Page } from '../modules/paging-lib/page';





@Injectable({
    providedIn: "root",
})
export class AttachmentControllerService {

    constructor(private apiService: ApiService) {
    }



    /**
     * Deletes attachments permanently in batch by id array
     * 
     * @param ids ids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePermanentlyInBatch(ids: Array<number>): Observable<Array<Attachment>> {

        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling deletePermanentlyInBatchUsingDELETE.');
        }


        return this.apiService.delete(`attachments`
        );
    }

    public deletePermanently(id): Observable<AttachmentDTO> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePermanentlyUsingDELETE.');
        }



        return this.apiService.delete(`attachments/${encodeURIComponent(String(id))}`
        );
    }

    public getByUsingGET(id: number): Observable<any> {



        return this.apiService.get(`attachments/${encodeURIComponent(String(id))}`
        );
    }

    /**
     * Lists all of media types
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listMediaTypes(): Observable<Array<string>> {

        return this.apiService.get(`attachments/media_types`
        );
    }

    /**
     * Lists all of types.
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listTypes(): Observable<Array<string>> {
        return this.apiService.get(`attachments/types`
        );
    }

    /**
     * pageBy
     * 
     * @param attachmentType 
     * @param keyword 
     * @param mediaType 
     * @param offset 
     * @param pageNumber 
     * @param pageSize 
     * @param paged 
     * @param sortSorted 
     * @param sortUnsorted 
     * @param unpaged 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public pageBy(attachmentType?: 'LOCAL' | 'UPOSS' | 'QINIUOSS' | 'SMMS' | 'ALIOSS' | 'BAIDUBOS' | 'TENCENTCOS' | 'HUAWEIOBS' | 'MINIO' | 'CLOUDINARY', 
    keyword?: string, mediaType?: string,params?:any): Observable<Page<AttachmentDTO>> {
        // this.utilService.getRequestParams(page, AppConstants.PAGE_SIZE)

        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

        if (params !== undefined && params !== null) {
            queryParameters = params;
        }

        if (attachmentType !== undefined && attachmentType !== null) {
            queryParameters = queryParameters.set('attachmentType', <any>attachmentType);
        }
        if (keyword !== undefined && keyword !== null) {
            queryParameters = queryParameters.set('keyword', <any>keyword);
        }
        if (mediaType !== undefined && mediaType !== null) {
            queryParameters = queryParameters.set('mediaType', <any>mediaType);
        }
        




        return this.apiService.get(`attachments`, queryParameters
        );
    }

    /**
     * Updates a attachment
     * 
     * @param attachmentId attachmentId
     * @param attachmentParam attachmentParam
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateByUsingPUT(attachmentId: number, attachmentParam: AttachmentParam): Observable<AttachmentDTO> {

        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling updateByUsingPUT.');
        }

        if (attachmentParam === null || attachmentParam === undefined) {
            throw new Error('Required parameter attachmentParam was null or undefined when calling updateByUsingPUT.');
        }




        return this.apiService.put(`attachments/${encodeURIComponent(String(attachmentId))}`,
            attachmentParam
        );
    }

    /**
     * Uploads single file
     * 
     * @param file file
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadAttachment(file: any): Observable<any> {

        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadAttachmentUsingPOST.');
        }

        let formParams: { append(param: string, value: any): void | HttpParams; };

        formParams = new FormData();


        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.apiService.postGetFile(`attachments/upload`, formParams);
    }

    /**
     * Uploads multi files (Invalid in Swagger UI)
     * 
     * @param files files
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadAttachmentsUsingPOST(files: Array<Blob>, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (files === null || files === undefined) {
            throw new Error('Required parameter files was null or undefined when calling uploadAttachmentsUsingPOST.');
        }



        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        }

        if (files) {
            files.forEach((element) => {
                formParams = formParams.append('files', <any>element) || formParams;
            })
        }

        return this.apiService.postGetFile(`attachments/uploads`,
            convertFormParamsToString ? formParams.toString() : formParams
        );
    }

}
