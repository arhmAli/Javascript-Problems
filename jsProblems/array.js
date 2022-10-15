let a=["apple","orange","banana","mango"]
a.concat["grapes"]
a.push(...a,["pineapple"])
a.filter(a.length===5? a.splice(0,1,1): null )