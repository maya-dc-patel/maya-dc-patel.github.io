import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal/journal.service';
import {Entry} from '../models/entry';
import { Journal } from '../models/journal';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
journalName!: string | null;
  constructor(private route: ActivatedRoute, private journalService: JournalService, private fb: FormBuilder) { }
  public entryForm: FormGroup = this.fb.group({
    content: ""
  });
  ngOnInit(): void {
    this.journalName = this.route.snapshot.paramMap.get('name');
  }
  add() {
    var entry = {
      content: this.entryForm.controls['content'].value,
    }
    console.log(entry);
    this.journalService.getJournals().subscribe(list => {
      list = list.filter((j:Journal) => j.name == this.journalName);
      let j  = list[0];
      j.entries.push(entry);
      console.log(j)
      this.journalService.updateJournal(j).subscribe((next) => alert('Tea saved successfully'));
    })
    
  }

}
