import json


def find_en_item(name):
    for en_item in en_data:
        if en_item["nome"] == name:
            return en_item
    return None


# Load the JSON data from the local files
with open("pt_data.json", "r", encoding="utf-8") as pt_file:
    pt_data = json.load(pt_file)

with open("en_data.json", "r", encoding="utf-8") as en_file:
    en_data = json.load(en_file)

merged_data = []

for pt_item in pt_data:
    en_item = find_en_item(pt_item["nome"])

    if en_item:
        new_item = {
            "id": pt_item["id"],
            "nome": pt_item["nome"],
            "nome_en": en_item["nome"],
            "preco": pt_item["preco"],
            "ingredientes": pt_item["igredientes"],
            "ingredientes_en": en_item["igredientes"],
            "categoria": pt_item["categoria"],
            "categoria_en": en_item["categoria"]
        }
    else:
        new_item = {
            "id": pt_item["id"],
            "nome": pt_item["nome"],
            "nome_en": "",
            "preco": pt_item["preco"],
            "ingredientes": pt_item["igredientes"],
            "ingredientes_en": "",
            "categoria": pt_item["categoria"],
            "categoria_en": ""
        }

    merged_data.append(new_item)

# Save the merged data to a JSON file
with open("merged_data.json", "w", encoding="utf-8") as output_file:
    json.dump(merged_data, output_file, indent=2, ensure_ascii=False)
