// const a = 344;
// console.log(a);
// alert(a);
// Typescript Datatypes

// let a:string = "vowel";
// let firstName: string = "Paarth";
// let num: number = 3234;
// let check: boolean;
// let nambo = <string>"paarthav";
// let surname: string | number;
// surname = "Shah"
// surname = 2;

// const sumNumber = (n:number, m:number):number =>
// {
//     console.log(n + m);
//     return (m+n)
// }

// Array in TypeScript
// type UserName = string | number; //type lasiic
// let a: UserName = 20;
type UserName = (n: number, m: number) => number;

const func: UserName = (n, m)=>
{
    console.log(n, m);
    return n + m;
}

const arr: number[] = [123, 456.54, 454];
const arr2: string[] = ["abc", "def", "ghi"];
const arr3: Array<string> = ["Preeti", "Paarth"];
const arr4: Array<string> = new Array(20);
console.log(arr4)
arr3.forEach(i =>
{
    i.toLowerCase();
})
const arr5:[number,string,number]=[23,"abc",34] // this is not array this is tuple

//Object in TypeScript
// type Obj = {
//     height: number;
//     weight: number;
//     gender?: boolean;
// }
interface Obj
{
    height: number;
    weight: number;
    gender?: boolean;
}
const obj:Obj = {
    height: 565,
    weight: 80,
    gender:true,
}
const obj2:Obj = {
    height: 4512,
    weight: 78,
}