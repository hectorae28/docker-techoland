# Generated by Django 4.2.16 on 2024-10-25 20:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_imagenproducto_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='imagenproducto',
            name='product_image',
        ),
    ]
