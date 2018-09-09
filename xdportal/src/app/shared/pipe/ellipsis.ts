import { Pipe } from "@angular/core";


@Pipe({
    name:'ellipsis'
})
export class EllipsisPipe{

    transform(value: string, count?: number,charAppend?:string) {
        count = count || 40;
        charAppend = charAppend || "...";
        if (!value) {
            return "";
        }
        if (value.trim().length > count) {
            return value.substring(0, count) + charAppend;
        }
        return value;
    }
}