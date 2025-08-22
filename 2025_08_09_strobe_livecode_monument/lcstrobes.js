setCpm(140/4)
//$d : note("0 1 2 3 4 5 7 8 9 10 11 12 13 ").sus(4).fast("4").transpose(60).midi().midichan(1)
//d : note("3 4 5 6 7 8 9 10").sus(4).transpose(60).midi().midichan(1)

//$d2: note("0 1 2 3 4 5 ").sus(4).fast("1 2 4 8").rev().struct("1(9,16)").transpose(60).midi().midichan(2)
let alll = "[0,1,2,3,4,5,6,7,8,9,10,11,12,13]"

// testing

$d3: note(alll).struct("1(16,16)").midi().fast(2).transpose(60)
  .midichan("[1 1 2 2 1 2 1 2 [1 2] [1 1 2 1] [2 2 1 2]]*2".mul(1).sub(0)
             .add("[0 2]".fast(2)))

// //$d4: note(alll).struct("1(16,16)").midi().fast(1).transpose(60)
//   .midichan("[1 1 2 2 1 2 1 2 [1 2]  [2 2 1 2]]*2"
//             .add("[0 2]".fast(1)))

$d4: note("0 ~@3 1 ~@3 [0 ~ ~ 1 ~ ~ 0 ~]@2").fast(2).legato("2").transpose(60).midi().midichan(5)





$d1 : note("[0 1]*1").fast("<3 4 5 6 7 6 5 4 >")
  .legato("1").transpose(60).midi().midichan("~ 5")

// d2 : note(alll)
//   .fast("<3 4 5 6 7 6 5 4 >").legato(4).struct('1 1 1 1')
//   .transpose(60).midi().midichan("[4 3 ] ~")

// d1 : note("[1 2 3 4 5 6 7 7 9 10 11 12]").fast("<2 3 4 3>").fast("<1 1 1 1 2>").legato(2)
//     .transpose(61).midi().midichan("[1 2 3 4] ~ ")

// $d2 : note("[0,1]")
//    .struct("1(9 ,16) ").transpose(60).midi().midichan(" 5")

