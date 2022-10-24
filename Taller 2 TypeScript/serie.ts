export class Serie {

    id: number;
    name: String;
    platform: String;
    seasons: number;
    description: String;
    link: String;
    image: String

    constructor(id: number, name: String, platform: String, seasons: number, description: String, link: String, image: String) {
        this.id = id;
        this.name = name;
        this.platform = platform;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }

  }
 