
const JARVIS = {
    campaign: {
        chapter: 1,
        chapterName: "The Awakening",
        day: 1,
        location: "Forest",
        time: "Evening"
    },

    save() {
        localStorage.setItem(
            "jarvis_campaign",
            JSON.stringify(this.campaign)
        );
    }
};

const campaignScreen = document.getElementById("campaign-screen");
const dashboardSections = [
    document.querySelector(".welcome"),
    document.querySelector(".campaign-panel"),
    document.querySelector(".modules")
];

function openCampaign() {
    dashboardSections.forEach(section => {
        section.hidden = true;
    });

    campaignScreen.hidden = false;
}

function goHome() {
    campaignScreen.hidden = true;

    dashboardSections.forEach(section => {
        section.hidden = false;
    });
}

document.getElementById("open-campaign")
    .addEventListener("click", openCampaign);

document.getElementById("continue-campaign")
    .addEventListener("click", openCampaign);

document.getElementById("back-home")
    .addEventListener("click", goHome);

JARVIS.save();
