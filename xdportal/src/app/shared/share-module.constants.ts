import { AppUserSearchComponent } from './search/search.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHomeComponent } from '../home/app-home.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonHelper } from './helper/common-helper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { HighlightSearch } from './pipe/highlight.pipe';
import { EllipsisPipe } from './pipe/ellipsis';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ImgSrcDirective } from './directives/no-image.directive';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export class SharedModuleConstants {
  static MODULE_IMPORTS = [
    RouterModule,
    CommonModule,
    FormsModule,
    SwiperModule,
    PerfectScrollbarModule,
    Ng2DeviceDetectorModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ];
  static MODULE_COMPONENTS = [
    AppHeaderComponent,
    AppFooterComponent,
    AppLayoutComponent,
    AppUserSearchComponent,
    AppHomeComponent,
    SearchFilterPipe,
    EllipsisPipe,
    HighlightSearch,
    ClickOutsideDirective,
    ImgSrcDirective
  ];
  static MODULE_PROVIDERS = [
    CommonHelper,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ];
}
