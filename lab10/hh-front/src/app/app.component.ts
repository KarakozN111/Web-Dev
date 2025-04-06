import { Component } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CompanyListComponent],
  template: `
    <div class="container">
      <app-company-list></app-company-list>
    </div>
  `,
  styles: []
})
export class AppComponent {}