import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DraftMgmtEntryComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: DraftMgmtEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminDraftMgmtEntryRoutingModule {}
