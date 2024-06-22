import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../interface/stdForm.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('stdForm') stdForm!: NgForm;
  @Output() emmitStd: EventEmitter<Istd> = new EventEmitter<Istd>()


  onStdFormSubmit() {
    if (this.stdForm.valid) {
      let newStd = this.stdForm.value;
      console.log(newStd)
      this.emmitStd.emit(newStd)
      Swal.fire({
        title: `New Student ${newStd.fname}  ${newStd.lname} Added Successfully!!! `,
        icon: 'success',
        timer: 2000
      })
      this.stdForm.reset()
    }
    else{
      Swal.fire({
        title: `Please Complete All Mandatory Fields!!! `,
        icon: 'error',
        timer: 2000
      })
    }
  }

}
