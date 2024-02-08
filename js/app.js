(() => {
    const textAreaContent = document.getElementById('choices');
    const contentChoices = document.querySelector('.choices-content');
    const SecondsDelayInterval = 10;

    textAreaContent.addEventListener('keyup', (event) => {
        const textDivided = event.target.value.split(',')

        const options = textDivided.filter(el => el.length > 0).map(word => word.trim());

        if (event.key === 'Enter') {
            event.preventDefault();
            chooseRandom();
            return
        }

        renderElements(options);
    })


    const renderElements = (opitons = []) => {
        contentChoices.innerHTML = '';

        opitons.forEach(option => {
            const divChoice = document.createElement('div')
            divChoice.classList.add('choice');
            divChoice.innerHTML = option;

            contentChoices.appendChild(divChoice);
        })

        return
    }

    const chooseRandom = () => {
        const optionsForRandom = document.querySelectorAll('.choice');
        let randomOptionSelected;
        textAreaContent.value = ''

        const timer = setInterval(() => {
            randomOptionSelected = Math.floor(Math.random() * optionsForRandom.length);

            selectOption(optionsForRandom[randomOptionSelected]);

            setTimeout(() => {
                deSelectOption(optionsForRandom[randomOptionSelected]);
            }, 200);

        }, 300)

        setTimeout(() => {
            clearInterval(timer);
            setTimeout(() => {
                selectOption(optionsForRandom[randomOptionSelected]);
            }, 350);
        }, SecondsDelayInterval * 1000);
    }


    const selectOption = (tag) => {
        tag.classList.add('selected');
    }

    const deSelectOption = (tag) => {
        tag.classList.remove('selected');
    }
})();