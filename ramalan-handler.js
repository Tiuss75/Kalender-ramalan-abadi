window.addEventListener('updateDetailShio', function(e) {
    const { shio, date } = e.detail;
    const container = document.getElementById('shio-detail-container');
    if (!container || !window.DATA_WUKU) return;

    // Daily Seed: Membuat angka unik berdasarkan tanggal agar ramalan tetap sama seharian
    const seed = date.getFullYear() + (date.getMonth() + 1) + date.getDate();
    
    const shioData = window.DATA_WUKU.shio.find(s => s.nama.toLowerCase() === shio.toLowerCase());
    
    if (shioData) {
        // Ambil satu item secara acak tapi konsisten (berdasarkan seed)
        const pick = (list) => list[seed % list.length];

        container.innerHTML = `
            <div style="font-size:0.85rem; color:#444; line-height:1.4;">
                <p style="margin:5px 0;"><strong>💼 Karier:</strong> ${pick(shioData.kategori.karier)}</p>
                <p style="margin:5px 0;"><strong>💰 Keuangan:</strong> ${pick(shioData.kategori.keuangan)}</p>
                <p style="margin:5px 0;"><strong>❤️ Asmara:</strong> ${pick(shioData.kategori.asmara)}</p>
                <div style="margin-top:8px; font-size:0.75rem; color:#e65100; font-weight:bold;">
                    🎨 Warna Hoki: ${shioData.hoki.warna.join(', ')}
                </div>
            </div>
        `;
    }
});
