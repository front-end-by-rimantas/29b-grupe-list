class Dictionary {
    constructor(selector, name, list) {
        this.selector = selector;
        this.name = name;
        this.dictionaryList = list;

        // tai elementas, kuriame generuosime visa turini
        this.DOM = null;
    }

    init() {
        // patikriname, jog validus this.selector
        // patikriname, jog validus this.dictionaryList
        // randam this.DOM
        if (!this.isValidSelector() ||
            !this.isValidDictionary() ||
            !this.findTargetElement()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector turi buti ne tuscias tekstas (string).');
            return false;
        }
        return true;
    }

    isValidDictionary() {
        if (!Array.isArray(this.dictionaryList) ||
            this.dictionaryList.length === 0) {
            console.error('ERROR: zodynas turi buti ne tuscias array.');
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: pagal pateikta selector, norimo elemento nepavyko rasti.')
            return false;
        }
        return true;
    }

    render() {
        console.log('piesiam turini....');
    }
}

export { Dictionary }