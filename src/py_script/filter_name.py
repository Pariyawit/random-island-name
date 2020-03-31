with open('fictional.txt','r') as f:
  names = f.readlines()
  list = []
  for name in names:
    n = name.lower().strip().replace('the ','').replace(' of ','')
    if(len(n)<=10):
      list.append(n.strip())
      continue
    
    n = n.replace('isles','').replace('isles','')
    if(len(n)<=10):
      list.append(n.strip())
      continue
    
    n = n.replace('islands','').replace('islands','')
    if(len(n)<=10):
      list.append(n.strip())
      continue
  
  print(list)
  with open('name.txt','w') as o:
    o.write('[')
    for item in list:
      o.write("\"%s\"," % item)
    o.write(']')