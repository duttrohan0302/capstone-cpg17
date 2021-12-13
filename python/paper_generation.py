import pandas as pd
import numpy as np
import random
import json
import sys
from fpdf import FPDF

difficultyLevel = sys.argv[1]

dataset=pd.read_csv("assets/dataset2.csv",index_col=False)  

def writeToPDF(topics, difficulties):
  file1 = open('output/sample_paper.json')
  questions = json.load(file1)

  print("QUESTIONS ARE _____________________________",questions,"\n-----------------------------------")
  pdf = FPDF()
  
  pdf.add_page()
  
  pdf.set_font("Arial", size = 25)
  
  pdf.cell(200, 25, txt = "Sample Paper", ln = 1, align = 'C')

  pdf.set_font("Arial", size = 15)
  for x in range(len(difficulties)):

    pdf.multi_cell(0,10,txt=str(x+1)+". "+questions[x].replace('\n',' '),align="L")
    pdf.cell(0,10,txt="Topic: " + topics[x], ln = 0,align="L")
    pdf.cell(0,10,txt="Difficulty: " + str(difficulties[x]), ln = 1,align="R")

  pdf.output("output/SamplePaper.pdf") 


def difficulty(x):
  tempForTopic=dataset["Topic"].unique()
  topics=np.random.choice(tempForTopic,size=10,replace=False)
  topic_list=[]
  diff_list=[]
  random.shuffle(topics)
  if(x.lower() == "easy"):
    ans=[]
    for i in range(0,7):
      t=dataset[(dataset["Difficulty"]<=6)&(dataset["Difficulty"]>=1)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0].encode("ascii", "ignore").decode())

          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())
          except Exception as err:
            diff_list.append(3)
            print("EXCEPTION IS ",tt,"\n--------------") 
          break
        if itr>500:
          break
    for i in range(7,10):
      t=dataset[(dataset["Difficulty"]<=10)&(dataset["Difficulty"]>=7)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0].encode("ascii", "ignore").decode())
          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())
          except Exception as err:
            diff_list.append(5)
            print("EXCEPTION IS ",tt,"\n--------------") 
          break
        if itr>500:
          break
    # print(ans)
    # print(topic_list)
    # print(diff_list)
    json.dump(ans,open('output/sample_paper.json', 'w'))
    json.dump(diff_list,open('output/sample_paper_difficulty.json', 'w'))
    json.dump(topic_list,open('output/sample_paper_topics.json', 'w'))
    writeToPDF(topic_list,diff_list)
  elif(x.lower() == "medium"):
    ans=[]
    for i in range(0,3):
      print("i is ",i)
      t=dataset[(dataset["Difficulty"]<=4)&(dataset["Difficulty"]>=1)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0])
          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())

          except Exception as err:
            diff_list.append(3)
            print("EXCEPTION IS ",tt,"\n--------------") 
          break
        if itr>500:
          break
    for i in range(3,7):
      print("i is ",i)
      t=dataset[(dataset["Difficulty"]<=6)&(dataset["Difficulty"]>=5)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0])
          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())
            # print("NORMAL CASE IS ",tt," and ",tt.item(),"\n--------------") 

          except Exception as err:
            print("EXCEPTION IS ",tt,"\n--------------") 
            diff_list.append(6)

          break
        if itr>500:
          break

    for i in range(7,10):
      print("i is ",i)
      t=dataset[(dataset["Difficulty"]<=10)&(dataset["Difficulty"]>=7)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0])
          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())
          except Exception as err:
            print("EXCEPTION IS ",tt,"\n--------------") 
            diff_list.append(9)
          break
        if itr>500:
          break
      
    # print(ans)
    # print(topic_list)
    # print(diff_list)
    json.dump(ans,open('output/sample_paper.json', 'w'))
    json.dump(diff_list,open('output/sample_paper_difficulty.json', 'w'))
    json.dump(topic_list,open('output/sample_paper_topics.json', 'w'))
    writeToPDF(topic_list,diff_list)
  elif(x.lower() == "hard"):
    ans=[]
    for i in range(0,3):
      t=dataset[(dataset["Difficulty"]<=6)&(dataset["Difficulty"]>=1)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0])
          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())

          except Exception as err:
            diff_list.append(5)
            print("EXCEPTION IS ",tt,"\n--------------") 
          break
        if itr>500:
          break
    for i in range(3,10):
      t=dataset[(dataset["Difficulty"]<=10)&(dataset["Difficulty"]>=7)]
      temp=None
      itr=0
      while temp==None:
        itr=itr+1
        try:
          temp = t[t["Topic"]==topics[i]].sample(n=1,replace=False)["Question"].values
        except Exception as e:
          temp=None
        if temp!=None:
          ans.append(temp[0])
          topic_list.append(topics[i])
          try:
            tt = dataset[dataset["Question"]==ans[i]]["Difficulty"]
            diff_list.append(tt.item())
          except Exception as err:
            diff_list.append(9)
            print("EXCEPTION IS ",tt,"\n--------------") 
          break
        if itr>500:
          break
    # print(ans)
    # print(topic_list)
    # print(diff_list)
    json.dump(ans,open('output/sample_paper.json', 'w'))
    json.dump(diff_list,open('output/sample_paper_difficulty.json', 'w'))
    json.dump(topic_list,open('output/sample_paper_topics.json', 'w'))
    writeToPDF(topic_list,diff_list)
  else:
    print("Enter a valid choice")

difficulty(difficultyLevel) 