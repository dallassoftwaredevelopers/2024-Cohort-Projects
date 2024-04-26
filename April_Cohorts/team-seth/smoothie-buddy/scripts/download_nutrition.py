import requests
import json
import os
from dotenv import load_dotenv

# ingredients = ["blueberries", "strawberries", "almond milk"]

# Check this out
# https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json
load_dotenv()

app_id = os.getenv('app_id')
app_key = os.getenv('app_key')

def read_ingredients():
    with open('./frontend/data/ingredients.json', 'r') as ingredients_json:
        ingredients_text = ingredients_json.read()
        ingredients = json.loads(ingredients_text)
        return ingredients["ingredients"]

def get_nutrition_data(ingredient):
    response = requests.get(f'https://api.edamam.com/api/nutrition-data?app_id={app_id}&app_key=%20{app_key}&nutrition-type=cooking&ingr={ingredient}')
    data = response.json()
    return data


def make_json():
    ingredients = read_ingredients()
    all_data = []
    
    for ingredient in ingredients:
        api_data = get_nutrition_data(ingredient)
        all_data.append(api_data)

    with open('./frontend/data/nutrition_data.json', 'w') as nutrition_file:
        json.dump(all_data, nutrition_file, indent=4)
        

make_json()