from django import forms
from .models import Alumno
from .models import Materia

class FormularioAlumno(forms.ModelForm):
	class Meta:
		model = Alumno
		fields = ['nombres','apellidos','cedula']


class FormularioMateria(forms.ModelForm):
	class Meta:
		model = Materia
		fields = ['nombreMate','cupos']