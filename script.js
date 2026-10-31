
document.addEventListener("DOMContentLoaded", function () {
    const home = [
        document.querySelector(".welcome"),
        document.querySelector(".campaign-panel"),
        document.querySelector(".modules")
    ];

    const campaign = document.getElementById("campaign-screen");
    const campaignCard = document.querySelector('[data-screen="campaign"]');
    const back = document.getElementById("back-home");

    function openCampaign() {
        home.forEach(section => section.hidden = true);
        campaign.hidden = false;
        window.scrollTo(0, 0);
    }

    function goHome() {
        campaign.hidden = true;
        home.forEach(section => section.hidden = false);
        window.scrollTo(0, 0);
    }

    campaignCard.addEventListener("click", openCampaign);
    back.addEventListener("click", goHome);
});

