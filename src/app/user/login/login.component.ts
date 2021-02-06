import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizeService } from '../authorize.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private Obj:AuthorizeService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  check(){
    var tmp = this.userGroup.value;
    var checker = this.Obj.login(tmp);
    if(checker){
      this.router.navigate(['../dashboard'],{relativeTo:this.route})
    }
    else{
      alert("abad");
    }
  }
}
