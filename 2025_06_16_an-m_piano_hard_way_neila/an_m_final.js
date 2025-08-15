
setCpm(85/4)







$lead: n(`~!4
          10 9 13 14 13 10 9 
          13 10 8 9 
          12 10 9 8 7 12 7
          10 9 6 5
          8 9 8 6 5 10
          
          5 4 3 2

          9 8 6 5 
          7 8 7 6 5 4 
          6 7 6 4 3
          6 7 6 4 3
          6 4 5 4

          2 1 3 
          1 2 3 4 
          5 6 7 5 6
          
          4 5 6
          4 5 6 7 
          8 7 6 5 4 3
          5 4 3 2
          4 1
          4 3 2 1

          5 4 3
          5 8 9
          3 5 
          8 9 10 12
          15 16 17@10
          16 15@8
          `
.sub(1).sub(`7@8 0 5@6 8@3 [5@23 7@33]@14`))
.scale(`A:major@8 C#:major 
        D#:pentatonic@6
        G:half-whole:diminished@3 
        [A:pentatonic@23 C#:major@33]@14`)
 .slow(4).transpose(12)
.midi('IAC Driver Bus 1').color('red')
  .pianoroll({'vertical' : 1, 
              'hideNegative' : 1, 'cycles' : 4 })

