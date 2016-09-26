Python Starter
=====================

This tech stack uses React on the frontend and Django/Python on the backend.


## Development Setup
This starter pack uses [Docker](https://www.docker.com/) to set up the development environment. You should install Docker with [docker-compose](https://docs.docker.com/compose/).

After installing Docker, you should first copy `sample.env` to `.env` and modify its values:

* `SECRET` should be a random string

You should then build the Docker container for the development project.

```
docker-compose build
```

You can then start the app:
```
docker-compose up
```

Once the app is running, you should initialize the database:

```
docker-compose run python starter/manage.py migrate
```

The app will be available at http://localhost:8000 and includes live reloading of code.

Before you can load the homepage, you need to post a blog entry. You can do so from the admin interface (instructions [below](#administration-interface).

## Heroku set up

1. Create a heroku app:

        heroku apps:create ${starter_project}

2. Set the first buildpacks:

        heroku buildpacks:set heroku/nodejs
        heroku buildpacks:add heroku/python

3. Add postgres:

        heroku addons:create heroku-postgresql:hobby-dev

4. Set configuration:

        heroku config:set SECRET=make_this_random

5. Set up the database and run migrations:

        heroku run python starter/manage.py migrate

## Administration Interface
The administration interface is availabe at http://localhost:8000/admin/ and requires an admin user to access. To create an admin user, just run this command:

```
docker-compose run python starter/manage.py createsuperuser
```

## Configuration
Configuration comes from two primary places.

`shared_config.json` includes shared configuration settings between the frontend and backend.

Environment variables (which Foreman loads from `.env`) store all other configuration settings, including private keys.
