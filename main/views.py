from django.shortcuts import render

"""
 * API No. 1
 * API Name : 메인
 * [GET] /
"""
def index(request):
    return render(request, 'main/mBase.html')