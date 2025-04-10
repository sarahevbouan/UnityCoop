let sidebarGenerator = () => {
 const sidebarContainer = document.querySelector(".left-sidebar");
 sidebarContainer.innerHTML = `
        <div class="brand">
          <h4 class="brand-name">Unity<span>Coop</span></h4>
          <img src="images/logo.svg" alt="" class="brand-logo" />
        </div>
        <div class="condensed-nav-group">
          <div class="mobile-nav">
            <a href="#search-bar">
                <img src="images/search_icon.svg" class="search-icon" />
            </a>
            <a href="notification.html">
              <img src="images/notifications.svg" class="notification-icon" />
            </a>
          </div>
          <img src="images/menu_icon.svg" alt="" class="menu-hamburger" id="menu-hamburger" />
        </div>
        <!-- Left sidebar navigation -->
        <nav class="sidebar-nav">
          <span class="close-menu-btn">X</span>
          <ul>
            <li class="navlink-group" id="overview">
              <a href="index.html">
                <img src="images/overview_icon.svg" alt="" />Overview</a
              >
            </li>
            <li class="navlink-group" id="pending-requests">
              <a href="pending-request.html">
                <img src="images/pend_req_icon.svg" alt="" />Pending Requests</a
              >
            </li>
            <li class="navlink-group" id="loans">
              <a href="loans.html">
                <img src="images/loan_icon.svg" alt="" />Loans</a
              >
            </li>
            <li class="navlink-group" id="transactions">
              <a href="transactions.html">
                <img src="images/transaction_icon.svg" alt="" />Transactions</a
              >
            </li>
            <li class="navlink-group" id="users">
              <a href="users.html">
                <img src="images/user_icon.svg" alt="" />Users</a
              >
            </li>
            <li class="navlink-group" id="settings">
              <a href="settings.html">
                <img src="images/settings_icon.svg" alt="" />Settings</a
              >
            </li>
          </ul>
        </nav>`;
};