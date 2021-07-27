import Book from "./book.js";
import Form from "./newForm.js";
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="container">
        <div class="add"><i class="fal fa-plus"></i></div>
        <div class="book-list">
        </div>
        <new-form></new-form>
    </div>
`;

export default class BookList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list = this.querySelector(".book-list");
        this.$add = this.querySelector(".add");
        this.$form = this.querySelector("new-form");
    }
    static get observedAttributes() {
        return ["list"];
    }
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "list") {
            newValue = JSON.parse(newValue);
            this.removeAllChildNodes(this.$list);
            for (let i in newValue) {
                let book = new Book();
                book.setAttribute("book", JSON.stringify(newValue[i]));
                this.$list.appendChild(book);
            }
        }
    }
    connectedCallback() {
        setInterval(() => {
            let list = localStorage.getItem("bookList");
            list = JSON.parse(list);
            list = [...list];
            this.setAttribute("list", JSON.stringify(list));
        }, 1000);
        this.$add.addEventListener("click", () => {
            this.$form.style.display =
                this.$form.style.display == "none" ||
                this.$form.style.display == ""
                    ? "block"
                    : "none";
        });
    }
    removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}
window.customElements.define("book-list", BookList);
