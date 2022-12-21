import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal/journal.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private journalService: JournalService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
  }
  add() {
    // this.journalService.sendJournalData()
  }

}
