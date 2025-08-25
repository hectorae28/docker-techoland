#!/bin/bash

# Script para cargar fixtures con el orden correcto de productos

echo "Aplicando migraciones..."
python manage.py makemigrations
python manage.py migrate

echo "Cargando fixtures con orden de productos..."
python manage.py loaddata products/fixtures/products.json

echo "Fixtures cargadas exitosamente!"
echo "Orden de productos configurado:"
echo "1. Alveolar Tradicional"
echo "2. Alveolar Evolución" 
echo "3. Corrugal Sinus"
echo "4. Corrugal Greca"
echo "5. BambuTech"
echo "6. Macizo"
echo "7. TopClick"
echo "8. Standing Seam"
echo "100+ Accesorios"