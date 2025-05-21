function render() {
    const queryString = window.location.search;
    
    // gets the index file of the   
    fetch("/back/book_reviews_scr/" + queryString.substring(1) + "/index.json")
    .then(result => result.json())
    .then(data => {
        console.log("/back/book_reviews_scr/" + queryString.substring(1) + "/index.json");
        console.log(data)

        // change title
        document.getElementById("title").innerHTML  = data[0].title;

        // area of stored links
        const links = document.querySelector("#links");

        for (var i = 1; i < data.length; i ++) {

            // create book title 
            const book_title = document.createElement("a");
            book_title.innerHTML = data[i].name;
            book_title.href = data[i].link;

            // create author
            const author = document.createElement("span");
            author.innerHTML = data[i].author;

            // create review wrapper 
            const review = document.createElement("div");
            review.classList.add("review");

            // add book title and author to review 
            review.appendChild(book_title);
            review.appendChild(author);

            // add review to links list
            links.appendChild(review);

        }
    })
}