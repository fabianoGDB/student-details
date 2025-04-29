import { Component } from '@angular/core';
import { Student } from '../../model/student.type';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'students-details-landing',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgbHighlight],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  filter: FormControl;
  students: Student[] = [
	{
	  name: "Paul Spencer",
	  city: "Fort Freidafield",
	  studentImage: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Brazil_%28folding%29.gif",
	  state: "VT",
	  country: "Kazakhstan",
	  physics: 11,
	  chemistry: 21,
	  maths: 6,
	  computer: 5
	},
	{
	  name: "Joseph Bergnaum",
	  city: "Cartwrightworth",
	  studentImage: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Brazil_%28folding%29.gif",
	  state: "VA",
	  country: "Jordan",
	  physics: 25,
	  chemistry: 2,
	  maths: 4,
	  computer: 9
	},
  ];

  constructor(private fb: FormBuilder){
	  this.filter = this.fb.control("", {nonNullable: true});
  }
}
