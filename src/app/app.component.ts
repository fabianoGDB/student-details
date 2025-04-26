import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from '../model/student.type';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'students-details-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NgbHighlight],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-details';
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
