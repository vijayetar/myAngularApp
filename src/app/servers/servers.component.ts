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
  serverName='';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreateStatus='Server Just Created!!';
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
