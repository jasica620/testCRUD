import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
// {
//   providedIn: 'root'
// })
export class HttpService {

  constructor(private _http: HttpClient){
    this.getTasks();
  }

getTasks(){
  return this._http.get('/all');
}

showTask(id){
  return this._http.get('/show/' + id);
}

deleteTask(id){
  // console.log(id)
  return this._http.delete('/remove/' + id);
}

addTask(data){
  return this._http.post('/new', data);
}

editTask(id, newTask){
  console.log(newTask)
  return this._http.put('/edit/' + id, newTask);

}
}
