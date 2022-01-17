
include .env
export

move-static-files:
	chmod +x ./scripts/move_static_files_to_whitenoise_root.sh
	sh ./scripts/move_static_files_to_whitenoise_root.sh

collectstatic:
	python manage.py collectstatic --no-input

install:
	pip-compile
	pip-compile requirements-dev.in
	pip-sync requirements.txt requirements-dev.txt
	cd frontend && yarn install && yarn build && cd ..
	make move-static-files
	make collectstatic

lint:
	black .
	cd frontend && yarn prettier --write .
	pre-commit run --all-files

install_pre_commit:
	pre-commit install
	make lint

seed:
	python manage.py seed

wsgi-server:
	waitress-serve config.wsgi:application

createuser:
	python manage.py createsuperuser --database default

makemigrate:
	python manage.py makemigrations

migrate:
	python manage.py migrate

resetmigrate:
	python manage.py migrate backend zero

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
