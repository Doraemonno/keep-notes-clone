from django.shortcuts import render,redirect
from .models import userNotes
# Create your views here.

def main(request):
    data=userNotes.objects.all().order_by('-id')
    return render(request,"index.html",{"data":data})

def getData(request):
    if request.method=="POST":
        title=request.POST["title"]
        desc=request.POST["description"]
        userNotes.objects.create(title=title,description=desc)
    return redirect(main)

def delete(request,id):
    data=userNotes.objects.get(pk=id)
    data.delete()
    return redirect(main)

def edit(request,id):
    data=userNotes.objects.get(pk=id)
    data.title=request.POST["title"]
    # data.description=request.POST["description"]
    data.save()
    return redirect(main)