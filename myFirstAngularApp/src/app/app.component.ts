import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newTask: any;
  tasks = [];
  button : Boolean;
  task = [];
  show : Boolean;
  edit : Boolean;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = { title: "", description: "" }
    this.showData();
    this.button = false;
    this.show = false;
    this.edit = false;
  }
  // getTasksFromService(){
  //   console.log("hi")
  //   var tempObservable = this._httpService.getTasks();
  //   tempObservable.subscribe(data => {
  //     console.log("Got our tasks!", data);
  //     this.tasks = data['data'];
  // }

  showData(){
    this.button = true;
    var tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
  })
}
  getData(id){
    // console.log(id)
    this.show = true;
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      this.task = data['data'];
      console.log("show", data)
    })
  }
  deleteData(id){
    console.log(id);
    this.show = false;
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => { console.log("removed")});
    this.showData();
  }

  addData(){
    let data = this.newTask;
    let observable = this._httpService.addTask(data);
    observable.subscribe(data => { console.log("Added")});
    this.showData();
  }

  editData(id){
    this.edit = true;
    let observable = this._httpService.showTask(id);
    observable.subscribe(data => {
      this.task = data['data'];
      console.log("edit", data)
    })
  }

  update(id, myform){
    let newTask = {
      _id: id,
      title: myform.value.title,
      description: myform.value.description
    }
    console.log(myform)
    let observable = this._httpService.editTask(id, newTask);
    observable.subscribe(data => { console.log("Edited")});
    this.showData();
  }
}