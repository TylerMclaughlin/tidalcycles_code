setCpm(141.5/4)

$vox :
  note(`-2@5 [<0 [0 <2 [0 2]>]>]@4 
        [<2 [-2 <-2 -2> 3]>]@3 3@4`)
  .struct(`1(5,8)*4`)
  .mask(`[0@3 1@9 [<1 <1 0>>]@3 0]`)
  .gain("[1 0.95!3]!4"
        .add("0 0 0.02 0.03"))
  .legato(`<[[1 0.7!3]!4]@3 
          [1 0.7!3 1 1.5 2 2]>`)
  .slow(2)
  .late("[0 0.00]*8")
  .transpose(72)
  .midi().midichan(1)._punchcard()

$chords: note(`[[5,8,12,15,19]@13 
                [3,7,10,14]@3]/2`)
  .transpose(48).midi().midichan(2)._punchcard()

$bass: note(`[-7!4 [<[-7!2 [-7 -6@2 -5]@2] 
              [0!4] >]@4 ]/2`)
  .legato(`0.7`).gain(1)
  .transpose(48).midi().midichan(3)._punchcard()

//$vox : note(`~ 7 7 8 10 8 7 5 7  3 2 2 3 ~@3`).gain(`[1 0.95]*8`).slow(2).transpose(72).midi().midichan(4)._punchcard()


$xo : note(`<[0,7] 0 > [0,3] 0 [0,3]`).transpose(36).legato(0.25).midi().midichan(5)._punchcard()

$hatz : note(`[~ 5 ~ 5]*2 `).late(`[0.001 0.001]*2`).legato(0.25).transpose(36).midi().midichan(5)._punchcard()

$perc : note(`[3@3 4@3 5@2]@4 <2 ~!3> <3 3 ~ 3> <4 ~ 4 ~> 6`).legato(0.25).transpose(36).midi().midichan(7)._punchcard()

$tom : note(`~!15 <2 [2,6]>`).transpose(36).midi().midichan(5)
