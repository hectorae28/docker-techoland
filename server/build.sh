#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate
#python manage.py dumpdata products --format=json --indent 4 > products/fixtures/products.json
