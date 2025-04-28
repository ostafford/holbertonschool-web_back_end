#!/usr/bin/env python3

from typing import Union, Tuple

def to_kv(k: str, v:Union[int, float]) -> Tuple[str, float]:
    """Create tuple from a string and squared number"""
    return (k, float(v ** 2))