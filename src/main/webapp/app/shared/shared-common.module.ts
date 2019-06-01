import { NgModule } from '@angular/core';

import { ArtemisDormSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ArtemisDormSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ArtemisDormSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ArtemisDormSharedCommonModule {}
