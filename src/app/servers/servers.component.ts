import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <p>servers works!</p>
  // <app-server></app-server>
  // `,
  templateUrl:'./servers.component.html',
  // styles: [`p{color:blue;}, h3{color:pink;}`]
  styleUrls:['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus='No server created!';
  serverName='testing';
  userName:string = '';
  isEmptyString:boolean = true;
  servers = ['testing1', 'testing2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreateStatus='Server Just Created!! The name is '+this.serverName;
    this.servers.push(this.serverName);
  }
  checkIfEmptyString(){
    if (this.userName !=''){
      return !this.isEmptyString;
    }
    return this.isEmptyString;
  }

}
