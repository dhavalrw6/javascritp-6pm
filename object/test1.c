#include <stdio.h>

void main()
{
    int i, j;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= 6 - i; j++)
        {
            printf("%d ", j);
        }
        for (int k = 1; k <= i-1; k++)
        {
            printf("_ ");
        }
        for (int k = 1; k <= i-1; k++)
        {
            printf("_ ");
        }
        for (j = 6-i; j >= 1; j--)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}