import {createFeatureSelector} from "@ngrx/store";

export const selectRemoveCounter = createFeatureSelector<number>('removeCounter');
