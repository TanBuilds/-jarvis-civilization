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

button {
    background: #092536;
    border: 1px solid #00d9ff;
    color: #00d9ff;
    padding: 11px 15px;
    border-radius: 6px;
    margin-top: 18px;
    font-size: 11px;
    letter-spacing: 1px;
    cursor: pointer;
}

button:hover {
    background: #123c50;
}

.campaign-screen {
    margin-top: 35px;
    padding: 24px;
    background: #101b29;
    border: 1px solid #1c3549;
    border-radius: 10px;
}

.campaign-screen h2 {
    color: #00d9ff;
    margin: 15px 0;
}

.campaign-details {
    line-height: 2.2;
    color: #b7cbd8;
}

.campaign-screen[hidden] {
    display: none;
}
