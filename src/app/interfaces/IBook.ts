export interface IBook {
    id?: number;
    cover: string;
    title: string;
    publishDate?: Date;
    price: number;
    instock?: boolean;
}
