from django.db import models

class Alumno(models.Model):
	nombres = models.CharField(max_length=30)
	apellidos = models.CharField(max_length=30)
	cedula = models.CharField(max_length=10,unique=True)
	def __str__(self):
		return self.cedula


class Materia(models.Model):
	nombreMate = models.CharField(max_length=50)
	cupos = models.IntegerField()
	def __str__(self):
		return self.nombreMate
