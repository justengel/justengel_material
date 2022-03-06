import os
import re
from typing import ClassVar, Union
from justengel_theme import ThemeTemplates
from justengel_material.utils import Link, LinkGroup, Message


__all__ = ['MY_DIR', 'MaterialTemplates']


MY_DIR = os.path.dirname(__file__)
REGEX_VAR_NAME = re.compile('^[^a-zA-Z_]+|[^a-zA-Z_0-9]+')


def name_to_id(name):
    """Convert a display name to a html id."""
    return REGEX_VAR_NAME.sub('', name)


class MaterialTemplates(ThemeTemplates):
    THEME_NAME: ClassVar[str] = 'justengel_material'  # Required!
    DIRECTORY: ClassVar[str] = os.path.join(MY_DIR, 'templates')
    STATIC_DIRECTORY: ClassVar[str] = os.path.join(MY_DIR, 'static')

    DEFAULT_CONTEXT = {
        'site_name': '',
        'title': '',

        # Use ALL CAPS to avoid variable name clashes. get_context uses lower case.
        'HIDE_CONTAINER': False,
        'SHOW_SIDENAV': True,
        'FIXED_SIDENAV': False,
        'PRIMARY_COLOR': 'materialize-red lighten-2',
        'SECONDARY_COLOR': 'teal',
        'PRIMARY_COLOR_LIGHT': '#e51c23',
        'PRIMARY_COLOR_DARK': None,
        'SUCCESS_COLOR': None,
        'ERROR_COLOR': None,
        'LINK_COLOR': None,
        'NAVBAR_ITEMS': [],
        'SIDENAV_ITEMS': [],
        'MESSAGES': [],
        }

    DEFAULT_FILTERS = ThemeTemplates.DEFAULT_FILTERS
    DEFAULT_FILTERS.update({
        'name_to_id': name_to_id,
    })

    def __init__(self, directory: str = None, theme: str = 'justengel_material', static_url: str = '/static') -> None:
        super().__init__(directory=directory, theme=theme, static_url=static_url)

    def add_navbar_item(self, context: dict, name: str, href: str, group: Union[LinkGroup, str] = None,
                        with_default: bool = True):
        if 'NAVBAR_ITEMS' not in context:
            if with_default:
                context['NAVBAR_ITEMS'] = [i for i in self.DEFAULT_CONTEXT['NAVBAR_ITEMS']]
            else:
                context['NAVBAR_ITEMS'] = []

        link = Link(name=name, href=href)
        if isinstance(group, LinkGroup):
            # Add to the group
            group.links.append(link)

        elif isinstance(group, str):
            # Find the group name and add to the group
            for grp in context['NAVBAR_ITEMS']:
                if group == grp.name:
                    grp.links.append(link)
                    break
            else:
                raise ValueError('NavBar Group "{}" not found!'.format(group))

        elif link not in context['NAVBAR_ITEMS']:
            # Add the link to the top level sidenav
            context['NAVBAR_ITEMS'].append(link)

    def add_navbar_group(self, context: dict, name: str, links: list = None, with_default: bool = True):
        if 'NAVBAR_ITEMS' not in context:
            if with_default:
                context['NAVBAR_ITEMS'] = [i for i in self.DEFAULT_CONTEXT['NAVBAR_ITEMS']]
            else:
                context['NAVBAR_ITEMS'] = []

        if links is None:
            links = []

        grp = LinkGroup(name=name, links=links)
        if grp not in context['NAVBAR_ITEMS']:
            context['NAVBAR_ITEMS'].append(grp)

    def add_sidenav_item(self, context: dict, name: str, href: str, group: Union[LinkGroup, str] = None,
                         with_default: bool = True):
        if 'SIDENAV_ITEMS' not in context:
            if with_default:
                context['SIDENAV_ITEMS'] = [i for i in self.DEFAULT_CONTEXT['SIDENAV_ITEMS']]
            else:
                context['SIDENAV_ITEMS'] = []

        link = Link(name=name, href=href)
        if isinstance(group, LinkGroup):
            # Add to the group
            group.links.append(link)

        elif isinstance(group, str):
            # Find the group name and add to the group
            for grp in context['SIDENAV_ITEMS']:
                if group == grp.name:
                    grp.links.append(link)
                    break
            else:
                raise ValueError('SideNav Group "{}" not found!'.format(group))

        elif link not in context['SIDENAV_ITEMS']:
            # Add the link to the top level sidenav
            context['SIDENAV_ITEMS'].append(link)

    def add_sidenav_group(self, context: dict, name: str, links: list = None, with_default: bool = True):
        if 'SIDENAV_ITEMS' not in context:
            if with_default:
                context['SIDENAV_ITEMS'] = [i for i in self.DEFAULT_CONTEXT['SIDENAV_ITEMS']]
            else:
                context['SIDENAV_ITEMS'] = []

        if links is None:
            links = []

        grp = LinkGroup(name=name, links=links)
        if grp not in context['SIDENAV_ITEMS']:
            context['SIDENAV_ITEMS'].append(grp)

    def add_message(self, context: dict, msg_type: str, msg: str, with_default: bool = True):
        if 'MESSAGES' not in context:
            if with_default:
                context['MESSAGES'] = [i for i in self.DEFAULT_CONTEXT['MESSAGES']]
            else:
                context['MESSAGES'] = []
        context['MESSAGES'].append(Message(msg_type=msg_type, msg=msg))

    # ===== Helper functions =====
    @staticmethod
    def make_context(site_name: str = None, title: str = None,
                     hide_container: bool = None, show_sidenav: bool = None, fixed_sidenav: bool = None,
                     primary_color: str = None, secondary_color: str = None, primary_color_light: str = None,
                     primary_color_dark: str = None, success_color: str = None, error_color: str = None,
                     link_color: str = None, **kwargs) -> dict:
        d = kwargs
        if site_name is not None:
            d['site_name'] = site_name
        if title is not None:
            d['title'] = title
        if hide_container is not None:
            d['HIDE_CONTAINER'] = hide_container
        if show_sidenav is not None:
            d['SHOW_SIDENAV'] = show_sidenav
        if fixed_sidenav is not None:
            d['FIXED_SIDENAV'] = fixed_sidenav
        if primary_color is not None:
            d['PRIMARY_COLOR'] = primary_color
        if secondary_color is not None:
            d['SECONDARY_COLOR'] = secondary_color
        if primary_color_light is not None:
            d['PRIMARY_COLOR_LIGHT'] = primary_color_light
        if primary_color_dark is not None:
            d['PRIMARY_COLOR_DARK'] = primary_color_dark
        if success_color is not None:
            d['SUCCESS_COLOR'] = success_color
        if error_color is not None:
            d['ERROR_COLOR'] = error_color
        if link_color is not None:
            d['LINK_COLOR'] = link_color
        return d

    def set_defaults(self, site_name: str = None, title: str = None,
                     hide_container: bool = None, show_sidenav: bool = None, fixed_sidenav: bool = None,
                     primary_color: str = None, secondary_color: str = None, primary_color_light: str = None,
                     primary_color_dark: str = None, success_color: str = None, error_color: str = None,
                     link_color: str = None, **kwargs) -> dict:
        d = self.make_context(site_name=site_name, title=title, hide_container=hide_container,
                              show_sidenav=show_sidenav, fixed_sidenav=fixed_sidenav, primary_color=primary_color,
                              secondary_color=secondary_color, primary_color_light=primary_color_light,
                              primary_color_dark=primary_color_dark, success_color=success_color,
                              error_color=error_color, link_color=link_color, **kwargs)
        self.DEFAULT_CONTEXT.update(d)
        return self.DEFAULT_CONTEXT

    def get_context(self, site_name: str = None, title: str = None,
                    hide_container: bool = None, show_sidenav: bool = None, fixed_sidenav: bool = None,
                    primary_color: str = None, secondary_color: str = None, primary_color_light: str = None,
                    primary_color_dark: str = None, success_color: str = None, error_color: str = None,
                    link_color: str = None, **kwargs) -> dict:
        ctx = self.DEFAULT_CONTEXT.copy()
        d = self.make_context(site_name=site_name, title=title, hide_container=hide_container,
                              show_sidenav=show_sidenav, fixed_sidenav=fixed_sidenav, primary_color=primary_color,
                              secondary_color=secondary_color, primary_color_light=primary_color_light,
                              primary_color_dark=primary_color_dark, success_color=success_color,
                              error_color=error_color, link_color=link_color, **kwargs)
        ctx.update(d)
        return ctx

    def install_app(self, app, serve_static: bool = False, site_name: str = None, title: str = None,
                    hide_container: bool = None, show_sidenav: bool = None, fixed_sidenav: bool = None,
                    primary_color: str = None, secondary_color: str = None, primary_color_light: str = None,
                    primary_color_dark: str = None, success_color: str = None, error_color: str = None,
                    link_color: str = None, **kwargs) -> 'ThemeTemplates':
        return super().install_app(app, serve_static=serve_static,
                                   site_name=site_name, title=title, hide_container=hide_container,
                                   show_sidenav=show_sidenav, fixed_sidenav=fixed_sidenav, primary_color=primary_color,
                                   secondary_color=secondary_color, primary_color_light=primary_color_light,
                                   primary_color_dark=primary_color_dark, success_color=secondary_color,
                                   error_color=error_color, link_color=link_color, **kwargs)
