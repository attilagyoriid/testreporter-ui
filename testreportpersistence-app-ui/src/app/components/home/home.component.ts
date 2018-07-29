import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'globo mbt',
    'globo super',
    'globo prime'
  ];
  bikeForm: FormGroup;
  validMessage: string;
  invalid: string[];

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  phone: new FormControl('', Validators.required),
  model: new FormControl('', Validators.required),
  serialNumber: new FormControl('', Validators.required),
  purchasePrice: new FormControl('', Validators.required),
    purchaseDate: new FormControl('', Validators.required),
    });
  }

  submitRegistration() {
    this.invalid = this.findInvalidControls();
    for (const i of this.invalid) {
      console.log(i); // "4", "5", "6"
    }
    if (this.bikeForm.valid) {
      this.validMessage = 'Your bike registration has been submitted!Thank you!';
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }

  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.bikeForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

}
