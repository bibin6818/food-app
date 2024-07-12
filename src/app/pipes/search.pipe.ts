import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipies:any[],searchKey:string): any[] {
const result:any = []

if(!allRecipies || searchKey==""){
  return allRecipies
}else{
  allRecipies.forEach((item:any)=>{
   if(item['cuisine'].toLowerCase().includes(searchKey.toLowerCase())){
    result.push(item)
   }
  })
}
    return result;
  }

}
