# try:
#   # import pandas as pd
#   import json
#   import pickle
#   import sys
# except Exception as err:
#   print(err)
# loaded_model = pickle.load(open('assets/percentile.pkl', 'rb'))
# print("here")

# difficulty = float(sys.argv[1])
# print("difficulty",difficulty)

# percentile = []

# for i in range(0,11):
#   marks = (i/10)
#   try:
#     # print(loaded_model.predict([[difficulty,marks]]))
#     val = loaded_model.predict([[difficulty,marks]])[0]
#     if val<0:
#       percentile.append(0)
#     else:
#       percentile.append(val)
#   except Exception as e:
#     print(e)
# print(percentile)
# json.dump(percentile,open("output/percentile_data.json", 'w'))

import pandas as pd
import json
import pickle
import sys

loaded_model = pickle.load(open('assets/percentile.pkl', 'rb'))
difficulty = float(float(sys.argv[1])/10)

percentile = []

for i in range(0,11):
  marks = (i/10)
  val = round(loaded_model.predict([[difficulty,marks]])[0],4)*100
  if val<0:
    percentile.append(0)
  else:
    percentile.append(val)
print(percentile)

json.dump(percentile,open("percentile_data.json", 'w'))