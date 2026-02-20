import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { provideHttpClient } from '@angular/common/http';
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
    Updateinvitationcard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
