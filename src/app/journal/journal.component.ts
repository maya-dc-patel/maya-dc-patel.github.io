import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from '../models/journal';
import { JournalService } from './journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1, 1)'
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scale(0.95, 0.95)'
        })
      ),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')])
    ])
  ]
})
export class JournalComponent implements OnInit {
  currentJournal!: Journal | undefined;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log();
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.journalService.getJournals().subscribe((data) => {
      console.log(
        data.find((journal: { name: string | null }) => journal.name === name)
      );
      this.currentJournal = data.find(
        (journal: { name: string | null }) => journal.name === name
      );
      console.log(this.currentJournal);
    });
  }

  addEntry(): void {
    this.router.navigate([`add-entry/${this.currentJournal?.name}`]);
  }
}
