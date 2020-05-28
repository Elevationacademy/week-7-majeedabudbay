class word{

    constructor(){
        this.words = []
    }
    



    async getDataFromDB(){
         let words = await $.get(`/words`)
         this.words = words
    }
    
    
    
    
    
    saveword(word){
        $.post('/word', word)
        this.words.push(word)
    }
    
    
    
        

}