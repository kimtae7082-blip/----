function fgugu () {
            //구구단
        for( let dan = 2; dan < 10; dan++) {
            console.log(dan + "단")
            for (let i=1 ; 1<10; i++) {
                console.log(dan + "*" + i + " = " + dan*i)
            }
            console.log("===")
        }
    }
        
function fgugu2 (dan) {
            //구구단
        for( dan = 2; dan < 10; dan++) {
            console.log(dan + "단")
            for (i=1 ; 1<10; i++) {
                console.log(dan + "*" + i + " = " + dan*i)
            }
            console.log("===")
            return "성공"
        }
    }