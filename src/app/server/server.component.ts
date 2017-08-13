import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  /*To enable and disable add server button*/
 allowNewServer = false;
 resetUser = false;
 serverCreationStatus = 'No Server was created';
 serverName = 'Testserver';
 userName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
/*
  while(this.userName !== '') {
    this.resetUser = true;
}*/
  onResetUser() {
    this.userName = '';
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
