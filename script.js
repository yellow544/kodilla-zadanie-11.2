//Utworzenie funkcji konstruującej Button

function Button(text) {
	this.text = text || 'Hello';
}

//Utworzenie podstawowej metody create tworzącej przycisk na stronie

Button.prototype = {
	create: function() {
		const self = this;					//wskazuje kontekst, zapobiega utracie kontekstu
		this.$element = $('<button>'); 		//jQuery - tworzy nowe przycsiki na stronie
		this.$element.text(this.text); 		//jQuery - ustawienie tekstu na przycisku
		this.$element.click(function() {	//po kliknięciu wyświetla tekst
			alert(self.text);
		});
		this.$element.appendTo($('body')); 	//umieszczenie elementu w DOM - pobiera element i przykleja go do body
	}
}

//utworzenie pierwszej instancji

const btn1 = new Button('Hello!'); 

//wywołanie metody w celu stworzenia elementu
btn1.create();