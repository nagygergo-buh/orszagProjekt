let sz=""
for (const elem of allattomb) {
    sz+=`
    <div class="col-sm-6">
        <div class="kartya">
            <p class="text-center cimecske">${elem.nev}</p>
            <p class="text-center"><img class="img-fluid kep" src="kepek/${elem.kep}" alt=""></p>
            <p class="leiraszoveg">${elem.leiras}</p>
        </div>
    </div>
    `
}
document.getElementById('foallatDiv').innerHTML=sz