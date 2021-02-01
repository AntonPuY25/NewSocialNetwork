export const required = (value:string):string|undefined =>{
    if (value) return undefined;
    return "Field is required"
}
export const maxLengthCreator = (maxLength:number) =>
    (value:string):string|undefined=>{
    if(value.length > maxLength) return "Max Simbols";
    return undefined;
}