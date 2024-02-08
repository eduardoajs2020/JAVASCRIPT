let cachorro = {
    patas: 4,
    raca: 'SRD ',
    latir: function () {
        document.write("Au Au ");
        console.log("Au Au ");
    } 
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador ";

console.log(labrador.raca);
document.write(labrador.raca);

console.log(cachorro.raca);
document.write(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão ";


console.log(pastor.raca);
document.write(pastor.raca);


console.log(cachorro.patas);
document.write(cachorro.patas);
alert(cachorro.patas);