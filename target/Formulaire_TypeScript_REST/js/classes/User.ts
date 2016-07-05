class User {
	
	private nom: string; 
	private prenom: string; 
	private genre: string;
	private dateNaissance: string; 
	private mail: string;

	constructor(nom, prenom, genre, dateNaissance, mail) {
		this.nom = nom;
		this.prenom = prenom;
		this.genre = genre;
		this.dateNaissance = dateNaissance;
		this.mail = mail;
	}

	get getNom(): string {
		return this.nom;
	}

	get getPrenom(): string {
		return this.prenom;
	}

	get getGenre(): string {
		return this.genre;
	}

	get getDateNaissance(): string {
		return this.dateNaissance;
	}

	get getMail(): string {
		return this.mail;
	}

	set setNom(n : string) {
		this.nom = n;
	}


	set setPrenom(p :string) {
		this.prenom = p;
	}

	set setMail(e: string) {
		this.mail = e;
	}

}