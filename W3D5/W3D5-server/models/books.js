 let books = [];

 module.export = class Book{
      constructor(id,title, ISBN,publishedDate,author){
          this.id = id;
          this.title = title;
          this.ISBN =ISBN;
          this.publishedDate = publishedDate;
          this.author = author;
      }
      create(){
          books.push(this);
          return this;
          
      }
      read(){
      return books;
      }

     readById(bookId){
          const book= books.find(b=>b.id===bookId);
          return book;
      }
     update(){
          const index = books.findIndex(b=>b.id === this.id);
          if(index > -1){
              books.splice(index,1,this);
              return this;
          }else{
              throw new Error("not found");
          }

      }
     delete(bookId){
         const  index = books.findIndex(b =>b.id===bookId);
         if(index > -1){
           books = books.filter(b => b.id !== bookId);
         }else{
             throw new Error("Not found")
         }

     }

 }
