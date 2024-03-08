function recentShowTab(tabId) {
    var tabContents = document.querySelectorAll('.recent-tabContent');
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
    });

    var selectedTabContent = document.getElementById(tabId + 'recentContent');
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }

    var tabButtons = document.querySelectorAll('.recent-tabButton');
    tabButtons.forEach(function (tabButton) {
        tabButton.classList.remove('active');
    });

    var selectedTabButton = document.querySelector('[onclick="recentShowTab(\'' + tabId + '\')"]');
    if (selectedTabButton) {
        selectedTabButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    recentShowTab('rtab1');
});
