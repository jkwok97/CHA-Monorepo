import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
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
