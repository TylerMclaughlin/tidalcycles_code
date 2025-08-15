setCpm(117/4)

const mb1 = 'IAC Driver Bus 1'

let p1 = "0 4", 
  p2 = "2 6",
  p1b = "[5 0 5  4 0 4]/3",
  p2b = "[2 6 2  7 2 7  6 2 6  5 2 5]/6",
  p2c = "[2 6 2  8 6 2  9 6 2  8 6 2]/6"


$: n(arrange([6,p1], 
             [6, p2],
            [3, p1], [3,p1b],
            [6, p2b],
            [6,p1], 
            [6,p2c],
            [3, p1], [3,p1b],
            [6, p2b])).transpose(36)
  .scale("C:minor").transpose(12).fast(4)
  .midi(mb1).midichan(1)._punchcard()

bass: note("[0 3]").slow(3).transpose(36)
  .midi(mb1).midichan(4)

lead: note(`~ [~ ~ 3] [2 [~ 0] @] [~]    
         [7 [~ 7] @ ]  [~ 7 7]  [~ [10 8] 7]  [7]   
         ~ [3 3 2] [3 [~ 3] [ ~ 2]] [3 [~ 3] [ ~ 2]]   
         [[3 2] [~ -2] ~ ] ~ ~ ~
         7 [~ 7@2]  7  [ ~ 5 3]    
         [7@2 7] [~ ~ 7] [10 8 7@4] @
         ~ [~ 0 0]  [6 5 3] [~ 3 0]   
         [7 [~ 3] @] [~ 7 8] [10 @ 8] 7`)
     .legato(`[2  4 2 1] [2 4] 
         [4 4 4 [2  4 1 1]] [2 2 2 1]`)
     .slow(12).transpose(48).transpose(0)
  .midi(mb1).midichan(2)._punchcard()

k_sn: note(`0 ~ [~ 0] [3,2] [~ [3,2]] 0  
           0  [~ [3,2]] [~ 0]  [3,2] 0 [3,2]`)
  .slow(3).fast(2).transpose(36).midi(mb1).midichan(3)

hats: note(`<7!3 5> 5!11`).slow(3).fast(2)
  .transpose(36).midi(mb1).midichan(3)


