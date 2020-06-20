import requests
response = requests.get('https://www.google.com')\

print(response.text[:300])
print()

response2 = requests.get('https://www.google.com', stream=True)
print(response2.raw.read()[:100])

print(response.request.headers['Accept-Encoding'])
print(response.headers['Content-Encoding'])