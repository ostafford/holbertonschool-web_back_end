#!/usr/bin/env python3

from typing import List, Union

def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Calculating both int and float"""
    return float(sum(mxd_list))