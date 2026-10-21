// Navbar scroll blur effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('glass-dark', 'shadow-xl', 'border-b', 'border-slate-800/80');
            } else {
                navbar.classList.remove('glass-dark', 'shadow-xl', 'border-b', 'border-slate-800/80');
            }
        });

        // Mobile menu toggle logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Interactive Project Demo Modal logic
        const demoModal = document.getElementById('demo-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        function openDemo(type) {
            demoModal.classList.remove('hidden');
            
            if (type === 'weather') {
                modalTitle.textContent = "Weather App Demo";
                modalBody.innerHTML = `
                    <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
                        <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                            <span>Johannesburg, SA</span>
                            <span class="text-emerald-400">● Live API Simulation</span>
                        </div>
                        <div class="text-5xl font-extrabold text-white py-2">24°C</div>
                        <p class="text-brand-300 font-medium">Partly Cloudy • Humidity 45%</p>
                        <div class="grid grid-cols-3 gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                            <div>Wind: 12 km/h</div>
                            <div>UV Index: 5</div>
                            <div>Pressure: 1014 hPa</div>
                        </div>
                    </div>
                `;
            } else if (type === 'dictionary') {
                modalTitle.textContent = "Dictionary App Demo";
                modalBody.innerHTML = `
                    <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        <div class="flex items-center justify-between">
                            <h4 class="text-2xl font-bold text-white">Developer</h4>
                            <span class="text-xs font-mono text-brand-400">/dɪˈvɛl.ə.pər/</span>
                        </div>
                        <p class="text-sm text-slate-300 italic">noun</p>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            A person or organization that creates computer software or applications.
                        </p>
                        <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-brand-300 font-mono">
                            "Sheron is a skilled front-end developer building high quality web interfaces."
                        </div>
                    </div>
                `;
            } else if (type === 'quote') {
                modalTitle.textContent = "Quote Generator Demo";
                modalBody.innerHTML = `
                    <div class="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
                        <p class="text-lg font-medium text-slate-200 italic">"Simplicity is prerequisite for reliability."</p>
                        <p class="text-sm font-semibold text-brand-400">— Edsger W. Dijkstra</p>
                        <button data-demo="quote" class="action-primary px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold">
                            Generate Another Quote
                        </button>
                    </div>
                `;
            } else if (type === 'clock') {
                const now = new Date();
                modalTitle.textContent = "World Live Clock Demo";
                modalBody.innerHTML = `
                    <div class="grid grid-cols-2 gap-3 text-center">
                        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                            <span class="text-xs text-slate-400 block font-mono">Johannesburg</span>
                            <span class="text-xl font-bold text-brand-300 font-mono">${now.toLocaleTimeString()}</span>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                            <span class="text-xs text-slate-400 block font-mono">London (UTC)</span>
                            <span class="text-xl font-bold text-purple-300 font-mono">${new Date(now.getTime() - 2*3600000).toLocaleTimeString()}</span>
                        </div>
                    </div>
                `;
            }
        }

        function closeDemo() {
            demoModal.classList.add('hidden');
        }

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const demoButton = target.closest('[data-demo]');
    if (demoButton) {
        openDemo(demoButton.dataset.demo);
        return;
    }

    if (target.closest('[data-close-demo]')) {
        closeDemo();
    }
});

document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
        image.src = image.dataset.fallback;
        image.removeAttribute('data-fallback');
    }, { once: true });
});
