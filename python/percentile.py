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