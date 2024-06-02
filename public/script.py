import json

# Load the data from the provided JSON file
with open('eve.json', 'r') as file:
    lines = file.readlines()

# Parse each line as JSON and collect relevant entries
data = []
for line in lines:
    try:
        entry = json.loads(line)
        if 'alert' in entry:
            data.append(entry)
    except json.JSONDecodeError:
        continue

# Prepare a dictionary to aggregate counts by category
category_counts = {}

# Aggregate counts by category
for entry in data:
    category = entry["alert"]["category"]
    if category not in category_counts:
        category_counts[category] = 0
    category_counts[category] += 1

# Format the aggregated data for nivo.rocks
nivo_data = [{"id": category, "value": count} for category, count in category_counts.items()]

# Save the formatted data to a JSON file
with open('formatted_nivo_data.json', 'w') as outfile:
    json.dump(nivo_data, outfile)

print("Formatted data has been saved to 'formatted_nivo_data.json'")