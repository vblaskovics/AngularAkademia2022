# HttpRxjs

## 1. feladat

Hozz létre egy componens-t UserList néven, ami táblázatos formában megjeleníti az alábbi user adatokat:

- API: https://jsonplaceholder.typicode.com/users
- Szükséges field-ek: id, name, username, email

A megvalósítás során hozz létre egy user service-t, ahonnan le lehet kérni a szükséges Observable-t, amit
a komponensen belül async pipe-al használunk! 
Továbbá definiáld és használd a user type-ot is!

## 2. feladat

### Előkészületek
- Adj hozzá a projekthez Routing-ot, és a UserList egy route alatt (pl.: 1_feladat) legyen elérhető!
- Adj hozzá navbar-t is a projekthez!
- Hozz létre egy aloldalt (2. feladat)

### Feladat
- Kérj le és jeleníts meg egy User-t véletlenszerűen!
- Pl.:
  - User ID: 1
  - Name: Leanne Graham
  - User Name: Bret
  - Email: Sincere@april.biz
- 3 másodpercenként frissüljön az oldal egy másik véletlenszerű user adataival.

## 3. feladat

- Jelenítsd meg a "Bret" username-el rendelkező user adatait 3 másodpercenként
- Jelenítsd meg a post-jainak a számát is!

## 4. feladat

Email alapján random fotó. Írj switchMap-el sequential request-eket:

- Email alapján lekérünk egy user-t
- UserId alapján lekérjük az albumokat
- Valamelyik albumnak lekérjük a fotóit
- Valamelyik fotónak az url-jét kiírjuk

## 5. feladat

Jelenítsd meg táblázatban az 1,2,3 id-vel rendelkező userek nevét, és azoknak a post-jaiknak a számát, amik címe e betűvel kezdődik!

- A post-ok lekéréséhez használd: https://jsonplaceholder.typicode.com/posts?userId=1&userId=2&userId=3
- Minden hívásnak rakj be 2-4 mp- es véletlenszerű delay-t, amivel szimuláljuk a szerver lassúságát!
