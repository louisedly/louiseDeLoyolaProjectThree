// Document ready
$(function () {
    // Add an event listener for the submit button
    $('form').on('submit', function(e) {
        e.preventDefault();
        
    const questionOne = $('input[name=tactic]:checked').val();
    const questionTwo = $('input[name=weapon]:checked').val();
    const questionThree = $('input[name=zombieFriend]:checked').val();


    let score = 2;

        if (questionOne == "survive"){score++};
        if (questionTwo == "survive"){score++};
        if (questionThree == "survive"){score++};

        console.log(score);

		// Use the user's choice to find a result
		// Run through an if statement
        const finalChoice = [];

        if (score >= 5) {
            finalChoice.push('You survived! Congratulations, with your survival skills you have managed to triumph against the brain eaters. Now you are the only human being alive left on earth. ')
        } else if (score === 4 || score === 3) {
            finalChoice.push('Sorry, you died!')
        } else if (score === 2) {
            finalChoice.push('Oh no, you turned into a Zombie! Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris.')
        } else if (score === 1) {
            finalChoice.push('You found the cure! Venture philanthropy, society relief, milestones, mass incarceration social capital. Contextualize thought leadership, shine transparent, social innovation we must stand up.')
        } else {
            $('.prompt').text('Please complete all questions before checking your results!');
        };

        console.log(finalChoice);

		// Populates the page with result
        $('.results').html(`<h2 class="final">${finalChoice}</h2>`);
    });

    // Refreshes page and radio buttons and scrolls back to top
    $('.startButton').on('click', function () {
        location.reload();
        $('form').scrollTop(0);
    });
});