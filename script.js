function noLayout() {
  document.getElementById("cards").classList.value = "";
}

function verticalLayout() {
  noLayout();
  document.getElementById("cards").classList.add("vertical");
}

function horizontalLayout() {
  noLayout();
  document.getElementById("cards").classList.add("horizontal");
}

function gridLayout() {
  noLayout();
  document.getElementById("cards").classList.add("grid");
}

function showTextGreen() {
  blankAll();
  document.getElementById("innerCardGreen").innerHTML = /*HTML*/ `        
    <div id="innerCardGreen" class="innerCard">
            De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>

                    Koderedigeringsprogrammet 
                    <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                    <br>
                    Vi skal bruke noen <i>extensions</i>:
                
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li> 
                        <li>live-server</li>
                        <li>live-share</li>
                    </li>
                    </ul>
                <li>Nettleseren 
                    <a href="https://www.google.com/intl/no/chrome/">Gooogle Chrome</a>
                </li>
            </ul>
        </div>
    `;
}

function showTextBlue() {
  blankAll();
  document.getElementById("innerCardBlue").innerHTML = /*HTML*/ `
        <div id="innerCardBlue" class="innerCard">
        Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
        </ul>
    </div>
    `;
}

function showTextRed() {
  blankAll();
  document.getElementById("innerCardRed").innerHTML = /*HTML*/ `
        <div id="innerCardRed" class="innerCard" >
        Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
            </li>
        </ul>
    </div>
    `;
}

function showTextYellow() {
  blankAll();
  document.getElementById("innerCardYellow").innerHTML = /*HTML*/ `
        <div id="innerCardYellow" class="innerCard">
            Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
            ved
            å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
            <ul>
                <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                    Moodle.</li>
                <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                        Reference</a></li>
            
            </ul>
        </div>
    `;
}

function showTextBlack() {
  blankAll();
  document.getElementById("innerCardBlack").innerHTML = /*HTML*/ `
        <div id="showHead" class="bodyPart"></div>
        <div id="showBody" class="bodyPart"></div>
        <div id="showLegs" class="bodyPart"></div>
        `;
  selecthead1();
  selectbody1();
  selectlegs1();
}

function blankAll() {
  document.getElementById("innerCardGreen").innerHTML = "";
  document.getElementById("innerCardBlue").innerHTML = "";
  document.getElementById("innerCardRed").innerHTML = "";
  document.getElementById("innerCardYellow").innerHTML = "";
  document.getElementById("innerCardBlack").innerHTML = "";
}

function selecthead1() {
  document.getElementById("showHead").innerHTML = /*HTML*/ `
        <button onclick="selecthead4()">◀</button>
            <img src="img/head1.png" alt="">
        <button onclick="selecthead2()">▶</button>
        `;
}

function selecthead2() {
  document.getElementById("showHead").innerHTML = /*HTML*/ `
        <button onclick="selecthead1()">◀</button>
            <img src="img/head2.png" alt="">
        <button onclick="selecthead3()">▶</button>
        `;
}

function selecthead3() {
  document.getElementById("showHead").innerHTML = /*HTML*/ `
        <button onclick="selecthead2()">◀</button>
            <img src="img/head3.png" alt="">
        <button onclick="selecthead4()">▶</button>
        `;
}

function selecthead4() {
  document.getElementById("showHead").innerHTML = /*HTML*/ `
        <button onclick="selecthead3()">◀</button>
            <img src="img/head4.png" alt="">
        <button onclick="selecthead1()">▶</button>
        `;
}

function selectbody1() {
  document.getElementById("showBody").innerHTML = /*HTML*/ `
        <button onclick="selectbody4()">◀</button>
            <img src="img/body1.png" alt="">
        <button onclick="selectbody2()">▶</button>
        `;
}

function selectbody2() {
  document.getElementById("showBody").innerHTML = /*HTML*/ `
        <button onclick="selectbody1()">◀</button>
            <img src="img/body2.png" alt="">
        <button onclick="selectbody3()">▶</button>
        `;
}

function selectbody3() {
  document.getElementById("showBody").innerHTML = /*HTML*/ `
        <button onclick="selectbody2()">◀</button>
            <img src="img/body3.png" alt="">
        <button onclick="selectbody4()">▶</button>
        `;
}

function selectbody4() {
  document.getElementById("showBody").innerHTML = /*HTML*/ `
        <button onclick="selectbody3()">◀</button>
            <img src="img/body4.png" alt="">
        <button onclick="selectbody1()">▶</button>
        `;
}

function selectlegs1() {
  document.getElementById("showLegs").innerHTML = /*HTML*/ `
        <button onclick="selectlegs4()">◀</button>
            <img src="img/legs1.png" alt="">
        <button onclick="selectlegs2()">▶</button>
        `;
}

function selectlegs2() {
  document.getElementById("showLegs").innerHTML = /*HTML*/ `
        <button onclick="selectlegs1()">◀</button>
            <img src="img/legs2.png" alt="">
        <button onclick="selectlegs3()">▶</button>
        `;
}

function selectlegs3() {
  document.getElementById("showLegs").innerHTML = /*HTML*/ `
        <button onclick="selectlegs2()">◀</button>
            <img src="img/legs3.png" alt="">
        <button onclick="selectlegs4()">▶</button>
        `;
}

function selectlegs4() {
  document.getElementById("showLegs").innerHTML = /*HTML*/ `
        <button onclick="selectlegs3()">◀</button>
            <img src="img/legs4.png" alt="">
        <button onclick="selectlegs1()">▶</button>
        `;
}
