import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

 Jewellery: any;
allJewellery: any;

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:1234/jwl/all");
    res.subscribe(
      data=>
      {
        this.allJewellery=data;

      }
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:1234/jwl/del?id="+id);
    res.subscribe(
      data=>this.allJewellery=data
    );
  }

}
