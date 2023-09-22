import json
import quart
import quart_cors
from quart import request

import semantic_kernel as sk
from semantic_kernel.planning.basic_planner import BasicPlanner
import config.add_completion_service
from plugins.HotelPlugin.Filter import Filter

#app = quart_cors.cors(quart.Quart(__name__), allow_origin="https://chat.openai.com")
app = quart_cors.cors(quart.Quart(__name__), allow_origin="http://localhost:3000")

# A list of hotels
__HOTELS = [
    {
        "address": "Mercè Rodoreda, 7, 17300, Blanes, Spain",
        "name": "Beverly Park Hotel & Spa Blanes",
        "description": "Located in Blanes in Costa Brava, Beverly Park Hotel & Spa Blanes is a four-star family hotel with a gym and swimming pool.",
        "country": "Spain",
        "stars": 4,
        "beds": 2,
        "bathrooms": 1,
        "has_wifi": True,
        "price": 90,
        "image": "room-1"
    },
    {
        "address": "Calle Imaginario, 1, 17001, Girona, Spain",
        "name": "El Castillo Mystico",
        "description": "Nestled atop a secluded hill, El Castillo Mystico offers breathtaking views of Costa Brava with luxurious rooms and an exclusive spa.",
        "country": "Spain",
        "stars": 5,
        "beds": 2,
        "bathrooms": 1,
        "has_wifi": True,
        "price": 120,
        "image": "castle-1"
    },
    {
        "address": "Via Imaginaria, 20, 17140, Ullà, Spain",
        "name": "Casa de Suenos Resort",
        "description": "Experience the ultimate relaxation at Casa de Suenos, offering top-tier amenities, luxurious accommodations, and unparalleled service.",
        "country": "Spain",
        "stars": 5,
        "beds": 3,
        "bathrooms": 2,
        "has_wifi": False,
        "price": 210,
        "image": "resort-1"
    },
    {
        "address": "Avenida Fantasia, 30, 17480, Roses, Spain",
        "name": "Villa Maravillosa",
        "description": "Immerse yourself in opulence and comfort at Villa Maravillosa, featuring an award-winning restaurant, spacious suites, and a private beach.",
        "country": "Spain",
        "stars": 5,
        "beds": 1,
        "bathrooms": 1,
        "has_wifi": False,
        "price": 180,
        "image": "villa-1"
    },
    {
        "address": "Plaza Ficticia, 10, 17230, Palamós, Spain",
        "name": "La Luz del Mar Hotel",
        "description": "An enchanting seaside resort offering gourmet cuisine, elegant rooms, and a serene environment.",
        "country": "Spain",
        "stars": 4,
        "beds": 2,
        "bathrooms": 1,
        "has_wifi": True,
        "price": 150,
        "image": "seaside-1"
    },
    {
        "address": "Calle Inventada, 2, 17220, Sant Feliu de Guíxols, Spain",
        "name": "La Perla Encantadora",
        "description": "Indulge in the coastal charm of La Perla Encantadora, featuring exquisite dining, elegant rooms, and beachside bliss.",
        "country": "Spain",
        "stars": 4,
        "beds": 2,
        "bathrooms": 1,
        "has_wifi": True,
        "price": 130,
        "image": "perla-1"
    },
    {
        "address": "Avenida Imaginada, 3, 17320, Tossa de Mar, Spain",
        "name": "Retiro Tranquilo Resort",
        "description": "Discover peace and luxury at Retiro Tranquilo, offering rejuvenating spa services, gourmet cuisine, and stunning views.",
        "country": "Spain",
        "stars": 5,
        "beds": 3,
        "bathrooms": 2,
        "has_wifi": True,
        "price": 200,
        "image": "retiro-1"
    },
    {
        "address": "Paseo Falso, 19, 17130, L'Escala, Spain",
        "name": "Palacio del Mar",
        "description": "Revel in the opulence of Palacio del Mar, featuring lavish suites, oceanfront dining, and exceptional service.",
        "country": "Spain",
        "stars": 1,
        "beds": 2,
        "bathrooms": 1,
        "has_wifi": True,
        "price": 190,
        "image": "palacio-1"
    },
    {
        "address": "Plaza Inexistente, 20, 17250, Platja d'Aro, Spain",
        "name": "Refugio del Sol",
        "description": "Bask in the warmth of Refugio del Sol, offering radiant accommodations, a sparkling pool, and sun-soaked relaxation.",
        "country": "Spain",
        "stars": 2,
        "beds": 1,
        "bathrooms": 1,
        "has_wifi": False,
        "price": 160,
        "image": "refugio-1"
    },
    {
        "address": "Bulevar Encantado, 21, 17490, Llançà, Spain",
        "name": "El Oasis Elegante",
        "description": "El Oasis Elegante stands as a beacon of luxury and comfort, with a gourmet restaurant, soothing spa, and ocean-view suites, in the heart of Costa Brava.",
        "country": "Spain",
        "stars": 5,
        "beds": 2,
        "bathrooms": 2,
        "has_wifi": True,
        "price": 170,
        "image": "oasis-1"
    },
    {
        "address": "Carrer Ilusorio, 22, 17488, Cadaqués, Spain",
        "name": "La Joya del Mar",
        "description": "La Joya del Mar offers an exquisite blend of comfort and elegance, with its beachfront location, gourmet dining, and panoramic views of the sea.",
        "country": "Spain",
        "stars": 5,
        "beds": 3,
        "bathrooms": 2,
        "has_wifi": True,
        "price": 200,
        "image": "joya-1"
    },
    {
        "address": "Via Fantasia, 23, 17123, Begur, Spain",
        "name": "El Refugio Romántico",
        "description": "Nestled in the scenic hills of Costa Brava, El Refugio Romántico provides a serene getaway with luxurious suites, a tranquil spa, and romantic dining experiences.",
        "country": "Spain",
        "stars": 4,
        "beds": 2,
        "bathrooms": 1,
        "has_wifi": True,
        "price": 180,
        "image": "refugio-2"
    }
]

@app.get("/hotels")
async def get_hotels():
    return quart.Response(response=json.dumps(__HOTELS), status=200)

@app.post("/hotels/filter")
async def filter_hotel():
    return quart.Response(response=json.dumps(__HOTELS), status=200)

@app.post("/hotels/filter-with-semantickernel")
async def filter_hotel_with_sk():
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
    return quart.Response(response=json.dumps(__HOTELS), status=200)


@app.post("/hotels")
async def add_hotel():
    request = await quart.request.get_json(force=True)
    __HOTELS.append(request)
    return quart.Response(response='OK', status=200)

@app.get("/logo.png")
async def plugin_logo():
    filename = 'logo.png'
    return await quart.send_file(filename, mimetype='image/png')

@app.get("/.well-known/ai-plugin.json")
async def plugin_manifest():
    host = request.headers['Host']
    with open("./.well-known/ai-plugin.json") as f:
        text = f.read()
        return quart.Response(text, mimetype="text/json")

@app.get("/openapi.yaml")
async def openapi_spec():
    host = request.headers['Host']
    with open("openapi.yaml") as f:
        text = f.read()
        return quart.Response(text, mimetype="text/yaml")

def main():
    app.run(debug=True, host="0.0.0.0", port=5003)

if __name__ == "__main__":
    main()