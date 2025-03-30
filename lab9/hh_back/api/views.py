from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySer, VacancySer

@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        return Response(CompanySer(companies, many=True).data)
    
    serializer = CompanySer(data=request.data, many=isinstance(request.data, list))
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        return Response(CompanySer(company).data)
    
    if request.method == 'PUT':
        serializer = CompanySer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    company.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
    
    vacancies = company.vacancies.all()
    return Response(VacancySer(vacancies, many=True).data)

@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        return Response(VacancySer(vacancies, many=True).data)
    
    serializer = VacancySer(data=request.data, many=isinstance(request.data, list))
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist:
        return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        return Response(VacancySer(vacancy).data)
    
    if request.method == 'PUT':
        serializer = VacancySer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    vacancy.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return Response(VacancySer(vacancies, many=True).data)
