setCpm(82/4)

// $lead: n(`~!4 
//           10 9 13 14 13 10 9 
//           13 10 8 9 
//           12 10 9 8 7 12 7
//           10 9 6 5
//           8 9 8 6 5 12`.sub(1).sub(7)).scale(`A:major`).midi('IAC Driver Bus 1')


// $lead: n(`5 4 3 2
//           `.sub(1)).scale(`C#:major`).midi('IAC Driver Bus 1')



// $lead: n(`9 8 6 5 
//           7 8 7 6 5 6
//           6 7 6 4 3
//           6 7 6 4 3
//           6 4 5 4
//           `.sub(1).sub(5)).scale(`D#:pentatonic`)
// .midi('IAC Driver Bus 1')._punchcard()


// $lead: n(`2 1 3 
//           1 2 3 4 
//           5 6 7 5 6
//           `.sub(1).sub(8)).scale(`G:half-whole:diminished@3`)
// .midi('IAC Driver Bus 1')._punchcard()


// $lead: n(`4 5 6
//           4 5 6 7 
//           8 7 6 5 4 3
//           5 4 3 2
//           4 1
//           4 3 2 1
//           `.sub(1).sub(5)).scale(`A:pentatonic@6`)
// .midi('IAC Driver Bus 1')._punchcard()

$lead: n(`5 4 3
          5 8 9
          3 5 
          8 9 10 12
          16 17 18@10
          17 16@8 
          `.sub(1).sub(7)).slow(2).scale(`C#:major@8`)
.midi('IAC Driver Bus 1')._punchcard()



// // .scale(`A:major@8 C#:major D#:pentatonic@6
//         G:half-whole:diminished@3 
//         A:pentatonic@6 C#:major@8`)

// .midi('IAC Driver Bus 1')._punchcard()

