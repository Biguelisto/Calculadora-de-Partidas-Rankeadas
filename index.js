let Historico = TotalPartidas(5600, 100);
let Lvl = " ";

if (Historico < 10) {
    Lvl = "Ferro";

} else if (Historico <= 20) {
    Lvl = "Bronze";

} else if (Historico <= 50) {
    Lvl = "Prata";

} else if (Historico <= 80) {
    Lvl = "Ouro";

} else if (Historico <= 90) {
    Lvl = "Diamante";

} else if (Historico <= 100) {
    Lvl = "Lendário";

} else {
    Lvl = "Imortal"
};

console.log("O Herói tem de saldo de " + Historico + ", está no nível de " + Lvl);

function TotalPartidas(Vitorias, Derrotas) {
    let SaldoVitorias = (Vitorias - Derrotas);
    return SaldoVitorias;
}


