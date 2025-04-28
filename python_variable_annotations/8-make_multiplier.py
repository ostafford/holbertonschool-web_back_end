#!/usr/bin/env python3

from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Create and returns function that multiples float by fixed multiplier"""
    def multiply_by_multiplier(n: float) -> float:
        return multiplier * n
    return multiply_by_multiplier