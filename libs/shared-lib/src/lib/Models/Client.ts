import { article } from "./article";

export class Client{
    _id ?: string;
    name?:string;
    article?: [article];
    role?: string;
}