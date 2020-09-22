import { ConversionsComponent } from './../conversions/conversions.component';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.scss'],
})
export class UnitTypeComponent implements OnInit {
  changeLength: boolean = false;
  changeTemperature: boolean = false;
  changeVolume: boolean = false;
  length: string = 'card card-length';
  onLength: boolean = false;
  temperature: string = 'card card-temperature';
  onTemperature: boolean = false;
  volume: string = 'card card-volume';
  onVolume: boolean = false;
  subUnit = [];
  inputOne: number = 0;
  inputTwo: number = 0;
  mainUnits = [];
  primaryUnit: string;
 
  constructor() {
    this.primaryUnit="LENGTH"
    this.changeLength = true;
    this.temperature = 'card card-temperature';
    this.volume = 'card card-volume';
    this.length = 'card-hold-length';
    this.onLength = true;
    this.changeTemperature = false;
    this.changeVolume = false;
    this.onTemperature = false;
    this.onVolume = false;
    this.subUnit = ['FEET', 'INCH', 'YARD', 'CENTIMETER'];
    this.inputOne = 0;
    this.inputTwo = 12;
  }

  ngOnInit(): void {}

  clickVolume(value) {
    
    console.log(value);
    this.primaryUnit = value;
    this.changeVolume = true;
    this.temperature = 'card card-temperature';
    this.length = 'card card-length';
    this.volume = 'card-hold-volume';
    this.onVolume = true;
    this.changeLength = false;
    this.changeTemperature = false;
    this.onLength = false;
    this.onTemperature = false;
    this.subUnit = ['LITRE', 'MILLILITRE', 'GALLON'];
    this.inputOne = 0;
    this.inputTwo = 1000;
  }

  onOutVolume() {
    if (this.onVolume === true) {
      this.changeVolume = true;
    } else {
      this.changeVolume = false;
    }
  }

  clickTemperature(value) {
    console.log(value);
    this.primaryUnit = value;
    this.changeTemperature = true;
    this.length = 'card card-length';
    this.volume = 'card card-volume';
    this.temperature = 'card-hold-temperature';
    this.onTemperature = true;
    this.changeLength = false;
    this.changeVolume = false;
    this.onLength = false;
    this.onVolume = false;
    this.subUnit = ['CELSIUS', 'FAHRENHEIT'];
    this.inputOne = 0;
    this.inputTwo = 32;
  }

  onTempOut() {
    if (this.onTemperature === true) {
      this.changeTemperature = true;
    } else {
      this.changeTemperature = false;
    }
  }

  clickLength(x) {
    console.log(x);
    this.primaryUnit = x;
    this.changeLength = true;
    this.temperature = 'card card-temperature';
    this.volume = 'card card-volume';
    this.length = 'card-hold-length';
    this.onLength = true;
    this.changeTemperature = false;
    this.changeVolume = false;
    this.onTemperature = false;
    this.onVolume = false;
    this.subUnit = ['FEET', 'INCH', 'YARD', 'CENTIMETER'];
    this.inputOne = 0;
    this.inputTwo = 12;
  }

  onOut() {
    if (this.onLength === true) {
      this.changeLength = true;
    } else {
      this.changeLength = false;
    }
  }
}
