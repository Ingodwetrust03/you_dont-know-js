'use strict'

const books = {
    booksArray: [],
    book3Title: {},
    book2Chapters: [],
    book5Chapters: [],
    book6Chapters: [],
    book6AddedChapter: {},

    rowOfBooks: function(){
        books.booksArray = document.querySelectorAll('.book')
        console.log(books.booksArray)
        books.booksArray[0].before(books.booksArray[1])
        books.booksArray[0].after(books.booksArray[4])
        books.booksArray[5].after(books.booksArray[2])
    },

    changeBackground: function(){
        document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'
    },

    changeTitle: function(){
        books.book3Title = document.querySelector('.book:nth-of-type(3) h2 a')
        books.book3Title.textContent = 'Книга 3. this и Прототипы Объектов'
    },

    deleteAdv: function(){
        document.querySelector('.adv').remove()
    },

    rowOfChapters: function(){
        books.book2Chapters = document.querySelectorAll('.book:nth-of-type(2) li')
        console.log(books.book2Chapters)
        books.book2Chapters[0].after(books.book2Chapters[3])
        books.book2Chapters[3].after(books.book2Chapters[6])
        books.book2Chapters[6].after(books.book2Chapters[8])
        books.book2Chapters[3].before(books.book2Chapters[1])
        books.book2Chapters[9].after(books.book2Chapters[2])


        books.book5Chapters = document.querySelectorAll('.book:nth-of-type(5) li')
        console.log(books.book5Chapters)
        books.book5Chapters[1].after(books.book5Chapters[9])
        books.book5Chapters[4].after(books.book5Chapters[2])
        books.book5Chapters[7].after(books.book5Chapters[5])
    },

    addChapterToBook6: function(){
        books.book6AddedChapter = document.createElement('li') 
        books.book6AddedChapter.textContent = 'Глава 8: За пределами ES6'
        books.book6Chapters = document.querySelectorAll('.book:nth-of-type(6) li')
        console.log(books.book6Chapters)
        books.book6Chapters[8].after(books.book6AddedChapter)
       
    },

    start: function(){
        books.rowOfBooks()
        books.changeBackground()
        books.changeTitle()
        books.deleteAdv()
        books.rowOfChapters()
        books.addChapterToBook6()
    }
    

}


books.start()

