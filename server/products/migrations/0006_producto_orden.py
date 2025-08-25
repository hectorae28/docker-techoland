# Generated migration for adding orden field to Producto model

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_producto_info'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='orden',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterModelOptions(
            name='producto',
            options={'ordering': ['orden', 'nombre']},
        ),
    ]