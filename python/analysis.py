try:
    import re,nltk
    import PyPDF2
  # nltk.download('stopwords')
    from nltk.corpus import stopwords
    from nltk.stem.porter import PorterStemmer
    import pickle
    import re
    import json
    import os
    import sys
    from fpdf import FPDF
except Exception as e:
    print(e)

oldname = sys.argv[1]
newname = oldname + '.pdf'

os.rename(oldname,newname)

def writeToPDF(topics, difficulties):

  file1 = open('output/questions.json')
  questions = json.load(file1)

  pdf = FPDF()
  
  pdf.add_page()
  
  pdf.set_font("Arial", size = 25)
  
  pdf.cell(200, 25, txt = "Question Paper Analysis", ln = 1, align = 'C')

  pdf.set_font("Arial", size = 15)
  for x in range(len(difficulties)):

    pdf.multi_cell(0,10,txt=str(x+1)+". "+questions[x].replace('\n',' '),align="L")
    pdf.cell(0,10,txt="Topic: " + topics[x], ln = 0,align="L")
    pdf.cell(0,10,txt="Difficulty: " + str(difficulties[x]), ln = 1,align="R")

  pdf.output("output/Paper_Analysed.pdf") 


pdfFileObj = open(newname, 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

topics=[]
for j in range(0,pdfReader.getNumPages()):
  pageObj = pdfReader.getPage(j)
  question=pageObj.extractText()
  question=question.replace("\n","")
  question=question.replace("\n","")
  listQ = re.split('Q[0-9]+.',question)
  print("here")
  del listQ[0]
  for i in listQ:
    infile=open('assets/finalized_model_topic.sav','rb')
    vectorizer = pickle.load(open("assets/BOW.pkl", "rb"))
    LR=pickle.load(infile)
    new_review=re.sub('[^a-zA-Z]', ' ', i)
    new_review=new_review.lower()
    new_review=new_review.split()
    ps=PorterStemmer()
    all_stopwords=stopwords.words('english')
    all_stopwords.remove('not')
    new_review=[ps.stem(word) for word in new_review if not word in set(all_stopwords)]
    new_review=' '.join(new_review)
    new_corpus=[new_review]
    new_X_test=vectorizer.transform(new_corpus).toarray()
    new_y_pred=LR.predict(new_X_test)
    topics.append(new_y_pred[0])
json.dump(topics,open('output/topics.json', 'w'))


# pdfFileObj = open('MST.pdf', 'rb')
# pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
difficulty=[]
quest=[]
for j in range(0,pdfReader.getNumPages()):
  pageObj = pdfReader.getPage(j)
  question=pageObj.extractText()
  question=question.replace("\n","")
  question=question.replace("\n","")
  listQ = re.split('Q[0-9]+.',question)
  del listQ[0]
  for i in listQ:
    quest.append(i.encode("ascii", "ignore").decode())
    infile=open('assets/finalized_model.sav','rb')
    vectorizer = pickle.load(open("assets/BOW.pkl", "rb"))
    LR=pickle.load(infile)
    new_review=re.sub('[^a-zA-Z]', ' ', i)
    new_review=new_review.lower()
    new_review=new_review.split()
    ps=PorterStemmer()
    all_stopwords=stopwords.words('english')
    all_stopwords.remove('not')
    new_review=[ps.stem(word) for word in new_review if not word in set(all_stopwords)]
    new_review=' '.join(new_review)
    new_corpus=[new_review]
    new_X_test=vectorizer.transform(new_corpus).toarray()
    new_y_pred=LR.predict(new_X_test)
    difficulty.append(new_y_pred[0].item())
json.dump(difficulty,open('output/difficulty.json', 'w'))

json.dump(quest,open('output/questions.json', 'w'))

writeToPDF(topics,difficulty)

