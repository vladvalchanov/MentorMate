function brickwork(dimensions, input) {

    let row = dimensions[0];
    let col = dimensions[1];

    if (row > 100 && col > 100) {
        console.log('Area not valid.');
        return;
    }

    let print = [];

    for (let i = 0; i < row; i += 2) {
        let arr = [];
        let arr2 = [];
        for (let j = 0; j < input.length; j++) {
            if (input[i].length === 0 && input[i + 1].length === 0) {
                continue;
            }

            let row2element1 = input[i + 1][j];
            let row2element2 = input[i + 1][j + 1];
            let row1element1 = input[i][j];
            let row1element2 = input[i][j + 1];
            let row1element3 = input[i][j + 2];
            let row1element4 = input[i][j + 3];


            if (row1element1 === row1element2) {
                arr.push(row1element1);
                arr.push(row1element1);
                arr2.push(row2element1);
                arr2.push(row2element1);

                if (row1element2 != row1element3) {

                    if (row1element3 === row1element4) {
                        arr.unshift(input[i][j + 2]);
                        arr2.unshift(input[i][j + 2]);

                        arr.push(input[i + 1][j + 2]);
                        arr2.push(input[i + 1][j + 2]);
                        input[i].splice(0, 4);
                        input[i + 1].splice(0, 4);
                    }


                } else {

                    input[i].splice(0, 2);
                    input[i + 1].splice(0, 2);
                }
                j--;
            }


            if ((row1element1 != row1element2)
                && (row1element2 === row1element3)) {
                arr.push(row1element2);
                arr.push(row1element2);
                arr2.push(row2element2);
                arr2.push(row2element2);

                arr.push(row1element1);
                arr.push(row1element1);

                arr2.push(row1element4);
                arr2.push(row1element4);

                input[i].splice(0, 4);
                input[i + 1].splice(0, 4);
                j--;
            }
        }
        print.push(arr);
        print.push(arr2);
    }



    console.table(print);

};


brickwork([2, 4],
    [
        [1, 1, 2, 2],
        [3, 3, 4, 4]
    ]);


brickwork([2, 8], [
    [1, 1, 2, 2, 6, 5, 5, 8],
    [3, 3, 4, 4, 6, 7, 7, 8]
]);

brickwork([4, 8],
    [
        [1, 2, 2, 12, 5, 7, 7, 16],
        [1, 10, 10, 12, 5, 15, 15, 16],
        [9, 9, 3, 4, 4, 8, 8, 14],
        [11, 11, 3, 13, 13, 6, 6, 14]
    ]);

