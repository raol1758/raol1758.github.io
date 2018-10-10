function TemperatureBug()
{
    //capture a score from HTML
    var temp = Number(document.project1.num1.value);
    var image = document.getElementById('weather');

    if (temp >= 70)
    {
        image.src = "beach.gif";
        return "summer";
    }
    else if (temp >= 60)
    {
        image.src = "spring.gif";
        return "spring";
    }
    else if (temp >= 50)
    {
        image.src = "fall.gif";
        return "fall";
    }
    else if (temp < 50)
    {
        image.src = "winter.gif";
        return "winter";
    }
}

function CalorieCounter()
{
    var activity = document.getElementById('activity').value;
    var minutes = document.project2.minutes.value;

    if (activity == "Bowling")
    {
        return 2 * minutes + " Calories Burnt";
    }
    else if (activity == "Swimming")
    {
        return 6 * minutes + " Calories Burnt";
    }
    else if (activity == "Tennis")
    {
        return 3 * minutes + " " + "Calories Burnt";
    }
    else if (activity == "Running")
    {
        return 5 * minutes + " " + "Calories Burnt";
    }
}

function assignGrade() {
    var num1 = Number(document.project3.num1.value);

    if (num1 >= 90)
    {
        return "A";
    }
    else if (num1 >= 80)
    {
        return "B";
    }
    else if (num1 >= 70)
    {
        return "C";
    }
    else if (num1 >= 60)
    {
        return "D";
    }
    else if  (num1 >= 0)
    {
        return "F";
    }
}