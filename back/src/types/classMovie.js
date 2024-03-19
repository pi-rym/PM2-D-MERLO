class Movies {
    constructor({título, año, director, duración, género, ranking, póster}) {
        if (!título || !año || !director || !duración || !género || !ranking || !póster  ){
            throw new Error("Faltan campos requeridos");
        }
        this.título=título;
        this.año=año;
        this.director=director;
        this.duración=duración;
        this.género=género;
        this.ranking=ranking;
        this.póster=póster;
    }
}
module.exports = {Movies};