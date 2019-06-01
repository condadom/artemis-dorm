import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArtemisDormSharedLibsModule, ArtemisDormSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ArtemisDormSharedLibsModule, ArtemisDormSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ArtemisDormSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArtemisDormSharedModule {
  static forRoot() {
    return {
      ngModule: ArtemisDormSharedModule
    };
  }
}
