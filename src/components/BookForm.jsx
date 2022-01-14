import React, { useState } from "react";

function BookForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState(getShiftedTimeStringForTimeInput(2));
  const [guests, setGuests] = useState(1);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [timeIsValid, setTimeIsValid] = useState(true);

  function checkEmail(event) {
    event.target.checkValidity();
    setEmailIsValid(!event.target.validity.typeMismatch);
  }

  function checkTime(event) {
    event.target.checkValidity();
    setTimeIsValid(!event.target.validity.rangeUnderflow);
  }

  function changeEmail(event) {
	setEmail(event.target.value);
	// checkEmail(event);
  }

  function changeTime(event) {
	setTime(event.target.value);
	checkTime(event);
  }

  function getShiftedTimeStringForTimeInput(nonBookableHours) {
	let result = "";
	const timeZoneOffsetSeconds = new Date( Date.now()).getTimezoneOffset() * 60 * 1000;
	result = new Date( Date.now() + ( nonBookableHours * 60 * 60 * 1000 )
		- timeZoneOffsetSeconds ).toISOString().split(".")[0];
	// result = nonBookableTimeString.substring(1, nonBookableTimeString.length - 3);
	// console.log(result);
	return result;
  }

  function submitForm(event) {
	console.log(name, email, time, guests);
    event.preventDefault();
  }

  return (
    <div>
      <form id="book-form" onSubmit={submitForm}>
        <label className="mainL">Asztalfoglalás</label>

        	<label htmlFor="name" className="firstL">Név:</label>
				<input
					type="text"
					id="name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					/>

			<label htmlFor="email" className="secondL">Email:</label>
			<div>
				<input
					type="email"
					id="email"
					required
					value={email}
					onChange={changeEmail}
					onBlur={checkEmail}
					/>
				{emailIsValid ? "" : <p className="invalid">Hibás email cím</p>}
			</div>

			<label htmlFor="time" className="thirdL">Időpont:</label>
    		<div>
				<input
					type="datetime-local"
					id="time"
					required
					value={time}
					min={getShiftedTimeStringForTimeInput(1)}
					onChange={changeTime}
					onBlur={checkTime}
					step="1"
					/>
				{timeIsValid ? "" : <p className="invalid">Túl korai időpont. Leghamarabb egy óra múlva</p>}
			</div>

			<label htmlFor="guests" className="fourthL">Vendégek száma:</label>
				<input
					type="number"
					id="guests"
					required
					value={guests}
					min="1"
					onChange={(e) => setGuests(e.target.value)}
				/>
          <button type="submit">Foglalás elküldése</button>
      </form>
    </div>
  );
}

export default BookForm;
