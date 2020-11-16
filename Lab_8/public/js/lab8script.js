
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);

let settings = { method: "Get" };
let chartValues = [];

async function getData() {
    const resRaw = await fetch(url, settings);
    const json = await resRaw.json();
    let listSize = json.data.children.length;
    // Loop to pick 5 random entries
    for (x = 0; x < 5; x++) {
        debugger;
        // Get a random number within the size of the list
        const rand = Math.floor((Math.random() * (listSize-1)));
        // Get subreddit, author, title, and ups from record
        const post = json.data.children[rand].data;
        const subreddit = post.subreddit;
        const author = post.author;
        const title = post.title;
        const ups = post.ups;
        // Set the message to be:
        let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
        //  Add a new <li> element with the message to the 'redditList' element
        const ul = document.getElementById('redditList');
        ul.innerHTML += `<li>${message}</li>`;
        // Add a data entry to chartValues with author as the label and ups as the y component
        let addToChart = { label: author, y: ups };
        chartValues.push(addToChart);
    }
    chart.render();
};

window.onload = async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints: chartValues
            }
        ]
    });
    
    chart.render();
}