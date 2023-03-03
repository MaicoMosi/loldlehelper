import requests
import json


def main():
    request_url = 'http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion.json'
    r = requests.get(request_url)
    champion_data = json.loads(r.content)
    champion_name_list = []
    for value in champion_data['data']:
        champion_name_list.append(value)
    for name in champion_name_list:
        get_image_from_ddragon(name)


def get_image_from_ddragon(name):
    base_url = 'http://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/'
    r = requests.get(base_url + name + '.png', stream=True)
    path = 'C:/Users/Ohne/Desktop/lol_images/' + name + '.png'
    with open(path, 'wb') as f:
        for chunk in r:
            f.write(chunk)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    main()

