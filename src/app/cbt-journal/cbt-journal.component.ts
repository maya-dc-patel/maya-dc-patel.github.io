import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbt-journal',
  templateUrl: './cbt-journal.component.html',
  styleUrls: ['./cbt-journal.component.css']
})
export class CbtJournalComponent implements OnInit {
thought: any;
distortionPatterns:boolean=  false;
newThought: any;
patterns:any =  [
  {
    pattern: 'all or nothing thinking',
    description: 'All-or-nothing thinking is also known as black-and-white thinking or polarized thinking. This type of thinking involves viewing things in absolute terms: Situations are always black or white, everything or nothing, good or bad, success or failure. ',
  extra: "<p>An example of all-or-nothing thinking is dwelling on mistakes and assuming you will never be able to do well, instead of acknowledging the error and trying to move past it.One way to overtime this cognitive distortion is to recognize that success and progress are not all-or-nothing concepts. By addressing this type of thinking and replacing self-defeating thoughts, you can feel better about your progress and recognize your strengths.</p>"},
  {
    pattern: 'overgeneralization',
    description: '<p>Overgeneralization happens when you make a rule after a single event or a series of coincidences.<br><br>The words "always" or "never" frequently appear in the sentence. ',
  extra: "<br><br>Because you have experience with one event playing out a certain way, you assume that all future events will have the same outcome.<br><br>For example, imagine that you made a suggestion about a work project that wasn\'t adopted in the final work. You might overgeneralize this and assume that no one at work ever listens to you or takes you seriously.One way to combat overgeneralization is to focus on using realistic language. <br><br>Instead of saying, 'I always do that!,' say something such as, 'That happens sometimes, but I\'ll try to do better next time."},
  {pattern: 'mental filters', 
  description: "A mental filter is the opposite of overgeneralization, but with the same negative outcome.<br/>Instead of taking one small event and generalizing it inappropriately, the mental filter takes one small event and focuses on it exclusively, filtering out anything else.",
extra: "A mental filter is the opposite of overgeneralization, but with the same negative outcome.<br/>Instead of taking one small event and generalizing it inappropriately, the mental filter takes one small event and focuses on it exclusively, filtering out anything else."},
{pattern: 'discounting the positive',
description: '',
extra: ''
}
]
selectDistortion(pattern: any) {
  console.log(pattern)
}
  constructor() { }

  ngOnInit(): void {
  }




}
