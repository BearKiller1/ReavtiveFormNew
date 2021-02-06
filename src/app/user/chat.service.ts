import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages = [
    {To:'gio', from:"dachi", time:'12:43', msg:"rogor xar?"}
  ]
  constructor() { }

  addMsg(msgArray:any){
    this.messages.push({To:msgArray.To, from:msgArray.From, time:msgArray.Time, msg:msgArray.Msg});
    this.messages.push({To:msgArray.from, from:msgArray.To, time:msgArray.Time, msg:'Kargia Megobaro'});
  }
  get(){
    return this.messages;
  }
}
