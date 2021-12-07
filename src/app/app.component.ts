import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apidata: any;
  constructor(private http:HttpClient)
  {

  }
  //this is my testing
  title = 'CallRedisApi';

ngOnInit()
{
  debugger;
this.BinddatafromRedisAPI();
}


BinddatafromRedisAPI()
{
  debugger;
    return this.http.get("https://localhost:44300/api/RedisApi/getitem").subscribe
    
    ((resposne)=>
    {this.apidata = resposne;
      debugger;
     console.log(resposne);
    });
}
}

