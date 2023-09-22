
import json
import semantic_kernel as sk
import config.add_completion_service
from plugins.HotelPlugin.Filter import Filter
from semantic_kernel.planning.basic_planner import BasicPlanner

async def main():
    # Initialize the kernel
    kernel = sk.Kernel()
    # Add a text or chat completion service using either:
    # kernel.add_text_completion_service()
    # kernel.add_chat_service()
    kernel.add_completion_service()

    # Import the native functions
    kernel.import_skill(Filter(), "HotelPlugin")
    
    ask = "System: You summarize the users question into in a single sentence."
    ask = ask + "User: What hotels do we have in Belgium which have a maximum of 2 stars and has a nice a cinema?"

    planner = BasicPlanner()
    plan = await planner.create_plan_async(ask, kernel)
    print(plan)

    # Execute the plan
    result = await planner.execute_plan_async(plan, kernel)

    # Parse the json string to object
    print(result)

# Run the main function
if __name__ == "__main__":
    import asyncio

    asyncio.run(main())