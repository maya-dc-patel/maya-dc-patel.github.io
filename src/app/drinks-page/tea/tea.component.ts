import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  } from '@angular/material/chips';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {
  public name = '';
  public ingredients = []
  public benefits = []
  // @ViewChild('chipList') chipList!: MatChipList;
  public teaForm: FormGroup = this.fb.group({
    name: [this.name, [Validators.required]],
    ingredients: [this.ingredients, [Validators.required]],
    benefits: [this.benefits]
  });
  constructor(  private fb: FormBuilder) { }

  ngOnInit(): void {
    // const matChipList: MatChipList = this.chipList as MatChipList;
  }

  addTea() {
    let tea = {
      name: this.teaForm.controls['name'].value,
      ingredients: this.teaForm.controls['ingredients'].value,
      benefits: [],
      
    };
    console.log(tea)
//update for Tea in database
    // this.journalService
    //   .sendJournalData(journal)
    //   .subscribe((next) => alert('Journal saved successfully'));
  }

}
