function checkAnswers()
{
    //make an array to store feedback on every question
    var feedback = [];
    //keep score
    var score=0;
    //check answer one
    //first collect the answer using an input box..
    var q1answer = document.quiz.a1.value.toLowerCase();
    var q6answer = document.quiz.a6.value.toLowerCase();
    if (q1answer === 'anushree')
    {
        //increase score by 1
        score = score + 1;
        //push feedback to the array
        feedback.push(" Question 1 is CORRECT!!!");
    }
    else
    {
        feedback.push(" Question 1 is WRONG! It was ANUSHREE! You suck lol");
    }

    //check answer TWO
    if(document.quiz.a2.value === 'one')
    {
        //increase the score
        //push some feedback
        score = score + 1;
        feedback.push(" Question 2 is CORRECT!");
    }
    else
    {
        feedback.push(" Question 2 is WRONG! It was 1 sibling!");
    }
    //check answer 3
    if (document.quiz.a3B.checked === true && document.quiz.a3C.checked === true && document.quiz.a3E.checked === true)
    {
        if (document.quiz.a3A.checked === true || document.quiz.a3D.checked === true)
        {
            feedback.push(" Question 3 is WRONG!!! It was INDIA/NEW YORK/ST. LOUIS");
        }
        else
        {
            score = score + 1;
            feedback.push(" Question 3 is CORRECT!!!");
        }
        //if the 3 conditions are met... a3A, a3C, a3D are all true/checked... answer is correct.
        //or is ||
    }
    else
    {
        feedback.push(" Question 3 was WRONG!!! It was INDIA/NEW YORK/ST. LOUIS");
    }


    if(document.quiz.a4.value === 'rc')
    {
        //increase the score
        //push some feedback
        score = score + 1;
        feedback.push(" Question 4 is CORRECT!");
    }
    else
    {
        feedback.push(" Question 4 is WRONG! It was riding roller coasters! You should know better!");
    }
    if (document.quiz.a5C.checked === true && document.quiz.a5D.checked === true)
    {
        if (document.quiz.a5A.checked === true || document.quiz.a5B.checked === true || document.quiz.a5E.checked === true)
        {
            feedback.push(" Question 5 is WRONG!!! It was ORANGE CHICKEN/PIZZA");
        }
        else
        {
            score = score + 1;
            feedback.push(" Question 5 is CORRECT!!!");
        }
        //if the 3 conditions are met... a3A, a3C, a3D are all true/checked... answer is correct.
        //or is ||
    }
    else
    {
        feedback.push(" Question 5 is WRONG!!! It was ORANGE CHICKEN/PIZZA");
    }

    if (q6answer === 'raol')
    {
        //increase score by 1
        score = score + 1;
        //push feedback to the array
        feedback.push(" Question 6 is CORRECT!!!");
    }
    else
    {
        feedback.push(" Question 6 is WRONG! It was RAOL!");
    }

    return feedback + " Your score is " + score;
    //check our work
}