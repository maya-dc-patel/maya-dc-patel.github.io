import { SafeResourceUrl } from '@angular/platform-browser';
import { Entry } from './entry';
import { Ingredient } from './ingredient';

export interface Journal {
  name: String;
  owner: String;
  entries: Entry[];
  imageUrl: SafeResourceUrl;
}
