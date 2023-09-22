from semantic_kernel.skill_definition import (
    sk_function,
    sk_function_context_parameter,
)
from semantic_kernel.orchestration.sk_context import SKContext
import json

Hotels = [
    {
        "address": "Mercè Rodoreda, 7, 17300, Blanes, Spain",
        "name": "Located in Blanes in Costa Brava, Beverly Park Hotel & Spa Blanes is a four-star family hotel with a gym and swimming pool.",
        "country": "Spain",
        "stars": "4",
        "beds": "2",
        "bathrooms": "1",
        "has_wifi": "true",
        "price": "90",
        "image": "room-2",
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