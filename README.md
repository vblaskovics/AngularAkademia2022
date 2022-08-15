Angular akadémia kurzus 2022

Blaskovics Viktor

# Házi feladat - 2. hét

## ToDo Manager Webapp

Hozz létre egy olyan alkalmazást, amiben táblázatos formában lehet ToDo-kat megjeleníteni!

### 1. A todoknak legyen:
- id 
- title
- progress ( open, in progress, done )
- description
- date
- user_id (a todo-ért felelős user id-ja)
- subTodoIds ( alfeladatok id-ja)

### 2. Users model

Hozz létre egy user model-t is, az alábbi attribútumokkal:

- id
- name
- email

### 3. A todo-k egy ehhez hasonló táblázatban jelenjenek meg:

|id|title|progress|user name|
|--|-----|----|---------|
|6|Write a home work for the class|in progress|Blaskovics Viktor|

##### További követelmények:
3.1 a táblázat Bootstrap-el legyen formázva: https://getbootstrap.com/
Ebben a cikkben 3 út is van, hogy hogyan tudod hozzáadni a Bootstrap-et az Angular-hoz: https://www.techiediaries.com/angular-bootstrap/

3.2 Minden páros sor színe más legyen (pl. szürke)

3.3 Hozz létre dummy adatokat: legalább 5 Todo legyen a táblázatban, és legalább 3 user 

### 4. Todo kiválasztása
Ha rákattintassz egy sorra, akkor a táblázat alatt jelenj meg egy details panel a kiválasztott ToDo részleteivel, valahogy így:

**Details**

- Title: Write a home work for the class
- Status: In progress
- Details: Write a detailed homework to the amaizing angular class members!
- Creation date: 2022.08.12
- User: BLaskovics Viktor
- Email: viktor.blaskovics@gmail.com

### 5. Details nézetben al-feladatok megjelenítése

Amikor a táblázatban kiválasztunk egy sort, és megjelenítjük a részleteit a Details panelen, és a kiválasztott todo-nak vannak alfeladatai,
akkor az email alatt legyen egy "Sub-todos:" címke is, ami alatt fel vannak sorolva az alfeladatok title-jei!

### 6. Navigációs sáv és todo számláló

Az alkalmazás kapjon egy nav bar-t, aminek a bal felső sarkában az alkalmazás neve szerepeljen, jobb sarkában pedig egy számláló, ami azt mutatja, hogy mennyi "In Progress" állapotó todo van a listában.

### 7. Todo állapotának változtatása

Bárhol(!), ahol megjelenik a ToDo állapota (Progress), az állapot mellett jelenjen meg egy kis gomb is, amire kattintva a todo a következő állapotba rakható, az alábbi sorrend szerint:

open => in progress => done => open

Pl: ```In Progress ⏩```

### 8. Táblázat rendezhetősége Progress szerint

A todo táblázat rendezhető legyen növekvő vagy csökkenő sorrendben. (Pl. legyen egy kis gomb a Progress címke mellett a táblázat fejlécében, aminek két állapota lehet: ⬆️ vagy ⬇️)
