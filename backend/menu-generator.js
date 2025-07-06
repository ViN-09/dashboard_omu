function generate_dashboard(){
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = `
          <h1 id="main-title">DASHBOARD</h1>
          <div class="content-container fade-in" id="content-container">
            <div class="dashboard-content">
              <div class="dashboard-box">
                <div class="dashboard-box-content">
                  <h2>Activity Daily</h2>
                </div>
              </div>
              <div class="dashboard-box">
                <div class="dashboard-box-content">
                  <h2>Activity Weekly</h2>
                </div>
              </div>
              <div class="dashboard-box">
                <div class="dashboard-box-content">
                  <h2>Activity Monthly</h2>
                </div>
              </div>
              <div class="dashboard-box">
                <div class="dashboard-box-content">
                  <h2>Status</h2>
                </div>
              </div>
              <div class="dashboard-box" id="dashboard-staf-onsite">
                <div class="dashboard-box-content">
                  <h2>Staf On Site</h2>
                </div>
              </div>
              <div class="dashboard-box" id="dashboard-vendor-activity">
                <div class="dashboard-box-content">
                  <h2>Vendor Activity</h2>
                </div>
              </div>
            </div>
          </div>
        `;
}

function generate_profile(){
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