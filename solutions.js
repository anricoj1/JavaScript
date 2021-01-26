class Solution {

    compareTrip = () => {
        var ascore = 0;
        var bscore = 0;
    
        for (var i = 0; i < a.length; i++) {
            ascore += a[i] > b[i];
            bscore += a[i] < b[i];
        }
    
        console.log(ascore, bscore);
    
        return [ascore, bscore];
    }

    /* Write a function that finds the difference between diagonals
        11   2   4
        4    5   6     ----> 11 5 6  | 4 5 10 <-----
        10   8  -12
    */

    diagDifference = (matrix) => {
        var s1 = 0;
        var s2 = 0;

        /* init 2 iterators */
        for (var i = 0, j = (matrix[0].length - 1); i < matrix[0].length, j > -1;  i++, j--) {
            s1 += matrix[i][i];
            s2 += matrix[i][j];
        }

        return Math.abs(s1 - s2);
    }

    /* numbers between 1 and x:
    if it is divisible by 3 & 5 print FizzBuzz
    if divisible by 3 print Fizz
    if divisible by 5 print Buzz */
    fizzBuzz = (x) => {
        for (var i = 1; i <= x; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }

    addTwoNumbers = (l1, l2) => {
        let sum = 0;
        let current = new ListNode(0);
        let result = current;

        while (l1 || l2) {
            if (l1) {
                sum += l1.val;
                l1 = l1.next;
            }

            if (l2) {
                sum += l2.val;
                l2 = l2.next;
            }

            current.next = new ListNode(sum % 10);
            current = current.next;

            sum = sum > 9 ? 1 : 0;
        }

        if (sum) {
            current.next = new ListNode(sum);
        }

        return result.next;
    }
}

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

new Solution().addTwoNumbers([2, 4, 3], [5, 6, 4]);