function showTab(tabId) {
    var tabContents = document.querySelectorAll('.tabContent');
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
    });

    var selectedTabContent = document.getElementById(tabId + 'Content');
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }

    var tabButtons = document.querySelectorAll('.tabButton');
    tabButtons.forEach(function (tabButton) {
        tabButton.classList.remove('active');
    });

    var selectedTabButton = document.querySelector('[onclick="showTab(\'' + tabId + '\')"]');
    if (selectedTabButton) {
        selectedTabButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showTab('tab1');
});
