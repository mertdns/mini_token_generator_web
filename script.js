const generateBtn = document.getElementById("generateBtn");
const tokenDiv = document.querySelector(".token");
const tokenInput = document.getElementById("tokenInput");
const chars =
    ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t"];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const common = ["-", "_", "?", "*", ".", ",", ";", ":", "<", ">", "'", "!"];
generateBtn.addEventListener("click", () => {
    let lastString = "";
    SayiliKaristir(chars, 3);
    SayiliKaristir(nums, 3);
    SayiliKaristir(common, 3);

    let numsString = RastgeleGetir(nums, nums.length + 5).join("");
    console.log(numsString);
    let charsString = RastgeleGetir(chars, chars.length + 5).join("");
    console.log(charsString);
    let commonString = RastgeleGetir(common, common.length + 5).join("");
    console.log(commonString);

    const tokenLength = parseInt(tokenInput.value) || 100;
    for (let i = 1; i <= tokenLength; i++) {
        const rsayi = Math.floor(Math.random() * 3) + 1;
        switch (rsayi) {
            case 1:
                const charsItemIndex = Math.floor(Math.random() * charsString.length);
                lastString += charsString[charsItemIndex];
                break;
            case 2:
                const numsItemIndex = Math.floor(Math.random() * numsString.length);
                lastString += numsString[numsItemIndex];
                break;
            case 3:
                const commonItemIndex = Math.floor(Math.random() * commonString.length);
                lastString += commonString[commonItemIndex];
                break;
        }
    }
    tokenDiv.innerHTML = lastString;
});



function Karistir(dizi) {
    dizi.forEach((item, index) => {
        const rsayi = Math.floor(Math.random() * dizi.length);
        let temp = dizi[index];
        dizi[index] = dizi[rsayi];
        dizi[rsayi] = temp;
    });
}

function SayiliKaristir(dizi, sayi) {
    for (let i = 1; i <= sayi; i++)
        Karistir(dizi);
}

function RastgeleGetir(dizi, adet) {
    const yeniDizi = [];
    if (dizi.length >= adet) {
        for (let i = 0; i < adet; i++)
            yeniDizi.push(dizi[i])
    } else {
        let fark = adet - dizi.length;
        for (let i = 0; i < dizi.length; i++)
            yeniDizi.push(dizi[i])
        //elemanlar aynı sırayla devam etmeyecek şekilde karıştırılır
        SayiliKaristir(dizi, 2);
        for (let i = 0; i < fark; i++)
            yeniDizi.push(dizi[i]);
    }
    return yeniDizi;
}