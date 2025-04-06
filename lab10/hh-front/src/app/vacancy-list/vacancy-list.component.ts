import { Component, Input } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Vacancy } from '../models/vacancy';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];
company: any;

  constructor(private companyService: CompanyService) {}

  ngOnChanges(): void {
    if (this.companyId) {
      this.companyService.getCompanyVacancies(this.companyId)
        .subscribe(vacancies => this.vacancies = vacancies);
    }
  }
}