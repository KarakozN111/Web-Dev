import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, VacancyListComponent],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})

export class CompanyListComponent {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }
}