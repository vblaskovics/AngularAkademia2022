import { Injectable } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";
import { Accordion } from '../components/accordion/models/accordion';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

@Injectable({
  providedIn: 'root'
})
export class AccordionDataService {

  accordionList: Accordion[] = []

  constructor() {
      this.accordionList = [
        { id: '2nvn83nzv42o', title: 'Example accordion 1' , description: lorem.generateSentences(5), toggled: false},
        { id: '1avns2n8v43n', title: 'Example accordion 2' , description: lorem.generateSentences(6), toggled: false},
        { id: 'nvnz1v2z4vn1', title: 'Example accordion 3' , description: lorem.generateSentences(5), toggled: false},
        { id: 'vnhunwv1z12v', title: 'Example accordion 4' , description: lorem.generateSentences(7), toggled: false},
      ]
   }
}
