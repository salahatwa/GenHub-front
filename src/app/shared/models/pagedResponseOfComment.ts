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
import { Comment } from './comment';


export interface PagedResponseOfComment { 
    content?: Array<Comment>;
    last?: boolean;
    page?: number;
    size?: number;
    totalElements?: number;
    totalPages?: number;
}
