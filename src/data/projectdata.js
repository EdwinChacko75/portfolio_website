import spectroImage from '../assets/main_diagram_md.png';
import flowToLearnImage from '../assets/flow_to_learn.gif';
import reasonixImage from '../assets/reasonix_pipeline.png';

const projectData = [
    {
      id: 1,
        title: "Reasonix",
        description: "Designed a CoT, SFT, and PPO-based RLHF pipeline for improving reasoning in small base LLMs. Full-parameter chain-of-thought fine-tuning lifted LLaMA-3.2-3B GSM8K accuracy from about 17% to 54%, with RLHF experiments exploring reward-model feedback under compute constraints.",
        image: reasonixImage,
        tech: "LLMs, RLHF, PPO, LoRA, Chain-of-Thought",
        github_url: "https://github.com/EdwinChacko75/reasonix",
        live_url: "https://github.com/EdwinChacko75/reasonix/blob/main/assets/reasonix_report.pdf",
        live_label: "Report"
    },
    {
        id: 2,
        title: "Flow To Learn",
        description: "Built flow-matching methods for neural network weight generation through UTMIST, with a focus on few-shot learning, robust initialization, and out-of-distribution adaptation. Implemented LoRA-based weight generation and VAE baselines.",
        image: flowToLearnImage,
        tech: "Flow Matching, PyTorch, LoRA, VAEs, Few-Shot ML",
    },
    {
      id: 3,
      title: "Spectro",
      description: "Co-first-authored and led a multimodal scientific ML system that predicts molecular structures from IR, 13C NMR, and 1H NMR data. Combined a vision encoder, LLM2Vec-style NMR embeddings, and an LSTM molecule decoder, reaching 93% test accuracy.",
      image: spectroImage,
      tech: "PyTorch, TensorFlow, LLM2Vec, LSTM, SELFIES",
      github_url: "https://github.com/ChemAI-Lab/spectro",
      live_url: "https://doi.org/10.26434/chemrxiv-2024-37v2j",
      live_label: "Paper"
    },
  ];
  
export default projectData;
