import requests
from bs4 import BeautifulSoup

page = requests.get("https://unicode-table.com/de/sets/mathematical-signs/")
content = page.content

soup = BeautifulSoup(content, 'html.parser')
data = soup.find("section", {"class": "character-list"})

# get titles
target = []
group_titles = data.findAll("h2", {"class": "character-list__title"})
for title in group_titles:
    target.append({"title": title.get_text()})

# get character charts
charts = data.findAll("ul")
for chart in charts:
    characters = chart.findAll("a")
    print(characters[0].title)
    break