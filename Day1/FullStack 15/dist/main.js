
// let wordclass = new word()


$('#btn').on('click', function(){
    // console.log("hiiiiiiiii")
    const input = $('#in').val()
    $("#words").append(`<div> ${input} </div>`)
    
    // input.save()
    $("#in").val("")
})


const loadPage = function(){
    
    wordclass.getDataFromDB().then(()=> wordclass.words.forEach(w => $("#words").append(`<div> ${w.name} </div>`)))
   
}

loadPage()