
        // Data Models based on CV
        const projects = [
            {
                id: 1,
                title: "Agentic AI Customer Onboarding",
                category: "AI/ML",
                description: "Built an AI-powered multi-agent customer onboarding system using IBM watsonx Orchestrate. Designed 4 specialized agents orchestrating automated workflows to streamline onboarding operations.",
                tech: ["IBM watsonx", "Python", "Langchain", "Llama LLMs", "RAG"],
                features: ["Reduced onboarding time by 95% (7 days to 20 mins)", "Achieved 112% completion boost", "Reduced costs by 90% per user", "Real-time Q&A from knowledge base using RAG"]
            },
            {
                id: 2,
                title: "Multi-Agent Ticket Resolution",
                category: "AI/ML",
                description: "Developed an intelligent ticket resolution system using a multi-agent architecture (Triage, Routing, Resolution agents) utilizing Groq AI's API for rapid inference.",
                tech: ["Groq AI", "Python", "SQLite", "Agent Orchestration"],
                url: "https://huggingface.co/spaces/anees1725/IT-Resolve-AI",
                features: ["End-to-end customer support automation", "Automated ticket categorization", "Intelligent response generation", "Integrated SQLite knowledge base"]
            },
            {
                id: 3,
                title: "Full-Stack Web Applications",
                category: "Web Dev",
                description: "Developed multiple scalable and responsive full-stack web applications implementing modern web architecture and seamless RESTful APIs.",
                tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
                features: ["Responsive frontend components", "Robust RESTful backend APIs", "Optimized MongoDB schema design", "Secure data management"]
            },
            {
                id: 4,
                title: "Rentify – Car Rental Marketplace",
                category: "Web Dev",
                description: "Built a modern car rental marketplace that connects customers with vehicle vendors. Rentify includes role-based dashboards for customers, vendors, and administrators, allowing users to browse vehicles, submit booking requests, manage listings, and track rental workflows.",
                tech: ["TypeScript", "React", "Supabase", "PostgreSQL", "Tailwind CSS"],
                url: "https://rentify-mirpur.vercel.app/",
                features: [
                    "Role-based authentication for customers, vendors, and admins",
                    "Vehicle listing and availability management",
                    "Customer booking request workflow",
                    "Vendor dashboard for managing vehicles and bookings",
                    "Admin dashboard for vendor verification and platform management",
                    "Supabase Row Level Security for protected data access"
                ]
            }
        ];

        const skills = [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "AI / LLMs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" } // Placeholder for Jupyter/AI tools
        ];

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            renderSkills();
            renderProjects('all');
            setupTypewriter();
            setupIntersectionObserver();
            setupForm();
        });

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Render Skills
        function renderSkills() {
            const container = document.getElementById('skills-grid');
            container.innerHTML = skills.map(skill => `
                <div class="card-gradient p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 group cursor-default">
                    <img src="${skill.icon}" alt="${skill.name}" class="w-12 h-12 ${skill.invert ? 'dark:invert' : ''} group-hover:scale-110 transition-transform">
                    <span class="font-medium text-slate-300 group-hover:text-white">${skill.name}</span>
                </div>
            `).join('');
        }

        // Render Projects
        function renderProjects(filter) {
            const container = document.getElementById('projects-grid');
            const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
            
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.innerHTML = filtered.map(project => `
                    <div class="group relative rounded-xl overflow-hidden border border-slate-800 bg-dark-900 shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col">
                        <div class="mb-4">
                            <span class="text-xs font-bold px-3 py-1 rounded-full text-brand-400 border border-brand-500/30 bg-brand-500/10">
                                ${project.category}
                            </span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">${project.title}</h3>
                        <p class="text-slate-400 text-sm mb-6 flex-grow">${project.description}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.tech.map(t => `<span class="text-xs text-slate-500 bg-dark-950 px-2 py-1 rounded border border-slate-800">${t}</span>`).join('')}
                        </div>

                        <div class="flex gap-2">
                            <button onclick="openModal(${project.id})" class="flex-1 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-brand-500 hover:bg-brand-500/10 transition-all text-sm font-bold flex items-center justify-center gap-2 group-btn">
                                View Details
                                <span class="material-symbols-outlined text-sm group-btn-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title}" class="px-3 py-2 rounded-lg border border-brand-500/40 text-brand-400 hover:text-white hover:bg-brand-500 transition-all flex items-center justify-center"><span class="material-symbols-outlined text-sm">open_in_new</span></a>` : ''}
                        </div>
                    </div>
                `).join('');
                
                container.style.opacity = '1';
                container.style.transition = 'opacity 0.3s ease-in-out';
            }, 200);
        }

        // Filter Logic
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-brand-600', 'text-white');
                    b.classList.add('text-slate-400');
                });
                e.target.classList.remove('text-slate-400');
                e.target.classList.add('bg-brand-600', 'text-white');
                
                renderProjects(e.target.dataset.filter);
            });
        });

        // Modal Logic
        const modal = document.getElementById('project-modal');
        const modalPanel = document.getElementById('modal-panel');
        const modalBackdrop = document.getElementById('modal-backdrop');

        function openModal(projectId) {
            const project = projects.find(p => p.id === projectId);
            if (!project) return;

            document.getElementById('modal-category').innerText = project.category;
            document.getElementById('modal-title').innerText = project.title;
            document.getElementById('modal-desc').innerText = project.description;

            const modalLink = document.getElementById('modal-link');
            modalLink.classList.toggle('hidden', !project.url);
            if (project.url) modalLink.href = project.url;
            
            document.getElementById('modal-tech').innerHTML = project.tech.map(t => 
                `<span class="text-xs font-mono text-brand-300 bg-brand-900/50 px-3 py-1 rounded-full border border-brand-500/20">${t}</span>`
            ).join('');

            document.getElementById('modal-features').innerHTML = project.features.map(f => 
                `<li>${f}</li>`
            ).join('');

            modal.classList.remove('hidden');
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalPanel.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalPanel.classList.add('opacity-0', 'translate-y-4', 'scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === document.querySelector('.flex.items-center')) {
                closeModal();
            }
        });

        // Typing Effect
        function setupTypewriter() {
            const words = ["Web Applications", "Multi-Agent Systems", "MERN Stack", "Generative AI"];
            let i = 0;

            function type() {
                const el = document.getElementById('typing-text');
                el.classList.remove('animate-pulse');
                
                let word = words[i];
                let charIndex = 0;
                el.innerText = '';
                
                const typeChar = setInterval(() => {
                    el.innerText = word.substring(0, charIndex + 1);
                    charIndex++;
                    if (charIndex === word.length) {
                        clearInterval(typeChar);
                        setTimeout(erase, 2000);
                    }
                }, 100);
            }

            function erase() {
                const el = document.getElementById('typing-text');
                let word = el.innerText;
                let charIndex = word.length;
                
                const eraseChar = setInterval(() => {
                    el.innerText = word.substring(0, charIndex - 1);
                    charIndex--;
                    if (charIndex === 0) {
                        clearInterval(eraseChar);
                        i = (i + 1) % words.length;
                        type();
                    }
                }, 50);
            }

            type();
        }

        // Scroll Reveal
        function setupIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('section > div').forEach(section => {
                section.style.opacity = '0';
                observer.observe(section);
            });
        }

        // Form Handling
        // Form Handling
        function setupForm() {
            document.getElementById('contact-form').addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = document.querySelector('button[type="submit"]');
                const btnText = document.getElementById('btn-text');
                const btnIcon = document.getElementById('btn-icon');
                
                const originalText = btnText.innerText;
                btnText.innerText = "Sending...";
                btn.disabled = true;
                btn.classList.add('opacity-75', 'cursor-not-allowed');

                // Gather form data using the IDs we added in Step 1
                const name = document.getElementById('user-name').value;
                const email = document.getElementById('user-email').value;
                const message = document.getElementById('user-message').value;

                try {
                    // Send to your email via FormSubmit API
                    const response = await fetch("https://formsubmit.co/ajax/anees.ashraf.1725@gmail.com", {
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: name,
                            email: email,
                            message: message,
                            _subject: "New Message from Portfolio!"
                        })
                    });

                    if (response.ok) {
                        btnText.innerText = "Message Sent!";
                        btnIcon.innerText = "check_circle";
                        btn.classList.remove('bg-brand-600');
                        btn.classList.add('bg-blue-600');
                        
                        document.getElementById('contact-form').reset();
                        showToast('success', 'Thank you! I will review your message and reply soon.');
                    } else {
                        throw new Error('Failed to send');
                    }
                } catch (error) {
                    btnText.innerText = "Error!";
                    btnIcon.innerText = "error";
                    showToast('error', 'Something went wrong. Please email me directly.');
                }

                // Reset button state after delay
                setTimeout(() => {
                    btnText.innerText = originalText;
                    btnIcon.innerText = "send";
                    btn.classList.add('bg-brand-600');
                    btn.classList.remove('bg-blue-600');
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                }, 3000);
            });
        }

        // Toast Messages
        function showToast(type, message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            let bgClass = 'bg-dark-900';
            let icon = 'info';
            let colorClass = 'text-brand-400';
            
            if (type === 'success') { bgClass = 'bg-green-900/90'; icon = 'check_circle'; colorClass = 'text-green-200'; }
            if (type === 'error') { bgClass = 'bg-red-900/90'; icon = 'error'; colorClass = 'text-red-200'; }

            toast.className = `${bgClass} backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-xl flex items-center gap-3 transform transition-all duration-300 translate-x-full pointer-events-auto min-w-[300px]`;
            toast.innerHTML = `
                <span class="material-symbols-outlined ${colorClass}">${icon}</span>
                <p class="text-white text-sm font-medium">${message}</p>
            `;

            container.appendChild(toast);

            requestAnimationFrame(() => {
                toast.classList.remove('translate-x-full');
            });

            setTimeout(() => {
                toast.classList.add('translate-x-full', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }
