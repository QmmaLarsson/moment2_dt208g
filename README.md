# Moment 2 i kursen DT208G, Programmering i TypeScript
**Namn:** Emma Larsson\
**Student-ID:** emla2309

### Beskriving av applikation:

Detta är en webbsida där användare kan skapa en "Att göra"-lista. Det går att lägga till uppgifter, markera uppgifter som klara och ta bort uppgifter.

**Beskriving av lösning:**

**Steg 1:**\
Första steget var att skapa ett Interface. Ett interface är ett kontrakt för ett objekt, det används för att sätta en standard för hur ett objekt ska se ut och vilka egenskaper det ska ha. Detta interface innehåller följande egenskaper:
* Task: string; (Information om själva uppgiften.)
* Priority: number; (Information om uppgiftens prioritetsgrad.)
* Completed: boolean; (Information om huruvida uppgiften är avklarad eller inte.)

**Steg 2:**\
Andra steget var att skapa olika klasser som använder sig av det tidigare skapade interfacet. De klasser som har skapats är följande:
* Task (Innehåller en konstruktor för att skapa och initiera objekt.)
* LocalStorageUtil (Innehåller en metod för att hämta information från localStorage och en metod för att spara information till localStorage.)
* TaskManager (Hanterar uppgifter från ”Att göra”-listan. Innehåller metoder för att hämta uppgifter, lägga till nya uppgifter klarmarkera uppgifter och ta bort uppgifter. TaskManager har även en instans av ”LocalStorageUtil” för att kunna interagera med localStorage och hämta sparad information samt spara de förändringar som görs.)

**Steg 3:**\
Tredje steget var att hantera användarinteraktion på webbsidan. De funktioner som har skapats för detta är följande:
* addToDo() (Läser in information från formuläret och skapar en ny uppgift som skickas till addTask i TaskManager.)
* renderTask() (Hämtar uppgifterna med hjälp av getTask i TaskManager. Sorterar uppgifterna efter prioritet, skapar HTML-element för varje uppgift samt placerar HTML-elementen i olika listor beroende på status.)
* completeTask() (Information skickas till completeTask i TaskManager som omvandlar uppgiftens status från false till true, det vill säga från icke klar till klar.)
* deleteTask() (Information skickas till deleteTask i TaskManager som tar bort uppgiften.)

**Steg 4:**\
Fjärde steget var att skapa en enklare webbplats. Webbplatsen innehåller följande elemement:

* Ett formulär
* En lista som visar pågående uppgifter
* En lista som visar avklarade uppgifter
