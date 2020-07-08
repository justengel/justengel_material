from typing import ClassVar
from pydantic import BaseModel


__all__ = ['Link', 'Message']


class Link(BaseModel):
    name: str
    href: str = '#'


class Message(BaseModel):
    msg_type: str
    msg: str

    MESSAGE_TYPES: ClassVar = {
        'debug': "rounded yellow",
        'info': "rounded light-blue",
        'success': "rounded green",
        'warning': "orange",
        'error': "red",
        }

    @property
    def msg_class(self):
        return self.MESSAGE_TYPES.get(str(self.msg_type).lower(), 'rounded light-blue')
