import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../journal/journal.service';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.css']
})
export class DrinksPageComponent implements OnInit {
addTea() {
  this.router.navigate([`add-tea-page/`]);
}
  constructor(   private route: ActivatedRoute,
    private journalService: JournalService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
