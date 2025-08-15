setCpm(117/4)

const mb1 = 'IAC Driver Bus 1'

let p1 = "0 4", 
  p2 = "2 6",
  p1b = "[5 0 5  4 0 4]/3",
  p2b = "[2 6 2  7 2 7  6 2 6  5 2 5]/6",
  p2c = "[2 6 2  8 6 2  9 6 2  8 6 2]/6"


$: n(arrange([6,p1], 
             [6, p2],
            [3, p1], [3,p1b],
            [6, p2b],
            [6,p1], 
            [6,p2c],
            [3, p1], [3,p1b],
            [6, p2b]))
  .scale("C:minor").fast(4).s("gm_electric_guitar_clean")

// $: note(`
//    [[1 5]!6   
//    [ [3 7] [3 9] [7 3] [10 7] [3 9] [7 3]]@6 
//    [1 5]!3 
//    [[6 1 6 5 1 5]  ]@3 
//    [3 7 3 8 3 8]@3 
//    [7 3 7 6 3 6]@3]/4`
//   .sub(1).scale("C:minor"))
//  .transpose(12).midi(mb1).midichan(1)


//g: note("0").midi(mb1).midichan(1)
