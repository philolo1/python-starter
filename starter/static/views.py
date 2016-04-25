from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings

def index(request, title=settings.SITE_NAME, meta=()):
	context = {
		"title": title,
		"meta_tags": (("og:site_name", settings.SITE_NAME), ) + meta
	}
	return render(request, 'static/index.html', context)
