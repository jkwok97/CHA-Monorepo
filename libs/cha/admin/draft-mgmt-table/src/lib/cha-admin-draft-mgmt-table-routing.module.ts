import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DraftMgmtTableComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: DraftMgmtTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ChaAdminDraftMgmtTableRoutingModule {}
