import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChaSharedServicesModule } from '@cha/shared/services';

import { coreReducer } from './states';
import { UserTeamEffects } from './states/user-team/user-team.effects';
import { UserTeamFacade } from './states/user-team/user-team.facade';
import { DisplayEffects } from './states/display/display.effects';
import { AwardEffects } from './states/awards/awards.effects';
import { AwardsFacade } from './states/awards/awards.facade';
import { LeagueDataEffects } from './states/league-data/league-data.effects';
import { LeagueDataFacade } from './states/league-data/league-data.facade';
import { DisplayFacade } from './states/display/display.facade';


@NgModule({
  imports: [
    CommonModule,
    ChaSharedServicesModule,
    StoreModule.forFeature('core', coreReducer),
    EffectsModule.forFeature([
      UserTeamEffects,
      DisplayEffects,
      AwardEffects,
      LeagueDataEffects,
    ]),
  ],
  providers: [
    UserTeamEffects,
    UserTeamFacade,
    DisplayFacade,
    DisplayEffects,
    AwardsFacade,
    AwardEffects,
    LeagueDataFacade,
    LeagueDataEffects,
  ],
})
export class ChaDomainCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ChaDomainCoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'ChaDomainCoreModule is already loaded. Import only in AppModule'
      );
    }
  }
}
