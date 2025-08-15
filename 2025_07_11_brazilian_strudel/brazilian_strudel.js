//Brazilian Strudel

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

$synth: n(`0 ~ ~ 3  ~ 2 ~ ~  5 ~ <2 3> ~  ~ <7 > 6 <5 >  
         ~ 3 0 3  ~ ~ 4 ~  ~ ~ <0 2> -2 
   [<[ 0 1 2] [0 1 0 1]>]@2 ~ -1  `)
  .slow(4).gain(gas
    .mul("[1 [[1 1.1 1.2 1.3] <0.8 0.6 0.54>]]/2"))
  .late(0.11).late(rizz).late(0.0015)
   .scale('A:mixolydian')
  .transpose(36).midi(m1).midichan(2)._punchcard()

$chords: n(`[3,7]([<5 9> 7],16,1)`.add(4))
  .gain(gas.mul("[1 [[1 1.1 1.2 1.3] 0.6]]/2"))
  .late(0.11).late(rizz)
  .scale("<A:mixolydian B:altered A:mixolydian C#:altered>")
  .transpose(12).midi(m1).midichan(5)._punchcard()

$chords2: n(`[1,-2](<[7 5]@3 9>,<8@3 12>)`.add(4))
  .gain(gas.mul("[0.9 [[1.05 1.01 1.2 1.3] 0.65]]/2"))
  .late(0.11).late(rizz)
  .scale("<A:mixolydian B:altered A:mixolydian C#:altered>")
  .transpose(12).midi(m1).midichan(4)._punchcard()

$bass: note("[< [~ ~ -1] -1>]@3 2@3  <9 6 1 6> ~")
  .gain(gas).late(0.111).gain("0.8 0.4 0.4")
  .late(rizz.mul(0.56))
  .transpose(48).midi(m1).midichan(6)._punchcard()
$ios: note("<~ <[~ 0!2] [~ 0 ~ 0]>  >")
  .late(0.11).transpose(36)
  .late(rizz.mul(0.76)).midi(m1).midichan(7)
