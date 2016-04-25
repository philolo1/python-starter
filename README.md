Python Starter
=====================

This tech stack uses React on the frontend and Django/Python on the backend.


## Development Setup
The following dependencies are needed for running the app locally:

* Python 3
* Node >= v0.12
* Postgres
* Gulp (install with `npm install -g gulp`)

Assuming the dependencies are installed, you should first copy `sample.env` to `.env` and modify its values:

* `DATABASE_URL` should point to your local Postgres database being used for this project.
* `SECRET` should be a random string

You should then install the necessary Python and NPM libraries. It's recommended to do this in a [virtualenv](https://virtualenv.readthedocs.org/en/latest/).

```
npm install -d
pip install -r requirements.txt
```

Once everything is installed, you should initialize the database:

```
foreman run python starter/manage.py migrate
```

You can then start the app:

```
foreman start
```

It will be available at http://localhost:5000 and includes live reloading of code.

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
foreman run python starter/manage.py createsuperuser
```

## Configuration
Configuration comes from two primary places.

`shared_config.json` includes shared configuration settings between the frontend and backend.

Environment variables (which Foreman loads from `.env`) store all other configuration settings, including private keys.
