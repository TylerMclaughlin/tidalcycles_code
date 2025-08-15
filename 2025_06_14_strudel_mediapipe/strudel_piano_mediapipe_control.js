let cc = await midin('IAC Driver Bus 1')

setCpm(120/4)

$lefthand:note("c4 f4 e4 d5@3  g3 f4 d4 as4").transpose(-12)
          .gain(cc(51).range(0.1,1)).lpf(cc(52).range(0, 3000))
          .sound("piano").color('red').pianoroll()

$righthand:note("g5 [f4 <g6 c6>] e4 d5@3 [~ as3] f4 d4 as4")
          .gain(cc(51).range(0.1,1)).lpf(cc(52).range(0, 3000))
           .sound("piano").color('blue')._punchcard()

