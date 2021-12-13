import json
import sys

file = open(sys.argv[1])

data = json.load(file)

print(data)