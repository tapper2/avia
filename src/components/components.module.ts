import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import {MyApp} from "../app/app.component";
import {IonicModule} from "ionic-angular";
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { EditRowComponent } from './edit-row/edit-row';
@NgModule({
	declarations: [LoginComponent,
    HeaderComponent,
    FooterComponent,
    EditRowComponent],
	imports: [ IonicModule.forRoot(MyApp)],
	exports: [LoginComponent,
    HeaderComponent,
    FooterComponent,
    EditRowComponent]
})
export class ComponentsModule {}
