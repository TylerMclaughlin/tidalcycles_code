// quantizeBy example for Maqam Bayati scale (24-EDO)
// Switch Angel, froos, r_tyler 

setCpm(110/4)

$: n(`[<24 20 20 20 > 19 18 17 16 15 14 
        13 12 11 10 9 8 7 6 5 4 3 2 1]([9 18 18],18)`)
  .legato("2 0.65")
  .gain("[0.7 0.35 0.5]*6")
  .late("[0.3 0.3025 0.2985]*6")
  .late(0.001).late(2/18)//.late("[0 0.005]*9")
  .quantizeBy("4:7:10:14:18:20:24:28","24")  // magic
  .transpose(24) // octave
  .mask("< 1 1 1 [0 1]> 1")
  .midi('IAC Driver Bus 1').midichan(1)

let lateA = "0.0025"

$drumz: note("{0 ~ ~ [2] 0 ~ 2 ~}%18").late(15/18)
  //.gain(0)
  .l
  
^^^^
  ate(lateA).transpose(36).midi('IAC Driver Bus 1').midichan(2)

$: note("[4, 10]").struct("t(6,18)")
  .late(0.0005).legato("3").late(0/18)
  .transpose(48).transpose("{[0 14 10 10 10 14]/54}%18")
  .midi('IAC Driver Bus 1').midichan(3)

$4: note(`5!9`).fast(2)
  .fast("{[1!4 2 1 1 1]*2}")
  .gain("{[[<0.5 0.4 0.45 0.48>]!4 0.3 0.5 <0.45 0.39> 0.5]*2}".mul(1.3))
  .late(16/18)
  .late("[0.002]").late("[0.0 0.005]*9")
  .late(lateA).transpose(36).midi('IAC Driver Bus 1').midichan(2)

