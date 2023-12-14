import json
from semantic_kernel.skill_definition import (
    sk_function,
    sk_function_context_parameter,
)
from semantic_kernel.orchestration.sk_context import SKContext


class Filter:

    def __init__(self, hotels):
        self.hotels = hotels

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
        name="has_wifi",
        description="Whether the hotel has wifi or not",
    )
    def filter(self, context: SKContext) -> str:

        # Copy the list of hotels in a new var
        filtered_hotels = self.hotels.copy()

        # If context contains name.
        try:
            if context["name"] is not None and context["name"] != "":
                name = context["name"]
                print("name:" + name)
                filtered_hotels = [
                    hotel for hotel in filtered_hotels if name in hotel['name']]
        except:
            pass

        # If context contains country.
        try:
            if context["country"] is not None and context["country"] != "":
                country = context["country"]
                print("country:" + country)
                filtered_hotels = [
                    hotel for hotel in filtered_hotels if country in hotel['address']]
        except:
            pass

        # If context contains min_stars.
        try:
            if context["min_stars"] is not None and context["min_stars"] > 0 and context["min_stars"] <= 5:
                min_stars = context["min_stars"]
                print("min_stars:" + str(min_stars))
                filtered_hotels = [
                    hotel for hotel in filtered_hotels if hotel['stars'] >= min_stars]
        except:
            pass

        # If context contains max_stars.
        try:
            if context["max_stars"] is not None and context["max_stars"] > 0 and context["max_stars"] <= 5:
                max_stars = context["max_stars"]
                print("max_stars:" + str(max_stars))
                filtered_hotels = [
                    hotel for hotel in filtered_hotels if hotel['stars'] <= max_stars]
        except:
            pass

        # If context contains has_wifi.
        try:
            if context["has_wifi"] is not None:
                has_wifi = context["has_wifi"]
                print("has_wifi:" + str(has_wifi))
                filtered_hotels = [
                    hotel for hotel in filtered_hotels if hotel['has_wifi'] == has_wifi]
        except:
            pass

        return json.dumps(filtered_hotels)
