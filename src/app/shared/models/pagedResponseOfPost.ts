/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Post } from './post';


export interface PagedResponseOfPost { 
    content?: Array<Post>;
    last?: boolean;
    page?: number;
    size?: number;
    totalElements?: number;
    totalPages?: number;
}
