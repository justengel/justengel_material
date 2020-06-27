==================
justengel_material
==================

Fastapi Jinja materializecss theming system.

Example
=======

.. code-block:: python

    # material_demo.py
    import os
    from fastapi import FastAPI, Request
    import justengel_material

    MY_DIR = os.path.dirname(__file__)

    app = FastAPI()
    material = justengel_material.MaterialTemplates(os.path.join(MY_DIR, 'templates'))
    material.install_app(app, site_name='Material Demo', primary_color='purple', secondary_color='teal')

    @app.get('/')
    def index(request: Request):
        ctx = {'request': request, 'base_url': request.base_url,
               'title': 'index'
               }
        return material.TemplateResponse('material/index.html', ctx)


HTML Template in `templates/material/index.html`

.. code-block:: python

    {# templates/material/index.html #}
    {% extends "justengel_material/base.html" %}

    {% block contents %}
    <h1>Hello World!</h1>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <button class="btn">Button</button>
    {% endblock contents %}
