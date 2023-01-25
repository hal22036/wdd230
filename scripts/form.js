
//--------------------RATING---------------------------
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("rate");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);





// ---------HEART RATING-------------------------
// const hearts = document.getElementsByName("hearts");
// const rating = document.getElementById("rating");

// function displayRatingValue() {
//     rating.innerHTML = this.value;
// }
// for (var i=0; i< hearts.length; i++) {
//     hearts[i].addEventListener('click', displayRatingValue, false);
// }

//CSS for heart rating
/* #heart {
    font-size: 2vw;
}
#rating {
	color: blue;
}
.hearts {
	display: flex;
	flex-direction: row-reverse;
	justify-content: left;
}

.hearts > label {
	color: red;
	width: 5px;
	height: 10px;
	font-size: 2rem;
    margin-right: 45px;
	display: flex;
	align-items: center;
	caret-color: rgba(0, 0, 0, 0); /* remove blinking cursor*/
/* } */ 

/* .hearts > label:hover {
	color: #000;
}

.hearts > label::before {
	content: "\2661";
}
.hearts input:checked ~ label::before {
	content: "\1f49d";
} */

//-------------HTML FOR HEARTS --------
// <!-- <label id='heart' for="r">Heart Rating [<span id="rating"></span>]:</label>
// 	            <div class="hearts">
//                 <input type="radio" id="tenstar" name="hearts" value="10" required><label for="tenstar"></label>
//                 <input type="radio" id="ninestar" name="hearts" value="9" required><label for="ninestar"></label>
//                 <input type="radio" id="eightstar" name="hearts" value="8" required><label for="eightstar"></label>
//                 <input type="radio" id="sevenstar" name="hearts" value="7" required><label for="sevenstar"></label>
//                 <input type="radio" id="sixstar" name="hearts" value="6" required><label for="sixstar"></label>
//                 <input type="radio" id="fivestar" name="hearts" value="5" required><label for="fivestar"></label>
//                 <input type="radio" id="fourstar" name="hearts" value="4" required><label for="fourstar"></label>
//                 <input type="radio" id="threestar" name="hearts" value="3" required><label for="threestar"></label>
//                 <input type="radio" id="twostar" name="hearts" value="2" required><label for="twostar"></label>
//                 <input type="radio" id="onestar" name="hearts" value="1" required><label for="onestar"></label>
//               </div> --></input>