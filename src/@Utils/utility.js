//@flow
/**
 * Create By @name Sukumar_Abhijeet,
 */

 type ObjType1 = {| test: string ,value :number|};

 type ObjType2 = {| name: string ,age :number|};
 
 type ReturnedObjectType = {| ...ObjType1, ...ObjType2 |};

export const mergeTwoObjects = ( obj1:ObjType, obj2:ObjType2 ) : ?ReturnedObjectType => {
    if(typeof obj1 === 'object' && typeof obj2 === 'object')
        return {...obj1,...obj2};
};

export const mergeTwoArrays = ( arr1:Array<mixed>, arr2:Array<mixed> ) : ?Array<mixed>  =>{
    if(Array.isArray(arr1) && Array.isArray(arr2))
        return [...arr1,...arr2];
};

export const concatNumberAndString = (param1:number|string,param2:number|string) : ? (number | string) =>{
    if(typeof param1 === 'number' && typeof param2 === 'number')
        return param1+param2;
    if(typeof param1 === 'string' && typeof param1 === 'string')
        return `${param1}+${param2}`;
    if((typeof param1 === 'string' || typeof param1 === 'number') && (typeof param2 === 'string' || typeof param2 === 'number'))
        return `${param1}+${param2}`;
};