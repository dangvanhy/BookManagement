export class Book {
    id: number;
    name: string;
    filePath: string;
    authorId: number;
    genreId: number;
    imagePath: string;

    constructor()
    {
        this.id = -1;
        this.name = "";
        this.filePath = "";
        this.authorId = -1;
        this.genreId = -1;
        this.imagePath = "";
    }
}
