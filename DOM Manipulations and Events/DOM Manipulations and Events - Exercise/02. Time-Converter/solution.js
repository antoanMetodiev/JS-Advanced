function attachEventsListeners() {
    let divElements = Array.from(document.getElementsByTagName('div'));
    divElements.forEach(div => {
        let inputButton = div.querySelectorAll('input')[1];
        let labelName = div.querySelector('label').textContent.trim();
        let inputText = div.querySelector('input');

        inputButton.addEventListener('click', () => {
            let daysInput = document.getElementById('days');
            let hoursInput = document.getElementById('hours');
            let minutesInput = document.getElementById('minutes');
            let secondsInput = document.getElementById('seconds');
            daysInput.value = Number(inputText.value);

            if (labelName === 'Hours:') {
                daysInput.value = Number(inputText.value) / 24
            } else if (labelName === 'Minutes:') {
                daysInput.value = Number(inputText.value) / 1440;
            } else if (labelName === 'Seconds:') {
                daysInput.value = Number(inputText.value) / 86400;
            }
            hoursInput.value = daysInput.value * 24;
            minutesInput.value = hoursInput.value * 60;
            secondsInput.value = daysInput.value * 86400;
        });
    });
}
