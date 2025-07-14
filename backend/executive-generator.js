function generate_executive_sumary() {
  const mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = `
          <h1 id="main-title">EXECUTIVE SUMMARY</h1>
        <div class="exsum-content">
            <div class="exsum-content-box" id="exsum-cme">
                <h1 class="box-title-exsum-content">CME</h1>
                <div class="exsum-content-box-warper" id="exsum-cme-warper">
                    <div class="exsum-content-box-item">
                        <h1 class="box-title-exum">Kondisi Gedung</h1>
                        <div class="table-container-exsum">
                            <table class="table-exsum">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Ruangan</th>
                                        <th>Kondisi</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Aula Utama</td>
                                        <td>Baik</td>
                                        <td>Tidak ada kerusakan</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ruang Multimedia</td>
                                        <td>Perlu Perbaikan</td>
                                        <td>AC rusak</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Kamar Mandi</td>
                                        <td>Rusak</td>
                                        <td>Pipa bocor</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="exsum-content-box-item">
                        <h1 class="box-title-exum">Tata Udara</h1>
                        <div class="table-container-exsum">
                            <table class="table-exsum">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Lokasi</th>
                                        <th>Kondisi</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ruang Server</td>
                                        <td>Baik</td>
                                        <td>Pendingin bekerja optimal</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ruang Rapat Utama</td>
                                        <td>Perlu Perbaikan</td>
                                        <td>Ventilasi kurang lancar</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Kantor Lantai 2</td>
                                        <td>Rusak</td>
                                        <td>AC mati total</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Ruang Produksi</td>
                                        <td>Baik</td>
                                        <td>Sirkulasi udara normal</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Gudang</td>
                                        <td>Perlu Perbaikan</td>
                                        <td>Kelembapan tinggi</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="exsum-content-box-item">
                        <h1 class="box-title-exum">Power-System</h1>
                        <div class="table-container-exsum">
                            <table class="table-exsum">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Komponen</th>
                                        <th>Kondisi</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Panel Utama</td>
                                        <td>Baik</td>
                                        <td>Tegangan stabil, tidak ada kerusakan</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Genset</td>
                                        <td>Perlu Perbaikan</td>
                                        <td>Butuh penggantian oli</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>UPS</td>
                                        <td>Rusak</td>
                                        <td>Baterai soak, tidak dapat backup</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Panel Lantai 2</td>
                                        <td>Baik</td>
                                        <td>Normal</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Stabilizer</td>
                                        <td>Perlu Perbaikan</td>
                                        <td>Indikator voltase tidak berfungsi</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>


                </div>
            </div>

            <div class="exsum-content-box" id="exsum-program-bulanan">
                <h1 class="box-title-exsum-content">PROGRAM BULANAN</h1>
                <div class="exsum-content-box-warper" id="exsum-cme-warper">
                    <div class="exsum-content-box-item">
                        <h1 class="box-title-exum">Report Program Bulanan</h1>
                        <div class="table-container-exsum">
                            <table class="table-exsum">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Bulan</th>
                                        <th>Program</th>
                                        <th>Status</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Januari</td>
                                        <td>Rapat Awal Tahun</td>
                                        <td><span class="status-exsum selesai">Selesai</span></td>
                                        <td>Dihadiri semua divisi</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Februari</td>
                                        <td>Penyusunan Anggaran</td>
                                        <td><span class="status-exsum selesai">Selesai</span></td>
                                        <td>Sudah disahkan manajemen</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Maret</td>
                                        <td>Pelatihan Keamanan Data</td>
                                        <td><span class="status-exsum proses">Dalam Proses</span></td>
                                        <td>Masih berlangsung 2 sesi</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>April</td>
                                        <td>Pembaruan Perangkat IT</td>
                                        <td><span class="status-exsum belum">Belum Dilaksanakan</span></td>
                                        <td>Menunggu pengadaan barang</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mei</td>
                                        <td>Audit Internal</td>
                                        <td><span class="status-exsum proses">Dalam Proses</span></td>
                                        <td>Tim audit sedang bertugas</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Juni</td>
                                        <td>Review Kinerja Semester 1</td>
                                        <td><span class="status-exsum belum">Belum Dilaksanakan</span></td>
                                        <td>Dijadwalkan akhir bulan</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="exsum-content-box-item">
                        <h1 class="box-title-exum">Program Kerja</h1>
                        <div class="table-container-exsum">
                            <table class="table-exsum">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Program</th>
                                        <th>Status</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Pelatihan SDM Internal</td>
                                        <td>Selesai</td>
                                        <td>Telah dilaksanakan bulan Juni</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Peningkatan Infrastruktur IT</td>
                                        <td>Dalam Proses</td>
                                        <td>Pengadaan perangkat sedang berjalan</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Audit Keuangan Tahunan</td>
                                        <td>Belum Dilaksanakan</td>
                                        <td>Dijadwalkan bulan Agustus</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Pembentukan Tim K3</td>
                                        <td>Selesai</td>
                                        <td>Struktur tim telah dibentuk</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Pengembangan Sistem Informasi</td>
                                        <td>Dalam Proses</td>
                                        <td>Fase implementasi modul pengguna</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                    <div class="exsum-content-box-item">
                        <h1 class="box-title-exum">Saran & Usulan</h1>
                        <div class="table-container-exsum">
                            <table class="table-exsum">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tanggal</th>
                                        <th>Pengusul</th>
                                        <th>Judul Usulan</th>
                                        <th>Status</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2025-06-05</td>
                                        <td>Ahmad Yusuf</td>
                                        <td>Penambahan CCTV</td>
                                        <td><span class="status-exsum proses">Diproses</span></td>
                                        <td>Untuk keamanan area parkir</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2025-06-10</td>
                                        <td>Siti Nurhaliza</td>
                                        <td>Peningkatan Sinyal WiFi</td>
                                        <td><span class="status-exsum selesai">Disetujui</span></td>
                                        <td>Sudah dipasang access point tambahan</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2025-06-14</td>
                                        <td>Budi Hartono</td>
                                        <td>Penggantian Kursi Rapat</td>
                                        <td><span class="status-exsum belum">Belum Ditindaklanjuti</span></td>
                                        <td>Kursi lama sudah rusak parah</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>2025-06-21</td>
                                        <td>Lina Marlina</td>
                                        <td>Penambahan Area Hijau</td>
                                        <td><span class="status-exsum proses">Diproses</span></td>
                                        <td>Masuk dalam agenda program CSR</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>


                </div>
            </div>

            <div class="exsum-content-box" id="exsum-load-pln">
                <h1 class="box-title-exsum-content">CHART LOAD PLN</h1>
                <canvas id="bar-chart-exsum-load-pln"></canvas>
            </div>

            <div class="exsum-content-box" id="exsum-penggunaan-bbm">
                <h1 class="box-title-exsum-content">CHART PENGGUNAAN BBM</h1>
                <canvas id="bar-chart-exsum-penggunaan-bbm"></canvas>            
            </div>

            <div class="exsum-content-box" id="exsum-penggunaan-kwh">
                <h1 class="box-title-exsum-content">CHART PENGGUNAAN KWH</h1>
                <canvas id="bar-chart-exsum-penggunaan-kwh"></canvas>
            </div>

            <div class="exsum-content-box" id="exsum-tagihan-pln">
                <h1 class="box-title-exsum-content">CHART TAGIHAN PLN</h1>
                <canvas id="bar-chart-exsum-tagihan-pln"></canvas>
            </div>

            <div class="exsum-content-box" id="exsum-utilisasi-rectifier ">
                <h1 class="box-title-exsum-content">CHART UTILISASI RECTIFIER</h1>
                <canvas id="line-chart-exsum-utilisasi-rectifier"></canvas>
            </div>
        </div>
        `;
}


function push_data_exm_load_pln(){
                    const ctx_chart_exsum_load_pln = document.getElementById('bar-chart-exsum-load-pln').getContext('2d');

                    const data_chart_exsum_load_pln = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                        datasets: [
                            {
                                label: 'Capacity Load (kW)',
                                data: [120, 135, 140, 160, 155, 170, 175, 180, 160, 150, 145, 140],
                                backgroundColor: 'rgba(243, 85, 37, 0.7)', // Accent warna kamu
                                borderRadius: 6,
                            },
                            {
                                label: 'Utility (%)',
                                data: [65, 70, 72, 78, 75, 80, 82, 85, 76, 73, 70, 68],
                                backgroundColor: 'rgba(64, 123, 255, 0.6)',
                                borderRadius: 6,
                            }
                        ]
                    };

                    const options_chart_exsum_load_pln = {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            title: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                },
                                beginAtZero: true
                            },
                            x: {
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            }
                        }
                    };

                    new Chart(ctx_chart_exsum_load_pln, {
                        type: 'bar',
                        data: data_chart_exsum_load_pln,
                        options: options_chart_exsum_load_pln
                    });
                
}

function push_data_exm_utilisasi_rectifier(){
                    const ctx_chart_exsum_utilisasi_rectifier = document
                        .getElementById('line-chart-exsum-utilisasi-rectifier')
                        .getContext('2d');

                    const data_chart_exsum_utilisasi_rectifier = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                        datasets: [
                            {
                                label: 'Recti 1',
                                data: [60, 65, 63, 70, 72, 75, 74, 73, 70, 68, 66, 64],
                                borderColor: '#f35525',
                                backgroundColor: '#f35525',
                                fill: false,
                                tension: 0.3
                            },
                            {
                                label: 'Recti 2',
                                data: [55, 60, 59, 65, 68, 70, 71, 69, 66, 64, 62, 61],
                                borderColor: '#3b82f6',
                                backgroundColor: '#3b82f6',
                                fill: false,
                                tension: 0.3
                            },
                            {
                                label: 'Recti 3',
                                data: [50, 55, 56, 60, 62, 64, 65, 63, 60, 58, 56, 55],
                                borderColor: '#10b981',
                                backgroundColor: '#10b981',
                                fill: false,
                                tension: 0.3
                            },
                            {
                                label: 'Recti 4',
                                data: [45, 50, 52, 58, 60, 62, 63, 61, 58, 56, 54, 52],
                                borderColor: '#eab308',
                                backgroundColor: '#eab308',
                                fill: false,
                                tension: 0.3
                            },
                            {
                                label: 'Recti 5',
                                data: [40, 48, 49, 55, 57, 59, 60, 58, 56, 54, 52, 50],
                                borderColor: '#6366f1',
                                backgroundColor: '#6366f1',
                                fill: false,
                                tension: 0.3
                            }
                        ]
                    };

                    const options_chart_exsum_utilisasi_rectifier = {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    color: 'var(--gray--secondary)'
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Utilisasi (%)',
                                    color: 'var(--gray--secondary)'
                                },
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            x: {
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            }
                        }
                    };

                    new Chart(ctx_chart_exsum_utilisasi_rectifier, {
                        type: 'line',
                        data: data_chart_exsum_utilisasi_rectifier,
                        options: options_chart_exsum_utilisasi_rectifier
                    });
}

function push_data_exm_tagihan_pln(){
                    const ctx_chart_exsum_tagihan_pln = document
                        .getElementById('bar-chart-exsum-tagihan-pln')
                        .getContext('2d');

                    const data_chart_exsum_tagihan_pln = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                        datasets: [
                            {
                                label: 'Tagihan PLN (Rp)',
                                data: [12000000, 11500000, 13000000, 12500000, 14000000, 13800000, 14500000, 15000000, 14200000, 13500000, 12800000, 13100000],
                                backgroundColor: 'rgba(243, 85, 37, 0.7)',
                                borderRadius: 6,
                            }
                        ]
                    };

                    const options_chart_exsum_tagihan_pln = {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                labels: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        let value = context.raw;
                                        return 'Rp ' + value.toLocaleString('id-ID');
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'var(--gray--secondary)',
                                    callback: function (value) {
                                        return 'Rp ' + value.toLocaleString('id-ID');
                                    }
                                }
                            },
                            x: {
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            }
                        }
                    };

                    new Chart(ctx_chart_exsum_tagihan_pln, {
                        type: 'bar',
                        data: data_chart_exsum_tagihan_pln,
                        options: options_chart_exsum_tagihan_pln
                    });
                }

function push_data_exm_penggunan_kwh(){
                    const ctx_chart_exsum_penggunaan_kwh = document
                        .getElementById('bar-chart-exsum-penggunaan-kwh')
                        .getContext('2d');

                    const data_chart_exsum_penggunaan_kwh = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                        datasets: [
                            {
                                label: 'BP (kWh)',
                                data: [1200, 1250, 1300, 1350, 1400, 1450, 1500, 1480, 1420, 1380, 1340, 1300],
                                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                                borderRadius: 5,
                            },
                            {
                                label: 'LBP (kWh)',
                                data: [800, 820, 850, 870, 900, 920, 940, 930, 910, 890, 870, 850],
                                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                                borderRadius: 5,
                            },
                            {
                                label: 'KVAR (kVarh)',
                                data: [400, 420, 430, 440, 460, 470, 480, 475, 460, 450, 440, 430],
                                backgroundColor: 'rgba(255, 206, 86, 0.7)',
                                borderRadius: 5,
                            },
                            {
                                label: 'Total (kWh)',
                                data: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2580, 2480, 2380, 2300, 2200],
                                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                                borderRadius: 5,
                            }
                        ]
                    };

                    const options_chart_exsum_penggunaan_kwh = {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            title: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            x: {
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            }
                        }
                    };

                    new Chart(ctx_chart_exsum_penggunaan_kwh, {
                        type: 'bar',
                        data: data_chart_exsum_penggunaan_kwh,
                        options: options_chart_exsum_penggunaan_kwh
                    });
}

function push_data_exm_penggunaan_bbm(){
                    const ctx_chart_exsum_penggunaan_bbm = document
                        .getElementById('bar-chart-exsum-penggunaan-bbm')
                        .getContext('2d');

                    const data_chart_exsum_penggunaan_bbm = {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                        datasets: [
                            {
                                label: 'Running Time (Jam)',
                                data: [120, 140, 130, 160, 150, 170, 180, 175, 160, 155, 145, 150],
                                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                                borderRadius: 6,
                            },
                            {
                                label: 'Pemakaian Solar (Liter)',
                                data: [300, 320, 310, 350, 340, 360, 380, 370, 360, 345, 330, 340],
                                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                                borderRadius: 6,
                            }
                        ]
                    };

                    const options_chart_exsum_penggunaan_bbm = {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            title: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            },
                            x: {
                                ticks: {
                                    color: 'var(--gray--secondary)'
                                }
                            }
                        }
                    };

                    new Chart(ctx_chart_exsum_penggunaan_bbm, {
                        type: 'bar',
                        data: data_chart_exsum_penggunaan_bbm,
                        options: options_chart_exsum_penggunaan_bbm
                    });
}


function call_push_chart_exm(){
    push_data_exm_load_pln();
    push_data_exm_utilisasi_rectifier();
    push_data_exm_tagihan_pln();
    push_data_exm_penggunan_kwh();
    push_data_exm_penggunaan_bbm();
}