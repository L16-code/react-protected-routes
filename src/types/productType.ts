export interface ProductValueType{
    items:{[id:string]:number};
}
export interface ProductItems{
    id:number;
    name:string;
    description:string;
    image:string;
    price:number;
}