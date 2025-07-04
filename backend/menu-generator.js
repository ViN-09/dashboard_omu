function generate_dashboard(){
    console.log ('panggil')
        const mainContainer = document.getElementById('main-container');
//   if (!mainContainer) {
//     console.error('main-container not found!');
//     return;
//   }
//   else{
//     console.log('terpanggil');
//   }
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