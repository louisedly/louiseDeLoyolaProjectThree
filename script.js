// Document ready
$(function () {
    // Add an event listener for the submit button
    $('form').on('submit', function(e) {
        e.preventDefault();

        // *1 converts variable into a number instead of concatenating
        const tactic = $('input[name=tactic]:checked').val()*1;
        const weapon = $('input[name=weapon]:checked').val()*1;
        const zombieFriend = $('input[name=zombieFriend]:checked').val()*1;

        const total = (tactic + weapon + zombieFriend);

        console.log(total);

		// Use the user's choice to find a result
		// Run through an if statement
        const finalChoice = [];

        if (total < 4) {
            finalChoice.push('You survived! Congratulations, with your survival skills you have managed to triumph against the brain eaters. Unfortunately, you are now the only human being left alive on earth.')
        } else if (total >= 4 && total < 7) {
            finalChoice.push('Sorry, you died!')
        } else if (total >= 7 && total < 12) {
            finalChoice.push('Oh no, you turned into a Zombie! Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris.')
        } else if (total >= 12) {
            finalChoice.push('You found the cure! Venture philanthropy, society relief, milestones, mass incarceration social capital. Contextualize thought leadership, shine transparent, social innovation we must stand up.')
        } else {
            $('.prompt').text('Please complete all questions before checking your results!');
        };

        console.log(finalChoice);

		// Populates the page with result
        $('.results').html(`<h2 class="final">${finalChoice}</h2>`);
        
        const scroll = $(this).closest(".section").next().offset().top;
        $("html, body").animate({ scrollTop: scroll }, "slow");
    });

    // Refreshes page and radio buttons and scrolls back to top
    $('.startButton').on('click', function () {
        location.reload();
        $('form').scrollTop(0);
    });
});