import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-union',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './union.component.html',
  styleUrl: './union.component.css'
})
export class UnionComponent implements OnInit {

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

  union(setA: any, setB: any) {
    return new Set([...setA, ...setB]);
  }


  onSubmit() {
    console.log('Your form data : ', this.setForm.value);
    let setAArr = this.setForm.value.setA.split(',');
    let setBArr = this.setForm.value.setB.split(',');
    this.result = this.union(setAArr, setBArr)
    }
}
