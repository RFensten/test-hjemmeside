export interface Project {
    title: string;
    shortDescription: string;
    year: string;
    tags: string[];
    link?: string;
    highlight: boolean;
}

export const projects: Project[] = [
    {
        title: "AI Automatiserings-workflow",
        shortDescription: "Et komplet n8n workflow der automatiserer kundesupport baseret på indgående emails og AI-analyse.",
        year: "2025",
        tags: ["Automatisering", "n8n", "AI", "Python"],
        link: "#",
        highlight: true,
    },
    {
        title: "E-commerce Dashboard",
        shortDescription: "Dashboard til visualisering af salgsdata bygget med React og Tremor for en lokal webshop.",
        year: "2024",
        tags: ["Web", "React", "Analyse", "Frontend"],
        link: "#",
        highlight: true,
    },
    {
        title: "Make.com Integrationer",
        shortDescription: "Forbindelse af CRM (HubSpot) med Slack notifikationer for salgsteamet.",
        year: "2024",
        tags: ["Automatisering", "Make.com", "Integration"],
        link: "",
        highlight: false,
    },
    {
        title: "Personlig Økonomi Tracker",
        shortDescription: "Python script der analyserer CSV eksport fra netbank og kategoriserer udgifter automatisk.",
        year: "2023",
        tags: ["Python", "Analyse", "Data"],
        link: "#",
        highlight: false,
    },
    {
        title: "Digital Transformations-rapport",
        shortDescription: "Akademisk rapport om implementering af nye digitale værktøjer i SMV'er.",
        year: "2023",
        tags: ["Analyse", "Strategi"],
        link: "",
        highlight: false,
    },
    {
        title: "Portfolio v1",
        shortDescription: "Min første portfolio side bygget i ren HTML/CSS.",
        year: "2022",
        tags: ["Web", "HTML/CSS"],
        link: "#",
        highlight: false,
    },
    {
        title: "Kæmpe agf fan",
        shortDescription: "I 2026 vinder agf Superligaen.",
        year: "2026",
        tags: ["Fodbold", "AGF", "Superligaen"],
        link: "#",
        highlight: false,
    },
];
