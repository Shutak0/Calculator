from django.shortcuts import render
def index(request): 
    return render(request, 'html/index.html')
def comparison(request):
    return render(request, 'html/comparison.html')
def converter(request):
    return render(request, 'html/converter.html')