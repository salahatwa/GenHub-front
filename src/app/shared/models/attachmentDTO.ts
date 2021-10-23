
export interface AttachmentDTO { 
    createTime?: Date;
    fileKey?: string;
    height?: number;
    id?: number;
    mediaType?: string;
    name?: string;
    path?: string;
    size?: number;
    suffix?: string;
    thumbPath?: string;
    type?: AttachmentDTO.TypeEnum;
    width?: number;
}
export namespace AttachmentDTO {
    export type TypeEnum = 'LOCAL' | 'UPOSS' | 'QINIUOSS' | 'SMMS' | 'ALIOSS' | 'BAIDUBOS' | 'TENCENTCOS' | 'HUAWEIOBS' | 'MINIO' | 'CLOUDINARY';
    export const TypeEnum = {
        LOCAL: 'LOCAL' as TypeEnum,
        UPOSS: 'UPOSS' as TypeEnum,
        QINIUOSS: 'QINIUOSS' as TypeEnum,
        SMMS: 'SMMS' as TypeEnum,
        ALIOSS: 'ALIOSS' as TypeEnum,
        BAIDUBOS: 'BAIDUBOS' as TypeEnum,
        TENCENTCOS: 'TENCENTCOS' as TypeEnum,
        HUAWEIOBS: 'HUAWEIOBS' as TypeEnum,
        MINIO: 'MINIO' as TypeEnum,
        CLOUDINARY: 'CLOUDINARY' as TypeEnum
    };
}
