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
      };
    };
    return resultPosts;
  }


}
