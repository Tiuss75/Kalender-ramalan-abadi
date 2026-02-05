// ramalan-shio.js - Data shio Lengkap (12 shio) dengan Variasi Mingguan

const RAMALAN_SHIO = {
  "siklusElemenHarian": ["Kayu", "Api", "Tanah", "Logam", "Air"],
  "shio": [
    {
      "nama": "Tikus",
      "elemen": "Air",
      "kategori": {
        "karier": [
          "Ide inovatif muncul, diskusikan dengan tim untuk kemajuan cepat.",
          "Tugas tertunda selesai, dapat pujian dari atasan.",
          "Konflik kecil dengan rekan, selesaikan dengan diplomasi.",
          "Waktunya menyusun strategi baru untuk proyek jangka panjang.",
          "Ketelitian Anda menghindari kesalahan fatal hari ini.",
          "Kolaborasi lintas divisi membuka peluang naik jabatan.",
          "Fokus pada efisiensi kerja untuk hasil maksimal."
        ],
        "keuangan": [
          "Rezeki tak terduga dari bonus atau side job.",
          "Pengeluaran terkendali, simpan untuk investasi aman.",
          "Hindari spekulasi besar, fokus tabungan jangka panjang.",
          "Ada peluang keuntungan dari investasi lama yang cair.",
          "Kurangi pengeluaran gaya hidup demi kestabilan masa depan.",
          "Analisa kembali anggaran bulanan Anda hari ini.",
          "Pemasukan tambahan datang dari keahlian yang tak terduga."
        ],
        "asmara": [
          "Pasangan dukung penuh, komunikasi hangat malam ini.",
          "Single bertemu orang potensial via acara sosial.",
          "Hindari salah paham, bicara terbuka untuk harmoni.",
          "Kejutan kecil untuk pasangan akan mempererat ikatan.",
          "Seseorang dari masa lalu mungkin memberi kabar.",
          "Waktu yang tepat untuk mendiskusikan masa depan hubungan.",
          "Kehangatan keluarga menjadi sumber energi utama."
        ],
        "kesehatan": [
          "Stamina tinggi, tapi istirahat cukup hindari kelelahan.",
          "Perhatikan pencernaan, makan makanan bergizi.",
          "Olahraga ringan tingkatkan energi mental.",
          "Meditasi singkat membantu menjernihkan pikiran yang stres.",
          "Perbanyak minum air putih untuk menjaga hidrasi tubuh.",
          "Kualitas tidur yang baik adalah prioritas hari ini.",
          "Udara segar di pagi hari sangat baik untuk paru-paru Anda."
        ],
        "umum": "Hari penuh peluang, rating 8/10.",
        "hoki": {"warna": ["Biru tua", "Hitam"], "angka": [1, 3, 7]},
        "tips": "Meditasi pagi untuk alirkan chi positif."
      }
    },
    {
      "nama": "Kerbau",
      "elemen": "Tanah",
      "kategori": {
        "karier": [
          "Kerja keras terbayar, promosi dekat.",
          "Fokus proyek utama, hindari distraksi.",
          "Kolaborasi tim sukses besar.",
          "Ketekunan Anda dalam detail membuahkan hasil sempurna.",
          "Tantangan baru di kantor akan meningkatkan skill Anda.",
          "Selesaikan kewajiban lama sebelum memulai tugas baru.",
          "Stabilitas kerja sangat baik, pertahankan performa ini."
        ],
        "keuangan": [
          "Stabilitas tinggi, tambah tabungan hari ini.",
          "Investasi properti menguntungkan.",
          "Penghematan bijak cegah kerugian.",
          "Rezeki mengalir tenang namun pasti dari usaha tetap.",
          "Evaluasi pengeluaran rutin yang sebenarnya tidak perlu.",
          "Waktunya menabung untuk rencana besar akhir tahun.",
          "Keberuntungan finansial datang dari saran keluarga."
        ],
        "asmara": [
          "Hubungan stabil, rencanakan date romantis.",
          "Single dapat perhatian dari teman lama.",
          "Kesabaran kunci harmoni rumah tangga.",
          "Kepercayaan adalah pondasi yang harus dijaga hari ini.",
          "Nikmati momen tenang bersama orang tercinta.",
          "Jangan biarkan masalah pekerjaan mengganggu hubungan.",
          "Single: Jangan terburu-buru, biarkan semua mengalir."
        ],
        "kesehatan": [
          "Tubuh kuat, tapi jaga pola tidur.",
          "Cek tekanan darah secara rutin.",
          "Yoga tingkatkan fleksibilitas.",
          "Hindari mengangkat beban terlalu berat hari ini.",
          "Makan malam lebih awal baik untuk metabolisme.",
          "Kesehatan tulang perlu diperhatikan, cukupi kalsium.",
          "Jalan santai di sore hari membantu relaksasi."
        ],
        "umum": "Kestabilan mendominasi, rating 7/10.",
        "hoki": {"warna": ["Coklat", "Kuning"], "angka": [2, 5, 8]},
        "tips": "Prioritaskan tugas prioritas untuk efisiensi."
      }
    },
    {
      "nama": "Macan",
      "elemen": "Kayu",
      "kategori": {
        "karier": [
          "Karisma tarik peluang besar, ambil risiko terhitung.",
          "Proyek kreatif sukses, dapat pengakuan.",
          "Kompetisi ketat, tunjukkan keberanian.",
          "Keberanian mengambil keputusan cepat sangat dihargai.",
          "Gunakan energi kepemimpinan Anda untuk memotivasi tim.",
          "Ada tawaran kerjasama baru yang cukup menantang.",
          "Jangan ragu menunjukkan bakat yang selama ini tersembunyi."
        ],
        "keuangan": [
          "Pendapatan naik drastis dari usaha.",
          "Investasi berani beri return tinggi.",
          "Waspada pengeluaran mewah.",
          "Ada celah keuntungan di sektor yang baru Anda pelajari.",
          "Berani mengambil keputusan finansial yang strategis.",
          "Keuntungan datang dari relasi bisnis yang kuat.",
          "Kelola arus kas dengan lebih agresif namun cerdas."
        ],
        "asmara": [
          "Gairah membara, malam penuh keintiman.",
          "Single tarik pasangan karismatik.",
          "Hindari ego untuk jaga kedamaian.",
          "Spontanitas akan menyegarkan hubungan yang hambar.",
          "Percaya pada insting Anda dalam memilih pasangan.",
          "Momen romantis tak terduga akan terjadi hari ini.",
          "Ekspresikan perasaan Anda dengan tindakan nyata."
        ],
        "kesehatan": [
          "Energi melimpah, tapi kontrol amarah.",
          "Olahraga intensif aman dilakukan.",
          "Perhatikan sendi dan otot.",
          "Kesehatan mata perlu dijaga dari layar gadget.",
          "Minum jus buah segar untuk meningkatkan imun.",
          "Latihan pernapasan sangat membantu emosi Anda.",
          "Aktivitas luar ruangan akan menyegarkan jiwa."
        ],
        "umum": "Petualangan menanti, rating 9/10.",
        "hoki": {"warna": ["Hijau", "Biru"], "angka": [3, 4, 9]},
        "tips": "Gunakan insting untuk keputusan cepat."
      }
    },
    {
      "nama": "Kelinci",
      "elemen": "Kayu",
      "kategori": {
        "karier": [
          "Networking buka pintu kesuksesan.",
          "Ide halus diterima baik.",
          "Hindari konfrontasi langsung.",
          "Diplomasi Anda meredam konflik di lingkungan kerja.",
          "Kerja di balik layar memberikan hasil yang memuaskan.",
          "Kreativitas Anda sedang berada di puncaknya.",
          "Lingkungan kerja yang tenang mendukung produktivitas."
        ],
        "keuangan": [
          "Keuangan aman, rencana jangka panjang matang.",
          "Hadiah kecil datang.",
          "Tabung untuk masa depan.",
          "Rezeki datang melalui perantara teman baik.",
          "Kelola keuangan dengan cara tradisional yang aman.",
          "Hindari meminjamkan uang dalam jumlah besar hari ini.",
          "Kebutuhan mendadak dapat teratasi dengan dana cadangan."
        ],
        "asmara": [
          "Romansa lembut berkembang.",
          "Single nikmati waktu sendiri.",
          "Komunikasi empati kuatkan ikatan.",
          "Waktu yang tepat untuk kencan santai di alam.",
          "Kepekaan Anda membuat pasangan merasa dihargai.",
          "Seseorang memperhatikan keramahan Anda dari jauh.",
          "Harmoni keluarga sedang sangat baik hari ini."
        ],
        "kesehatan": [
          "Kesehatan optimal, relaksasi penting.",
          "Hindari stres berlebih.",
          "Alam terapi terbaik.",
          "Perbanyak konsumsi sayuran hijau.",
          "Istirahat cukup akan mengembalikan kilau wajah Anda.",
          "Pijat refleksi sangat disarankan untuk kebugaran.",
          "Jaga ketenangan batin dengan membaca buku."
        ],
        "umum": "Kedamaian utama, rating 7/10.",
        "hoki": {"warna": ["Hijau muda", "Putih"], "angka": [4, 6]},
        "tips": "Dengarkan intuisi untuk pilihan tepat."
      }
    },
    {
      "nama": "Naga",
      "elemen": "Tanah",
      "kategori": {
        "karier": [
          "Kepemimpinan bersinar, tim ikut arahan.",
          "Proyek ambisius maju pesat.",
          "Pujian dari pimpinan.",
          "Kekuatan visi Anda membawa perubahan besar di kantor.",
          "Tanggung jawab baru adalah tangga menuju kesuksesan.",
          "Otoritas Anda diakui oleh rekan kerja sejawat.",
          "Gunakan pengaruh Anda untuk kebaikan bersama."
        ],
        "keuangan": [
          "Rezeki berlimpah dari berbagai sumber.",
          "Investasi besar untung.",
          "Kelola dengan bijak.",
          "Peluang emas datang di depan mata, jangan ragu.",
          "Keberuntungan finansial sedang berpihak pada Anda.",
          "Kemakmuran meningkat seiring kerja keras Anda.",
          "Asset yang Anda miliki mengalami kenaikan nilai."
        ],
        "asmara": [
          "Pasangan kagum, hubungan mendalam.",
          "Single dapat lamaran tak terduga.",
          "Ekspresikan cinta terbuka.",
          "Karisma Anda membuat banyak orang terpikat.",
          "Waktunya merayakan momen spesial bersama pasangan.",
          "Cinta yang tulus akan menemukan jalannya sendiri.",
          "Kebanggaan pada pasangan memperkuat loyalitas."
        ],
        "kesehatan": [
          "Vitalitas tinggi, energi tak habis.",
          "Jaga keseimbangan kerja-istirahat.",
          "Meditasi tingkatkan fokus.",
          "Kesehatan jantung perlu dijaga dengan kardio.",
          "Jangan abaikan waktu makan di tengah kesibukan.",
          "Suplemen vitamin alami akan membantu daya tahan.",
          "Berbagi tawa adalah obat terbaik hari ini."
        ],
        "umum": "Dominasi hari, rating 9/10.",
        "hoki": {"warna": ["Emas", "Merah"], "angka": [5, 8]},
        "tips": "Bagikan keberhasilan dengan orang terdekat."
      }
    },
    {
      "nama": "Ular",
      "elemen": "Api",
      "kategori": {
        "karier": [
          "Strategi cerdas beri kemenangan.",
          "Rahasia proyek terungkap untung.",
          "Negosiasi sukses.",
          "Analisa tajam Anda menemukan solusi yang luput dari orang lain.",
          "Bertindaklah dengan tenang namun pasti di kantor.",
          "Kebijaksanaan Anda sangat dibutuhkan dalam rapat.",
          "Gunakan taktik yang halus untuk mencapai target."
        ],
        "keuangan": [
          "Intuisi investasi tepat sasaran.",
          "Uang lama kembali.",
          "Hindari pinjam-meminjam.",
          "Keuangan stabil berkat perencanaan yang sangat rahasia.",
          "Ada peluang bisnis sampingan yang menjanjikan.",
          "Waspada terhadap tawaran investasi yang terlalu muluk.",
          "Hemat adalah kunci keberhasilan finansial minggu ini."
        ],
        "asmara": [
          "Misteri tarik pasangan.",
          "Intimasi dalam dan penuh gairah.",
          "Rahasia perkuat ikatan.",
          "Daya tarik magnetis Anda sangat kuat hari ini.",
          "Percakapan mendalam lebih baik daripada sekadar basa-basi.",
          "Single: Seseorang sedang mengamati Anda dengan kagum.",
          "Kesetiaan Anda diuji, tetaplah pada prinsip batin."
        ],
        "kesehatan": [
          "Tubuh fleksibel, regenerasi cepat.",
          "Hindari makanan pedas berlebih.",
          "Tai chi bermanfaat.",
          "Kesehatan kulit mencerminkan pola makan Anda.",
          "Detoksifikasi tubuh dengan teh herbal sangat disarankan.",
          "Relaksasi mental diperlukan untuk keseimbangan saraf.",
          "Tidur yang berkualitas membantu proses pemulihan."
        ],
        "umum": "Intuisi tajam, rating 8/10.",
        "hoki": {"warna": ["Merah", "Hitam"], "angka": [2, 9]},
        "tips": "Percaya firasat untuk langkah bijak."
      }
    },
    {
      "nama": "Kuda",
      "elemen": "Api",
      "kategori": {
        "karier": [
          "Mobilitas tinggi, perjalanan kerja untung.",
          "Energi dorong target tercapai.",
          "Jaringan luas bantu maju.",
          "Kecepatan Anda menyelesaikan tugas membuat semua kagum.",
          "Waktunya mengambil inisiatif di luar zona nyaman.",
          "Semangat pantang menyerah adalah modal utama hari ini.",
          "Promosi atau pengakuan datang berkat dedikasi tinggi."
        ],
        "keuangan": [
          "Pendapatan dari pergerakan cepat.",
          "Belanja bijak beri hemat.",
          "Peluang bisnis baru.",
          "Arus kas bergerak dinamis, pastikan pencatatan rapi.",
          "Investasi di bidang transportasi atau teknologi menarik dilirik.",
          "Keberuntungan finansial datang dari perjalanan jauh.",
          "Gunakan uang Anda untuk pengalaman yang meningkatkan skill."
        ],
        "asmara": [
          "Petualangan romantis menyenangkan.",
          "Pasangan ikut dinamis.",
          "Jaga komitmen di tengah kesibukan.",
          "Kebebasan dalam hubungan membuat cinta makin mekar.",
          "Jelajahi tempat baru bersama orang yang Anda cintai.",
          "Single: Pertemuan tak sengaja di perjalanan berujung manis.",
          "Tunjukkan antusiasme pada rencana pasangan."
        ],
        "kesehatan": [
          "Stamina luar biasa, aktif bergerak.",
          "Perhatikan punggung dan kaki.",
          "Lari pagi ideal.",
          "Jaga hidrasi karena aktivitas fisik yang padat.",
          "Otot yang tegang perlu peregangan setelah bekerja.",
          "Kesehatan paru-paru terjaga dengan udara pegunungan.",
          "Istirahat sejenak di sela kesibukan untuk menjaga fokus."
        ],
        "umum": "Kebebasan kunci, rating 8/10.",
        "hoki": {"warna": ["Merah muda", "Kuning"], "angka": [7, 3]},
        "tips": "Ikuti arus tapi tetap fokus tujuan."
      }
    },
    {
      "nama": "Kambing",
      "elemen": "Tanah",
      "kategori": {
        "karier": [
          "Kreativitas seni beri apresiasi.",
          "Kerja tim harmonis.",
          "Ide unik diterima.",
          "Sisi artistik Anda membantu penyelesaian masalah desain.",
          "Suasana kantor yang mendukung membuat Anda nyaman berkarya.",
          "Bantuan dari rekan kerja datang tepat pada waktunya.",
          "Jangan ragu mengekspresikan pendapat yang lembut namun tegas."
        ],
        "keuangan": [
          "Rezeki dari hobi atau kolaborasi.",
          "Pengeluaran terkendali.",
          "Hadiah kejutan.",
          "Keuangan aman berkat sikap hemat dan tidak impulsif.",
          "Peluang keuntungan dari bidang kreatif atau kuliner.",
          "Ada dukungan finansial dari pihak yang peduli pada Anda.",
          "Rezeki mengalir melalui perbuatan baik Anda di masa lalu."
        ],
        "asmara": [
          "Kasih sayang melimpah.",
          "Single dapat dukungan keluarga.",
          "Ekspresi emosi penting.",
          "Kelemahlembutan Anda meluluhkan hati pasangan.",
          "Waktu berkualitas di rumah sangat menenangkan jiwa.",
          "Harmoni dalam hubungan tercapai melalui saling mengerti.",
          "Single: Pesona alami Anda menarik perhatian orang yang tulus."
        ],
        "kesehatan": [
          "Sensibilitas tinggi, istirahat cukup.",
          "Makan sehat tingkatkan mood.",
          "Musik relaksasi terapi.",
          "Hindari lingkungan yang terlalu bising atau berpolusi.",
          "Kesehatan ginjal perlu diperhatikan dengan asupan air.",
          "Ketenangan batin adalah obat paling manjur hari ini.",
          "Tidur siang singkat dapat memulihkan energi Anda."
        ],
        "umum": "Kreatif dan lembut, rating 7/10.",
        "hoki": {"warna": ["Coklat muda", "Putih"], "angka": [4, 8]},
        "tips": "Ekspresikan perasaan untuk keseimbangan."
      }
    },
    {
      "nama": "Monyet",
      "elemen": "Logam",
      "kategori": {
        "karier": [
          "Kecerdasan pecahkan masalah rumit.",
          "Inovasi teknologi maju.",
          "Humor bantu networking.",
          "Kecepatan berpikir Anda mengungguli kompetitor.",
          "Tugas yang sulit terasa mudah berkat trik cerdas Anda.",
          "Relasi baru terbuka melalui percakapan santai di kantin.",
          "Adaptasi cepat terhadap perubahan sistem di kantor."
        ],
        "keuangan": [
          "Keuntungan dari trik pintar.",
          "Diversifikasi portofolio untung.",
          "Hindari judi.",
          "Ada celah pasar yang bisa Anda manfaatkan hari ini.",
          "Pemasukan dari hasil kreativitas digital meningkat.",
          "Gunakan logika daripada emosi saat berbelanja.",
          "Investasi jangka pendek memberikan hasil yang lumayan."
        ],
        "asmara": [
          "Fun dan playful romansa.",
          "Pasangan terhibur rutinitas.",
          "Jujur cegah salah paham.",
          "Komunikasi yang ceria membuat hubungan tidak membosankan.",
          "Single: Kecerdasan Anda adalah daya tarik utama.",
          "Rencanakan aktivitas seru yang memacu adrenalin bersama.",
          "Canda tawa menjadi perekat hubungan yang paling efektif."
        ],
        "kesehatan": [
          "Cepat pulih, tapi jaga fokus.",
          "Olahraga fun seperti dansa.",
          "Hindari multitasking berlebih.",
          "Kesehatan sistem saraf perlu dijaga dari stres pikiran.",
          "Koordinasi tubuh sangat baik, cobalah olahraga ketangkasan.",
          "Perbanyak konsumsi buah yang mengandung vitamin C.",
          "Istirahatkan pikiran dari urusan duniawi sebelum tidur."
        ],
        "umum": "Cerdas dan lincah, rating 8/10.",
        "hoki": {"warna": ["Putih", "Emas"], "angka": [1, 6, 9]},
        "tips": "Gunakan humor untuk atasi tantangan."
      }
    },
    {
      "nama": "Ayam",
      "elemen": "Logam",
      "kategori": {
        "karier": [
          "Detail presisi beri hasil sempurna.",
          "Presentasi meyakinkan.",
          "Organisasi rapi sukses.",
          "Kedisiplinan Anda menjadi contoh bagi rekan satu tim.",
          "Evaluasi kerja yang mendalam mencegah kegagalan proyek.",
          "Waktunya merapikan file dan rencana kerja untuk bulan depan.",
          "Ketepatan waktu Anda sangat dihargai oleh atasan."
        ],
        "keuangan": [
          "Perencanaan matang beri kestabilan.",
          "Uang kembali dari hutang.",
          "Budget ketat efektif.",
          "Audit mandiri keuangan Anda untuk menemukan pemborosan.",
          "Investasi emas atau logam mulia memberikan rasa aman.",
          "Ada pemasukan dari hasil kerja keras masa lalu yang cair.",
          "Keuangan terkendali berkat kedisiplinan Anda mencatat kas."
        ],
        "asmara": [
          "Komunikasi jujur kuatkan ikatan.",
          "Single cari pasangan teliti.",
          "Hindari kritik berlebih.",
          "Tunjukkan perhatian melalui hal-hal praktis untuk pasangan.",
          "Saling menghargai tanggung jawab masing-masing.",
          "Single: Kerapian penampilan Anda menarik simpati seseorang.",
          "Momen serius untuk membicarakan komitmen jangka panjang."
        ],
        "kesehatan": [
          "Kesehatan prima dengan rutinitas.",
          "Perhatikan mata dan kulit.",
          "Pijat relaksasi baik.",
          "Kebersihan lingkungan tempat tinggal dukung kesehatan.",
          "Pola makan teratur sangat membantu sistem metabolisme.",
          "Hindari kelelahan fisik akibat kerja yang terlalu obsesif.",
          "Suasana rumah yang rapi membantu kesehatan mental."
        ],
        "umum": "Perfeksionis menang, rating 8/10.",
        "hoki": {"warna": ["Kuning muda", "Coklat"], "angka": [5, 7]},
        "tips": "Perfeksionisme jadi kekuatan utama."
      }
    },
    {
      "nama": "Anjing",
      "elemen": "Tanah",
      "kategori": {
        "karier": [
          "Kesetiaan dihargai dengan reward.",
          "Pelindung tim dihormati.",
          "Kontrak baru aman.",
          "Integritas Anda membuat klien menaruh kepercayaan penuh.",
          "Dukungan dari rekan kerja senior membantu tugas sulit.",
          "Waktunya membela kebenaran dalam diskusi profesional.",
          "Stabilitas posisi kerja Anda sedang sangat kuat."
        ],
        "keuangan": [
          "Keuangan solid dari usaha jujur.",
          "Dana darurat lengkap.",
          "Hindari pinjaman.",
          "Rezeki datang sebagai balasan atas bantuan Anda pada orang lain.",
          "Fokus pada keamanan finansial daripada keuntungan cepat.",
          "Ada peluang tabungan bersama yang menguntungkan.",
          "Keberuntungan finansial dari bisnis yang bersifat layanan."
        ],
        "asmara": [
          "Loyalitas pasangan tak tergoyahkan.",
          "Single cari hubungan tulus.",
          "Percaya diri tingkatkan daya tarik.",
          "Kehadiran Anda memberikan rasa aman bagi orang tercinta.",
          "Kesetiaan adalah kunci kebahagiaan hubungan hari ini.",
          "Single: Seseorang yang bisa dipercaya akan mendekat.",
          "Harmoni keluarga tercipta dari rasa saling melindungi."
        ],
        "kesehatan": [
          "Tubuh tangguh, imun kuat.",
          "Cek kesehatan hewan peliharaan juga.",
          "Berjalan kaki rutin.",
          "Kesehatan mental terjaga dengan bersosialisasi.",
          "Perhatikan kesehatan gigi dan tenggorokan.",
          "Makan makanan hangat untuk menjaga kenyamanan perut.",
          "Hobi di rumah membantu melepas penat setelah bekerja."
        ],
        "umum": "Keandalan utama, rating 7/10.",
        "hoki": {"warna": ["Merah", "Hijau"], "angka": [2, 11]},
        "tips": "Percayai teman setia di sekitar."
      }
    },
    {
      "nama": "Babi",
      "elemen": "Air",
      "kategori": {
        "karier": [
          "Kemurahan tarik mitra bisnis.",
          "Proyek besar selesai bahagia.",
          "Nikmati proses kerja.",
          "Kebaikan hati Anda membuat suasana kantor jadi cair.",
          "Ada keberuntungan dalam menyelesaikan masalah sulit dengan tenang.",
          "Networking sambil makan siang membawa peluang bisnis.",
          "Kelancaran kerja berkat sikap Anda yang tidak kaku."
        ],
        "keuangan": [
          "Rezeki melimpah dari generositas.",
          "Pengeluaran untuk orang lain beri berkah.",
          "Investasi sosial untung.",
          "Keberuntungan finansial datang secara alami tanpa dipaksa.",
          "Waktunya menikmati hasil jerih payah dengan bijak.",
          "Ada bantuan finansial dari pihak tak terduga jika butuh.",
          "Kemakmuran meningkat karena sikap Anda yang suka berbagi."
        ],
        "asmara": [
          "Hangat dan penuh kasih sayang.",
          "Pasangan setia abadi.",
          "Single pesta dapat jodoh.",
          "Kebahagiaan sederhana bersama pasangan terasa sangat berarti.",
          "Sikap tulus Anda memenangkan hati banyak orang.",
          "Cinta yang damai tanpa drama adalah berkah hari ini.",
          "Single: Jangan menutup diri dari undangan pertemuan."
        ],
        "kesehatan": [
          "Kesehatan baik, nafsu makan sehat.",
          "Hindari makan berlebih.",
          "Berenang relaksasi ideal.",
          "Pikiran yang positif adalah kunci stamina Anda.",
          "Kesehatan ginjal terjaga dengan air mineral berkualitas.",
          "Nikmati waktu santai untuk memulihkan energi batin.",
          "Istirahat total di malam hari sangat penting."
        ],
        "umum": "Kebahagiaan berbagi, rating 9/10.",
        "hoki": {"warna": ["Hitam", "Biru"], "angka": [3, 12]},
        "tips": "Berbagi kebahagiaan untuk lipat ganda."
      }
    }
  ]
};
