#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int decision(char you, char comp){
    //return 1 if you win, -1 if lose and 0 for draw
    if (you == comp)
    {
        return 0;
    }
    if (you=='r' && comp=='p')
    {
        return -1;
    }
    else if (you=='p' && comp=='r')
    {
        return 1;
    }
    
    if (you=='r' && comp=='s')
    {
        return 1;
    }
    else if (you=='s' && comp=='r')
    {
        return -1;
    }
    if (you=='p' && comp=='s')
    {
        return -1;
    }
    else if (you=='s' && comp=='p')
    {
        return 1;
    }
}
int main()
{
    char you, comp;

    //Computer is selecting
    srand(time(0)); //Generate different no. every time
    int number = rand() % 100 + 1;
    if (number < 33)
    {
        comp = 'r';
    }
    else if (number > 33 && number < 67)
    {
        comp = 's';
    }
    else
    {
        comp = 'p';
    }

    //You are selecting
    printf("Type r for Rock, p for Paper and s for sessior \n");
    scanf("%c", &you);

int result = decision(you, comp);
    if (result==0)
    {
        printf("Match Draw\n");
    }
    else if (result==1)
    {
        printf("You Win ^_^ \n");
    }
    else
    {
        printf("You Lose :-( \n");
    }
    printf("You choose %c and computer choose %c", you, comp);
    return 0;
}