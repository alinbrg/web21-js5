// 1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს.
function getPowerOfNumber(num) {
	// const pow = Math.pow(num, 2)
	return num * num;
}
// console.log(getPowerOfNumber(10));

// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.
function getPriceAfterSale(startPrice, salePercent) {
	const percentInLAri = startPrice * (salePercent / 100);
	const priceAfterSale = startPrice - percentInLAri;

	return Math.round(startPrice * (1 - salePercent / 100));
}

// console.log(getPriceAfterSale(382, 10));
// 3.Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.Math.floor() - ამრგვალებს რიცხვს ნაკლებობით, მაგალითად Math.floor(4.9) აბრუნებს 4-ს. Math.ceil
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function getRandonNumber() {
	return Math.round(Math.random() * 100);
}
// console.log(getRandonNumber());

// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს ამ სტრინგის სიგრძეს (თუ რამდენი სიმბოლოსგან შედგება)
function getCharactersNum(text) {
	return text.length;
}
// console.log(getCharactersNum("example"));

// 5*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი app.js სადაც გვაქვს ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის rate მნიშვნელობაც არის უმცირესი
const currencies = [
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.6742",
		diffFormated: "0.0202",
		rate: 6.6742,
		name: "სომხური დრამი",
		diff: 0.0202,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.8673",
		diffFormated: "0.0131",
		rate: 2.8673,
		name: "ევრო",
		diff: -0.0131,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.3111",
		diffFormated: "0.0046",
		rate: 3.3111,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: -0.0046,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "TRY",
		quantity: 1,
		rateFormated: "0.0957",
		diffFormated: "0.0003",
		rate: 0.0957,
		name: "თურქული ლირა",
		diff: 0.0003,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.5771",
		diffFormated: "0.0078",
		rate: 2.5771,
		name: "აშშ დოლარი",
		diff: 0.0078,
		date: "2023-07-21T17:45:10.772Z",
		validFromDate: "2023-07-22T00:00:00.000Z",
	},
];

function getLowestRateCurrency(arr) {
	const sortedArr = arr.sort((a, b) => {
		return a.rate - b.rate;
	});
	// console.log(sortedArr);
	return sortedArr[0];
}

// console.log(getLowestRateCurrency(currencies));

const titles = document.querySelectorAll(".title");
const title = document.querySelector(".title");
const button = document.getElementById("button");
const container = document.querySelector(".container");
const link = container.querySelector("a");

const span = document.createElement("span");
span.innerText = "<span class='green'>JS</span> lesson 5";
title.innerHTML = "<span class='green'>JS</span> lesson 5";
container.appendChild(span);

// titles[1].style.color = "darkblue";
// titles[1].style.backgroundColor = "red";

title.classList.remove("title");
link.setAttribute("href", "contact.html");
title.insertAdjacentElement("afterend", span);

button.addEventListener("click", (e) => {
	e.stopPropagation();
	console.log(e.target);

	titles[1].classList.toggle("green");
	if (span) {
		span.remove();
	}
});

link.addEventListener("click", (e) => {
	e.preventDefault();

	if (false) {
		console.log("show modal");
		//show modal
	} else {
		window.location = "contact.html";
	}
	// console.log(e);
	// console.log("link tag clicked");
});

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

const charDiv = document.querySelector(".charachters");

function renderCharacters() {
	const html = characters.map((el) => {
		return `<div class="darkblue">
			<span class="actor">${el.actor}</span>
		</div>`;
	});

	console.log(html.join(""));
	charDiv.innerHTML = html.join("");
}

renderCharacters();
