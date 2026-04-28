export const frontendProjects = [
  { id: 1, name: "Neon Flux UI", description: "Futuristic component library for high-performance web apps.", techStack: ["React", "GSAP", "Tailwind"] },
  { id: 2, name: "Vortex Player", description: "Spatial audio music player with 3D canvas visualizations.", techStack: ["Three.js", "WebAudio", "React"] },
  { id: 3, name: "Lumina Editor", description: "Collaborative real-time code editor with syntax highlighting.", techStack: ["Next.js", "WebSockets", "Monaco"] },
  { id: 4, name: "Prism Dashboard", description: "Real-time crypto market analytics with complex data viz.", techStack: ["D3.js", "Vite", "Tailwind"] },
  { id: 5, name: "Echo Portfolio", description: "Ultra-fast minimalist creative showcase with framer motion.", techStack: ["Astro", "Framer Motion", "Tailwind"] },
  { id: 6, name: "Z-Force Engine", description: "Custom layout engine for non-grid web interfaces.", techStack: ["Vanilla JS", "Canvas", "CSS"] }
];

export const fullstackProjects = [
  { id: 7, name: "Nexus Core", description: "Distributed task management for enterprise-scale teams.", techStack: ["Node.js", "PostgreSQL", "Docker"] },
  { id: 8, name: "Omni Marketplace", description: "Global e-commerce platform with multi-currency support.", techStack: ["Next.js", "Stripe", "Prisma"] },
  { id: 9, name: "Sync Platform", description: "Cloud-based asset management for creative workflows.", techStack: ["Express", "MongoDB", "AWS S3"] },
  { id: 10, name: "Titan API", description: "High-throughput financial gateway microservice.", techStack: ["Go", "Redis", "Kafka"] },
  { id: 11, name: "Flow CMS", description: "Headless CMS with real-time visual editing and GraphQL.", techStack: ["GraphQL", "React", "Node.js"] },
  { id: 12, name: "Aegis Auth", description: "Zero-trust authentication system with MFA support.", techStack: ["Rust", "OAuth2", "Redis"] }
];

export const aiMlProjects = [
  { id: 13, name: "Neural Link", description: "Brain-computer interface signal processing simulator.", techStack: ["PyTorch", "NumPy", "C++"] },
  { id: 14, name: "Sentient Engine", description: "Conversational AI engine for complex user intent mapping.", techStack: ["TensorFlow", "HuggingFace", "Python"] },
  { id: 15, name: "Cognito Predictive", description: "Healthcare analytics system for early symptom detection.", techStack: ["Scikit-learn", "Pandas", "Flask"] },
  { id: 16, name: "Alpha Trader", description: "RL-based trading bot for high-frequency crypto markets.", techStack: ["Python", "Keras", "WebSockets"] },
  { id: 17, name: "Mind Map AI", description: "Automated knowledge graph extraction from raw text.", techStack: ["Neo4j", "BERT", "Python"] },
  { id: 18, name: "Astra Autonomous", description: "Pathfinding system for autonomous laboratory robotics.", techStack: ["Python", "ROS", "OpenCV"] }
];

export const genAiProjects = [
  { id: 19, name: "Dream Weaver", description: "Text-to-art generation using stable diffusion pipelines.", techStack: ["Python", "SDXL", "React"] },
  { id: 20, name: "Script Genie", description: "LLM-powered creative writing assistant for screenplays.", techStack: ["GPT-4", "LangChain", "Node.js"] },
  { id: 21, name: "Vibe Synth", description: "Generating ambient music based on user physiological data.", techStack: ["Magenta", "WebAudio", "Python"] },
  { id: 22, name: "Code Spark", description: "Automated unit test generation for legacy codebases.", techStack: ["Llama-3", "LangChain", "FastAPI"] },
  { id: 23, name: "Asset Gen 3D", description: "Generative textures and materials for game assets.", techStack: ["Unity", "GANs", "Python"] },
  { id: 24, name: "Tale Spin", description: "AI-driven interactive storytelling and world-building.", techStack: ["Claude API", "Python", "FastAPI"] }
];

export const cvProjects = [
  { id: 25, name: "Iris Security", description: "Real-time biometric security and iris recognition.", techStack: ["OpenCV", "Python", "TFLite"] },
  { id: 26, name: "Ghost Track", description: "Motion tracking system for professional athlete training.", techStack: ["MediaPipe", "React", "Python"] },
  { id: 27, name: "Depth Map Pro", description: "3D spatial mapping using standard RGB camera feeds.", techStack: ["Python", "CUDA", "PyTorch"] },
  { id: 28, name: "Sense Lens", description: "Real-time object detection for assistive navigation.", techStack: ["YOLOv8", "Android", "Kotlin"] },
  { id: 29, name: "X-Ray Vision AI", description: "Enhancing medical imaging clarity using deep learning.", techStack: ["PyTorch", "DICOM", "Python"] },
  { id: 30, name: "Aero View", description: "Satellite imagery classification for urban planning.", techStack: ["Python", "GEE", "PyTorch"] }
];

export const allProjects = [
  ...frontendProjects.map(p => ({ ...p, category: "Frontend" })),
  ...fullstackProjects.map(p => ({ ...p, category: "Full Stack" })),
  ...aiMlProjects.map(p => ({ ...p, category: "AI / ML" })),
  ...genAiProjects.map(p => ({ ...p, category: "Gen AI" })),
  ...cvProjects.map(p => ({ ...p, category: "Computer Vision" }))
];
