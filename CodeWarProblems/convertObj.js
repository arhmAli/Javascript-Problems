==============================================>>>>>>>>>>>DATA OF ARRAY CONTAINING FRUITS<<<<<<<<<<<<<===================================
const arr=[
  "apple\n",
  "banana\n",
  "cherry\n",
  "date\n",
  "elderberry\n",
  "fig\n",
  "grape\n",
  "honeydew\n",
  "indigo apple\n",
  "jackfruit\n",
  "kiwi\n",
  "lemon\n",
  "mango\n",
  "nectarine\n",
  "orange\n",
  "papaya\n",
  "quince\n",
  "raspberry\n",
  "strawberry\n",
  "tangerine\n",
  "ugli fruit\n",
  "vanilla bean\n",
  "watermelon\n",
  "xylocarp\n",
  "yellow watermelon\n",
  "zucchini\n",
  "apricot\n",
  "blackberry\n",
  "cantaloupe\n",
  "dragonfruit\n",
  "elderflower\n",
  "fig leaf gourd\n",
  "grapefruit\n",
  "honeycrisp apple\n",
  "ice cream bean\n",
  "jambul\n",
  "kumquat\n",
  "lime\n",
  "mulberry\n",
  "nectar\n",
  "orange peel\n",
  "papaw\n",
  "quandong\n",
  "raisin\n",
  "strawberry guava\n",
  "tangelo\n",
  "ugni\n",
  "velvet apple\n",
  "water apple\n",
  "xigua\n",
  "yellow passion fruit\n",
  "zinfandel grapes\n",
  "blueberry\n",
  "cranberry\n",
  "elderberry blossom\n",
  "figwort\n",
  "grape leaf anemone\n",
  "honey jar jujube\n",
  "Indian almond\n",
  "jujube\n",
  "lychee\n",
  "medlar\n",
  "nutmeg\n",
  "orange blossom\n",
  "paprika\n",
  "quinoa\n",
  "raspberry lemonade\n",
  "strawberry tomato\n",
  "tarragon\n",
  "ume\n",
  "vanilla orchid\n",
  "water chestnut\n",
  "ximenia\n",
  "yellow tomato\n",
  "zamia\n",
  "apple berry\n",
  "blue honeysuckle\n",
  "carambola\n",
  "dewberry\n",
  "elephant apple\n",
  "fuyu persimmon\n",
  "grapefruit mint\n",
  "honey mushroom\n",
  "ice cream banana\n",
  "juneberry\n",
  "kaffir lime\n",
  "lemon balm\n",
  "mamey sapote\n",
  "nectarine blossom\n",
  "orange mint\n",
  "papaya tree\n",
  "quinceañera cake\n",
  "rabbiteye blueberry\n",
  "strawberry tree\n",
  "tangerine tree\n",
  "ugli fruit tree\n",
  "vanilla planifolia\n",
  "water lily\n",
  "xigua fruit\n",
  "yellow capsicum\n",
  "zesty lime\n",
];
THE FOLLOWING PROGRAM CAN TURN AN ARRAY TO AN OBJECT
================================================>>>>>>>>>>THIS IS ONE OF THE MANY WAYS<<<<<<<<<<<<<<<<<==================================

const convertor=(arr)=>{
let convert=arr.reduce((acc,it)=>
return {[acc],it:it},{})
return convert
}

============================================>>>>>>>>>>>>>>>>>>>>>>>We can also use a builtin function<<<<<<<<<<================================

const convertorBuilt=(arr)=>{
return Object.assign({},arr)
}

//The object.assign will put the indices as default keys

=======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>3rd approach is to simply use spread operator:<<<<<<<<<<<<<=========================

const spreadConvertor=(arr)=>{
return {...arr}
}

//... enclosed with {} will take out the indices as keys of objects

==============================>>>>>>>>>>>>>>>>>>>>The 4th approach uses minimum builtin functions and is like universal algorithim for most languages <<<=======

//TODO
