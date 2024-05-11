// core module untuk write dan read
const fs = require('node:fs');
// core module untuk membuat interface
const readline = require('node:readline');

// membuat interface untuk input pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file hasil-hitung.json jika belum ada
const dataPath = './data/hasil-hitung.json'
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// promise digunakan untuk menampilkan pertanyaan kepada pengguna
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (sisi) => {
            resolve(sisi);
        });
    });
};

// menuliskan hasil dari perhitungan luas dan keliling persegi dan persegi panjang ke dalam file JSON
const hasilHitung = (luas_persegi, keliling_persegi, luas_persegiPanjang, keliling_persegiPanjang) => {
    const hasil = { luas_persegi, keliling_persegi, luas_persegiPanjang, keliling_persegiPanjang };
    const fileBuffer = fs.readFileSync('data/hasil-hitung.json', 'utf-8');
    const simpan = JSON.parse(fileBuffer);

    simpan.push(hasil);

    fs.writeFileSync('data/hasil-hitung.json', JSON.stringify(simpan));

    console.log('\nData berhasil disimpan!');
    rl.close();
};

// function menghitung luas persegi
const luasPersegi = (s) => {
    return s * s;
}

// function menghitung keliling persegi
const kelilingPersegi = (s) => {
    return 4 * s;
}

// function menghitung luas persegi panjang
const luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}

// function menghitung keliling persegi panjang
const kelilingPersegiPanjang = (panjang, lebar) => {
    return (2*panjang) + (2*lebar);
}

module.exports = {
    tulisPertanyaan,
    hasilHitung,
    luasPersegi,
    kelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang
}