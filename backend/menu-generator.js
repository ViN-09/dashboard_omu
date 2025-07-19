function generate_dashboard() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
          <h1 id="main-title">DASHBOARD</h1>
        <div class="content-container fade-in" id="content-container-dashboard">
            <div class="dashboard-content">
                <div class="dashboard-box">
                    <div class="dashboard-box-content">
                        <h2>Activity Daily</h2>
                        <a>5<i class="fa-solid fa-circle-check" id="done"></i></a>
                        <a> | </a>
                        <a>2<i class="fa-solid fa-circle-xmark" id="undone"></i></a>
                    </div>
                </div>
                <div class="dashboard-box">
                    <div class="dashboard-box-content">
                        <h2>Activity Weekly</h2>
                        <a>5<i class="fa-solid fa-circle-check" id="done"></i></a>
                        <a> | </a>
                        <a>2<i class="fa-solid fa-circle-xmark" id="undone"></i></a>
                    </div>
                </div>
                <div class="dashboard-box">
                    <div class="dashboard-box-content">
                        <h2>Activity Monthly</h2>
                        <a>5<i class="fa-solid fa-circle-check" id="done"></i></a>
                        <a> | </a>
                        <a>2<i class="fa-solid fa-circle-xmark" id="undone"></i></a>
                    </div>
                </div>
                <div class="dashboard-box">
                    <div class="dashboard-box-content" id="dashboard-box-content-status">
                        <h2>Status</h2>
                        <a>Issue : No Issue</a>
                        <a>Cuaca : Cerah</a>
                        <a>PAC Failed : 0</a>
                        <a>Rectifier Failed : 0</a>
                        <a>UPS Failed : 0</a>
                    </div>
                </div>
                <div class="dashboard-box" id="dashboard-staf-onsite">
                    <div class="dashboard-box-content">
                        <h2>Staf On Site</h2>
                        <div class="dashboard-staf-onsite-box" id="dashboard-staf-onsite-box-content">
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                            <div class="dashboard-staf-onsite-box-profile">
                                <div class="dashboard-staf-onsite-box-profile-picture">
                                    <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                                </div>
                                <div class="dashboard-staf-onsite-box-profile-desc">
                                    <a>Nama : Vina Testo</a>
                                    <a>Jabatan : ME</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dashboard-box" id="dashboard-vendor-activity">
                    <div class="dashboard-box-content" id="dashboard-box-content-vendor-activity">
                        <h2>Vendor Activity</h2>
                        <div class="table-container-dashboard-vendor-activity">

                        
                        <table class="table-dashboard-vendor-activity">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Vendor</th>
                                    <th>Aktivitas</th>
                                    <th>Tanggal</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>PT Energi Nusantara</td>
                                    <td>Pengecekan Genset</td>
                                    <td>2025-07-14</td>
                                    <td><span class="status-badge-dashboard-vendor-activity success">Selesai</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>CV Mekanika</td>
                                    <td>Perawatan Panel Listrik</td>
                                    <td>2025-07-12</td>
                                    <td><span class="status-badge-dashboard-vendor-activity pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>PT Karya Teknik</td>
                                    <td>Penggantian Lampu Darurat</td>
                                    <td>2025-07-10</td>
                                    <td><span class="status-badge-dashboard-vendor-activity proses">Proses</span></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>PT Energi Nusantara</td>
                                    <td>Pengecekan Genset</td>
                                    <td>2025-07-14</td>
                                    <td><span class="status-badge-dashboard-vendor-activity success">Selesai</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>CV Mekanika</td>
                                    <td>Perawatan Panel Listrik</td>
                                    <td>2025-07-12</td>
                                    <td><span class="status-badge-dashboard-vendor-activity pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>PT Karya Teknik</td>
                                    <td>Penggantian Lampu Darurat</td>
                                    <td>2025-07-10</td>
                                    <td><span class="status-badge-dashboard-vendor-activity proses">Proses</span></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
}

function generate_profile() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
          <h1 id="main-title">PROFILE</h1>
        <div class="content-container fade-in" id="content-container">
            <div class="profile-content">
                <div class="profile-picture">
                    <div class="picture">
                        <img src="img/blank-profile-picture-973460_1280.png" alt="Profile">
                        <a id="edit-profil-picture"><i class="bi bi-pencil-fill"></i></a>
                    </div>
                </div>
                <div class="profile-data">
                    <h1 id="profile-nama">Vinci Bla bla Bla</h1>
                    <h3>ID : </h3>
                    <h2>12345</h2>
                    <h3>Jabatan/Divisi : </h3>
                    <h2>ME</h2>
                    <h3>Tanggal Lahir : </h3>
                    <h2>80 Tahun</h2>
                    <h3>No. Telpon : </h3>
                    <h2>0852</h2>
                    <h3>Email : </h3>
                    <h2>blablabla@gmail.com</h2>
                </div>
            </div>
        </div>
        `;
}

function generate_menuceklist() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
          <h1 id="main-title">LIST CEKLIST</h1>
          <div class="content-container fade-in" id="content-container">
            <div class="ceklist-content">
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Daily</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                  <h3>Disisni Keterangan judul di tuliskan</h3>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                  <h3>Disisni Keterangan judul di tuliskan</h3>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                  <h3>Disisni Keterangan judul di tuliskan</h3>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
              <div class="ceklist-box">
                <div class="ceklist-box-content">
                  <h1>Activity Weekly</h1>
                </div>
              </div>
            </div>
            
          </div>
        `;
}

function generate_dapot() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
          <h1 id="main-title">DATA POTENSI</h1>
        <div class="sub-menu-dapot" id="sub-menu-dapot"></div>
        <section class="table-wrapper">
            <div class="table-container">
                <table class="futuristic-table">
                    <thead>
                        <tr id='table-head'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Joined</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id='table-data'>
                        <tr>
                            <td>1</td>
                            <td>Amanda Grey</td>
                            <td>Marketing</td>
                            <td>Manager</td>
                            <td><span class="status active">Active</span></td>
                            <td>2021-02-14</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>John Doe</td>
                            <td>Development</td>
                            <td>Senior Dev</td>
                            <td><span class="status pending">Pending</span></td>
                            <td>2022-11-03</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        `;


    create_table_head('dp_accescontrol');
    create_table_body('dp_accescontrol');



    generate_dapot_list();
}


function generate_list_actifity() {

    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = `
  <h1 id="main-title">LIST ACTIVITY</h1>
        <div class="actvity-dashboard-list">
            <div class="actvity-box">
                <div class="actvity-box-content">
                    <h2>ME Activity</h2>
                    <ul>Dialy
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                    <ul>Weekly
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                    <ul>Monthly
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div class="actvity-box">
                <div class="actvity-box-content">
                    <h2>HK Activity</h2>
                    <ul>Dialy
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                    <ul>Weekly
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                    <ul>Monthly
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div class="actvity-box">
                <div class="actvity-box-content">
                    <h2>Security Activity</h2>
                    <ul>Dialy
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>

                    </ul>
                    <ul>Weekly
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                    <ul>Monthly
                        <ul>
                            <li>Cek 1 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 2 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 3 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 4 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                            <li>Cek 5 : <i class="fa-solid fa-circle-check" id="done"></i></li>
                            <li>Cek 6 : <i class="fa-solid fa-circle-xmark" id="undone"></i></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
        `
}


function generate_dapot_list() {
    var nama_table_request;
    fetch('backend/api.php?request=dapot_list')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("sub-menu-dapot");
            data.forEach(item => {
                const div = document.createElement("div");
                div.className = "sub-menu-dapot-list";
                div.id = item.TABLE_NAME;
                div.textContent = item.TABLE_NAME.replace("dp_", "").toUpperCase();

                div.addEventListener('click', () => {
                    console.log('ID yang diklik:', div.id);
                    table_name = div.id;
                    document.querySelectorAll('.sub-menu-dapot-list').forEach(el => {
                        el.classList.remove('submenu_selected');
                    });
                    document.getElementById(table_name).classList.add("submenu_selected");
                    create_table_head(table_name);
                    create_table_body(table_name);
                });
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

function create_table_head(table_name) {
    fetch('backend/api.php?request=table_kolom&name=' + table_name)
        .then(res => res.json())
        .then(data => {
            const trHead = document.getElementById('table-head');
            trHead.innerHTML = ''; // Kosongkan dulu isi tr

            data.forEach(col => {

                const th = document.createElement('th');
                if (col.Field != 'id') {
                    // Ganti semua underscore dengan spasi
                    th.textContent = col.Field.replace(/_/g, ' ');
                }
                else {
                    th.textContent = 'No';
                }

                trHead.appendChild(th);

            }
            );
            const th = document.createElement('th');
            th.textContent = 'Action';
            trHead.appendChild(th);
            let formatted = table_name.replace(/^dp_/, '').toUpperCase();
            document.getElementById("main-title").textContent = 'DATA POTENSI ' + formatted;

        })
        .catch(err => console.error(err));
}

function create_table_body(table_name) {
    fetch('backend/api.php?request=table_data&name=' + table_name) // ganti dengan URL API kamu
        .then(res => res.json())
        .then(data => {
            const hasListNe = data.some(obj => 'list_ne' in obj);
            const tbody = document.getElementById('table-data');
            tbody.innerHTML = ''; // Kosongkan tbody

            if (data.length === 0) return;

            data.forEach((row, index) => {
                const tr = document.createElement('tr');

                // Set id dari tr sesuai dengan nilai row.id
                tr.id = row.id;

                // Kolom nomor
                const tdNo = document.createElement('td');
                tdNo.textContent = index + 1;
                tr.appendChild(tdNo);

                // Kolom data kecuali id
                Object.entries(row).forEach(([key, value]) => {
                    if (key != 'id' && key != 'list_ne') {
                        const td = document.createElement('td');
                        td.textContent = `${value}`;
                        tr.appendChild(td);
                    }

                    if (key == 'list_ne') {
                        const td = document.createElement('td');
                        //kode ini lik di baris manapun keluar td.innerHTML = `<i class="fa-solid fa-eye" id="${row.id}"></i>`;
                        td.innerHTML = `<i class="fa-solid fa-eye" id="icon-${row.id}"></i>`;
                        tr.appendChild(td);
                    }

                });
                const td = document.createElement('td');
                td.innerHTML = `<i class="fas fa-edit" id="edit-${row.id}"></i> | <i class="fa-solid fa-trash" id="delete-${row.id}"></i>`;
                tr.appendChild(td);

                tbody.appendChild(tr);
                const icon = document.getElementById(`icon-${row.id}`);
                if (hasListNe) {
                    console.log('Ada key list_ne di setidaknya satu objek.');
                    icon.addEventListener('click', () => {
                        console.log('ID icon yang diklik:', icon.id);
                        id_ne_to_show = icon.id;
                        const cleanId = id_ne_to_show.replace('icon-', '');
                        generate_list_ne_dapot(cleanId, table_name);
                    });
                }


                document.getElementById(`edit-${row.id}`).addEventListener('click', () => {
                    console.log('Edit ID:', row.id);
                });

                document.getElementById(`delete-${row.id}`).addEventListener('click', () => {
                    console.log('Delete ID:', row.id);
                });
            });
        })
        .catch(err => console.error('Gagal mengambil data:', err));


}

function generate_list_ne_dapot(id, table_name) {
    fetch('backend/api.php?request=data_from_id&name=' + table_name + '&id=' + id) // ganti dengan URL API kamu
        .then(res => res.json())
        .then(data => {
            // data adalah objek langsung
            const value = data.list_ne;
            const title = data.ne_id;
            console.log(value);
            document.getElementById('popup_content').innerHTML = '';
            document.getElementById('popup_content').innerHTML += '<h1>UPS ' + title + '</h1>';

            // Misal tampilkan di popup_content
            document.getElementById('popup_content').innerHTML += '<p>' + value + '</p>';
        })
        .catch(err => console.error(err));
    document.getElementById('display_popup').classList.remove('hidden');
}



