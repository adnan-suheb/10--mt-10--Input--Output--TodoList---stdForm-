import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../interface/stdForm.interface';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() getStdArray:Array<Istd>=[];

}
