import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;
  public errorMsg = 'Loading...';

  constructor(private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data;
      },
      (err) => {
        console.error(err);
        this.errorMsg = err.message;
      },
      () => console.log('bikes loaded')
    );
  }

  public gotoProductDetails(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}
