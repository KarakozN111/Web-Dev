from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=1000)
    description = models.TextField()
    city = models.CharField(max_length=1000)
    address = models.TextField()
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "company"
        verbose_name_plural = "companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=1000)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "vacancy"
        verbose_name_plural = "vacancies"
