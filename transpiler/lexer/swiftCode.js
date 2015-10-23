module.exports = {
  
  swiftCode: [
    'var a = 3', // 1
    'var b = "hello"', // 2
    'var c = true', // 3
    'var d = "Test this"', // 4
    'var e = ["Eggs", "Milk", "Bacon"]', // 5
    'var f = ["one": 1, "two": 2, "three": 3]', // 6
    'let g = [1 : "one",2   :"two", 3: "three"]', // 7
    'let h = 3.14', // 8
    'let i = 5+6', // 9
    'var j = 5 + 6 / 4 - (-16 % 4.2) * 55', // 10
    'let l = 6 !== 9', // 11
    'var a = 1; var m = ++a;', // 12
    'var a = 1; var n = a++;', // 13
    'var a = true; var b = !a; var c = -a; var d = +b', // 14
    'var a = (6 == 7) ? 1 : -1', // 15
    'var k = "Stephen" + " " + "Tabor" + "!"', // 16
    'var planet = "Earth"; let o = "Hello \\(planet)!"', // 17
    'var planet = "Earth"; let o = "\\(planet)"', // 18
    'var p = "\\(100 - 99), 2, 3"', // 19
    'let q = ["array1": [1,2,3], "array2": [4,5,6]];', // 20
    'let arr = [1, 2]; var s = arr[0];', // 21
    'let arr = [1, 2]; let t = 100; var u = arr[t - 99];', // 22
    'let arr = [1,2]; var u = [arr[0]];', // 23
    'let arr = [1,2]; var v = [arr[0]: [[1,2], [3,4]], arr[1]: [["one", "two"], ["three", "four"]]];', // 24
    '/* Comment 1 */ var a = 1 // Comment 2', // 25
    'var error = (404, "not found")', // 26
    'let http200Status = (statusCode: 200, description: "OK");', // 27
    'var empty = ()', // 28
    'var w = [1: [[1: "two"], [3: "four"]], 2: [["one": 2], ["three": 4]]];', // 29
    'var i = 10; while i >= 0 {i--}', // 30
    'var i = 10; repeat {i--} while (i >= 0)', // 31
    'var i = 10; while (i >= 0) {i--}', // 32
    'var i = 10; repeat {i--} while i >= 0', // 33
    // 'var i = 0; while (i >= 0) { 
    //     i++
    // }', // 34
    // 'var i = 0; \
    // repeat { \
    //   i++ \
    // } while i < 10', // 35
    `var b = true;
    var c = 0;`
  ]

};

// Max: Switch, multiline: if and while, basic functions
// Don: multiline repeat-while, for-in, for loops
