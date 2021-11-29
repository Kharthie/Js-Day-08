class movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(arr) {
        let data = arr.filter(function (d) {
            if (d.rating == "PG")
                return d.title;
            else return false
        });
    }
    getmovies() {
        console.log(`
    Title: ${this.title}
    Studio: ${this.studio}
    rating: ${this.rating}
    `);
    }
}
let mov1 = new movie("casino royale", "eon productions", "PG13");
let mov2 = new movie("quantum of solace", "sony pictures", "G");
let mov3 = new movie("skyfall", "sony pictures", "P");
let mov4 = new movie("spectre", "eon productions", "G");
let mov5 = new movie("no time to die", "sony pictures", "P");

const arr = [mov1, mov2, mov3, mov4, mov5];
let a = mov1.getPG(arr);
mov1.getmovies();