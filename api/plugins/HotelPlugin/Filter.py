from semantic_kernel.skill_definition import (
    sk_function,
    sk_function_context_parameter,
)
from semantic_kernel.orchestration.sk_context import SKContext
import json

Hotels = [
    {
        "address": "123 Main St",
        "name": "Hotel 1",
        "country": "Ireland",
        "stars": "5",
    },
    {
        "name": "Hotel 2",
        "address": "456 Main St",
        "country": "Austria",
        "stars": "4",
    },
    {
        "name": "Hotel 3",
        "address": "789 Main St",
        "country": "Belgium",
        "stars": "3",
    },
]

class Filter:
    @sk_function(
        description="Filters the list of hotels by some arguments",
        name="Filter",
    )
    @sk_function_context_parameter(
        name="name",
        description="The name of the hotel",
    )
    @sk_function_context_parameter(
        name="country",
        description="The country or location of the hotel",
    )
    @sk_function_context_parameter(
        name="min_stars",
        description="The minimum number of stars the hotel has",
    )
    @sk_function_context_parameter(
        name="max_stars",
        description="The maximum number of stars the hotel has",
    )
    @sk_function_context_parameter(
        name="has_pool",
        description="Whether the hotel has a pool",
    )
    def filter(self, context: SKContext):

        print("!!!!!!!!")
        print(context['country'])
        print("!!!!!!!!")
        return "ok"