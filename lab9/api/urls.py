from django.urls import path
from .views import *
urlpatterns = [
    path('companies/', companies_list, name='company-list'),
    path('companies/<int:id>/', company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company-vacancies'),
    path('vacancies/', vacancies_list, name='vacancy-list'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
]
