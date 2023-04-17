const strLength=(str)=>{
    //Break problem to subproblems
    //Big problem => out of the string i have to calculate the instances of a specific char
    // 1) init empty object
    let obj ={};
    // 2) Loop over the string
    
    for(let char of str){
        char=char.toLowerCase();
        
    // 3) check if string is alphanumeric and also already in the object
        
        if(/^[a-z0-9]+$/gi.test(char)){
            
    // if it is not in object create its key and give 1 value if already +1 
            obj[char]=++obj[char]||1;
        }
        
    } 
    //return obj
    return obj
}
strLength("hEllfafalnfa012919201___o")
