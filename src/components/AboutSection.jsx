import React from 'react';
import {
  SiAmazonaws,
  SiCplusplus,
  SiDatabricks,
  SiDocker,
  SiMicrosoftazure,
  SiNumpy,
  SiNvidia,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from 'react-icons/si';

const coreSkills = [
  { name: 'Python', Icon: SiPython },
  { name: 'PyTorch', Icon: SiPytorch },
  { name: 'TensorFlow', Icon: SiTensorflow },
  { name: 'CUDA', Icon: SiNvidia },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'SQL', Icon: SiPostgresql },
  { name: 'NumPy', Icon: SiNumpy },
  { name: 'Docker', Icon: SiDocker },
  { name: 'AWS', Icon: SiAmazonaws },
  { name: 'Azure', Icon: SiMicrosoftazure },
  { name: 'Databricks', Icon: SiDatabricks },
];

const focusAreas = [
  'LLM reasoning',
  'RLHF',
  'RAG',
  'Scientific ML',
  'Computer vision',
  'Representation learning',
  'Medical document AI',
  'Evaluation',
  'Hydra',
  'PyTorch Lightning',
];

function AboutSection() {
  return (
    <section id="about" className="container mt-5">
      <h3 className="centered-heading scroll-fade">Technical Skills</h3>
      <div className="tech-skills scroll-fade" aria-label="Technical skills">
        {coreSkills.map(({ name, Icon }) => (
          <div className="tech-item" key={name} data-tooltip={name} aria-label={name} title={name}>
            <Icon className="tech-icon" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="focus-area-list scroll-fade">
        {focusAreas.map(area => (
          <span className="focus-area-pill" key={area}>{area}</span>
        ))}
      </div>

      <h3 className="publications-heading scroll-fade">Publications</h3>
      <div className="row mb-4 scroll-fade">
        <div className="col-md-12">
          <div className="publications-list">
            <p>
              <strong>[1] Chacko</strong>, Sondhi, et al. "Spectro: A Multi-modal Approach for Molecule
              Elucidation Using IR and NMR Data." AI4Mat-NeurIPS 2024. December 2024.
              {' '}<a href="https://doi.org/10.26434/chemrxiv-2024-37v2j" target="_blank" rel="noopener noreferrer">DOI</a>
            </p>
            <p>
              <strong>[2]</strong> Sondhi, <strong>Chacko</strong>, et al. "j-IR-vis: Vision model for
              Infrared spectroscopy embeddings." ChemRxiv preprint. December 2025.
              {' '}<a href="https://doi.org/10.26434/chemrxiv-2025-d0j2v" target="_blank" rel="noopener noreferrer">DOI</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
