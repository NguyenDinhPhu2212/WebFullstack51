const $template = document.createElement("template");
$template.innerHTML = `
    <div class="book">
        <div class="name">
        </div>
        <div class="author">
        </div>
        <div class="code">
        </div>
    </div>
`;

export default class Book extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$name = this.querySelector(".name");
        this.$author = this.querySelector(".author");
        this.$code = this.querySelector(".code");
    }
    static get observedAttributes() {
        return ["book"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "book") {
            newValue = JSON.parse(newValue);
            this.$author.innerHTML = newValue.author;
            this.$name.innerHTML = newValue.name;
            this.$code.innerHTML = "Code: " + newValue.code;
        }
    }
    connectedCallback() {}
}
window.customElements.define("book-box", Book);
