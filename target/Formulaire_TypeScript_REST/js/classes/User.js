class User {
    constructor(nom, prenom, genre, dateNaissance, mail) {
        this.nom = nom;
        this.prenom = prenom;
        this.genre = genre;
        this.dateNaissance = dateNaissance;
        this.mail = mail;
    }
    get getNom() {
        return this.nom;
    }
    get getPrenom() {
        return this.prenom;
    }
    get getGenre() {
        return this.genre;
    }
    get getDateNaissance() {
        return this.dateNaissance;
    }
    get getMail() {
        return this.mail;
    }
    set setNom(n) {
        this.nom = n;
    }
    set setPrenom(p) {
        this.prenom = p;
    }
    set setMail(e) {
        this.mail = e;
    }
}
//# sourceMappingURL=User.js.map