setCps(138/120)

let mb1 = 'IAC Driver Bus 1'

$loop : note("0").transpose(60)
  .midi(mb1).midichan(1)

$drumz : note("0")
  .struct("0@5 1@4 1@4 0@2 1@5 ")
  .transpose(36).midi(mb1).midichan(2)

$drumz2 : note("4").struct("1(7,20)")
  .slow(2).late(0.001)
  .transpose(36).midi(mb1).midichan(2)

$drumz3 : note("5")
  .struct("1(<13 11>,20)")
  .gain("[1 0.4]*10").slow(2)
  .late(0.001)
  .transpose(36).midi(mb1).midichan(2)

$clap : note("~@11 3 ~@9")
  .transpose(36).midi(mb1).midichan(5)

$mel : note(`~ <0 > 5 10 5 ~ 0 13 
             0 ~ 0 10 0 ~ ~  5 13@4`)
  .late("<0 0 0 1 0 0 1 0 2 0 1 0>".div(20))
  .slow("<2>")
  .transpose(10).transpose(18).transpose(60)
  .midi(mb1).midichan(3)._punchcard()

$bass : note("0 [0 <~ 0>]")
  .struct("1(<5 >,20)").legato("<2 >").slow(2).gain("[0.25 1]")
  .transpose(10).transpose(-31).late(0.001)
  .transpose(60).midi(mb1).midichan(4)._punchcard()



$mel2 : note(`[10@18 5@18 0@18 -3@26
       10@22 5@14 0@22 -3@14]/8`)
  .transpose(10).transpose(18).transpose(60)
  .midi(mb1).midichan(6)._punchcard()



