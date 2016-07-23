from rest_framework import serializers
from gestion.models import Alumno, Materia


class AlumnoSerializable(serializers.ModelSerializer):
	class Meta:
		model = Alumno
		fields = ('nombres','apellidos','cedula')

class MateriaSerializable(serializers.ModelSerializer):
	class Meta:
		model = Materia
		fields = ('nombreMate','cupos')

