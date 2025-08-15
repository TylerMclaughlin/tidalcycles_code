

setCpm(105/2)

const m1 = 'IAC Driver Bus 1'

let rizz = "[0 0 -0.012 -0.023]*2",
    gas = "[1 0.35 0.5 0.85]*2"

$shaker: note("5 5 5 5").fast(2)
  .gain(gas.mul("1 1 0.5 1"))
  .late(0.105).late(rizz)
  .transpose(36).midi(m1).midichan(1)

$cuica: note("<[6 ~ 7 6 7 6 7 7] ~ ~ ~>").gain(gas)
  .late(0.11).late(rizz)
  .transpose(36).midi(m1).midichan(1)

$snare: note("[~ <~ 3> <2 ~> 3]*2").gain(gas)
  .late(0.11).late(rizz) 
  .transpose(36).midi(m1).midichan(1)

$clap: note("<<~ ~> < 3!3 4>>*2")
  .late(0.1102).late(rizz)//.late("<0.001 0.0012>")
  .transpose(36).midi(m1).midichan(3)

$kicc: note("< [0,1] [1]> ~ ~ 0").fast(2)
  .gain(gas)
  .late(0.11).late(rizz)
  .transpose(36).midi(m1).midichan(1)

$drum: n(`0 ~ ~ 3  ~ 2 ~ ~  5 ~ <2 3> ~  ~ <7 > 6 <5 >  
         ~ 3 0 3  ~ ~ 4 ~  ~ ~ <0 2> -2 
   [<[ 0 1 2] [0 1 0 1]>]@2 ~ -1  `)
  .slow(4).gain(gas
    .mul("[1 [[1 1.1 1.2 1.3] <0.8 0.6 0.54>]]/2"))
  .late(0.11).late(rizz).late(0.0015)
   .scale('A:mixolydian')
  .transpose(36).midi(m1).midichan(2)._punchcard()
$synth: stack(
  note(`gb4 ~!31 db6 ~!23 a4 ~!7 db6 ~!5 
  db5 ~!17 b4 ~!7 db6 ~!7 db5 b3 ~!16 a4 ~!37`)
  .gain(`0.35 0!31 0.35 0!23 0.35 0!7 0.35 0!5 
  0.35 0!17 0.49 0!7 0.35 0!7 0.35!2 0!16 0.49 0!37`)
  .legato(`32.0 0!31 32.0 0!23 17.0 0!7 32.0 0!5 
  34.0 0!17 17.0 0!7 32.0 0!7 40.0 39.0 0!16 22.0 0!37`),
  note(`a4 ~!51 db5 ~!17 d4 ~!33 b5 ~!55`)
  .gain(`0.35 0!51 0.35 0!17 0.35 0!33 0.35 0!55`)
  .legato(`32.0 0!51 18.0 0!17 34.0 0!33 40.0 0!55`),
  note(`db5 ~!159`)
  .gain(`0.35 0!159`)
  .legato(`32.0 0!159`),
  note(`db6 ~!159`)
  .gain(`0.35 0!159`)
  .legato(`32.0 0!159`),
  note(`~!32 e4 ~!127`)
  .gain(`0!32 0.35 0!127`)
  .legato(`0!32 24.0 0!127`),
).slow(20.0/4)
 .transpose(-12).slow(2).midi(m1).midichan(8)._punchcard()

$ios: note("<~ <[~ 0!2] [~]>  >")
  .late(0.11).transpose(36)
  .late(rizz.mul(0.76)).midi(m1).midichan(7)
