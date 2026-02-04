function hitungJodoh() {
    const tglP = document.getElementById('tglPria').value;
    const tglW = document.getElementById('tglWanita').value;
    const output = document.getElementById('hasilJodoh');

    if (!tglP || !tglW) return alert("Harap masukkan kedua tanggal lahir!");

    const d1 = new Date(tglP);
    const d2 = new Date(tglW);

    // Ambil neptu (menggunakan konstanta dari main.js)
    const n1 = NEPTU_HARI[HARI[d1.getDay()]] + NEPTU_PASARAN[getPasaran(d1)];
    const n2 = NEPTU_HARI[HARI[d2.getDay()]] + NEPTU_PASARAN[getPasaran(d2)];
    const total = n1 + n2;

    // Logika pembagian 8 sesuai permintaan Anda
    const kategori = [
        { n: "PEGAT", idx: [1, 9, 10, 18, 19, 27, 28, 36], desc: "Berisiko sering berselisih dalam rumah tangga." },
        { n: "RATU", idx: [2, 11, 20, 29], desc: "Sudah takdirnya, dihormati lingkungan sekitar." },
        { n: "JODOH", idx: [3, 12, 21, 30, 39], desc: "Saling menerima kelebihan dan kekurangan." },
        { n: "TOPO", idx: [4, 13, 22, 31], desc: "Susah di awal, namun bahagia di masa tua." },
        { n: "TINARI", idx: [5, 14, 23, 32], desc: "Mudah dalam mencari rejeki dan bahagia." },
        { n: "PADU", idx: [6, 15, 24, 33], desc: "Sering bertengkar sepele tapi tidak cerai." },
        { n: "SUJANA", idx: [7, 16, 25, 34], desc: "Hati-hati dengan tantangan perselingkuhan." },
        { n: "PESTHI", idx: [8, 17, 26, 35], desc: "Rukun, tentram, dan damai sampai tua." }
    ];

    const hasil = kategori.find(k => k.idx.includes(total)) || { n: "Lainnya", desc: "Konsultasikan lebih lanjut." };

    output.innerHTML = `
        <div style="background:#fff5f5; border:2px solid #D30000; padding:15px; border-radius:12px; margin-bottom:15px;">
            <h3 style="margin:0 0 10px 0; color:#D30000;">💞 Hasil Jodoh: ${hasil.n}</h3>
            <p style="margin:0; font-size:0.9rem;">Total Neptu: ${n1} + ${n2} = <b>${total}</b></p>
            <p style="margin:10px 0 0 0; font-size:0.85rem; font-style:italic;">"${hasil.desc}"</p>
        </div>
    `;
    
    // Pastikan area detail muncul
    document.getElementById('detail').style.display = 'block';
}
