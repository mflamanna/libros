import React, { useState, useEffect } from 'react'
import BookItem from './BookItem';

function ListBooks(){
    let [booksData, setBooksData] = useState([])

useEffect(() => {
let url = "https://sheetlabs.com/MELQ/catalog";
fetch(url)
.then(response => response.json())
.then(data => setBooksData(data))

}, []);


    return (
        <>
        {
        booksData.map((item, index) => (
            <BookItem key={index} titol= {item.titol} autoria={item.autoria} descriptors={item.descriptors} isbn={item.isbn}/>
        ))
        }
        </>
    )
    }

    export default ListBooks;

   