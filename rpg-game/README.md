# RpgGame
Hozz létre egy játékot, amiben 2 karakter tud harcolni egymással.

Technical requirements
1. Használj JSON Server-t (okay)
legalább 10 karakter közül lehessen választani
a karaktereket a szervertől kelljen elkérni
2. Karakterek kiválasztása név alapján
a karaktereket név alapján lehet kiválasztani
amikor kiválasztunk egy karaktert, akkor az adatai is jelenjenek meg
3. Támadás
ha a támadás gombra kattintunk, akkor elindul a csata
a csata közben másodpercenként történjen egy támadás
ha valamelyik karakter hp-ja 0 alá csökken, akkor vége a csatának
írasd ki a győztest
lehessen újraindítani a támadást
4. siker sorozat üzenet
ha valaki egymás után 3-szor sikeresen megebezte az ellenfelet, akkor jelenjen meg erről üzenet
pl: "Orc is on a killing spree"
az üzenet 3 mp után tűnjön el




Non technical requirements
használj unit test-eket, ahol csak tudsz
http-nél nem kell
rxjs-nél nem kell
törekedj a reactive megközelítésre (rxjs)
törekedj egy jól felépített, moduláris architektúrát kialakítani
alakíts ki service-eket saját felelősségi körökkel
legyen több komponensed is
