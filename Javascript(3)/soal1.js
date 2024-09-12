// Membuat sambungan program then catch & try catch
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    });
};

// Menggunakan then-catch untuk menangani Promise
cekHariKerja('sabtu')
    .then((result) => {
        console.log(`${result} adalah hari kerja.`);
    })
    .catch((error) => {
        console.log(error.message);
    });

// Menggunakan try-catch dengan async/await untuk menangani Promise
async function cekHari(day) {
    try {
        const result = await cekHariKerja(day);
        console.log(`${result} adalah hari kerja.`);
    } catch (error) {
        console.log(error.message);
    }
}
cekHari('selasa');

//! Penjelasan

//! then catch
//then-catch digunakan untuk menangani hasil dari Promise. 
//Jika Promise berhasil (resolved), kode dalam then akan dijalankan, sedangkan jika Promise gagal (rejected), 
//kode dalam catch akan dijalankan.

//Dalam contoh ini, jika cekHariKerja('senin') berhasil, maka then akan mencetak bahwa "senin adalah hari kerja". 
//Jika gagal, catch akan menangkap error dan mencetak pesan error.

//! try catch
//try-catch digunakan bersama dengan async/await untuk menangani Promise secara lebih sinkron. 
//await digunakan untuk menunggu hasil dari Promise, dan jika ada error, blok catch akan menangkapnya.

//Dalam contoh ini, jika cekHari('minggu') dipanggil, dan hasilnya gagal (karena 'minggu' bukan hari kerja), 
//blok catch akan menangkap error dan mencetak pesan error.