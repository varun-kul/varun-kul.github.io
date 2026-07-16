/* ==========================================
   EASY UPDATE SECTION
   Edit the values below to update your portfolio
   ========================================== */

const portfolioData = {
    // Typing effect text in the Hero section
    roles: ["Data Science Models", "AI Agents", "RAG Systems", "Computer Vision Pipelines"],

    // Experience Section
    experience: [
       {
            role: "Research Associate",
            company: "SEAR Lab University of Texas at Arlington | Arlington, TX",
            date: "Jan 2025 - Present",
            desc: [
                "Co-building a UAV inspection platform with a UTA professor, combining flight controller hardware, autonomous waypoint navigation, and real-time defect detection.",
                "Diagnosed accelerometer/gyroscope calibration drift as the true root cause of drone instability that the team had initially attributed to weight distribution — restored stable flight through signal-level correction rather than mechanical rebalancing.",
            ]
        },
        {
            role: "AI and Data Intern",
            company: "Skillreal USA | Livonia, MI",
            date: "Jun 2025 - Nov 2025",
            desc: [
                "Engineered an interactive inspection dashboard using Python & Plotly, improving efficiency by 30%.",
                "Developed a CAD-to-image generation pipeline using Stable Diffusion, reducing rendering time by 40%.",
                "Delivered two AI-driven tools enhancing product quality and reducing development cycles by 20%."
            ]
        },
        {
            role: "Data Science Intern",
            company: "Altizon Solutions | Pune, MH",
            date: "Jun 2024 - Jul 2024",
            desc: [
                "Enhanced internal chatbot using LangChain and RAG, boosting response accuracy by 40%.",
                "Streamlined data processing workflows, reducing execution time by 30%.",
                "Implemented advanced analytics improving decision-making efficiency by 15%."
            ]
        },
        {
            role: "DSP Project Intern",
            company: "IIT Bombay | Remote",
            date: "Aug 2022 - Jan 2023",
            desc: [
                "Developed algorithms for sEMG signal detection, improving gesture recognition accuracy.",
                "Designed real-time sEMG acquisition system using Arduino and MATLAB."
            ]
        }
    ],

    // Projects Section
    projects: [
        {
            title: "Intelligent Inspection Drone",
            description: "Developed an autonomous waypoint-flight UAV system with real-time crack detection ($mAP_{50} = 0.723$ on a custom dataset), featuring a custom UE4 simulation environment, automated image logging, and interactive Folium inspection reports.",
            tech: ["Python", "AirSim", "Yolo", "UE Engine"],
            link: "https://github.com/varun-kul/drone-inspection" // Add your GitHub link here
        },
        {
            title: "SWaT LSTM Autoencoder",
            description: "Engineered and deployed an LSTM autoencoder API (FastAPI, Docker, Render) for False Data Injection attack detection on the SWaT dataset, achieving an F1-score of 0.9928 and a 1.0 Recall rate.",
            tech: ["Python", "PyTorch", "FastAPI", "Docker"],
            link: "https://github.com/varun-kul/swat-fdi-detection" // Add your GitHub link here
        },
        {
            title: "VoiceGuard - AI Deepfake Detection",
            description: "AI-powered voice spoofing detection system using MFCC features and Wav2vec-CNN model. Achieved 95% accuracy in identifying synthesized audio with <150ms inference time.",
            tech: ["Python", "PyTorch", "ONNX", "Audio Processing"],
            link: "https://huggingface.co/spaces/varunkul/Voice-guard" // Add your GitHub link here
        },
        {
            title: "SOC Log Analyzer",
            description: "Built and deployed a full-stack security log analysis tool (Railway/Vercel) featuring a RAG pipeline with the Anthropic API for natural-language log querying as a technical assessment.",
            tech: ["Python", "TypeScirpt", "FastAPI", "PostgreSQL"],
            link: "https://github.com/varun-kul/SOC-Log-Analyzer" // Add your GitHub link here
        },
        {
            title: "Real-Time ANPR System",
            description: "Automatic Number Plate Recognition system using YOLO and Tesseract OCR. Achieved >95% accuracy across diverse lighting conditions.",
            tech: ["YOLO", "OpenCV", "OCR", "Computer Vision"],
            link: "https://github.com/varun-kul/automatic-license-plate-detector"
        },
        {
            title: "Dynamic Multi-Echelon Inventory & Pricing Engine",
            description: "Engineered a 6-phase demand forecasting and multi-echelon inventory optimization pipeline for 198 SKUs (M5 dataset) using ARIMA, Croston, Prophet, and LSTM models with Clark-Scarf Monte Carlo simulations, deployed via Streamlit.",
            tech: ["Python", "ARIMA", "LSTM", "Prophet"],
            link: "https://github.com/varun-kul/Dynamic-Multi-Echelon-Inventory-Pricing-Engine" // Add your GitHub link here
        },
        {
            title: "Intelligent Scheduling System",
            description: "Publication (IEEE, Jan 2025): Development and impact of an intelligent scheduling system for educational institutions.",
            tech: ["Optimization", "Algorithms", "Research"],
            link: "https://github.com/varun-kul/IntelligentSchedulingSystem"
        },
        {
            title: "Inspection Dashboard (Internship Project)",
            description: "Interactive dashboard for JSON-based data visualization for Skillreal USA, improving inspection workflows.",
            tech: ["Plotly", "Jupyter", "Data Viz"],
            link: "#"
        }
    ],

    // Skills Section
    skills: {
        "Languages": ["Python", "C++", "MATLAB", "SQL"]
        "ML/DL": ["PyTorch", "TensorFlow", "YOLO", "LSTM/Autoencoders", "Wav2Vec2", "ONNX", "Scikit-learn"]
        "Computer Vision & Robotics": ["AirSim", "Unreal Engine", "ROS concepts", "flight controller/ESC integration", "SLAM-adjacent autonomy", "EasyOCR", "SORT tracking"]
        "Time Series & Forecasting": ["ARIMA", "Prophet", "Croston", "Clark-Scarf optimization", "Monte Carlo simulation"]
        "LLM/GenAI": ["LangChain", "RAG pipelines", "Anthropic/OpenAI APIs", "Stable Diffusion"]
        "Infrastructure & Deployment": ["FastAPI", "Docker", "Render", "Railway", "Vercel", "Streamlit", "React/TypeScript", "PostgreSQL"]
        "Data Tools": ["PostgreSQL", "MySQL", "Power BI", "Tableau", "Git", "Jupyter"],
        "Specialized": ["GIS Analysis", "DSP", "Audio Processing", "sEMG Signal Processing"]
        "Hardware": ["FPV drone build & tuning", "flight controller/ESC selection and replacement"]
    }
};

/* ==========================================
   RENDER LOGIC (DO NOT EDIT BELOW THIS)
   ========================================== */

// Typing Effect
const typingText = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = portfolioData.roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex--);
    } else {
        typingText.textContent = currentRole.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % portfolioData.roles.length;
    }

    setTimeout(typeEffect, speed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Render Experience
const expContainer = document.getElementById("experience-container");
portfolioData.experience.forEach(job => {
    const liItems = job.desc.map(d => `<li>${d}</li>`).join('');
    const html = `
        <div class="timeline-item">
            <h3 class="role">${job.role}</h3>
            <span class="company">${job.company}</span>
            <span class="date">${job.date}</span>
            <ul>${liItems}</ul>
        </div>
    `;
    expContainer.innerHTML += html;
});

// Render Projects
const projContainer = document.getElementById("projects-container");
portfolioData.projects.forEach(proj => {
    const techStack = proj.tech.map(t => `<span>${t}</span>`).join('');
    const html = `
        <div class="project-card">
            <div class="project-header">
                <i class="far fa-folder folder-icon"></i>
                <div class="project-links">
                    <a href="${proj.link}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="tech-stack">${techStack}</div>
        </div>
    `;
    projContainer.innerHTML += html;
});

// Render Skills
const skillContainer = document.getElementById("skills-container");
for (const [category, skills] of Object.entries(portfolioData.skills)) {
    const skillTags = skills.map(s => `<span class="skill-tag">${s}</span>`).join('');
    const html = `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-tags">${skillTags}</div>
        </div>
    `;
    skillContainer.innerHTML += html;
}
