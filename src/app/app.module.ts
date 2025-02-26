import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MaterialModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
