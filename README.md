
# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Sara Atilgan (vervangen door jouw naam)

  #### Je startniveau:
  Rood

  #### Je focus:
  Ik wil het liefst beide toepassen, maar als ik het qua tijd niet red dan alleen responsive.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>
  Ik ga proberen een verbeterde versie maken van de website: 

[MISBHV | Club Wear Solutions™](https://misbhv.com/eu/en/)

MiSBHV is een kleding merk en op hun website verkopen ze verschillende items.

  ### Je opdracht:
  https://misbhv.com/eu/en/

  #### Screenshot(s) van de eerste pagina (small screen homepagina misbhv): 
  <img src="readme-images/homescreen_1.jpg" width="375px" alt="Eerste gedeelte van de home page met een banner met een link naar de sale producten">
  ##
  <img src="readme-images/homescreen_2.jpg" width="375px" alt="Tweede gedeelte home page met herfst artikelen">
  ##
  <img src="readme-images/homescreen_5.jpg" width="375px" alt="Men or woman section">

  #### Screenshot(s) van de tweede pagina (small screen all woman clothing):
  All woman clothing pagina
  ##
  <img src="readme-images/pagina2_woman.jpg" width="375px" alt="Tweede gedeelte home page met herfst artikelen">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  <ul>
  <li>Er zijn vele vormen van slechtziend zijn</li>
    <li>Meerdere vormen van beperkt zijn</li>
    <li>Veel websites maken nog geen gebruik van een duidelijke opzet (code) voor screenreaders</li>
  </ul>

</details>



## Breakdownschets (week 1)

<details>
  <summary>Ik wil verschillende elementen aanpassen. 
    Zo heb ik een logischer volgorde gemaakt van de content die ik op de homepagina wil laten zien</summary>

  ### Homepagina: 
  <img src="readme-images/breakdown_pagina1.jpg" width="375px" alt="breakdown van de hele home pagina">

<details>
  <summary>De tekst met ‘new in’ of ‘black week’ lijken op knoppen dus wil ik die veranderen in een label. 
    Verder wil ik ‘voeg toe aan winkelmand’ knoppen toevoegen.</summary>

  ### All woman clothing: 
  <img src="readme-images/breakdown_pagina2.jpg" width="375px" alt="breakdown van de tweede pagina">

<details>
  <summary>De menu items wil ik alleen verticaal aan de linkerkant uitlijnen. Verder wil ik deze links ook hover states geven en via mobiele formaat een state toepassen aan de links zodat de gebruiker weet op welke pagina hun zijn. </summary>

  ### Navigatie menu: 
  <img src="readme-images/menu_misbhv.png" width="375px" alt="menu">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>Ik begon met het maken van een navigatie menu met alle items. Het begin ging een beetje stroef, omdat ik al een tijdje niet bezig ben geweest met coderen. Ik heb daarom ook veel onderzoek gedaan naar verschillende responsive nav menu’s. Voor mijn mobiele formaat wil ik gebruik maken van een hamburger menu. Het liefst zonder Javascript.</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  
  Na een tijdje zoeken kwam ik uit op een code voor een responsive hamburger menu via codepen: 
  
  Deze code begreep ik en ik wist deze goed toe te passen. Het probleem was is dat deze persoon block elementen gebruikt en ook display:float bij een block 
  element. Ik probeerde de code zelf een beetje aan te passen, zodat het wel semantisch correct is en geen fout meldingen geeft. Dit werkte niet. Ik kreeg 
  uiteindelijk ook mijn li elementen niet meer te zien. Ik had blijkbaar iets niet goed gedaan dus ben op zoek gegaan naar een andere code.
  
  bron hamburger menu codepen: [https://codepen.io/mutedblues/pen/MmPNPG](https://codepen.io/mutedblues/pen/MmPNPG)
</details>
<details>
Omdat er vaak gebruik wordt gemaakt van divs en heel veel classes vond ik het lastig om dit niet te gebruiken of weg te halen. Ik denk het de reden is dat sommige uitgewerkte code’s niet correct waren (vanwege verkeerde elementen selecteren in css). Ik heb namelijk gebruik gemaakt van een andere code (zie bron hieronder). In het begin ging het best prima, maar uiteindelijk gingen alle li elementen naar boven schuiven wanneer ik dus het menu ging uitklappen (iets met height en position te maken?). Ook gingen de hamburger menu lines raar bewegen en vormde ze geen x wanneer het menu is uitgeklapt. 

bron hamburger menu css: [https://alvarotrigo.com/blog/hamburger-menu-css](https://alvarotrigo.com/blog/hamburger-menu-css)

  <img src="readme-images/menu1.png" width="375px" alt="breakdown van de hele home pagina">

  <p>Orginele code:</p>

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;
}

.navbar {
  width: 100%;
  box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}

.navbar .nav-container a:hover{
    font-weight: bolder;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  padding-top: 120px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.logo {
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 1.2rem;
  color: #0e2431;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}
```

<p>Mijn eigen code:</p>

 <img src="readme-images/menu1.3.png" width="375px" alt="code eerste nav menu">
 ##
 <img src="readme-images/menu1.2.png" width="375px" alt="code tweede nav menu">
 ##
 <img src="readme-images/menu1.1.png" width="375px" alt="code derde nav menu">


</details>





## Voortgang 2 (week 3)

<details>
  <summary>Omdat ik wat achterliep, ben ik eerst gaan focussen op het rest van de content. Zo ben ik begonnen met het maken van mijn eerste section. Ik had als eerst position absolute en position relative toegepast. Dit werkte prima, maar dit is niet de juiste manier. Hier door kunnen elementen verplaatsen want ze zitten op elkaar en ze zijn gepositioneerd. </summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

   <img src="readme-images/section_blacweek1.png" width="375px" alt="section black week code">
   ##

  <p>Met hulp van Marten heb ik display grid gebruikt voor mijn section. Dit ging eerste instantie niet helemaal makkelijk, want de grid liet steeds extra rows zien terwijl ik de rows heb aangegeven met grid-template-rows. We wisten beide niet waar dit aan lag. </p>
   <img src="readme-images/schets1_marten.jpeg" width="375px" alt="section black week code">
   ##
   <img src="readme-images/section_blackweek1.2.png" width="375px" alt="section black week code">
   ##
   <img src="readme-images/section_blackweek1.3.png" width="375px" alt="section black week code">
   ##
<p>Ik ben vervolgens later nog is naar de code gaan kijken met Abby. Ik dacht misschien dat het aan de height lag en dat klopte ook.  Ik had de height weggehaald en de rows aangepast. Nu stond alles op de juiste plek.</p>
   <img src="readme-images/section_blackweek1.4.png" width="375px" alt="section black week code">
   ##
   <img src="readme-images/section_blackweek1.5.png" width="375px" alt="section black week code">
   ##

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
