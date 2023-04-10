import json

# Load the JSON data from the local file
with open("merged_data.json", "r", encoding="utf-8") as input_file:
    merged_data = json.load(input_file)

# Normalize the IDs
for index, item in enumerate(merged_data, start=1):
    item["id"] = index

# Save the updated data to a new JSON file
with open("normalized_merged_data.json", "w", encoding="utf-8") as output_file:
    json.dump(merged_data, output_file, indent=2, ensure_ascii=False)
