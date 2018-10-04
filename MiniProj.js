function TemperatureBug()
{
    //capture a score from HTML
    var score = Number(document.project1.num1.value);

    if (score >= 70)
    {
        return "summer";
    }
    else if (score >= 60)
    {
        return "spring";
    }
    else if (score >= 50)
    {
        return "fall";
    }
    else if (score < 50)

        return "winter";
}

function CalorieCounter()
{
    var quantity = Number(document.project2.num1.value);
    var noun = document.project2.word1.value.toLowerCase();

    if (noun == 'bowling')
    {
        if (quantity > 1)
        {
            return quantity + " mice.";
        }
        else
        {
            return quantity + "mouse.";
        }
    }
    else if (noun == 'deer')
    {
        return quantity + " deer."
    }
    else if (noun == 'cactus')
    {
        if (quantity > 1)
        {
            return quantity + " cacti."
        }
        else
        {
            return quantity + " cactus."
        }
    }

    if (quantity > 1)
    {
        //tack on an 's' to the noun aka CONCATENATE
        return quantity + " " + noun + "s";
    }
    else
    {
        return quantity + " " + noun;
    }
}