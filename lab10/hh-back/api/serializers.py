from rest_framework import serializers
from .models import Company, Vacancy

class CompanySer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class VacancySer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'