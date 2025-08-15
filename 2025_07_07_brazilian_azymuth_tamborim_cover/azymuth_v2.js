setCpm(107/2)

const m1 = 'IAC Driver Bus 1'

let suinge = "[0 0 -0.011 -0.019]*2",
    ss = "0.02"
  
$bass: note(`[-1 6   @ -1  @ 6   @ @   
       4 -1   @ 4   @ -1   @ @  
       -3  4   @ -3   @ 4   @ @  
       2 @  @ @  0 @  @ @ ]/8`)
.struct("1 0 0 1 1 1 0 1")
.legato("<0.28 1.2> 0.6@3 0.7@4")
.gain("<0.15 1> 0.35@3 1@4")
  .late(ss.mul(0.15)).late(suinge.mul(0.15))
.transpose(48).midi(m).midichan(1)

$keys: note(`[[3,7,9,14] [7,8,12,16] 
             [0,4,7,11] [4,7,11,14]]/8`)
  .late(ss)
  .transpose(60).midi(m1).midichan(2)

$drumz: stack(note("5!8")
            .gain("1.1 0.5 0.55 0.8"
                  .mul("0.8").fast(2)).legato(0.8),
              note("4(5,8) [4 4 ~ ~]"
                  .slow(2))
                  .gain("1 [0.4 1] [1 0.4] 1@5".slow(2)),
             note("[0 ~ ~ 0]*2".gain("0.8 0.7")),
             note("~!7 3".slow(2)))
  .late(ss).late(suinge)
  .transpose(36).midi(m1).midichan(3)

$melody: note(`~@5 11 ~ 12 11 12 ~ 11 ~ 9  ~  
                11@4  4@5  16@5  12@2   11@5
               ~  11 ~ 12 11 12 ~ 11 ~ 12  ~  
               16 ~ ~  14  16  14@5  ~@7`)
  .slow(8).late(ss).late(suinge)
  .transpose(48).midi(m1).midichan(4)

$melody: note(`2 ~ ~ -1  2 2 -1  2 2 -1  2 2 -1  2
               ~ 4@3 4@3 4@2 4@3 7@3 4@3 
               -1 ~ ~ -3  -1 -1 -3  -1 -1  -3   -1 -1 -3  -1
               ~ 2@3 2@3 2@2 0@3 0@3 0@3 `)
  .slow(8).late(ss).late(suinge)
  .transpose(60).midi(m1).midichan(4)


$keys: note(`[[3,7,9,14]@6 [[7,8,12,16]@4 [8,12,16,19] [8,12,16]]@10 
             [0,4,7,11]@8 [4,7,11,14]@8]/8`)
  .struct(`<0 1!3> <1 0!3>  0 0  1 1 0 1 1 0 1 1 
            0 0 0 [1(3,8) 1(3,8) ]@16 0 `.slow(4))
  .gain(`1@4 0.8 0.6 0 0.8 0.6 0 0.8 0.6 
          0 0 0 [1 0.5 0.5 1 0.5 0.5]@16 0`.slow(4))
  .legato(2).late(ss.mul(0.4)).late(suinge.mul(0.4))
  .transpose(60).midi(m1).midichan(5)

$drumz: stack(note("5!8")
            .gain("1.1 0.5 0.55 0.8"
                  .mul("0.8").fast(2)).legato(0.8),
               note(`[4 <~ 4>] [4 4 ~ ~]  [4 4] [4 4 ~ 4]
                   ~ [~ 4 ~ 4] ~ [~ 4 ~ ~]`
                 .slow(4)).legato(3)
                 .gain("1 [0.4 1] [1 0.4] 1@5".slow(2)),
             note("[0 ~ ~ 0]!4 ~ [0 0 ~ 0] ~ [0 0 ~ ~]"
                  .slow(4)).gain("0.8 0.5 0.5 0.7".add(0.15)),
             note("~!7 3 ~!11 3 ~!7 3 ~!4").slow(4))
  .late(ss).late(suinge)
  .transpose(36).midi(m1).midichan(3)
