import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  from:any;
  messages:any;
  sendGroup = new FormGroup({
    Msg: new FormControl(''),
    From: new FormControl('dachi'),
    To: new FormControl('gio'),
    Time: new FormControl('12:12'),
  });

  constructor(private Obj:ChatService) { }

  ngOnInit(): void {
    this.messages = this.Obj.get();
    this.from = this.messages[0]['To'];
  }
  send(){
    var data = this.sendGroup.value;
    this.Obj.addMsg(data);
  }
}
