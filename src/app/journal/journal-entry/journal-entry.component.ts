import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from 'src/app/models/journal';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {
  currentJournal!: Journal |undefined;

  constructor(private route: ActivatedRoute, private journalService: JournalService) {}

  ngOnInit(): void {
    console.log();
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name)
    this.journalService.getJournals().subscribe((data) => {
      console.log(data.find((journal: { name: string | null; }) => journal.name === name))
      this.currentJournal = data.find((journal: { name: string | null; }) => journal.name === name);
      console.log(this.currentJournal);
    });
    // this.currentJournal = this.journalService.allJournals.find(journal => journal.name === name);
    // console.log(this.currentJournal);

  }
}
