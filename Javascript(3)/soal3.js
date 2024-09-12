// membuat program menggunakan promise
const dataSiswa = ['Zawil', 'Irsyad', 'Budi', 'Jono', 'Putra', 'Nana'];

// Fungsi untuk mengecek nama siswa menggunakan Promise
const cekNamaSiswa = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mencari nama siswa dalam array dataSiswa
            const siswa = dataSiswa.find((siswa) => siswa.toLowerCase() === nama.toLowerCase());

            if (siswa) {
                resolve(`Siswa dengan nama ${siswa} ditemukan.`);
            } else {
                reject(new Error(`Siswa dengan nama ${nama} tidak ditemukan.`));
            }
        }, 2000);
    });
};

// Menggunakan Promise dengan then-catch untuk melihat hasil cekNamaSiswa
cekNamaSiswa('Zawil')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    });

cekNamaSiswa('Saiful')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    });
