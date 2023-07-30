import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { NgFor, AsyncPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TeaService } from '../tea.service';

@Component({
  selector: 'app-add-tea-page',
  templateUrl: './add-tea-page.component.html',
  styleUrls: ['./add-tea-page.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatAutocompleteModule,
    
    AsyncPipe,
    MatFormFieldModule, MatChipsModule, NgFor, MatIconModule, FormsModule,ReactiveFormsModule ],
})
export class AddTeaPageComponent implements OnInit {
  addOnBlur = true;
  public name = '';
  public ingredients:String[] = []
  public benefits:String[] = []
  
  public teaForm: FormGroup = this.fb.group({
    name: [this.name, [Validators.required]],
    ingredients: [this.ingredients, [Validators.required]],
    benefits: [this.benefits]
  });
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(  private fb: FormBuilder, private teaService: TeaService) { }

  ngOnInit(): void {
  }

  addTea() {

    let tea = {
      name: this.teaForm.controls['name'].value,
      ingredients: this.teaForm.controls['ingredients'].value,
      benefits: this.teaForm.controls['benefits'].value
      
    };
    console.log(tea)
//update for Tea in database
    this.teaService
      .sendTeaData(tea)
      .subscribe((next) => alert('Tea saved successfully'));
  }

  remove(name: String): void {
    const index = this.ingredients.indexOf(name);

    if (index >= 0) {
      this.ingredients.splice(index, 1);

      // this.announcer.announce(`Removed ${fruit}`);
    }
  }


  removeBenefit(name: String): void {
    const index = this.ingredients.indexOf(name);

    if (index >= 0) {
      this.benefits.splice(index, 1);

      // this.announcer.announce(`Removed ${fruit}`);
    }
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.ingredients.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  addBenefit(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.benefits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  

  edit(ingredient: String, event: MatChipInputEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(ingredient);
      return;
    }

    // Edit existing fruit
    const index = this.ingredients.indexOf(ingredient);
    if (index >= 0) {
      this.ingredients[index] = value;
    }
  }
}
