import { RouterModule } from '@angular/router';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCategory } from './admin-components/category/create-category/create-category';
import { UpdateCategory } from './admin-components/category/update-category/update-category';
import { ClayDesign } from './admin-components/clay-design/clay-design';
import { CreateClayDesign } from './admin-components/clay-design/create-clay-design/create-clay-design';
import { UpdateClayDesign } from './admin-components/clay-design/update-clay-design/update-clay-design';
import { ClayDesignImage } from './admin-components/clay-design-image/clay-design-image';
import { CreateClayDesignImage } from './admin-components/clay-design-image/create-clay-design-image/create-clay-design-image';
import { UpdateClayDesignImage } from './admin-components/clay-design-image/update-clay-design-image/update-clay-design-image';
import { InvitationType } from './admin-components/invitation-type/invitation-type';
import { UpdateInvitationType } from './admin-components/invitation-type/update-invitation-type/update-invitation-type';
import { CreateInvitationType } from './admin-components/invitation-type/create-invitation-type/create-invitation-type';
import { InvitationCard } from './admin-components/invitation-card/invitation-card';
import { Createinvitationcard } from './admin-components/invitation-card/createinvitationcard/createinvitationcard';
import { Updateinvitationcard } from './admin-components/invitation-card/updateinvitationcard/updateinvitationcard';
import { InvitationTypeImage } from './admin-components/invitation-type-image/invitation-type-image';
import { CreateinvitationTypeImage } from './admin-components/invitation-type-image/createinvitation-type-image/createinvitation-type-image';
import { UpdateinvitationTypeImage } from './admin-components/invitation-type-image/updateinvitation-type-image/updateinvitation-type-image';
import { PhotoPrints } from './admin-components/photo-prints/photo-prints';
import { CreatephotoPrints } from './admin-components/photo-prints/createphoto-prints/createphoto-prints';
import { UpdatephotoPrints } from './admin-components/photo-prints/updatephoto-prints/updatephoto-prints';
import { PhotoPrintImage } from './admin-components/photo-print-image/photo-print-image';
import { CreatephotoPrintImage } from './admin-components/photo-print-image/createphoto-print-image/createphoto-print-image';
import { UpdatephotoPrintImage } from './admin-components/photo-print-image/updatephoto-print-image/updatephoto-print-image';
import { Sidebar } from './layouts/admin-layout/components/sidebar/sidebar';
import { Footer } from './layouts/admin-layout/components/footer/footer';
import { HomeComponents } from './home-components/home-components';
import { Uinavbar } from './layouts/ui-layout/uinavbar/uinavbar';
import { Navbar } from './layouts/admin-layout/components/navbar/navbar';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { Uifooter } from './layouts/ui-layout/uifooter/uifooter';
import { Banner } from './home-components/banner/banner';
import { Clayshop } from './home-components/clayshop/clayshop';
import { Invitationshop } from './home-components/invitationshop/invitationshop';
import { Photoshop } from './home-components/photoshop/photoshop';
import { ClayDetail } from './home-components/clay-detail/clay-detail';
import { InvitationDetail } from './home-components/invitation-detail/invitation-detail';
import { InvitationCustom } from './home-components/invitation-custom/invitation-custom';
import { PhotoDetail } from './home-components/photo-detail/photo-detail';
import { Createbanner } from './admin-components/banner/createbanner/createbanner';
import { Updatebanner } from './admin-components/banner/updatebanner/updatebanner';
import { TokenInterceptor } from './_interceptors/token-interceptor';
import { Login } from './home-components/login/login';

@NgModule({
  declarations: [
    App,
    AdminLayout,
    Category,
    CreateCategory,
    UpdateCategory,
    ClayDesign,
    CreateClayDesign,
    UpdateClayDesign,
    ClayDesignImage,
    CreateClayDesignImage,
    UpdateClayDesignImage,
    InvitationType,
    CreateInvitationType,
    UpdateInvitationType,
    InvitationCard,
    Createinvitationcard,
    Updateinvitationcard,
    InvitationTypeImage,
    CreateinvitationTypeImage,
    UpdateinvitationTypeImage,
    PhotoPrints,
    CreatephotoPrints,
    UpdatephotoPrints,
    PhotoPrintImage,
    CreatephotoPrintImage,
    UpdatephotoPrintImage,
    Sidebar,
    Navbar,
    Footer,
    HomeComponents,
    Uinavbar,
    UiLayout,
    Uifooter,
    Banner,
    Clayshop,
    Invitationshop,
    Photoshop,
    ClayDetail,
    InvitationDetail,
    InvitationCustom,
    PhotoDetail,
    Createbanner,
    Updatebanner,
    Login,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [App]
})
export class AppModule { }
