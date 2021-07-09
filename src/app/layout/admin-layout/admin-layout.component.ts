import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //constructor(public router:Router) { }

  //ngOnInit(): void {
      // this.router.navigateByUrl("/login");


      //ethi ta te gote status rakhi baku padiba backend ru api fetch kariki ki user
       //login karichi na nahi tara token expire heichi na nahi ja di nahi redirect to dashboardelse to login ok

  //}

}
