/*
Pseudocode:
1. create array of freelancers
2. create a message to display the average starting price of all the freelancers
3. create a title for the page
4. set max number of freelancers on the page
5. create interval for creating a new listing
6. create functions for adding a freelancer and for rendering the new freelancers
7. when limit is reached stop the interval progression
*/

const mainHeading = document.querySelector("h1");
mainHeading.innerText = "Freelancer Forum";

const secondHeading = document.querySelector("h2");
secondHeading.innerText = "Available Freelancers"

const freelancers = [
    {name: "Joe", price: 20, occupation: "Mechanic"},
    {name: "Beatrice", price: 30, occupation: "Gardener"},
    {name: "Mike", price: 50, occupation: "Electrician"},
    {name: "Sue", price: 40, occupation: "Plumber"},
];
const avgSentence = document.querySelector("h3");


const names = ["Nancy", "Harry", "George"];
const prices = [25, 35, 45];
const occupations = ["Teacher", "Programmer", "Chemist"];
const maxFreelancers = 10;

function avgPrice() {
    let avgPrice = 0
    for(let i = 0; i < freelancers.length; i++) {
        avgPrice += freelancers[i].price;
    }
    return (avgPrice/freelancers.length).toFixed(2);
}
console.log(avgPrice());

const addFreeLancerIntervalId = setInterval(addFreeLancer, 1000);
render();

function render() {
    const freelancerList = document.querySelector("#freelancers");
    const tableHeading = document.createElement("tr")
    const tableName = document.createElement("th");
    const tableOccupation = document.createElement("th");
    const tablePrice = document.createElement("th");
    tableName.innerText = "Name";
    tableOccupation.innerText = "Occupation";
    tablePrice.innerText = "Price";
    tableHeading.replaceChildren(tableName, tableOccupation, tablePrice);
    const listings = freelancers.map((person) => {
        const tableRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.innerText = `${person.name}`;
        const occupationCell = document.createElement("td");
        occupationCell.innerText = `${person.occupation}`;
        const priceCell = document.createElement("td");
        priceCell.innerText = `${person.price}`;
        tableRow.replaceChildren(nameCell, occupationCell, priceCell);
        //append new cells to table row

        return tableRow;

    })
    console.log(listings);

    //use this code block if a table is not required
    // const listings = freelancers.map((person) => {
    //    const newListing = document.createElement("li");
    //     newListing.innerText = `Name: ${person.name}; Occupation: ${person.occupation}; Price: $${person.price}`;

    //     return newListing;
    // });

    freelancerList.replaceChildren(tableHeading,...listings);
    avgSentence.innerText = `The average starting price is $${avgPrice()}`; 
}

function addFreeLancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    freelancers.push({name, price, occupation});
    render();


    if(maxFreelancers <= freelancers.length) {
        clearInterval(addFreeLancerIntervalId);
    }
}



