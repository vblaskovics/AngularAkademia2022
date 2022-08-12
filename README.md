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

