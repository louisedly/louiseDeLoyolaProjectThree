const result = {
    tactic: [
        {
        value: "survive",
        description: "You survived! Congratulations, with your survival skills you've managed to triumph against the brain eaters. Now you're the only human being alive left on earth. "
        },
        {
        value: "die",
        description: "Sorry, you died."
        },
        {
        value: "turn",
        description: "Uh no, you turned into a Zombie! Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. "
        },
        {
        value: "cure",
        description: "You found the cure! Venture philanthropy, society relief, milestones, mass incarceration social capital. Contextualize thought leadership, shine transparent, social innovation we must stand up.
        }
    ],
    weapon: [
        {
            value: "survive",
            description: "You survived! Congratulations, with your survival skills you've managed to triumph against the brain eaters. Now you're the only human being alive left on earth. "
        },
        {
            value: "die",
            description: "Sorry, you died."
        },
        {
            value: "turn",
            description: "Uh no, you turned into a Zombie! Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. "
        },
        {
            value: "cure",
            description: "You found the cure! Venture philanthropy, society relief, milestones, mass incarceration social capital. Contextualize thought leadership, shine transparent, social innovation we must stand up.
        }
    ],
    zombie: [
        {
            value: "survive",
            description: "You survived! Congratulations, with your survival skills you've managed to triumph against the brain eaters. Now you're the only human being alive left on earth. "
        },
        {
            value: "die",
            description: "Sorry, you died."
        },
        {
            value: "turn",
            description: "Uh no, you turned into a Zombie! Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. "
        },
        {
            value: "cure",
            description: "You found the cure! Venture philanthropy, society relief, milestones, mass incarceration social capital. Contextualize thought leadership, shine transparent, social innovation we must stand up.
        }
    ],
};

$(function () {
    $('form').on('submit', function(e) {
        e.preventDefault();
        
    const questionOne = $('input[name=tactic]:checked').val();
    const questionTwo = $('input[name=weapon]:checked').val();
    const questionThree = $('input[name=zombie]:checked').val();

    const score = 0;

        if (questionOne == "survive"){score++};
        if (questionTwo == "survive"){score++};
        if (questionThree == "survive"){score++};

        console.log(score);

        const finalChoice = [];

        if (score >= 3) {
            finalChoice.push('survive')
        } else if (score === 2) {
            finalChoice.push('die')
        } else if (score === 1) {
            finalChoice.push('turn')
        } else {
            finalChoice.push('cure')
        };

        console.log(finalChoice);

		// Populate the page with our result
        $('#results').html(`<h2 class="final">${finalChoice}</h2>`);
    });
});