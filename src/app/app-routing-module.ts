import { UpdatephotoPrintImage } from './admin-components/photo-print-image/updatephoto-print-image/updatephoto-print-image';
import { UpdateinvitationTypeImage } from './admin-components/invitation-type-image/updateinvitation-type-image/updateinvitation-type-image';
import { CreateinvitationTypeImage } from './admin-components/invitation-type-image/createinvitation-type-image/createinvitation-type-image';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { CreateCategory } from './admin-components/category/create-category/create-category';
import { UpdateCategory } from './admin-components/category/update-category/update-category';
import { ClayDesign } from './admin-components/clay-design/clay-design';
import { CreateClayDesign } from './admin-components/clay-design/create-clay-design/create-clay-design';
import { UpdateClayDesign } from './admin-components/clay-design/update-clay-design/update-clay-design';
import { ClayDesignImage } from './admin-components/clay-design-image/clay-design-image';
import { UpdateClayDesignImage } from './admin-components/clay-design-image/update-clay-design-image/update-clay-design-image';
import { CreateClayDesignImage } from './admin-components/clay-design-image/create-clay-design-image/create-clay-design-image';
import { InvitationType } from './admin-components/invitation-type/invitation-type';
import { UpdateInvitationType } from './admin-components/invitation-type/update-invitation-type/update-invitation-type';
import { CreateInvitationType } from './admin-components/invitation-type/create-invitation-type/create-invitation-type';
import { InvitationCard } from './admin-components/invitation-card/invitation-card';
import { Createinvitationcard } from './admin-components/invitation-card/createinvitationcard/createinvitationcard';
import { Updateinvitationcard } from './admin-components/invitation-card/updateinvitationcard/updateinvitationcard';
import { InvitationTypeImage } from './admin-components/invitation-type-image/invitation-type-image';
import { PhotoPrints } from './admin-components/photo-prints/photo-prints';
import { CreatephotoPrints } from './admin-components/photo-prints/createphoto-prints/createphoto-prints';
import { UpdatephotoPrints } from './admin-components/photo-prints/updatephoto-prints/updatephoto-prints';
import { PhotoPrintImage } from './admin-components/photo-print-image/photo-print-image';
import { CreatephotoPrintImage } from './admin-components/photo-print-image/createphoto-print-image/createphoto-print-image';

const routes: Routes = [
  //admin-layout routes
  {path:'admin',component:AdminLayout,children:[
    {path:'category',component:Category},
    {path:'category/create',component:CreateCategory},
    {path:'category/update/:id',component:UpdateCategory},

    {path:'claydesign',component:ClayDesign},
    {path:'claydesign/create',component:CreateClayDesign},
    {path:'claydesign/update/:id',component:UpdateClayDesign},

    {path:'claydesignimage',component:ClayDesignImage},
    {path:'claydesignimage/create',component:CreateClayDesignImage},
    {path:'claydesignimage/update/:id',component:UpdateClayDesignImage},

    {path:'invitationtype',component:InvitationType},
    {path:'invitationtype/create',component:CreateInvitationType},
    {path:'invitationtype/update/:id',component:UpdateInvitationType},

    {path:'invitationcard',component:InvitationCard},
    {path:'invitationcard/create',component:Createinvitationcard},
    {path:'invitationcard/update/:id',component:Updateinvitationcard},

    {path:'invitationtypeimage',component:InvitationTypeImage},
    {path:'invitationtypeimage/create',component:CreateinvitationTypeImage},
    {path:'invitationtypeimage/update/:id',component:UpdateinvitationTypeImage},

    {path:'photoprints',component:PhotoPrints},
    {path:'photoprints/create',component:CreatephotoPrints},
    {path:'photoprints/update/:id',component:UpdatephotoPrints},

    {path:'photoprintimage',component:PhotoPrintImage},
    {path:'photoprintimage/create',component:CreatephotoPrintImage},
    {path:'photoprintimage/update/:id',component:UpdatephotoPrintImage},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
