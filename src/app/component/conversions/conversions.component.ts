import { QuantityService } from 'src/app/services/quantity_service/quantity.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.scss'],
})
export class ConversionsComponent implements OnInit {
  constructor(private httpPost: QuantityService) {}

  @Input() subUnit: any[];
  @Input() primaryUnit: string;
  flagOne: boolean = false;
  flagTwo: boolean = false;

  units: string;
  initialUnit: string;
  outputUnit: string;
  initialValue: number;
  outputValue;
  finalResult = 0;
  boxValue: string = '';
  data;

  ngOnInit(): void {}

  createData(unitOne, unitTwo, initialValue) {
    this.initialUnit = unitOne;
    this.outputUnit = unitTwo;
    this.initialValue = initialValue;
    this.data = {
      initialUnit:
        this.boxValue === 'boxOne' ? this.initialUnit : this.outputUnit,
      initialValue: this.initialValue,
      outputUnit:
        this.boxValue === 'boxOne' ? this.outputUnit : this.initialUnit,
      units: this.primaryUnit,
    };
  }

  setFlag() {
    this.flagOne = false;
    this.flagTwo = false;
  }

  originMethod() {
    this.httpPost.conversionValue(this.data).subscribe(
      (resp: Response) => {
        this.outputValue = resp;
        this.finalResult = this.outputValue.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  conversionBox(data, boxName) {
    this.boxValue = boxName;
    this.initialValue = data.target.value;
    if (!this.flagOne && !this.flagTwo) {
      this.createData(this.subUnit[0], this.subUnit[1], data.target.value);
    }

    if (this.flagOne && !this.flagTwo) {
      this.createData(this.initialUnit, this.subUnit[1], data.target.value);
    }

    if (!this.flagOne && this.flagTwo) {
      this.createData(this.subUnit[0], this.outputUnit, data.target.value);
    }

    if (this.flagOne && this.flagTwo) {
      this.createData(this.initialUnit, this.outputUnit, data.target.value);
    }
    this.originMethod();
  }

  subUnits(unitOne) {
    this.flagOne = true;
    this.initialUnit = unitOne.target.value;
  }

  subUnitsTWO(unitTwo) {
    this.flagTwo = true;
    this.outputUnit = unitTwo.target.value;
  }
}
