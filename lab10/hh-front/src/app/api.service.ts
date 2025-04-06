import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './models/company';
import { Vacancy } from './models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://localhost:8000/api';  

  constructor(private http: HttpClient) { }


  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/companies/${id}/`);
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/companies/${companyId}/vacancies/`);
  }


  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/`);
  }

 
  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.baseUrl}/vacancies/${id}/`);
  }

 
  getTopVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.baseUrl}/vacancies/top_ten/`);
  }
}
