import { ZomatoServiceService } from './../services/zomato-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent implements OnInit {

  constructor(private zs: ZomatoServiceService) { }

  ngOnInit() {
    this.zs.searchRestaurants();
  }

}
