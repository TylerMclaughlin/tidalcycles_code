


//$: note("0 3 6 17 25 36 29 28").quantize("0:5:10:13:18:23:28").transpose(32)
//  .midi('IAC Driver Bus 1').midichan(1)

setCpm(122/4)

//$:note(irand(35).ribbon(35,2).add(48).seg(16).quantize("0 3 5 7 9 10")).s("pulse")

const mb = 'IAC Driver Bus 1'


synth1:note(irand(31).ribbon("<0 5 0 <7>>",0.5).add(48).seg("<16>")
  .struct("1(<13 11>,18)").quantizeBy(31, "0:13:18:23:28 "))
  .gain(irand(33).div(33).ribbon(23,1).seg(13)).late("[0 0.01]*9").late(0.001)
  .legato("5").midi(mb).midichan(1)._punchcard()
// ribbon (2,1) -> 23 1
synth2:note(irand(31).ribbon("<0 5 0 <7 12>>",0.5).add(53).seg("<8>")
  .struct("1(<13 11>,18)").quantizeBy(31, "0:5:10:13:18:23:28 "))
  .late(0.001).gain(irand(33).div(33).ribbon(2,1).seg(13))
  .legato("5").midi(mb).midichan(2)._punchcard()
aoc:note("[0 1 2 3  ~ ~ ~ ~]/8").transpose(36).late("-0.01").midi(mb).midichan(9) 

bass:note("<18 23 31 18  13 5 18 31>".add(31).gain("<0.5!5 0.2 0.5!2>")
          .quantizeBy(31, "0:5:10:13:18:23:28 ")).midi(mb).midichan(7)

clap: note("0 [2,3] 0 [2,3]").transpose("48 36 48 36").gain(0.3)
  .midi(mb).midichan("~ 5 3 5").late(1/18).late("[0 0.002]*2")

kick: note("0 0 0 0").transpose("36").gain(0.5).midi(mb).midichan("8")
  .late("0.985".div(18)).late("[0 0.002]*2")

 kick2: note("0 0 0 0").transpose("28").gain(0.5).midi(mb).midichan("10")
   //.late("0.985".div(18)).late("[0 0.002]*2")

oh: note("[~ 5 ] [~ 5] ~ <~ [~ 5]>").transpose(36).midi(mb).midichan(6)
  .gain(irand(33).div(33*1.2).ribbon(679999,1))
  .late("[0.87 0.87]*2".div(18))

ch: note("[6 <~ 6> ~ ~] ~ [6 5 6 6] [5 6 <5 ~> 5]".sub(2))
  .slow(1).gain("[<0.6 0.5>  0.4 0.2 <0.5 0.2>]*4".mul(1.1))
  .transpose(36).midi(mb).midichan(6).late("0.88".div(18))
  .late("[0 0.0015 0.0002 0.0023]*4".add(irand(30).seg(16).mul(0.00003)))











//$:note("0").struct("0 1 1 0 1 1 0 1 1 0 0 0 0 1 1 0 1 1").midi(mb).midichan(4)

//$: note("0 0 0 [0 0 0 ] 0 0").gain("1 1 1 [0.40] 1 1".mul(0.25)).late(1/18).midi(mb).transpose(48).midichan(3)



// $:note(irand(31).ribbon("<0 5 0 7>",0.5).add(48).seg("<8>").struct("1(<13 11>,18)").quantizeBy(31, "0:5:13:18:23:28 "))
//  .scale("31edo").s("pulse")



//$: note(irand(31).ribbon("<0 5 0 7>",0.5).add(48).seg("<8>").struct("1(<13 11>,18)").quantizeBy(31, "0:5:13:18:23:28 "))
// .s("pulse")

//  .midi('IAC Driver Bus 1').midichan(1)
