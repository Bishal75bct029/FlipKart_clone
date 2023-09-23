import requests
from bs4 import BeautifulSoup
import os
import re

# Base URL of the Flipkart search results page
base_url = 'https://www.flipkart.com/search?q=gifts&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off'

# Create a directory to save the downloaded images
output_directory = 'downloaded_images'
os.makedirs(output_directory, exist_ok=True)

# Send an HTTP GET request to the Flipkart search results page
response = requests.get(base_url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all image elements on the page
    img_tags = soup.find_all('img')

    # Loop through the image elements and download each image
    for img_tag in img_tags:
        img_url = img_tag.get('src')
        if img_url and not img_url.startswith('data:image/'):  # Skip data URIs
            img_url = img_url.strip()
            if img_url.startswith('//'):
                img_url = 'https:' + img_url

            # Extract the image filename from the URL
            img_filename = os.path.basename(img_url)
            img_filename = re.sub(r'[^\w\s.-]', '_', img_filename)  # Remove invalid characters

            # Remove query parameters and extensions like _q_70
            img_filename = re.sub(r'[_?].*$', '', img_filename)

            # Determine the category based on the URL and create a subfolder
            if 'mobile' in img_url:
                category_folder = os.path.join(output_directory, 'mobile')
            elif 'clothing' in img_url:
                category_folder = os.path.join(output_directory, 'clothing')
            else:
                category_folder = os.path.join(output_directory, 'other')

            os.makedirs(category_folder, exist_ok=True)

            # Full path to save the image in the category folder
            img_path = os.path.join(category_folder, img_filename + '.jpeg')

            img_response = requests.get(img_url)
            if img_response.status_code == 200:
                with open(img_path, 'wb') as img_file:
                    img_file.write(img_response.content)
                print(f"Downloaded: {img_path}")
            else:
                print(f"Failed to download: {img_url}")

else:
    print(f"Failed to fetch the page. Status code: {response.status_code}")
