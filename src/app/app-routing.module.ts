import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { GerencialComponent } from './pages/gerencial/gerencial.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', component: HomeComponent},
      { path: 'gerencial', component: GerencialComponent },
      { path: 'empresas', component: EmpresaComponent },
    ] 
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    GerencialComponent,
    EmpresaComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
