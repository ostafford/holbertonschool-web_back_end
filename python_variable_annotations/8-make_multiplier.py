#!/usr/bin/env python3

def make_multiplier(multiplier: float) -> callable(float):
    def multiply_by_multiplier(n: float) -> float:
        return multiplier * n
    return multiply_by_multiplier