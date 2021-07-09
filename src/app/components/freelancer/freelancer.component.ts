import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css', '../../../assets/css/team.css']
})
export class FreelancerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  btnClick= function () {
    //this.router.navigateByUrl('/user');
};
}
