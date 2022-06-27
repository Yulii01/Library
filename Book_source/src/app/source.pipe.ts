import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'source'
})

export class SourcePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
     
    for(const post of value){
   
      if(post.title.indexOf(arg) > -1){
      
         resultPosts.push(post);
         continue
      }
      if(post.short_description.indexOf(arg) > -1){
      
        resultPosts.push(post);
        continue
     }
    if(post.authors.indexOf(arg) > -1){
      
      resultPosts.push(post);
      continue
   }
  
    };
    
    
    return resultPosts.sort((a,b) => a.authors< b.authors? -1 : a.authors > b.authors ? 1 : 0);
  }

}
