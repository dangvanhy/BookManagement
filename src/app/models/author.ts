export class Author {
    id: number;
    name: string;
    birthday: Date;
    note?: string;

    constructor()
    {
        this.id = -1;
        this.name = "";
        this.birthday = new Date;
        this.note = "";
    }
}
