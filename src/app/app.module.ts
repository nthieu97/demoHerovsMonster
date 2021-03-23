import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'monsters', component: MonsterListComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'prefix' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    MonsterListComponent,
    HeroDetailComponent,
    MonsterDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
