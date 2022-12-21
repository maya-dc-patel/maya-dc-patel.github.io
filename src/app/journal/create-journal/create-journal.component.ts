import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html'
})
export class CreateJournalComponent implements OnInit {
  public name = '';
  public owner = '';
  public image = '';

  public journalForm: FormGroup = this.fb.group({
    name: [this.name, [Validators.required]],
    owner: [this.owner, [Validators.required]]
  });
  constructor(
    private _sanitizer: DomSanitizer,

    private journalService: JournalService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.uploadFile(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
  uploadFile(file: any) {
    this.image = file;
    console.log(this.image);
    console.log(this._sanitizer.bypassSecurityTrustResourceUrl(this.image).toString());
  }
  formatImageUrl() {
  //  console.log(this._sanitizer.bypassSecurityTrustResourceUrl(this.image).toString());

    return this._sanitizer.bypassSecurityTrustResourceUrl(this.image);
  
  }

  createJournal() {
    console.log('form', this.journalForm);
    console.log('createJournal');
    // console.log(this.image);
    let journal = {
      name: this.journalForm.controls['name'].value,
      owner: this.journalForm.controls['owner'].value,
      entries: [],
      imageUrl: this.image
    };
    console.log('journal', journal);

    this.journalService
      .sendJournalData(journal)
      .subscribe((next) => alert('Journal saved successfully'));
  }
}
