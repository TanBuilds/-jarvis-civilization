
const JARVIS = {
    campaign: {
        chapter: 1,
        chapterName: "The Awakening",
        day: 1,
        location: "Forest",
        time: "Evening"
    },

    save() {
        try {
            localStorage.setItem(
                "jarvis_campaign",
                JSON.stringify(this.campaign)
            );
        } catch (error) {
            console.error("Campaign save failed.");
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const campaignScreen = document.getElementById("campaign-screen");
    const openButton = document.getElementById("open-campaign");
    const continueButton = document.getElementById("continue-campaign");
    const backButton = document.getElementById("back-home");

    const homeSections = [
        document.querySelector(".welcome"),
        document.querySelector(".campaign-panel"),
        document.querySelector(".modules")
    ];

    if (!campaignScreen || !openButton || !continueButton || !backButton) {
        console.error("JARVIS: Required interface elements are missing.");
        return;
    }

    function openCampaign() {
        homeSections.forEach(section => {
            if (section) section.hidden = true;
        });

        campaignScreen.hidden = false;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function returnHome() {
        campaignScreen.hidden = true;

        homeSections.forEach(section => {
            if (section) section.hidden = false;
        });

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    openButton.addEventListener("click", openCampaign);
    continueButton.addEventListener("click", openCampaign);
    backButton.addEventListener("click", returnHome);

    JARVIS.save();
});

