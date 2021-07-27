const $template = document.createElement("template");
$template.innerHTML = `
    <div class="newForm">
        <form class="form">
            <input type="text" name="name" placeholder="Tên sách" >
            <input type="text" name="author" placeholder="Tên tác giả">
            <input type="text" name="code" placeholder="Mã sách">
            <button type="submit">Thêm</button>
        </form>
    </div>
`;

export default class Form extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$form = this.querySelector(".form");
    }
    static get observedAttributes() {}
    //chay khi gia tri cua thuoc tinh vua khai bao thay doi
    attributeChangedCallback(attrName, oldValue, newValue) {}
    connectedCallback() {
        this.$form.addEventListener("submit", (event) => {
            event.preventDefault();
            let obj = {};
            obj.name = this.$form.name.value;
            obj.author = this.$form.author.value;
            obj.code = this.$form.code.value;
            if (!obj.name || !obj.author || !obj.code)
                alert("Vui lòng nhập hết các trường.");
            else {
                let data = JSON.parse(localStorage.getItem("bookList"));
                if (!data) data = [];
                data.push(obj);
                localStorage.setItem("bookList", JSON.stringify(data));
                this.style.display = "none";
            }
        });
    }
}
window.customElements.define("new-form", Form);
