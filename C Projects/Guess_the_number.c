#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int number, guess, no_of_guesses = 1;
    srand(time(0));            //Generate different no. every time
    number = rand() % 100 + 1; //generate no. betwnn 1-100
    do
    {
        printf("Guess a number between 1 and 100\n");
        scanf("%d", &guess);
        if (guess > number)
        {
            printf("Lower number please!\n");
        }
        else if (guess < number)
        {
            printf("Higher number please!\n");
        }
        else
        {
            printf("Correct! You guessed it in %d attempts\n", no_of_guesses);
        }
        no_of_guesses++;
    } while (guess != number);

    return 0;
}