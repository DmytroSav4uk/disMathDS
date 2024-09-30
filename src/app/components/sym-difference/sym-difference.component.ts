import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-sym-difference',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sym-difference.component.html',
  styleUrl: './sym-difference.component.css'
})
export class SymDifferenceComponent implements OnInit {
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

  symDifference(setA: any, setB: any) {
    const difference1 = setA.filter((element: any) => !setB.includes(element));
    const difference2 = setB.filter((element: any) => !setA.includes(element));
    return [...difference1, ...difference2];
  }


  onSubmit() {
    console.log('Your form data : ', this.setForm.value);
    let setAArr = this.setForm.value.setA.split(',');
    let setBArr = this.setForm.value.setB.split(',');
    this.result = this.symDifference(setAArr, setBArr)
  }
}
