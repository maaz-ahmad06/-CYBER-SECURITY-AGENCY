/**
 * CYBER SECURITY AGENCY - INTERACTIVE LOGIC & ANIMATIONS
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. PRELOADER ANIMATION SYSTEM
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress-bar');
    const loaderTerminal = document.getElementById('loader-terminal');
    
    const bootLogs = [
        '[INITIATING SYSTEM BOOT...]',
        '[LOADING FIRMWARE DECRYPTION KEYS...]',
        '[MOUNTING CORE NETWORK FIREWALL...]',
        '[SHIELD PROTOCOL DETECTED: STATUS OPTIMAL]',
        '[CONNECTING SECURE DATABASE SHELL...]',
        '[ESTABLISHING INTEL FEED PIPELINES...]',
        '[DECRYPTING SYSTEM GRID ENCRYPTORS...]',
        '[HANDSHAKE COMPLETE: AGENT IDENTITY LOGGED]',
        '[SYSTEM BOOT COMPLETE - WELCOME USER]'
    ];

    let progress = 0;
    const loaderDuration = 2200; // 2.2 seconds total loading
    const intervalTime = 20; // Check state every 20ms
    const step = 100 / (loaderDuration / intervalTime);

    const progressInterval = setInterval(() => {
        progress += step;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Wait 300ms at 100% then transition out
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Trigger counters once loaded if in viewport
                    startCountersObserver();
                }, 500);
            }, 300);
        }

        // Update visual elements
        progressBar.style.width = `${progress}%`;
        
        // Cycle log text based on progress stage
        const logIndex = Math.min(
            Math.floor((progress / 100) * bootLogs.length),
            bootLogs.length - 1
        );
        loaderTerminal.textContent = `${bootLogs[logIndex]} (${Math.floor(progress)}%)`;
    }, intervalTime);


    // 2. STICKY NAVBAR SCROLL ACTION
    const header = document.querySelector('.navbar-wrapper');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // 3. MOBILE MENU NAVIGATION DRAWER
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-cta-item .btn-cta');

    const toggleMenu = () => {
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
        // Prevent body scrolling when menu is open on mobile
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'auto';
    };

    mobileToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');
            document.body.style.overflow = 'auto';

            // Active tab selection
            navLinks.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
        });
    });


    // 4. LIVE GLOBAL THREAT INTEL SIMULATOR
    const terminalBody = document.getElementById('terminal-body');
    
    const logsTemplates = [
        { type: 'info', msg: 'Monitoring global network nodes on WAN-0 interface...' },
        { type: 'warn', msg: 'Anomaly detected: Sudden traffic spike on server NODE-04.' },
        { type: 'error', msg: 'Brute-force SSH attack blocked from Host: 198.51.100.12.' },
        { type: 'success', msg: 'IP 198.51.100.12 successfully quarantined.' },
        { type: 'info', msg: 'Syncing distributed backup ledgers... Integrity validated.' },
        { type: 'warn', msg: 'Port sweep scanning detected on firewalls from IP: 203.0.113.82.' },
        { type: 'success', msg: 'Intrusion Prevention System updated. Rules compiled.' },
        { type: 'error', msg: 'SQL Injection payload intercepted on customer API node.' },
        { type: 'success', msg: 'Zero-Knowledge handshake verified with central HQ server.' },
        { type: 'warn', msg: 'DDoS load indicators increasing. Rerouting traffic filters...' },
        { type: 'info', msg: 'Cloudflare security proxies fully operational. Latency 14ms.' },
        { type: 'error', msg: 'Critical: Exploit trigger attempted on zero-day vulnerability.' },
        { type: 'success', msg: 'Ransomware sandbox isolated. File extraction blocked.' },
    ];

    const formatTime = () => {
        const now = new Date();
        return now.toTimeString().split(' ')[0];
    };

    const addTerminalLog = (initial = false) => {
        if (!terminalBody) return;

        const template = logsTemplates[Math.floor(Math.random() * logsTemplates.length)];
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        line.innerHTML = `
            <span class="term-time">[${formatTime()}]</span>
            <span class="term-tag ${template.type}">[${template.type.toUpperCase()}]</span>
            <span class="term-msg">${template.msg}</span>
        `;
        
        terminalBody.appendChild(line);
        
        // Purge historical lines to conserve viewport size and RAM
        if (terminalBody.childElementCount > 35) {
            terminalBody.removeChild(terminalBody.firstChild);
        }
        
        // Auto scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    // Pre-populate terminal window on start
    for (let i = 0; i < 8; i++) {
        setTimeout(addTerminalLog, i * 150, true);
    }

    // Loop adding threat logs every 1.5 to 3 seconds
    const runThreatFeed = () => {
        const delay = Math.random() * 1500 + 1500;
        setTimeout(() => {
            addTerminalLog();
            runThreatFeed();
        }, delay);
    };
    
    // Start loop after initial loader finishes
    setTimeout(runThreatFeed, 3000);


    // 5. STATS ANIMATION COUNTER SYSTEM
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    const animateCounters = () => {
        if (countersAnimated) return;
        countersAnimated = true;

        statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            let current = 0;
            const duration = 2000; // 2 seconds animation
            const steps = 50;
            const increment = target / (duration / steps);

            const counterTimer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(counterTimer);
                }
                
                // Format large numbers with commas
                if (target > 999) {
                    num.textContent = Math.floor(current).toLocaleString();
                } else {
                    num.textContent = Math.floor(current);
                }
            }, steps);
        });
    };

    const startCountersObserver = () => {
        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !preloader.classList.contains('fade-out')) {
                    // If preloader is still up, we check back when fade-out occurs
                } else if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(statsSection);
    };


    // 6. SCROLL REVEAL (FADE / SLIDE) SYSTEM
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Read optional custom delay
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));


    // 7. MOUSE CURSOR GLOW FOR SERVICE CARDS
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    // 8. INCIDENT PORTAL SUBMISSION & SIMULATED TRANSMISSION LOGS
    const incidentForm = document.getElementById('incident-form');
    const submitBtn = document.getElementById('submit-btn');
    const modal = document.getElementById('cyber-modal');
    const modalLog = document.getElementById('modal-log');
    const closeModalBtn = document.getElementById('close-modal-btn');

    const transmissionSteps = [
        '[SECURE SSL ENCRYPTED CONNECTION ESTABLISHED]',
        '[ACQUIRING CRYPTOGRAPHIC HANDSHAKE PROTOCOLS...]',
        '[PARSING OPERATOR ENCRYPTED INTAKE FIELD...]',
        '[COMPILING INCIDENT CLASSIFICATION PAYLOAD...]',
        '[STRENGTH: AES-GCM-256 BIT KEY SCHEME LOADED]',
        '[PACKET 01 SENT: ROUTED VIA DISTRIBUTED VPN NODE]',
        '[PACKET 02 SENT: SHUNNING TRACKERS SECURELY]',
        '[VERIFYING TRANSFER INTEGRITY SHA-512 SIGNATURE...]',
        '[TRANSMISSION COMPLETE - SECURITY LOG PURGED]',
        '[DISPATCHED TO ACTIVE AGENTS ON RESPOND THREAD]'
    ];

    if (incidentForm) {
        incidentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable button during animation
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.6';
            submitBtn.innerHTML = `<i class="fa-solid fa-satellite-dish fa-spin btn-icon"></i>TRANSMITTING PAYLOAD...`;

            // Setup and Open Modal
            modalLog.innerHTML = '';
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';

            // Print transmission logs line-by-line
            let stepIndex = 0;
            const printLogLine = () => {
                if (stepIndex < transmissionSteps.length) {
                    const lineEl = document.createElement('div');
                    lineEl.style.marginBottom = '6px';
                    lineEl.style.color = stepIndex === transmissionSteps.length - 1 ? 'var(--accent-green)' : 'rgba(0, 240, 255, 0.9)';
                    lineEl.textContent = transmissionSteps[stepIndex];
                    modalLog.appendChild(lineEl);
                    modalLog.scrollTop = modalLog.scrollHeight;
                    stepIndex++;
                    setTimeout(printLogLine, 350); // Pause between print lines
                } else {
                    // Finished transmitting
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane btn-icon"></i>TRANSMIT ENCRYPTED PAYLOAD`;
                    incidentForm.reset();
                }
            };

            // Start printing simulated logging
            setTimeout(printLogLine, 400);
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal by clicking background overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

});
