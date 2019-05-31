class BookService {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/books'
    }

    async getBooks(){
    const response = await fetch(this.baseUrl)
    const books = await response.json();
    return books; 
   }

   async postBook(book){
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            body: book
        })
        const data =  await response.json();
        console.log(data)

    }

    async deleteBook(bookId){
       const response = await fetch('${this.baseUrl}/${bookId}', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
       const data = await response.json();
    }
}
module.exports = BookService;