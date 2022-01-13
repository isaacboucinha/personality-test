
include .env
export

install:
	pip-compile
	pip-compile requirements-dev.in
	pip-sync requirements.txt requirements-dev.txt
	pre-commit install
	pre-commit run --all-files

createuser:
	python manage.py createsuperuser --database default

makemigrate:
	python manage.py makemigrations

migrate:
	python manage.py migrate

resetmigrate:
	python manage.py migrate zero

showmigrations:
	python manage.py showmigrations

runserver:
	python manage.py runserver 0.0.0.0:${PORT}

shell:
	python manage.py shell

coverage:
	coverage run --source='.' manage.py test
	coverage report -i
	coverage html
	coverage-badge -fo coverage.svg

clean:
	find . -name '*.py[co]' -delete
	find . -name '__pycache__'  -exec rm -r '{}' \;

generate_requirements:
	pipenv lock -r > requirements.txt
	pipenv lock -r --dev-only > dev-requirements.txt
