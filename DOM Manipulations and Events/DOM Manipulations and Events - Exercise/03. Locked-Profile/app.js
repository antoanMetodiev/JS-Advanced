function lockedProfile() {
    const data = document.querySelectorAll('div input[type="radio"]');
    let divEls = [];

    for (let i = 0; i < data.length; i += 2) {
        divEls.push(Array.of(data[i], data[i + 1]));
    }

    divEls.forEach(radioInput => {
        for (const input of radioInput) {

            input.addEventListener('click', (event) => {
                let currentRadioInput = event.target;
                let value = currentRadioInput.value;

                if (value === 'unlock') {
                    let otherRadioInput = input.parentElement.querySelector('div input[value="lock"]');
                    otherRadioInput.removeAttribute('checked');
                    currentRadioInput.setAttribute('checked', 'IsUnlocked');
                } else if (value === 'lock') {
                    let otherRadioInput = input.parentElement.querySelector('div input[value="unlock"]');
                    otherRadioInput.removeAttribute('checked');
                    currentRadioInput.setAttribute('checked', 'IsLocked');
                }
            });
        }
    });

    Array.from(document.getElementsByTagName('button')).forEach(btn => {
        btn.addEventListener('click', (event) => {
            let currentUserHiddenEls = btn.parentElement.querySelector('div');
            let radioEl = event.target.parentElement.querySelector('input[value="unlock"][checked="IsUnlocked"]');

            if (btn.textContent === 'Hide it' ) {
                currentUserHiddenEls.style.display = 'none';
                btn.textContent = 'Show more';
            } else if (btn.textContent === 'Show more' ) {
                currentUserHiddenEls.style.display = 'block';
                btn.textContent = 'Hide it';
            }
        });
    });
}