// ============================================================================
// MODO CLINIC — CENTRAL CONTENT FILE
// ============================================================================
// This file contains ALL user-facing text on the website.
// Edit strings here to update the site, or send this file for translation.
// Structure mirrors the site: shared → pages → treatments → techniques
// ============================================================================

export const content = {
    // ==========================================================================
    // SHARED COMPONENTS (Navigation, Footer)
    // ==========================================================================
    shared: {
        navigation: {
            logo: "MODO",
            logoSuffix: "CLINIC",
            ctaButton: "Book Analysis",
            links: [
                { name: "Home", href: "/" },
                { name: "Our Team", href: "/our-team" },
                {
                    name: "Techniques",
                    items: [
                        { name: "Robotic DHI", href: "/techniques/robotic-dhi", desc: "AI-Powered Precision" },
                        { name: "DHI Manual", href: "/techniques/dhi-manual", desc: "No-Incision Control" },
                        { name: "Sapphire FUE", href: "/techniques/sapphire-fue", desc: "Gemstone Accuracy" },
                    ],
                },
                {
                    name: "Treatments",
                    items: [
                        { name: "Hair Transplant", href: "/treatments/hair-transplant", desc: "Complete Restoration" },
                        { name: "Beard Transplant", href: "/treatments/beard-transplant", desc: "Facial Density" },
                        { name: "Eyebrow Transplant", href: "/treatments/eyebrow-transplant", desc: "Artistic Refining" },
                        { name: "Scar Transplant", href: "/treatments/scar-transplant", desc: "Corrective Surgery" },
                    ],
                },
                { name: "Results", href: "/results" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about-us" },
            ],
        },

        footer: {
            brandName: "MODO.",
            tagline: "Pioneering the intersection of robotic precision and architectural hair restoration.",
            location: { line1: "Nisantasi, Istanbul", line2: "Turkey" },
            email: "contact@modoclinic.com",
            treatmentsHeading: "Treatments",
            treatmentLinks: [
                { label: "Robotic DHI Protocol", href: "/techniques/robotic-dhi" },
                { label: "Sapphire FUE", href: "/techniques/sapphire-fue" },
                { label: "Manual DHI", href: "/techniques/dhi-manual" },
                { label: "Beard Reconstruction", href: "/treatments/beard-transplant" },
                { label: "Eyebrow Restoration", href: "/treatments/eyebrow-transplant" },
            ],
            patientHeading: "Patient",
            patientLinks: [
                { label: "Real Results", href: "/results" },
                { label: "Clinical Blog", href: "/blog" },
                { label: "Free Consultation", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
            ],
            connectHeading: "Connect",
            connectText: "Follow our daily transformations and live surgery insights.",
            digitalDiagnosis: "Start Digital Diagnosis",
            copyright: "MODO Clinic. All rights reserved.",
            legalLinks: ["Terms", "Privacy", "Medical Disclaimer"],
        },
    },

    // ==========================================================================
    // HOME PAGE
    // ==========================================================================
    home: {
        hero: {
            tagline: "Est. 2024 · Istanbul",
            heading: "REDEFINING\nCONFIDENCE.",
            subtitle: "Not just a procedure. A transformation of self.",
            ctaPrimary: "Book Free Analysis",
            ctaSecondary: "See Results",
            scrollLabel: "Scroll",
        },

        trustBar: {
            stats: [
                { value: 99, suffix: "%", label: "Graft Survival" },
                { value: 5000, suffix: "+", label: "Procedures" },
                { value: 12, suffix: " yrs", label: "Experience" },
                { value: 15, suffix: "+", label: "Countries" },
            ],
        },

        empathy: {
            heading: "Struggling with hair loss?",
            headingMuted: "You're not alone.",
            body: "40% of men experience noticeable hair loss by age 35. But it doesn't have to define you. Modern technology has made permanent, natural-looking restoration a reality.",
            tags: ["Natural Results", "Permanent Solution", "No Scars", "Quick Recovery"],
        },

        techniques: {
            sectionLabel: "Our Techniques",
            seeMoreLabel: "See More",
            items: [
                {
                    id: "robotic-dhi",
                    title: "ROBOTIC DHI",
                    subtitle: "AI-Powered Precision",
                    description: "Computer-guided extraction with 99.5% graft survival. Zero human fatigue, maximum density.",
                    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop",
                    href: "/techniques/robotic-dhi",
                    stats: [
                        { label: "Survival", value: "99.5%" },
                        { label: "Density", value: "80+ grafts/cm²" },
                    ],
                },
                {
                    id: "sapphire-fue",
                    title: "SAPPHIRE FUE",
                    subtitle: "Gemstone Precision",
                    description: "V-shaped sapphire blades create micro-channels for faster healing and natural angles.",
                    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2488&auto=format&fit=crop",
                    href: "/techniques/sapphire-fue",
                    stats: [
                        { label: "Healing", value: "3-5 days" },
                        { label: "Precision", value: "0.8mm" },
                    ],
                },
                {
                    id: "dhi-manual",
                    title: "DHI MANUAL",
                    subtitle: "Artistic Control",
                    description: "Direct Hair Implantation without incisions. Maximum control for hairline artistry.",
                    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
                    href: "/techniques/dhi-manual",
                    stats: [
                        { label: "Technique", value: "No-shave" },
                        { label: "Control", value: "Artistic" },
                    ],
                },
            ],
        },

        results: {
            sectionLabel: "Real Results",
            heading: "TRANSFORMATIONS",
            subtitle: "Drag to Reveal",
            linkText: "View Full Gallery",
        },

        testimonial: {
            quote: "\u201cI came to MODO expecting a procedure. I left with my confidence restored. The team\u2019s precision and care exceeded every expectation.\u201d",
            author: "Michael T.",
            country: "United Kingdom",
        },

        processSteps: {
            sectionLabel: "How It Works",
            heading: "3 SIMPLE STEPS.",
            steps: [
                {
                    number: "01",
                    title: "Book Analysis",
                    description: "Free virtual consultation to assess your needs and create a personalized plan.",
                },
                {
                    number: "02",
                    title: "Your Procedure",
                    description: "Travel to Istanbul for your treatment. We handle accommodation and transfers.",
                },
                {
                    number: "03",
                    title: "See Results",
                    description: "Return home with a new confidence. Full results visible in 8-12 months.",
                },
            ],
        },

        norwood: {
            heading: "ESTIMATE GRAFTS",
            subtitle: "Drag to match your current pattern",
            currentScaleLabel: "Current Scale",
            norwoodPrefix: "NORWOOD",
            recommendationLabel: "Recommendation",
            graftsNeededLabel: "Grafts Needed",
            startAnalysisPrefix: "Start Analysis for Stage",
            scaleLabels: ["Minor Recession", "Moderate Loss", "Significant Loss"],
            stages: [
                { stage: 1, label: "Stage 1", grafts: "500-1,000", description: "Minimal recession at the hairline corners." },
                { stage: 2, label: "Stage 2", grafts: "1,000-1,500", description: "Frontal hairline recession with deep temples." },
                { stage: 3, label: "Stage 3", grafts: "2,000-3,000", description: "Deep recession + noticeable thinning on top." },
                { stage: 4, label: "Stage 4", grafts: "3,000-4,000", description: "Separation of hairline and crown thinning." },
                { stage: 5, label: "Stage 5", grafts: "4,000-5,000", description: "Bridge between front and crown begins to break." },
                { stage: 6, label: "Stage 6", grafts: "5,000-6,500", description: "Bridge is gone. Front and crown usage merged." },
                { stage: 7, label: "Stage 7", grafts: "6,500+", description: "Only a horseshoe pattern of hair remains." },
            ],
        },

        finalCta: {
            badge: "Limited Availability",
            heading: "Ready to Start?",
            body: "Book your free consultation today. Only accepting 15 new patients per month to ensure personalized care.",
            buttonText: "BOOK FREE ANALYSIS",
            disclaimer: "No commitment required. 100% confidential.",
        },
    },

    // ==========================================================================
    // ABOUT US PAGE
    // ==========================================================================
    aboutUs: {
        hero: {
            heading: "THE VISION.",
            subtitle: "Where precision medicine meets aesthetic artistry.",
        },
        story: {
            label: "Our Story",
            heading: "BEYOND\nLIMITS.",
            paragraphs: [
                "MODO Clinic was founded on a singular belief: that hair restoration should be indistinguishable from nature. We combine robotic precision with artistic vision to deliver results that exceed what was previously possible.",
                "Our founder, Dr. Alex Modo, pioneered the Micro-DHI technique after years of research into follicular unit optimization. Today, our multidisciplinary team continues to push boundaries in robotic surgery, graft preservation, and post-operative care.",
                "Based in Istanbul—the global capital of hair restoration—we serve patients from over 40 countries, each receiving the same meticulous attention to detail that has made MODO a leader in the field.",
            ],
        },
        values: {
            label: "Core Values",
            heading: "WHAT\nDRIVES US.",
            items: [
                { number: "01", title: "Precision Above All", description: "Every graft placement is calculated to 0.1mm accuracy. We don\u2019t estimate\u2014we measure." },
                { number: "02", title: "Artistic Vision", description: "Technical skill without aesthetic sense creates unnatural results. We blend both." },
                { number: "03", title: "Patient First", description: "Your goals define our approach. We listen before we plan, and communicate throughout." },
                { number: "04", title: "Continuous Innovation", description: "We invest in research and technology to stay at the forefront of the field." },
            ],
        },
        stats: [
            { value: "10K+", label: "Procedures" },
            { value: "40+", label: "Countries" },
            { value: "98%", label: "Satisfaction" },
            { value: "15+", label: "Years" },
        ],
        cta: {
            heading: "Ready to Begin?",
            body: "Schedule a consultation to discuss your goals and explore your options.",
            primaryButton: "Book Consultation",
            secondaryButton: "Meet the Team",
        },
    },

    // ==========================================================================
    // CONTACT PAGE
    // ==========================================================================
    contact: {
        hero: {
            heading: "REACH OUT.",
            subtitle: "Begin your consultation journey today.",
        },
        info: {
            label: "Get in Touch",
            heading: "LET'S\nCONNECT.",
            location: { title: "Location", line1: "Istanbul, Turkey", line2: "Nişantaşı Medical District" },
            whatsapp: { title: "WhatsApp", number: "+90 532 389 8193", href: "https://wa.me/905323898193" },
            email: { title: "Email", address: "info@modoclinic.com", href: "mailto:info@modoclinic.com" },
            hours: { title: "Hours", line1: "Mon-Sat: 9:00 - 18:00", line2: "Sunday: Closed" },
        },
        form: {
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "your@email.com",
            phoneLabel: "Phone / WhatsApp",
            phonePlaceholder: "+1 234 567 8900",
            messageLabel: "Message",
            messagePlaceholder: "Tell us about your goals...",
            submitButton: "Send via WhatsApp",
            emailFallback: "Or email us directly at info@modoclinic.com",
            whatsappGreeting: "Hello MODO Clinic! My name is",
        },
    },

    // ==========================================================================
    // RESULTS PAGE
    // ==========================================================================
    results: {
        hero: {
            heading: "RESULTS.",
            subtitle: "Real patients. Real transformations. Verified outcomes.",
        },
        filter: {
            label: "Patient Gallery",
            heading: "FILTER BY TECHNIQUE",
        },
        testimonials: {
            label: "Testimonials",
            heading: "PATIENT\nVOICES.",
            items: [
                { name: "Michael R.", country: "USA", text: "The results exceeded my expectations. The team\u2019s attention to detail was incredible.", rating: 5 },
                { name: "James L.", country: "UK", text: "Professional from start to finish. My hairline looks completely natural.", rating: 5 },
                { name: "Ahmed K.", country: "UAE", text: "Best decision I ever made. The DHI technique gave me amazing density.", rating: 5 },
            ],
        },
        resultCards: [
            { id: 1, beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&sat=-100", afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", grafts: 3500, technique: "Robotic DHI", months: 12, rating: 5, norwood: 4, age: 32, tags: ["Hairline", "Density"] },
            { id: 2, beforeImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop&sat=-100", afterImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", grafts: 4200, technique: "Sapphire FUE", months: 14, rating: 5, norwood: 5, age: 38, tags: ["Crown", "Temples"] },
            { id: 3, beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop&sat=-100", afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", grafts: 2800, technique: "DHI Manual", months: 10, rating: 5, norwood: 3, age: 29, tags: ["Frontal", "Correction"] },
            { id: 4, beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop&sat=-100", afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", grafts: 3200, technique: "Robotic DHI", months: 12, rating: 5, norwood: 4, age: 34, tags: ["Hairline", "Volume"] },
            { id: 5, beforeImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop&sat=-100", afterImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", grafts: 3800, technique: "Sapphire FUE", months: 13, rating: 5, norwood: 6, age: 42, tags: ["Full Restore", "Density"] },
            { id: 6, beforeImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop&sat=-100", afterImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", grafts: 4500, technique: "Robotic DHI", months: 14, rating: 5, norwood: 5, age: 36, tags: ["Global", "Hairline"] },
        ],
        cta: {
            title: "See What\u2019s Possible",
            description: "Book a consultation to discuss your personal goals.",
            buttonText: "Book Consultation",
        },
    },

    // ==========================================================================
    // OUR TEAM PAGE
    // ==========================================================================
    ourTeam: {
        hero: {
            heading: "THE BOARD.",
            subtitle: "A multidisciplinary team dedicated to the art and science of hair restoration.",
        },
        section: {
            label: "Our Specialists",
            heading: "CLINICAL\nEXPERTS.",
            description: "Our multidisciplinary team combines surgical expertise, patient care excellence, and cutting-edge technology mastery.",
        },
        members: [
            { name: "Dr. Alex Modo", role: "Chief Medical Officer", specialty: "Robotic DHI", years: 15, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop", bio: "Pioneer of the Micro-DHI technique with over 10,000 successful procedures." },
            { name: "Dr. Sarah Chen", role: "Head Dermatologist", specialty: "Scalp Health", years: 12, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop", bio: "Specializes in scalp diagnostics and pre-operative optimization." },
            { name: "James Wilson", role: "Robotic Technician Lead", specialty: "ARTAS Systems", years: 8, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", bio: "Expert in robotic calibration and precision extraction protocols." },
            { name: "Dr. Ahmed Yilmaz", role: "FUE Specialist", specialty: "Sapphire Techniques", years: 10, image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop", bio: "Master of sapphire blade incisions and density optimization." },
            { name: "Maria Garcia", role: "Patient Care Coordinator", specialty: "Patient Experience", years: 6, image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop", bio: "Ensures seamless patient journey from consultation to recovery." },
            { name: "Elena Popov", role: "Head Nurse", specialty: "Clinical Operations", years: 9, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop", bio: "Oversees surgical protocols and team coordination." },
        ],
        credentials: {
            label: "Certifications",
            heading: "WORLD-CLASS\nCREDENTIALS.",
            items: [
                { title: "ISHRS Members", description: "International Society of Hair Restoration Surgery certified specialists." },
                { title: "Board Certified", description: "European Board of Plastic Surgery and Dermatology certifications." },
                { title: "10,000+ Procedures", description: "Combined team experience exceeding 10,000 successful restorations." },
            ],
        },
        cta: {
            title: "Meet the Experts",
            description: "Schedule a consultation and meet the team behind your transformation.",
            buttonText: "Book Consultation",
        },
    },

    // ==========================================================================
    // TREATMENT PAGES
    // ==========================================================================
    treatments: {
        hairTransplant: {
            hero: {
                badge: "Treatment 01",
                heading: "HAIR\nTRANSPLANT.",
                subtitle: "Complete scalp restoration with permanent results.",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
            },
            seoContent: {
                title: "Restoring Confidence, Strand by Strand",
                paragraphs: [
                    "Hair loss is more than a cosmetic issue; it affects self-image and confidence. The gold standard for treating permanent hair loss is hair transplantation\u2014a microsurgical procedure that moves healthy hair follicles from genetically resistant areas (typically the back of the head) to areas of thinning or baldness.",
                    "Why it works: The hair on the back of your head is genetically programmed to resist Dihydrotestosterone (DHT), the hormone responsible for male pattern baldness. When these follicles are transplanted to the hairline or crown, they retain this resistance. This means the results of your transplant are permanent; the new hair will grow, shed, and reform naturally for the rest of your life.",
                    "At MODO, we exclusively utilize modern, minimally invasive techniques like FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation). Unlike older \u201cstrip\u201d surgeries that leaving a linear scar, our methods involve extracting individual follicles. This leaves virtually no visible scarring, allowing you to wear your hair short without worry.",
                    "Our approach goes beyond medical function; we prioritize aesthetic form. A successful transplant is unnoticed. We carefully design your hairline to match your facial geometry and age, using single-hair grafts to create a soft, natural transition zone. Whether you\u2019re looking to lower your hairline, fill in a thinning crown, or restore overall density, our customized treatment plans ensure a result that looks like you\u2014only better.",
                ],
            },
            candidates: {
                label: "Candidacy",
                heading: "ARE YOU\nA FIT?",
                idealFor: {
                    title: "Ideal For",
                    items: ["Male/female pattern baldness", "Receding hairlines", "Crown thinning", "Adequate donor hair"],
                },
                consultRequired: {
                    title: "Consult Required",
                    items: ["Active hair loss", "Autoimmune conditions", "Diffuse thinning", "Under 25 years old"],
                },
            },
            featureSplit: {
                label: "The MODO Difference",
                title: "Personalized Restoration",
                description: "Every head is unique. We combine advanced diagnostics with artistic design to create a hairline that looks natural and lasts a lifetime.",
                features: [
                    "Custom hairline design based on facial structure",
                    "Donor area optimization for maximum coverage",
                    "HIB-O graft preservation for 99%+ survival",
                    "Natural density mapping for realistic results",
                ],
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2689&auto=format&fit=crop",
                imageAlt: "Hair transplant consultation",
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "How long does a hair transplant last?", answer: "A hair transplant is permanent. Transplanted hair grows for life." },
                    { question: "Is the procedure painful?", answer: "No. We use needle-free anesthesia. Most patients sleep during the procedure." },
                    { question: "When will I see results?", answer: "Growth begins at month 3-4, significant coverage by month 6, full density at 12-14 months." },
                    { question: "Do I have to shave my head?", answer: "Not necessarily. We offer 'No-Shave' options for smaller procedures." },
                ],
                schema: [
                    { question: "How long does a hair transplant last?", answer: "A hair transplant is permanent." },
                    { question: "Is the procedure painful?", answer: "No, we use needle-free anesthesia." },
                    { question: "When will I see results?", answer: "Full density at 12-14 months." },
                    { question: "Do I have to shave my head?", answer: "Not necessarily, we offer no-shave options." },
                ],
            },
            cta: {
                title: "Ready to Restore Your Confidence?",
                description: "Schedule a consultation for your personalized restoration plan.",
                buttonText: "Book Free Consultation",
            },
        },

        beardTransplant: {
            hero: {
                badge: "Treatment 02",
                heading: "BEARD\nTRANSPLANT.",
                subtitle: "Sculpt the beard you\u2019ve always wanted.",
                image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2670&auto=format&fit=crop",
            },
            seoContent: {
                title: "Engineering the Perfect Stubble",
                paragraphs: [
                    "A beard is a powerful defining feature of the male face, conveying maturity, style, and masculinity. However, genetics often leave many men with patchy growth, disconnected mustaches, or sparse cheeks that no amount of beard oil can fix. A beard transplant is the only permanent solution to construct a full, dense, and perfectly shaped beard where biology fell short.",
                    "The Art of Facial Symmetry: Unlike scalp hair, beard hair grows in very specific patterns and varying angles across the face. The jawline requires robust density, while the upper cheeks demand a softer, more feathered approach. Our surgeons meticulously design your beard geometry\u2014defining the neckline, cheek line height, and connector areas\u2014to harmonize with your unique facial structure.",
                    "The procedure involves harvesting fine hair follicles from the back of the scalp. These grafts are carefully selected to match the texture and growth cycle of facial hair. Using the DHI technique, we implant them at precise angles to ensure they lie flat against the skin, mimicking the \u201cshingles\u201d pattern of natural beard growth. This prevents the \u201cpluggy\u201d or outward-sticking look common in older transplant methods.",
                    "Whether you desire a rugged full beard, a precise goatee, or simply want to fill in acne scars that disrupt your stubble, our bespoke approach ensures that your results look completely natural\u2014even upon close inspection by a barber.",
                ],
            },
            candidates: {
                label: "Best For",
                heading: "IDEAL\nCANDIDATES.",
                items: [
                    { title: "Patchy Beards", description: "Fill in sparse areas or gaps for a fuller, even look." },
                    { title: "Scar Coverage", description: "Camouflage scars from acne, injuries, or surgery." },
                    { title: "Slow Growth", description: "Genetics limited your beard? We can help." },
                    { title: "Style Definition", description: "Create sharp edges and defined contours." },
                ],
            },
            featureSplit: {
                label: "Facial Artistry",
                title: "Design Your Signature Look",
                description: "A full, well-shaped beard isn\u2019t just about density\u2014it\u2019s about creating a look that complements your unique facial structure and personal style.",
                features: [
                    "Natural growth pattern that matches existing facial hair",
                    "Single-hair grafts for authentic beard texture",
                    "Custom shaping for jawline, chin, and mustache",
                    "Permanent, self-sustaining results after 12 months",
                ],
                image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2670&auto=format&fit=crop",
                imageAlt: "Beard transplant results",
                imagePosition: "left" as const,
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "How many grafts for a full beard?", answer: "A full beard typically requires 2,500-3,500 grafts. Patches may need 500-1,500 grafts." },
                    { question: "Will the beard look natural?", answer: "Yes. We use single-hair grafts at natural angles. Even barbers can\u2019t tell the difference." },
                    { question: "What\u2019s the recovery time?", answer: "Most return to work in 5-7 days. Full healing within 2 weeks." },
                    { question: "Can I style my new beard?", answer: "Yes! After 3-4 months you can shave, trim, and style as normal." },
                ],
                schema: [
                    { question: "How many grafts for a full beard?", answer: "2,500-3,500 grafts typically." },
                    { question: "Will the beard look natural?", answer: "Yes, single-hair grafts at natural angles." },
                    { question: "What\u2019s the recovery time?", answer: "5-7 days to return to work." },
                    { question: "Can I style my new beard?", answer: "Yes, after 3-4 months." },
                ],
            },
            cta: {
                title: "Design Your Ideal Beard",
                description: "Book a consultation to explore your options.",
                buttonText: "Book Free Consultation",
            },
        },

        eyebrowTransplant: {
            hero: {
                badge: "Treatment 03",
                heading: "EYEBROW\nTRANSPLANT.",
                subtitle: "Frame your face with precision-crafted brows.",
                image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop",
            },
            seoContent: {
                title: "The Architecture of Expression",
                paragraphs: [
                    "Eyebrows are arguably the most important facial feature for communication and expression. They frame the eyes and provide symmetry to the face. However, years of over-plucking, aggressive waxing, genetic thinning, or medical conditions like alopecia can leave brows sparse or virtually non-existent. Makeup and microblading offer temporary 2D solutions, but only an eyebrow transplant restores the natural 3D texture and volume of real hair.",
                    "Precision is Paramount: Eyebrow restoration is the most technically demanding of all hair transplant procedures. Unlike scalp hair that grows in a general direction, eyebrow hair changes angle dramatically across the brow. Hairs near the nose point upward, those in the middle grow horizontally, and the tail points slightly downward. Furthermore, the hair shafts must lie extremely flat against the skin.",
                    "At MODO, we treat eyebrow design as high-stakes architecture. We harvest only the finest, single-hair grafts from the nape of the neck or behind the ear, where the hair is thinner and closely matches eyebrow texture. Using ultra-fine needles, we implant these hairs at the exact angle and direction required to replicate a natural brow flow.",
                    "The result is a permanent, living eyebrow that you can wash, style, and trim. Whether you\u2019re looking to restore a full brow or simply add definition to a faded arch, our artistic approach ensures a result that enhances your natural beauty without looking \u201cdone.\u201d",
                ],
            },
            candidates: {
                label: "Best For",
                heading: "IDEAL\nCANDIDATES.",
                items: [
                    { title: "Over-Plucked Brows", description: "Restore density lost to years of aggressive plucking." },
                    { title: "Sparse or Thin Brows", description: "Genetic thinness or age-related loss? We can help." },
                    { title: "Alopecia Areata", description: "Stable cases can benefit from eyebrow restoration." },
                    { title: "Scar Coverage", description: "Conceal eyebrow scars from accidents or surgery." },
                ],
            },
            featureSplit: {
                label: "Micro-Precision",
                title: "The Art of Eyebrow Design",
                description: "Eyebrow transplantation is among the most delicate procedures we perform. Every single hair must be placed at the exact angle and direction to create a natural, flowing brow.",
                features: [
                    "Natural arch design customized to your facial proportions",
                    "Single-hair precision\u2014100-300 grafts per brow",
                    "Directional angling: head up, body horizontal, tail down",
                    "Permanent results that grow naturally",
                ],
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2670&auto=format&fit=crop",
                imageAlt: "Eyebrow transplant precision",
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "How many grafts for eyebrows?", answer: "Typically 100-400 grafts per brow depending on desired fullness." },
                    { question: "Will they look natural?", answer: "Yes. Our artistic approach ensures natural growth patterns." },
                    { question: "Do I need to trim them?", answer: "Initially yes\u2014growth often normalizes after 6-12 months." },
                    { question: "What\u2019s the recovery?", answer: "Most are presentable in 5-7 days. Redness fades in 2 weeks." },
                ],
                schema: [
                    { question: "How many grafts for eyebrows?", answer: "100-400 grafts per brow." },
                    { question: "Will they look natural?", answer: "Yes, artistic placement ensures natural patterns." },
                    { question: "Do I need to trim them?", answer: "Initially, growth normalizes after 6-12 months." },
                    { question: "What\u2019s the recovery?", answer: "5-7 days, redness fades in 2 weeks." },
                ],
            },
            cta: {
                title: "Frame Your Face",
                description: "Consult with our specialists to design your ideal brow shape.",
                buttonText: "Book Free Consultation",
            },
        },

        scarTransplant: {
            hero: {
                badge: "Treatment 04",
                heading: "SCAR\nCAMOUFLAGE.",
                subtitle: "Conceal surgical and trauma scars with natural hair growth.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
            },
            seoContent: {
                title: "Erasure Through Restoration",
                paragraphs: [
                    "Scars on the scalp or face can be constant reminders of past trauma, surgeries, or accidents. Whether it\u2019s a linear scar from a previous FUT hair transplant, a burn mark, or a surgical incision from a facelift or neurosurgery, the contrast between the pale scar tissue and the surrounding hair makes it highly visible. Scar camouflage hair transplantation offers a permanent way to conceal these marks, not by removing the scar, but by planting life directly into it.",
                    "A Specialized Challenge: Planting hair into scar tissue is significantly more complex than a standard transplant. Scar tissue is fibrous, tough, and often has reduced blood circulation (vascularity). This means grafts must be handled with extreme care and planted at lower densities initially to ensure they receive enough oxygen to survive.",
                    "Our protocol involves a \u201ctest session\u201d for large scars to assess viability, followed by a staged approach. We carefully place follicles into and around the scar tissue, angling the hair to grow over and cover the mark. This technique effectively breaks up the visual continuity of the scar, blending it seamlessly with the surrounding hair.",
                    "The psychological impact of this procedure is profound. By hiding the visible sign of injury, we help patients close a painful chapter of their lives and move forward with renewed confidence.",
                ],
            },
            candidates: {
                label: "Best For",
                heading: "IDEAL\nCANDIDATES.",
                items: [
                    { title: "FUT Strip Scars", description: "Hide linear scars from previous strip surgeries." },
                    { title: "Trauma Scars", description: "Accidents, burns, or injuries leaving visible marks." },
                    { title: "Surgical Scars", description: "Facelift, neurosurgery, or other scalp procedures." },
                    { title: "FUE Donor Areas", description: "Over-harvested donor zones needing concealment." },
                ],
            },
            featureSplit: {
                label: "Restoration",
                title: "Reclaim Your Confidence",
                description: "Scar tissue presents unique challenges\u2014reduced blood supply and altered texture. Our staged approach maximizes graft survival while achieving natural-looking coverage.",
                features: [
                    "FUE/FUT scar concealment from previous transplants",
                    "Trauma and surgical scar coverage",
                    "Multi-session protocol for wide scars",
                    "Natural blending with surrounding hair",
                ],
                image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2670&auto=format&fit=crop",
                imageAlt: "Scar camouflage treatment",
                imagePosition: "left" as const,
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "Can all scars be covered?", answer: "Most scars can be significantly improved. Coverage depends on type and blood supply." },
                    { question: "How many grafts for scar coverage?", answer: "Typically 30-50 grafts per cm of scar. Multiple sessions may be needed." },
                    { question: "Will the hair grow normally?", answer: "Yes. Once follicles establish blood supply, they grow like normal hair." },
                    { question: "Is scar transplant more complex?", answer: "Yes. Reduced blood supply requires specialized techniques." },
                ],
                schema: [
                    { question: "Can all scars be covered?", answer: "Most can be significantly improved." },
                    { question: "How many grafts for scar coverage?", answer: "30-50 grafts per cm." },
                    { question: "Will the hair grow normally?", answer: "Yes, once established." },
                    { question: "Is scar transplant more complex?", answer: "Yes, specialized techniques required." },
                ],
            },
            cta: {
                title: "Consult About Your Scar",
                description: "Send photos for a free assessment of your scar\u2019s transplant potential.",
                buttonText: "Book Free Consultation",
            },
        },
    },

    // ==========================================================================
    // TECHNIQUE PAGES
    // ==========================================================================
    techniques: {
        roboticDhi: {
            hero: {
                badge: "Flagship Technique",
                headingLine1: "ROBOTIC",
                headingLine2: "DHI",
                subtitle: "Where artificial intelligence meets surgical artistry. The future of hair restoration is here.",
                subtitleHighlights: ["artificial intelligence", "surgical artistry"],
                ctaPrimary: "Book Consultation",
                ctaSecondary: "See the Process",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop",
                scrollLabel: "Scroll to explore",
            },
            performanceMetrics: {
                label: "Performance Metrics",
                items: [
                    { value: "99.5", suffix: "%", label: "Graft Survival" },
                    { value: "80", suffix: "+", label: "Grafts / cm²" },
                    { value: "8", suffix: "hr", label: "Zero Fatigue" },
                    { value: "0", suffix: "%", label: "Human Error" },
                ],
            },
            animatedStats: [
                { value: 99, suffix: "%", label: "Survival Rate" },
                { value: 80, suffix: "+", label: "Grafts per cm²" },
                { value: 5000, suffix: "+", label: "Procedures" },
                { value: 12, suffix: "hr", label: "Non-Stop Precision" },
            ],
            process: {
                label: "The Protocol",
                heading: "PRECISION\nAT EVERY STEP.",
                subtitle: "Four-stage robotic workflow designed for maximum graft viability.",
                steps: [
                    { title: "3D Mapping", desc: "AI-powered scalp analysis maps every follicle angle and density zone.", visual: "01" },
                    { title: "Robotic Extraction", desc: "Computer-guided micro-punches ensure uniform graft quality.", visual: "02" },
                    { title: "HIB-O Preservation", desc: "Immediate +4°C cooling maintains 100% graft viability.", visual: "03" },
                    { title: "DHI Implantation", desc: "Choi pens place grafts at precise angles without channels.", visual: "04" },
                ],
            },
            comparison: {
                label: "Comparison",
                heading: "THE CLEAR WINNER.",
                recommended: "Recommended",
                roboticDhi: {
                    title: "Robotic DHI",
                    subtitle: "AI-Powered Precision",
                    items: [
                        "99.5% graft survival rate",
                        "Zero fatigue over 8+ hours",
                        "AI-optimized extraction patterns",
                        "Consistent angle & depth control",
                        "Maximum density: 80+ grafts/cm²",
                        "Faster recovery timeline",
                    ],
                },
                manualFue: {
                    title: "Manual FUE",
                    subtitle: "Traditional Method",
                    items: [
                        "95-98% graft survival rate",
                        "Fatigue affects later grafts",
                        "Surgeon-dependent patterns",
                        "Variable angle control",
                        "Standard density: 40-60 grafts/cm²",
                        "Standard recovery timeline",
                    ],
                },
            },
            whyRobotic: {
                label: "Technology",
                heading: "WHY\nROBOTIC\nDHI?",
                subtitle: "The intersection of artificial intelligence and surgical excellence.",
                features: [
                    { title: "AI Vision System", desc: "Real-time follicle detection and angle calculation for every single graft." },
                    { title: "Fatigue-Free Operation", desc: "Robot maintains identical precision from graft 1 to graft 5000." },
                    { title: "Micro-Precision", desc: "0.1mm accuracy in extraction position and implantation depth." },
                    { title: "Live Monitoring", desc: "Real-time quality metrics and success probability for every follicle." },
                    { title: "Trauma Reduction", desc: "Smaller punch sizes and calculated force minimize tissue damage." },
                    { title: "Faster Recovery", desc: "Precision handling means fewer damaged grafts and faster healing." },
                ],
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "Is the robot performing surgery?", answer: "The robot assists with extraction under surgeon supervision. A human surgeon controls all decisions and handles the implantation phase." },
                    { question: "Why does robotic DHI cost more?", answer: "Higher precision equipment, AI systems, and specialized training. The investment is justified by higher graft survival and density results." },
                    { question: "Who is the ideal candidate?", answer: "Large sessions (3000+ grafts), patients seeking maximum density, revision cases, or anyone wanting the highest precision available." },
                    { question: "What robotic system do you use?", answer: "We use the ARTAS system enhanced with custom MODO protocols for optimized extraction patterns and graft handling." },
                ],
                schema: [
                    { question: "Is the robot performing surgery?", answer: "Robot assists extraction, surgeon controls implantation." },
                    { question: "Why does robotic DHI cost more?", answer: "Higher precision justified by better results." },
                    { question: "Who is the ideal candidate?", answer: "Large sessions, maximum density seekers, revision cases." },
                    { question: "What robotic system do you use?", answer: "ARTAS with custom MODO protocols." },
                ],
            },
            cta: {
                title: "Experience Robotic Precision",
                description: "Book a consultation to see if robotic DHI is the right choice for your restoration goals.",
                buttonText: "Book Free Consultation",
            },
        },

        sapphireFue: {
            hero: {
                badge: "Technique 02",
                heading: "SAPPHIRE\nFUE.",
                subtitle: "Crystal-sharp precision for faster healing.",
                image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2673&auto=format&fit=crop",
            },
            seoContent: {
                title: "The Evolution of Hair Restoration",
                paragraphs: [
                    "Sapphire FUE represents the next generation of Follicular Unit Extraction (FUE) technology. Traditional FUE procedures rely on steel blades to create the micro-channels where hair follicles are implanted. While effective, steel eventually dulls during surgery, which can lead to larger, less precise incisions and increased tissue trauma.",
                    "In contrast, Sapphire FUE utilizes blades made from synthetic sapphire\u2014a gemstone known for its extreme hardness and durability. Because sapphire does not lose its edge, every channel created is consistent, smooth, and microscopically sharp. This precision is not merely a technical detail; it fundamentally changes the healing process and the aesthetic outcome of your transplant.",
                    "Why does this matter? The V-shaped sapphire blades allow surgeons to create smaller, more compact channels. This enables higher-density implantation (more grafts per square centimeter) without compromising the scalp\u2019s blood supply. The result is a fuller, more natural look that mimics original hair density. Furthermore, the smooth incision of the sapphire blade significantly reduces vibration and trauma to the skin, minimizing post-operative swelling (edema) and accelerating tissue recovery.",
                    "For patients with sensitive skin or those seeking maximum density in the hairline, Sapphire FUE is the gold standard. It combines the minimally invasive nature of FUE with the material perfection of sapphire, offering a quicker return to daily life and a virtually undetectable result.",
                ],
            },
            candidates: {
                label: "Best For",
                heading: "IDEAL\nCANDIDATES.",
                items: [
                    { title: "Sensitive Scalps", description: "Less trauma = less recovery time and swelling." },
                    { title: "High-Density Goals", description: "Finer incisions allow denser graft placement." },
                    { title: "Quick Return", description: "Need to get back to work fast? Sapphire heals quicker." },
                    { title: "Standard Hair Loss", description: "Perfect for typical male/female pattern hair loss." },
                ],
            },
            featureSplit: {
                label: "The Crystal Edge",
                title: "Why Sapphire Blades?",
                description: "Sapphire is one of the hardest materials on Earth. When precision-cut into surgical blades, it outperforms steel in every measure that matters for hair restoration.",
                features: [
                    "V-shaped blades create smaller, cleaner incisions",
                    "Reduced tissue trauma means faster healing (3-5 days)",
                    "Smaller channels allow denser graft packing",
                    "Anti-bacterial properties reduce infection risk",
                ],
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2689&auto=format&fit=crop",
                imageAlt: "Sapphire blade precision",
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "What is a sapphire blade?", answer: "A surgical-grade synthetic sapphire blade. Sharper than steel and hypoallergenic." },
                    { question: "Is Sapphire FUE better than regular FUE?", answer: "Yes. Finer incisions, faster healing, and higher density potential." },
                    { question: "How fast is recovery?", answer: "Most return to work in 5-7 days. Full healing in 10-14 days." },
                    { question: "Does it cost more?", answer: "Slightly. The sapphire blades are more expensive, but results justify cost." },
                ],
                schema: [
                    { question: "What is a sapphire blade?", answer: "Surgical-grade synthetic sapphire." },
                    { question: "Is Sapphire FUE better than regular FUE?", answer: "Yes, finer incisions and faster healing." },
                    { question: "How fast is recovery?", answer: "5-7 days to work, full healing 10-14 days." },
                    { question: "Does it cost more?", answer: "Slightly, justified by results." },
                ],
            },
            cta: {
                title: "Crystal Clear Results",
                description: "Book a consultation to see if Sapphire FUE is right for you.",
                buttonText: "Book Free Consultation",
            },
        },

        dhiManual: {
            hero: {
                badge: "Technique 03",
                heading: "DHI\nMANUAL.",
                subtitle: "The art of human precision and tactile mastery.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
            },
            seoContent: {
                title: "The Pinnacle of Precision",
                paragraphs: [
                    "Direct Hair Implantation (DHI) represents the most sophisticated evolution in hair restoration surgery. Unlike traditional methods where channels are cut before implantation, the DHI technique combines these steps into one fluid motion using a specialized tool called the Choi Implanter Pen.",
                    "In a manual DHI procedure, the surgeon loads each extracted follicle into the Choi pen. With a single click, the pen creates a micro-incision and simultaneously places the graft into the scalp. This \u201cdirect\u201d approach offers several distinct advantages. First, it eliminates the need for pre-made reception holes, significantly reducing trauma to the scalp and minimizing bleeding. Second, it grants the surgeon absolute control over the angle, depth, and direction of every single hair.",
                    "Why choose Manual DHI? While robotic systems offer speed, the human hand offers nuance. An experienced surgeon can feel the resistance of the tissue and adjust their technique in real-time, ensuring that every graft is seated perfectly. This tactile feedback is crucial for recreating complex patterns, such as the natural swirl of the crown or the delicate irregularity of a soft hairline.",
                    "Furthermore, DHI allows for \u201cNo-Shave\u201d sessions, as the pen can easily navigate between existing long hairs. This makes it an ideal choice for patients who wish to return to work immediately without visible signs of surgery, or for female patients looking to increase density without shaving their head.",
                ],
            },
            candidates: {
                label: "Best For",
                heading: "IDEAL\nCANDIDATES.",
                items: [
                    { title: "Hairline Work", description: "Frontal hairlines require the most artistic precision." },
                    { title: "Smaller Sessions", description: "Under 3000 grafts where artistry matters most." },
                    { title: "Beard & Eyebrow", description: "Facial work demands the tactile control of manual DHI." },
                    { title: "Revision Cases", description: "Correcting previous work requires expert hands." },
                ],
            },
            featureSplit: {
                label: "The Craft",
                title: "Surgical Artistry",
                description: "Where decades of experience meet intuitive precision. Manual DHI represents the pinnacle of human-controlled hair restoration, offering unmatched flexibility for complex cases.",
                features: [
                    "Master artistry\u2014experienced hands feel tissue resistance intuitively",
                    "No channel pre-making\u2014Choi implanters create & place simultaneously",
                    "Ultimate control for complex hairline designs",
                    "Ideal for no-shave procedures and female patients",
                ],
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop",
                imageAlt: "DHI Manual precision technique",
                imagePosition: "left" as const,
            },
            faq: {
                label: "FAQ",
                heading: "Common Questions",
                items: [
                    { question: "Is manual better than robotic?", answer: "Different strengths. Manual excels in artistry; robotic in endurance. We recommend based on case." },
                    { question: "How long can a surgeon work?", answer: "Expert surgeons maintain precision for 6-8 hours. We rotate teams for longer sessions." },
                    { question: "What is DHI vs FUE?", answer: "DHI uses implanters for direct placement. FUE creates channels first, then places grafts." },
                    { question: "Who performs manual DHI?", answer: "Only surgeons with 10+ years and 5000+ procedures. Dr. Modo personally leads all manual cases." },
                ],
                schema: [
                    { question: "Is manual better than robotic?", answer: "Different strengths, recommended based on case." },
                    { question: "How long can a surgeon work?", answer: "6-8 hours, teams rotate for longer sessions." },
                    { question: "What is DHI vs FUE?", answer: "DHI uses direct implantation, FUE creates channels first." },
                    { question: "Who performs manual DHI?", answer: "Surgeons with 10+ years experience." },
                ],
            },
            cta: {
                title: "Experience Master Artistry",
                description: "Consult with our experts to see if manual DHI is right for your case.",
                buttonText: "Book Free Consultation",
            },
        },
    },
};
