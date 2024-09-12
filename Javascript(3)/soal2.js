// Membuat callback function
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            'Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus', 'September',
            'Oktober', 'November', 'Desember'
        ];

        if (!error) {
            callback(null, month);
        } else {
            callback(new Error('Sorry Data Not Found'), []);
        }
    }, 4000);
};

// Fungsi callback showMonth yang digunakan untuk menampilkan bulan
const showMonth = (error, month) => {
    if (error) {
        console.log(error.message);  // Menampilkan pesan error jika ada error
    } else {
        month.map((m) => {
            console.log(m);  // Menampilkan setiap bulan
        });
    }
};

// Memanggil getMonth dengan showMonth sebagai callback
getMonth(showMonth);
