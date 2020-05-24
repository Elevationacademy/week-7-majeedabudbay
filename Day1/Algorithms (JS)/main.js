//ex1

const printStars = function(num){
    for(let i = 1; i <= num; i++){
        let row = ""
        for(let j = 0; j < i ; j++){
            row+="*"
        }
        console.log(row)
    }
}

// printStars(5)


const printBackwardsStars = function(num){
    for(let i = num; i > 0; i--){
        let row = ""
        for(let j = 0; j < i ; j++){
            row+="*"
        }
        console.log(row)
    }
}


// printBackwardsStars(5)


const printStarSeries = function(num, count){
    let series = 0
    while(series < count){
        for(let i = 1; i < num; i++){
            let row = ""
            for(let j = 0; j < i ; j++){
                row+="*"
            }
            console.log(row)
        }

        for(let i = num; i > 0; i--){
            let row = ""
            for(let j = 0; j < i ; j++){
                row+="*"
            }
            console.log(row)
        }
        console.log("\n")
        series++
    }
}

// printStarSeries(5, 3)



const reverse = function(str){
    
    let reversed =  (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0)
    return reversed
  }
  
//   console.log(reverse("dog")) //should return "god"
//   console.log(reverse("race car")) //should return "rac ecar"
  

function isPalindrome(str){
    if(str.length == 0) return true
    else if(str.length == 1) return true
    else if(str.length == 2) return str[0] == str[1]
    else if(str[0] == str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false
}

console.log(isPalindrome("rottor"))