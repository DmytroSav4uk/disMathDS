import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-intersection',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './intersection.component.html',
  styleUrl: './intersection.component.css'
})
export class IntersectionComponent {
  setForm!: FormGroup;
  result: any;

  constructor(private formBuilder: FormBuilder) {
    this.createSetForm();
  }


  ngOnInit() {
    this.createSetForm()
  }

  createSetForm() {
    this.setForm = this.formBuilder.group({
      setA: ['', [Validators.required, Validators.pattern(/^[\d,]*$/)]],
      setB: ['', [Validators.required, Validators.pattern(/^[\d,]*$/)]]
    });
  }

  intersection(setA: any, setB: any) {
    return setA.filter((value:any) => setB.includes(value));
  }


  onSubmit() {
    console.log('Your form data : ', this.setForm.value);
    let setAArr = this.setForm.value.setA.split(',');
    let setBArr = this.setForm.value.setB.split(',');
    this.result = this.intersection(setAArr, setBArr)
  }
}
