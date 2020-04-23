import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', 
    component: LayoutComponent, 
    children: [
      { path: 'home', component: HomePageComponent},
      { path: 'empresas', component: EmpresasComponent },
    ] 
  },
];

@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    EmpresasComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
