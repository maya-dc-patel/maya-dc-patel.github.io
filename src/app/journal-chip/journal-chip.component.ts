import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JournalService } from '../journal/journal.service';
import { Journal } from '../models/journal';

@Component({
  selector: 'app-journal-chip',
  templateUrl: './journal-chip.component.html',
  styleUrls: ['./journal-chip.component.css']
})
export class JournalChipComponent implements OnInit {
  @Input() name!: String;
  @Input() owner!: String;
  @Input() journal!: Journal;

  constructor(
    private _sanitizer: DomSanitizer,
    private journalService: JournalService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  viewJournalEntries(name: String) {
    this.router.navigate([`journal/${name}`]);
  }
  createJournal() {
    let journal = {
      name: this.name,
      owner: this.owner,
      entries: [],
      imageUrl: ''
    };
    console.log('journal', journal);

    this.journalService.sendJournalData(journal).subscribe((data) => {
      console.log('journals', data);
    });
  }
}
