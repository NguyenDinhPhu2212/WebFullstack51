export default class Card {
    constructor(name, avatarUrl, email, company, followers) {
        this.name = name;
        this.avatarUrl = avatarUrl;
        this.email = email;
        this.company = company;
        this.followers = followers;
    }

    show() {
        return `
            <div class="card my-4">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this.avatarUrl}" class="img-fluid rounded-start" alt="avatar">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title fw-bold mb-3 fs-3">${this.name}</h5>
                            <p class="card-text">Email: ${this.email}</p>
                            <p class="card-text">Company: ${this.company}</p>
                            <p class="card-text">Followers: ${this.followers}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
