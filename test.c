#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    long long n;

    printf("Enter the number of digits of pi to print (including the leading 3): ");
    fflush(stdout);

    if (scanf("%lld", &n) != 1 || n < 1) {
        fprintf(stderr, "Please enter a positive integer.\n");
        return 1;
    }

    if (n > 100000) {
        fprintf(stderr, "Please choose 100000 digits or fewer.\n");
        return 1;
    }

    long long len = n * 10 / 3 + 2;
    unsigned int *a = malloc((size_t)len * sizeof(*a));
    char *digits = malloc((size_t)n + 8);

    if (a == NULL || digits == NULL) {
        fprintf(stderr, "Out of memory.\n");
        free(a);
        free(digits);
        return 1;
    }

    for (long long i = 0; i < len; i++)
        a[i] = 2;

    long long count = 0;
    int nines = 0;
    int predigit = 0;

    for (long long j = 1; j <= n; j++) {
        long long q = 0;

        for (long long i = len; i >= 1; i--) {
            long long x = 10LL * a[i - 1] + q * i;
            long long d = 2 * i - 1;
            a[i - 1] = (unsigned int)(x % d);
            q = x / d;
        }

        a[0] = (unsigned int)(q % 10);
        q /= 10;

        if (q == 9) {
            nines++;
        } else if (q == 10) {
            if (count < n)
                digits[count++] = (char)('0' + predigit + 1);
            while (nines-- > 0 && count < n)
                digits[count++] = '0';
            nines = 0;
            predigit = 0;
        } else {
            if (j != 1 && count < n)
                digits[count++] = (char)('0' + predigit);
            while (nines-- > 0 && count < n)
                digits[count++] = '9';
            nines = 0;
            predigit = (int)q;
        }
    }

    if (count < n)
        digits[count++] = (char)('0' + predigit);
    digits[count] = '\0';

    if (count == 1) {
        printf("%c\n", digits[0]);
    } else {
        putchar(digits[0]);
        putchar('.');
        fwrite(digits + 1, 1, (size_t)(count - 1), stdout);
        putchar('\n');
    }

    free(a);
    free(digits);
    return 0;
}
