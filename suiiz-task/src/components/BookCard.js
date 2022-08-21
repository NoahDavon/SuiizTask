import React from 'react';
function BookCard({book}) {
    return ( 
    <div class="group w-full max-w-sm rounded-lg shadow-md bg-gray-800 dark:border-gray-700 h-[500px]">
        <div class='h-5/6'>
            <div class="h-5/6 transition-all ease-in-out delay-0 group-hover:h-0 duration-500">
                <img class="h-full p-8 rounded-t-lg mx-auto object-fit" src={book.formats["image/jpeg"]} alt="book picture unavailable" />
            </div>
            <div>
                <h5 class="m-5 truncate transition-all ease-in-out delay-0 group-hover:whitespace-normal group-hover:overflow-visible duration-500 text-xl font-semibold tracking-tight text-white h-fit">{book.title}</h5>
                <div class='h-0 m-5 transition-all ease-in-out group-hover:h-1/2 duration-0 text-l font-semibold tracking-tight text-white overflow-hidden'>
                    Esse officia labore pariatur do qui velit sunt do. Culpa qui ex aliqua pariatur deserunt. Occaecat sint dolore ut aliquip. Fugiat nisi quis in mollit cillum magna aliqua qui. Do mollit velit cillum ex ea do elit exercitation officia elit. Excepteur ipsum est ea minim mollit culpa duis velit.                </div>
                </div>
        </div>
        <div class="h-1/6 px-5 place-items-center">
            <div class="flex justify-between items-center m-auto h-full">
                <span class="text-3xl font-bold text-white">${(5 + Math.random()*30).toFixed(2)}</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
        </div>
    </div>
     );
}

export default BookCard;