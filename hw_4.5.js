let objOfObjects = {
    a1: {
        b: {
          c: 1
        },
        p: {
          c: 222
        },
        z: {
            t: {
                d: 33,
                e: 2.5,
                f: {
                    d: 9999,
                    h: {
                        i: {
                            j: [[4, 5, 7], [6, 8, 12]],
                            k: "String",
                            l: [1, 2, 3],
                            music: {
                                genre: "Rock",
                                band: "KISS",
                                songs: {
                                    s1: "I Love It Loud",
                                    s2: "Beth"
                                },
                                guitars: {
                                    g1: "Ibanez",
                                    g2: "Cort",
                                    g3: "Epiphone",
                                    g4: "Gibson",
                                    g5: "Guild"
                                },
                            }
                        }
                    }
                }
            }
        }
    }
}

function Searching(obj) {
    showValue(obj);
    	
    function showValue(obj) {
        for(let el in obj) {
            if(typeof(obj[el]) === 'object') {
                showValue(obj[el]);
            } else {
                console.log('Элементы объекта:' + obj[el])
            }
        }
    }
}
Searching(objOfObjects);