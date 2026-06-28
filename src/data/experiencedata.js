import macLogo from '../assets/mac_logo.jpg';
import pocketHealthLogo from '../assets/pockethealth_logo.jpg';
import utmistLogo from '../assets/utmist_logo.svg';
import uoftLogo from '../assets/uoft_logo.png';

const experienceData = [
    {
        id: 1,
        date: "May 2025 - Present",
        company: "PocketHealth",
        title: "AI/ML Engineer, PEY",
        description: `Building production AI systems for medical workflows. Developed document-understanding pipelines that combine OCR, LLM extraction, and task-specific models for requisition booking; built RAG systems with over 95% human-evaluated correctness; designed a cross-attention organ classifier with 91% F1 that increased automated processing throughput by 30%; and improved imaging segmentation by pseudo-labeling 30,000+ additional samples, raising Dice score by 10%.`,
        logo: pocketHealthLogo
    },
    {
        id: 2,
        date: "May 2024 - Present",
        company: "McMaster University - ChemAI Lab",
        title: "Machine Learning Researcher",
        description: `Founded and led Spectro, a multimodal scientific ML system for molecular structure elucidation from IR and NMR data. Co-first-authored the NeurIPS 2024 AI4Mat workshop paper, achieved 93% molecule prediction accuracy, contributed to j-IR-vis spectroscopy embeddings, and initiated a new research direction around representation learning for retrosynthesis.`,
        logo: macLogo
    },
    {
        id: 3,
        date: "January 2025 - June 2025",
        company: "UTMIST - Flow To Learn",
        title: "Machine Learning Engineer",
        description: `Developed flow-matching models for neural-network weight generation, exploring robust initialization and few-shot performance under distribution shift. Implemented LoRA-based weight generation and variational-autoencoder baselines for efficient model adaptation.`,
        logo: utmistLogo
    },
    {
        id: 4,
        date: "September 2022 - May 2027",
        company: "University of Toronto",
        title: "BASc. in Engineering Science, Machine Intelligence Option",
        description: `Relevant coursework includes Artificial Intelligence, Machine Learning, Neural Networks and Deep Learning, Natural Language Computing, Computational Linguistics, Image Understanding, Matrix Algebra and Optimization, Decision Support Systems, and Distributed Systems.`,
        logo: uoftLogo
    }
];

export default experienceData;
