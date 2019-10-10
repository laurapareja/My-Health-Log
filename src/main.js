'use strict';




function paintSelectedHours(hour) {
    let hours = `.${hour}`;
    const hourname = document.querySelector(hours);
    let medicationColorSelected = medicationColorSelector[medicationColorSelector.selectedIndex].value;

    hourname.classList.add(medicationColorSelected);
}


function selectHours(guidelineSelected) {
    let counter = 1;
    //reseteo lista horas medicacion
    dayHoursMedication = [];

    const dayHourCorrect = parseInt(guidelineTimeSelector.value);
    dayHoursMedication.push(dayHourCorrect);
    for (let dayHour of dayHours) {
        if (counter === 1) {
            paintSelectedHours(`hour${dayHour}`);
        } else if (counter === guidelineSelected) {
            const dayHourCorrect = parseInt(dayHour) + parseInt(guidelineTimeSelector.value);
            if (dayHourCorrect > 24) {
                const dayHourGood = dayHourCorrect - 24;
                dayHoursMedication.push(dayHourGood);
            } else {
                dayHoursMedication.push(dayHourCorrect);
            }
            counter = 0;
        }
        counter++;
    }
    paintNameMedication(dayHoursMedication);

};

function paintNameMedication() {
    console.log(dayHoursMedication);
    listDose.innerHTML = '';
    for (let dayHourMedication of dayHoursMedication) {
        const medicationTime = `${dayHourMedication}:00`;

        const medicationName = medicationInputName.value;
        let medicationColorSelected = medicationColorSelector[medicationColorSelector.selectedIndex].value;
        const colorPreview = `<div class="colorPreview ${medicationColorSelected}"></div>`;
        const nameMedicationItem = `<li class="namePreview">${medicationName}</li>`;
        const timeMedicationItem = `<li  class="namePreview">${medicationTime}</li>`;

        listDose.innerHTML += `<div class="listItemPreview">${colorPreview}${nameMedicationItem}${timeMedicationItem}</div>`;
    }
}



function selectGuideline(event) {
    var guidelineSelected = guidelineDoseSelector[guidelineDoseSelector.selectedIndex].value;
    const hourBoxes = document.querySelectorAll('.hour');
    listDose.innerHTML = '';


    for (let hourBox of hourBoxes) {
        hourBox.classList.remove('blue');
        hourBox.classList.remove('red');
        hourBox.classList.remove('green');
        hourBox.classList.remove('yellow');
        hourBox.classList.remove('purple');
        hourBox.classList.remove('orange');
    }
    selectHours(parseInt(guidelineSelected));
    paintNameMedication();
};
medicationName.addEventListener('keyup', selectGuideline);
guidelineDoseSelector.addEventListener('change', selectGuideline);
guidelineTimeSelector.addEventListener('change', selectGuideline);
medicationColorSelector.addEventListener('change', selectGuideline);
