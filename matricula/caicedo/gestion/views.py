from django.shortcuts import render,redirect


from .models import Alumno,Materia
from .forms import FormularioAlumno, FormularioMateria


def listar(request):
	al = Alumno.objects.all()
	mate = Materia.objects.all()
	context = {
	'Alumno': al,
	'Materia': mate,
	}
	return render(request,'listar.html',context)

def crearAlum(request):
	f = FormularioAlumno(request.POST or None)

	if f.is_valid():
		f_data = f.cleaned_data
		crearAlum = Alumno()
		crearAlum.nombres = f_data.get("nombres")
		crearAlum.apellidos = f_data.get("apellidos")
		crearAlum.cedula = f_data.get("cedula")		
		if(crearAlum.save() != True):
			return redirect(listar)
	context = {
		"form" : f
	}

	return render(request,'crearAlum.html',context)

def crearMate(request):
	f = FormularioMateria(request.POST or None)

	if f.is_valid():
		f_data = f.cleaned_data
		crearMate = Materia()
		crearMate.nombreMate = f_data.get("nombreMate")
		crearMate.cupos = f_data.get("cupos")
		if crearMate.save() != True:
			return redirect(listar)

	context = {
		"form" : f
	}

	return render(request,'crearMate.html',context)

			








