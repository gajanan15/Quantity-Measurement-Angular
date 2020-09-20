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
  @Input() inputOne: number;
  @Input() inputTwo: number;
  @Input() primaryUnit: string;

  units: string;
  initialUnit: string;
  outputUnit: string;
  initialValue: number;
  outputValue;
  finalResult = 0;

  ngOnInit(): void {}

  originMethod() {
    var data = {
      initialUnit: this.initialUnit,
      initialValue: this.initialValue,
      outputUnit: this.outputUnit,
      units: this.primaryUnit,
    };

    console.log('cvbg:  ', data);
    this.httpPost.conversionValue(data).subscribe(
      (resp: Response) => {
        console.log('Response: ', resp);
        this.outputValue = resp;
        console.log('ADF: ', this.outputValue.data);
        this.finalResult = this.outputValue.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  conversionBox(data) {
    console.log(data.target.value);
    this.initialValue = data.target.value;
    console.log('DotNet: ', this.units);
    this.originMethod();
  }

  subUnits(unitOne) {
    console.log(unitOne.target.value);
    this.initialUnit = unitOne.target.value;
    // this.originMethod();
  }

  subUnitsTWO(unitTwo) {
    console.log(unitTwo.target.value);
    this.outputUnit = unitTwo.target.value;
    // this.originMethod();
  }
}
