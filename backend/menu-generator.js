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
        <div class="sub-menu-dapot">
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
                        <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
                        <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
            <div class="sub-menu-dapot-list">PAC</div>
        </div>
        <section class="table-wrapper">
            <div class="table-container">
                <table class="futuristic-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Joined</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
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
                        <tr>
                            <td>3</td>
                            <td>Sarah King</td>
                            <td>Design</td>
                            <td>UX Designer</td>
                            <td><span class="status inactive">Inactive</span></td>
                            <td>2020-07-28</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Michael Chen</td>
                            <td>QA</td>
                            <td>Analyst</td>
                            <td><span class="status active">Active</span></td>
                            <td>2023-01-20</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Lisa Wong</td>
                            <td>HR</td>
                            <td>Recruiter</td>
                            <td><span class="status active">Active</span></td>
                            <td>2021-09-15</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Thomas Shelby</td>
                            <td>Security</td>
                            <td>Lead</td>
                            <td><span class="status pending">Pending</span></td>
                            <td>2023-06-10</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Nina Hart</td>
                            <td>Finance</td>
                            <td>Accountant</td>
                            <td><span class="status inactive">Inactive</span></td>
                            <td>2020-03-01</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Daniel Vega</td>
                            <td>Support</td>
                            <td>Agent</td>
                            <td><span class="status active">Active</span></td>
                            <td>2019-12-22</td>
                            <td><button class="action-btn">Details</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </section>
        `;
}


function generate_list_actifity(){

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



