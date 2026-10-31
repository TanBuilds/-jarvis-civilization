// JARVIS Civilization Campaign System

const JARVIS = {
    name: "JARVIS",
    version: "1.0",

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
        console.log("Campaign saved.");
    },

    load() {
        const saved = localStorage.getItem("jarvis_campaign");

        if (saved) {
            this.campaign = JSON.parse(saved);
        }
    }
};

JARVIS.load();

console.log("JARVIS system initialized.");
