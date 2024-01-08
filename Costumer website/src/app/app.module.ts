// import { BrowserModule } from "@angular/platform-browser";
// import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { RouterModule } from "@angular/router";
// import { AppRoutingModule } from "./app.routing";

// import { AppComponent } from "./app.component";
// import { NavbarComponent } from "./shared/navbar/navbar.component";
// import { FooterComponent } from "./shared/footer/footer.component";

// import { ComponentsModule } from "./components/components.module";
// import { ExamplesModule } from "./examples/examples.module";
// import { HttpClientModule } from "@angular/common/http";

// @NgModule({
//   declarations: [AppComponent, NavbarComponent, FooterComponent],
//   imports: [
//     BrowserModule,

//     NgbModule,
//     FormsModule,
//     RouterModule,
//     ComponentsModule,
//     ExamplesModule,
//     AppRoutingModule,
//     HttpClientModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";
import { environment } from "environments/environment";

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
