let personagem = "Demolitor"
let xp = 2550
while (xp<=10000){
if (xp >0 && xp <= 1000) {
    console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Ferro")
    
}
else if (xp > 1000 && xp <=2000){
    console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Bronze")
}
else if (xp > 2000 && xp <=5000) {
    console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Prata")
} 
else if (xp> 5000 && xp <=7000){
    console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Ouro")
} 
else if (xp> 7000 && xp <=8000){
    console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Platina")
} 
else if (xp> 8000 && xp <=9000){
    console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Ascendente")
}
    else if (xp> 9000 && xp <=10000){
        console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Imortal")
    }
    else if (xp>10000){
        console.log ("O personagem " + personagem + " tem " + xp + " de xp e está no ranking Radiante")
    }
    xp = xp+1000 }
