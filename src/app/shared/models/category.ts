import { Post } from './post';


export interface Category { 
    children?: Array<Category>;
    createdAt?: Date;
    createdBy?: number;
    id?: number;
    name?: string;
    parent?: Category;
    posts?: Array<Post>;
    updatedAt?: Date;
    updatedBy?: number;
}
