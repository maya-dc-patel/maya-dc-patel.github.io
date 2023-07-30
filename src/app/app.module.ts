import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CreateJournalComponent } from './journal/create-journal/create-journal.component';
import { HeaderComponent } from './header/header.component';
import { IngredientService } from './ingredients/ingredient.service';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory/inventory.service';
import { JournalEntryComponent } from './journal/journal-entry/journal-entry.component';
import { JournalComponent } from './journal/journal.component';
import { JournalService } from './journal/journal.service';
import { StoreService } from './store.service';
import { MatIconModule } from '@angular/material/icon';
import { ViewAllJournalsComponent } from './journal/view-all-journals/view-all-journals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JournalChipComponent } from './journal-chip/journal-chip.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { CbtJournalComponent } from './cbt-journal/cbt-journal.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CbtThinkingPatternComponent } from './cbt-thinking-pattern/cbt-thinking-pattern.component';
import { DietComponentComponent } from './diet-component/diet-component.component';
import { DrinksPageComponent } from './drinks-page/drinks-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { TeaComponent } from './drinks-page/tea/tea.component';
import { AddTeaPageComponent } from './drinks-page/tea/add-tea-page/add-tea-page.component';
import { MatChipInput, MatChipInputEvent, MatChipsModule,MatChip} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    InventoryComponent,
    JournalComponent,
    HeaderComponent,
    JournalEntryComponent,
    CreateJournalComponent,
    ViewAllJournalsComponent,
    HomepageComponent,
    JournalChipComponent,
    AddEntryComponent,
    CbtJournalComponent,
    CbtThinkingPatternComponent,
    DietComponentComponent,
    DrinksPageComponent,
    FoodPageComponent,
    TeaComponent,
  
    // AddTeaPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTabsModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [
    AppService,
    IngredientService,
    MatCardModule,
    InventoryService,
    JournalService,
    StoreService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
