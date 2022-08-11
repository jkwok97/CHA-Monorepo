import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BladeAngularUiCardModule } from '@blade/angular/ui/card';
import { BladeAngularUiLayoutModule } from '@blade/angular/ui/layout';

import { ChaFrontRulesPlayerProtectionRoutingModule } from './cha-front-rules-player-protection-routing.module';

import { RulesPlayerProtectionComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    BladeAngularUiCardModule,
    BladeAngularUiLayoutModule,
    ChaFrontRulesPlayerProtectionRoutingModule,
  ],
  declarations: [RulesPlayerProtectionComponent],
})
export class ChaFrontRulesPlayerProtectionModule {}
