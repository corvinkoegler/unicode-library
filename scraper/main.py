import requests
from bs4 import BeautifulSoup
import json

page = requests.get("https://unicode-table.com/de/sets/mathematical-signs/")
content = page.content

soup = BeautifulSoup(content, 'html.parser')
data = soup.find("section", {"class": "character-list"})

# json_data
json_data = {}

# get titles
section_titles_list = []
section_titles = data.findAll("h2", {"class": "character-list__title"})
for title in section_titles:
    section_titles_list.append(title.get_text())
    json_data[f"{title.get_text()}"] = []

# get character charts
sheets = data.findAll("ul")
for i, sheet in enumerate(sheets):
    char_data = sheet.findAll("a")
    for char_data_dict in char_data:
        json_data[section_titles_list[i]].append(char_data_dict["data-template"])
    #characters[i]["data-template"]

with open('data.json', 'w') as fp:
    json.dump(json_data, fp)

#for key, value in json_data.items():
#    print(value)
