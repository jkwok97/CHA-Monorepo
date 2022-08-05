import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  AwardsService,
  DisplayService,
  LeagueDataService,
  TeamInfoService,
} from './services';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    TeamInfoService,
    LeagueDataService,
    DisplayService,
    AwardsService,
  ],
})
export class ChaSharedServicesModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ChaSharedServicesModule
  ) {
    if (parentModule) {
      throw new Error(
        'ChaSharedServicesModule is already loaded. Import only in AppModule'
      );
    }
  }
}
