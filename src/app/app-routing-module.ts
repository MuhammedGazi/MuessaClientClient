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
    {path:'claydesignimage/update/:id',component:UpdateClayDesignImage}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
