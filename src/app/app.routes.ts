import { Routes } from '@angular/router';
import {IntersectionComponent} from "./components/intersection/intersection.component";
import {SetDifferenceComponent} from "./components/set-difference/set-difference.component";
import {SymDifferenceComponent} from "./components/sym-difference/sym-difference.component";
import {UnionComponent} from "./components/union/union.component";

export const routes: Routes = [
  { path: 'intersection', component: IntersectionComponent },
  { path: 'setDifference', component: SetDifferenceComponent },
  { path: 'symDifference', component: SymDifferenceComponent },
  { path: 'union', component: UnionComponent },
];
