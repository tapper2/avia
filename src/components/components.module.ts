import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import {MyApp} from "../app/app.component";
import {IonicModule} from "ionic-angular";
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { EditRowComponent } from './edit-row/edit-row';
import { Header1Component } from './header1/header1';
@NgModule({
	declarations: [LoginComponent,
    HeaderComponent,
    FooterComponent,
    EditRowComponent,
    Header1Component],
	imports: [ IonicModule.forRoot(MyApp)],
	exports: [LoginComponent,
    HeaderComponent,
    FooterComponent,
    EditRowComponent,
    Header1Component]
})
export class ComponentsModule {}
