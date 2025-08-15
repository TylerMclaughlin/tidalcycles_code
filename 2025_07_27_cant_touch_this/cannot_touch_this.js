
setCpm(122/4)

let mb1 = 'IAC Driver Bus 1'

$drumz : note("0 [[0,2] 0] 0 [0,2]")
  .gain("[1 0.8]*4")
  .transpose(36).midi(mb1).midichan(1)

$hatz : note("4!8").gain("[1 0.5 1 0.8]*2")
  .late("[0 0.001]*4")
  .transpose(0).transpose(36)
  .midi(mb1).midichan(1)

$bass : note("7@2 5 4 2 ~@2 <4 -3> 0 ~@2 4 2 ~@3")
  .late(0.001).slow(2).transpose(60)
  .midi(mb1).midichan(2)._punchcard()

$keys : note("<[0,4,7] [2,5,7]>")
  .struct(" [~ 1 1 ~]").mask("<0 1 1 1>")
  .fast(2).transpose(60)
  .midi(mb1).midichan(3)._punchcard()
$lead: note("[~ ] [<4 0>@3 <5 2>@5]")
  .slow(2).transpose(60)
  .midi(mb1).midichan(4)._punchcard()
$hammer : note("<~ [~ ~ [~ <0 1>] ~]>")
  .transpose(36).midi(mb1).midichan(5)

