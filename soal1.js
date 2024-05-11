// menggunakan local module
const hitung = require ('./rumus');

// menggunakan NPM module
const colors = require('ansi-colors')

const main = async () => {
    const sisi = await hitung.tulisPertanyaan('Masukkan sisi persegi : ');
    const panjang = await hitung.tulisPertanyaan('Masukkan panjang persegi panjang : ');
    const lebar = await hitung.tulisPertanyaan('Masukkan lebar persegi panjang : ');

    colors.alias('primary', colors.blueBright);
    colors.alias('secondary', colors.yellowBright)

    const hitungLuasPersegi = hitung.luasPersegi(sisi);
    const hitungKelilingPersegi = hitung.kelilingPersegi(sisi);

    const hitungLuasPersegiPanjang = hitung.luasPersegiPanjang(panjang, lebar);
    const hitungKelilingPersegiPanjang = hitung.kelilingPersegiPanjang(panjang, lebar);

    console.log('\nLuas persegi dengan sisi : '+ colors.bold.secondary(sisi) + ' adalah ' + colors.bold.primary(hitungLuasPersegi));
    console.log('Keliling persegi dengan sisi : '+ colors.bold.secondary(sisi) + ' adalah ' + colors.bold.primary(hitungKelilingPersegi));

    console.log('\nLuas persegi panjang dengan panjang : '+ colors.bold.secondary(panjang) + ' dan lebar : ' + colors.bold.secondary(lebar) + 
    ' adalah '+ colors.bold.primary(hitungLuasPersegiPanjang));
    console.log('Keliling persegi panjang dengan panjang : '+ colors.bold.secondary(panjang) + ' dan lebar : ' + colors.bold.secondary(lebar) + 
    ' adalah '+ colors.bold.primary(hitungKelilingPersegiPanjang));

    hitung.hasilHitung(hitungLuasPersegi, hitungKelilingPersegi, hitungLuasPersegiPanjang, hitungKelilingPersegiPanjang);
}

main();