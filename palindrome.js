let mot="ABCnBA"

//premier methode
function p1(mot){
    let tab1=[]
    let tab2=[]
    for(let i=0;i<mot.length;i++){
        tab1.push(mot[i])
    }
    for(let i=mot.length-1;i>=0;i--){
        tab2.push(mot[i])
    }
    if(tab1.length==tab2.length){
        for(let i=0;i<tab2.length;i++){
            if(tab1[i]!=tab2[i])
               return("ce mot n'est pas palindrome")
            
        }
        return("ce mot est palindrome")
        
    }
        

}
console.log(p1(mot))