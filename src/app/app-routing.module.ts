import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJournalComponent } from './journal/create-journal/create-journal.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InventoryComponent } from './inventory/inventory.component';
import { JournalEntryComponent } from './journal/journal-entry/journal-entry.component';
import { JournalComponent } from './journal/journal.component';
import { ViewAllJournalsComponent } from './journal/view-all-journals/view-all-journals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { CbtJournalComponent } from './cbt-journal/cbt-journal.component';
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { AddTeaPageComponent } from './drinks-page/tea/add-tea-page/add-tea-page.component';
import { TeaComponent } from './drinks-page/tea/tea.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'journal/:name', component: JournalComponent },
  { path: 'journal/:name/entry/:name2', component: JournalEntryComponent },
  { path: 'create-journal', component: CreateJournalComponent },
  { path: 'view-all-journals', component: ViewAllJournalsComponent },
  { path: 'add-entry/:name', component: AddEntryComponent },
  { path: 'cbt-journal', component: CbtJournalComponent },
  {path: 'drinks-page', component: DrinksPageComponent },
  {path: 'food-page', component: FoodPageComponent },
  {path: 'add-tea-page', component: AddTeaPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
