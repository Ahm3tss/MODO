import os
import datetime
import re

# Define the directory
posts_dir = "_posts"
os.makedirs(posts_dir, exist_ok=True)

# Helper to format date
def get_date(offset_days):
    d = datetime.date.today() - datetime.timedelta(days=offset_days)
    return d.strftime("%Y-%m-%d")

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# List of 30 blog posts with pre-generated content
posts = [
    {
        "title": "Am I Too Young? The Best Age to Get a Hair Transplant Explained",
        "category": "Candidacy",
        "excerpt": "Discover the ideal age for a hair transplant and why stability matters more than a specific number.",
        "content": """
## The Age Dilemma

"Am I too young?" is one of the most common questions we hear at MODO Clinic. While losing hair in your early 20s can be devastating, rushing into surgery isn't always the best answer.

### The Problem with Early Intervention

If you are 21 years old and receding, your hair loss pattern has not yet stabilized.
*   **Shock Loss Risk**: Surgery can accelerate the shedding of unstable native hair.
*   **Future Planning**: If you use up your donor hair now to fix a small recession, you might not have enough left when your crown thins in your 30s.

### The Ideal Age Range

Generally, the sweet spot for a first transplant is **27 to 35**. By this age, the pattern of baldness usually reveals itself fully, allowing surgeons to design a hairline that will look natural for the rest of your life.

### What If I'm Under 25?

If you are young, the focus should be on **stabilization**.
1.  **Medication**: Finasteride and Minoxidil can halt further loss.
2.  **PRP Therapy**: To strengthen existing follicles.
3.  **Conservative Design**: If surgery is performed, we stick to a mature hairline design rather than a low, aggressive one.
"""
    },
    {
        "title": "FUE vs. FUT vs. DHI: Which Hair Transplant Method is Right for You?",
        "category": "Techniques",
        "excerpt": "A detailed comparison of the major hair transplant techniques to help you choose the right one.",
        "content": """
## Understanding the Alphabet Soup

FUE, FUT, DHI—the acronyms can be confusing. Here is the definitive breakdown.

### FUT (Follicular Unit Transplantation)
*   **The Strip Method**: A strip of skin is removed from the back of the head.
*   **Pros**: High graft yield in one session. Cheaper.
*   **Cons**: Leaves a linear scar. Longer recovery.
*   **Verdict**: Mostly outdated, but useful for extreme hair loss cases.

### FUE (Follicular Unit Extraction)
*   **The Standard**: Individual follicles are extracted and canals are opened before implantation.
*   **Pros**: No linear scar. Faster healing.
*   **Cons**: Requires shaving the head.

### DHI (Direct Hair Implantation)
*   **The Gold Standard**: Uses a Choi Pen to implant directly without pre-opening canals.
*   **Pros**: Highest density. No need to shave the recipient area.
*   **Cons**: More expensive. Takes longer.

### Which is Best?
For most MODO patients seeking density and precision, **DHI** or **Sapphire FUE** are the protocols of choice.
"""
    },
    {
        "title": "The Truth About Pain: How Much Does a Hair Transplant Actually Hurt?",
        "category": "Patient Experience",
        "excerpt": "Debunking the fear of pain with modern needle-free anesthesia techniques.",
        "content": """
## It's Easier Than You Think

Fear of pain is the #1 reason men delay their transplant. But modern technology has changed the game.

### The Only "Ouch" Moment

The only discomfort happens during the administration of local anesthesia. This takes about 3-5 minutes.
*   **Needle-Free Injection**: We use pressure-jet technology to numb the skin without a needle pricking you.
*   **Vibration**: Distraction devices reduce the sensation.

### During the Surgery

Once the scalp is numb, you feel **nothing**.
*   You can watch movies.
*   You can sleep.
*   You can chat with the medical team.

### Post-Op Discomfort

For 2-3 days after, you might feel a tight sensation or mild throbbing, easily managed with basic painkillers like Paracetamol.
"""
    },
    {
        "title": "Can Women Get Hair Transplants? Solutions for Female Pattern Baldness",
        "category": "Candidacy",
        "excerpt": "How hair transplants differ for women and the specialized unshaven techniques available.",
        "content": """
## Breaking the Stigma

Hair loss isn't just a male problem. 40% of women experience visible thinning by age 40.

### Differences in Female Hair Loss
Men recede; women diffuse. Female pattern baldness usually involves overall thinning across the top of the scalp while maintaining the hairline.

### The Approach: Unshaven FUE
Women should almost never have to shave their heads for surgery.
*   **Donor Window**: We shave a small rectangular patch in the back of the head that is completely hidden by your remaining long hair.
*   **Implantation**: We carefully implant between existing long hairs to increase density.

### Forehead Reduction
A common cosmetic request is lowering a naturally high hairline. This is a highly effective procedure that instantly feminizes the face.
"""
    },
    {
        "title": "Beard to Head Transplants: Can Body Hair Restore Your Scalp?",
        "category": "Techniques",
        "excerpt": "Running out of donor hair? Learn how beard and chest hair can be used as a supply.",
        "content": """
## Expanding the Donor Pool

For patients with severe hair loss (Norwood 6-7), the back of the head might not offer enough grafts. Enter **Body Hair Transplantation (BHT)**.

### Beard Hair: The Best Backup
Beard hair is thick, robust, and survives well on the scalp.
*   **Best Use**: Adding density to the crown (vertex) or mixing with scalp hair for the mid-scalp.
*   **Avoid**: Never use beard hair for the soft hairline. It's too coarse.

### Chest Hair
Chest hair is thinner and has a shorter growth cycle.
*   **Best Use**: Only as a last resort for softening harsh transitions.

### Does it look weird?
When mixed properly (e.g., 1 beard hair for every 3 scalp hairs), it blends seamlessly and provides excellent volume.
"""
    },
    {
        "title": "Hair Transplant Myths Debunked: Does It Really Look Like 'Doll Hair'?",
        "category": "Myths",
        "excerpt": "Separating fact from fiction about modern hair restoration results.",
        "content": """
## 1990 vs. 2026

The "Doll Hair" look—plugs of corn-row style hair—is a relic of the old punch graft technique.

### Myth 1: It looks fake.
**Fact**: Modern FUE uses single-hair grafts for the hairline. It is microscopically indistinguishable from nature.

### Myth 2: It's permanent immediately.
**Fact**: The transplanted hair falls out after 3 weeks (Shock Loss) and regrows permanently after 3 months. Patience is required.

### Myth 3: You can use someone else's hair.
**Fact**: This would be an organ transplant. Your body would reject it. You must be your own donor.

### Myth 4: Older men can't get it.
**Fact**: We have successfully treated patients in their 70s. Health matters more than age.
"""
    },
    {
        "title": "Afro-Textured Hair Transplants: Specialized Techniques for Curly Hair",
        "category": "Techniques",
        "excerpt": "Why the 'C-Shape' curl requires expert extraction skills.",
        "content": """
## The Challenge of the Curl

Afro-textured hair is unique. The curl isn't just visible on top; the root itself curls like a hook beneath the skin.

### Why Standard FUE Fails
A standard straight FUE punch can slice right through the curved root (transection), killing the graft.

### The Specialized Approach
1.  **Wider Punches**: We use slightly larger diameter punches (0.9mm - 1.0mm) to accommodate the curl.
2.  **Manual Punch**: Motorized drills can be too fast. Hand-held manual oscillation allows the surgeon to "feel" the curl.
3.  **Test Extraction**: We always start with a test of 10-20 grafts to determine the subsurface curvature.

When done correctly, Afro hair transplants offer amazing coverage because the curl provides superior volume.
"""
    },
    {
        "title": "The Real Cost of Hair Transplants in 2026: Hidden Fees You Should Know",
        "category": "Cost",
        "excerpt": "Comparing costs between UK/US and Turkey, and what 'All-Inclusive' really means.",
        "content": """
## Price vs. Value

A hair transplant in the US or UK typically costs **$10,000 - $20,000**. In Turkey, it ranges from **$2,500 - $5,000**.

### Why the difference?
*   **Cost of Living**: Lower labor and operational costs in Istanbul.
*   **Volume**: High competition drives prices down and quality up.

### Hidden Fees to Watch For
When booking, always ask:
1.  **Is the blood test included?**
2.  **Is the aftercare medication kit included?**
3.  **Is the hotel closest to the clinic?**
4.  **Are transfers private or shared?**

At MODO, our price is final. No surprises.
"""
    },
    {
        "title": "Medical Tourism 101: Is Getting a Hair Transplant in Turkey Safe?",
        "category": "Medical Tourism",
        "excerpt": "How to choose a safe clinic and verify credentials before you fly.",
        "content": """
## The Capital of Hair

Istanbul is the Silicon Valley of hair restoration. But with 500+ clinics, quality varies.

### Safety Checklist
1.  **Hospital Setting**: Ensure the surgery takes place in a JCI-accredited hospital, not a flat or office.
2.  **Surgeon Involvement**: Will the doctor make the incisions, or just technicians? At MODO, doctors lead the surgery.
3.  **Reviews**: Look for video testimonials, not just text reviews which can be faked.
4.  **Certifications**: Look for ISHRS or ABHRS memberships.

Turkey is extremely safe for medical tourists if you choose a licensed, reputable provider.
"""
    },
    {
        "title": "How Many Grafts Do I Need? Understanding Density and Coverage",
        "category": "Planning",
        "excerpt": "A guide to estimating your graft count based on the Norwood scale.",
        "content": """
## The Numbers Game

A "Graft" is a follicular unit containing 1-4 hairs. The average safe donor area has about 6,000-8,000 lifetime grafts available.

### Norwood Scale Estimates
*   **Norwood 2 (Receding Corners)**: 1,500 - 2,000 grafts.
*   **Norwood 3 (Frontal & Temples)**: 2,500 - 3,000 grafts.
*   **Norwood 4 (Front + Crown Start)**: 3,000 - 4,000 grafts.
*   **Norwood 5-6 (Front to Crown)**: 4,000 - 5,500+ grafts (Might need 2 sessions).

### Quality > Quantity
Don't just chase the highest number. Packing 5,000 grafts into a small area can cause necrosis. A good surgeon balances density with safety.
"""
    },
    {
        "title": "Robotic vs. Manual FUE: Is AI Better Than a Human Surgeon?",
        "category": "Technology",
        "excerpt": "Evaluating the pros and cons of robotic assistance in hair restoration.",
        "content": """
## Man vs. Machine

Robotic systems like ARTAS have entered the field. But are they better?

### The Case for Robots
*   **Stamina**: Robots don't get tired or shaky after 6 hours.
*   **Precision**: They can analyze hair angles with mathematical perfection.
*   **Mapping**: AI avoids over-harvesting by randomly selecting grafts.

### The Case for Humans
*   **Artistry**: Hairlines are organic, not geometric. A human eye is often better at creating "perfect imperfections."
*   **Adaptability**: Humans adjust instantly to changes in skin texture or bleeding.

### The Hybrid Approach
The best results come from **Surgeon-Guided Robotics**. Using AI for analysis and extraction, but human hands for the artistic implantation.
"""
    },
    {
        "title": "The Importance of Hairline Design: How We Create a Natural Look",
        "category": "Design",
        "excerpt": "Why the 'straight line' is the enemy of a natural hair transplant.",
        "content": """
## The Art of the Frame

A hairline defines your face. If it looks fake, the whole surgery fails.

### Rules of Natural Design
1.  **Macro-Irregularity**: The hairline should not be a ruler-straight line. It should have gentle waves zig-zagging.
2.  **Micro-Irregularity**: Single hairs act as sentinels in front of the denser line to create a soft transition.
3.  **Facial Muscle Rule**: The hairline must never be placed on the forehead muscles (frontalis), or it will move when you talk.

We design hairlines based on your Golden Ratio facial proportions.
"""
    },
    {
        "title": "Donor Area Management: Will a Transplant Leave My Back Hair Thin?",
        "category": "Techniques",
        "excerpt": "Avoiding over-harvesting and preserving your donor zone for the future.",
        "content": """
## The Finite Resource

Your donor area (back of head) does not regrow. Once a follicle is moved, it's gone from the back forever.

### Avoiding the "Moth-Eaten" Look
If a clinic takes too many grafts (Over-harvesting), the back of your head will look patchy and see-through.
*   **Safe Limit**: We typically never exceed 4,000 - 4,500 grafts in a single day.
*   **The 1:4 Rule**: Ideally, we leave 3 hairs for every 1 we take.

### Homogenization
A skilled surgeon harvests evenly from the entire safe zone, so the reduction in density is uniform and unnoticeable to the naked eye.
"""
    },
    {
        "title": "Platelet-Rich Plasma (PRP) Therapy: Is It Essential After a Transplant?",
        "category": "Treatments",
        "excerpt": "How your own blood platelets can supercharge your transplant results.",
        "content": """
## Biological Fertilizer

PRP involves drawing your blood, spinning it to isolate gold-colored platelets, and injecting them into the scalp.

### Is it necessary?
Technically, no. A transplant can grow without it.
**BUT**, studies show PRP significantly improves the outcome.

### Benefits
1.  **Higher Survival Rate**: Increases blood flow to newly implanted grafts.
2.  **Less Shock Loss**: Can reduce the post-op shedding phase.
3.  **Faster Healing**: Growth factors repair tissue inflammation rapidly.

We include a high-concentration PRP session with every MODO transplant.
"""
    },
    {
        "title": "7 Days Before Surgery: How to Prepare for Your Hair Transplant",
        "category": "Preparation",
        "excerpt": "A countdown checklist to ensure your body is ready for the procedure.",
        "content": """
## The Final Countdown

Surprises in the operating room are bad. Preparation is key.

### 7 Days Out
*   **Stop Blood Thinners**: Avoid Aspirin, Ibuprofen, and multi-vitamins (Vitamin E thins blood).
*   **Stop Alcohol**: Alcohol increases bleeding.
*   **Stop Smoking**: Essential for blood flow.

### 1 Day Out
*   **Sleep**: Get a full 8 hours.
*   **Wash**: Shower and wash your hair thoroughly.
*   **Packing**: Bring a button-up shirt or zip-up hoodie. You cannot pull a t-shirt over your freshly operated head!

### Morning Of
*   **Breakfast**: Eat a hearty breakfast. You need energy for the long day.
*   **Caffeine**: Avoid coffee on the morning of surgery (it raises blood pressure).
"""
    },
    {
        "title": "The 'Ugly Duckling' Phase: Why Your Hair Falls Out Before It Grows",
        "category": "Recovery",
        "excerpt": "Navigating the shedding phase and staying positive during months 1-3.",
        "content": """
## The Trust Process

You leave the clinic looking great with a new hairline. Then, 3 weeks later, it all falls out. Panic sets in.

### Relax. It's Normal.
This is called **Shock Loss**. The trauma of surgery forces hair follicles into the *Telogen* (resting) phase. The hair shaft sheds, but the **bulb** (root) remains safe under the skin.

### The Timeline
*   **Weeks 3-6**: Shedding phase. You might look like you did before surgery.
*   **Months 1-3**: The "Ugly Duckling" phase. Redness, patchy growth.
*   **Month 4**: The Rebirth. Fine hairs start poking through.

Don't judge your result until month 6 minimum!
"""
    },
    {
        "title": "What to Pack for Your Hair Transplant Trip (Medical Tourism Checklist)",
        "category": "Travel",
        "excerpt": "Essential items to pack for your trip to Istanbul.",
        "content": """
## Travel Smart

You are going for surgery, not a holiday. Pack accordingly.

### The Essentials
1.  **Button-Up Shirts / Zip Hoodies**: 3-4 pairs. You cannot wear tight-neck t-shirts for 2 weeks.
2.  **Neck Pillow**: The travel kind. This is MANDATORY for sleeping upright for the first 5 nights.
3.  **Slip-on Shoes**: Avoid bending down to tie laces (increases head pressure).
4.  **Hat**: A loose bucket hat (we usually provide one) for the flight home.
5.  **Entertainment**: iPad, Books. You'll have downtime in the hotel.

Leave the hair gel and styling products at home!
"""
    },
    {
        "title": "Anesthesia Explained: What Happens During the Procedure?",
        "category": "Procedure",
        "excerpt": "A walkthrough of the sedation and local anesthesia process.",
        "content": """
## Staying Comfortable

We use a dual-layer approach to ensure comfort.

### 1. Mild Sedation (Optional)
For anxious patients, we can offer a mild oral sedative (like Xanax) to help you relax before we start.

### 2. Local Anesthesia
This is the main numbing agent.
*   **Ring Block**: Numbing the nerves around the perimeter of the head.
*   **Tumescence**: Injecting a saline/anesthesia mix under the skin to lift it away from the skull. This makes extraction easier and safer.

Once the anesthesia takes effect (5 mins), the area feels "wooden" and you will feel absolutely no pain sensation, only vibration or touch.
"""
    },
    {
        "title": "The First 10 Days: A Daily Guide to Washing Your Newly Transplanted Hair",
        "category": "Recovery",
        "excerpt": "Step-by-step instructions for the critical washing phase.",
        "content": """
## Gentle Hands Only

The grafts are loosely held by fibrin clots for the first few days. One wrong scrub can dislodge them.

### Days 1-2
Detailed wash performed by nurses at the clinic.

### Days 3-9: Home Washing
1.  **Lotion**: Apply the softening foam/lotion. Wait 45 mins. Rinse gently with a cup (NO shower head pressure).
2.  **Shampoo**: Foam up shampoo in hands. Pat gently onto grafts. Do NOT rub.
3.  **Rinse**: Gentle rinse.
4.  **Dry**: Paper towel. Pat dry.

### Day 10: The Scab Removal
Now you can rub. Using circular motions, massage the softened scabs away. Your scalp should be clean and pink after this.
"""
    },
    {
        "title": "Sleeping Safely: How to Sleep After a Hair Transplant to Protect Grafts",
        "category": "Recovery",
        "excerpt": "Why sleeping upright is non-negotiable for the first week.",
        "content": """
## Gravity Wars

For the first 5 nights, your sleeping position decides your swelling level and graft safety.

### The Position
*   **Sem-Upright (45 degrees)**: Use two big pillows or sleep in a recliner chair.
*   **Neck Support**: Use a travel neck pillow to prevent your head from rolling side-to-side.

### Why?
1.  **Swelling**: Fluids drain down and out, rather than pooling in your eyes/face.
2.  **Protection**: Prevents you from rubbing the recipient area against the pillow, which can pull out grafts.

After Night 6, you can return to a normal pillow, but stick to sleeping on your back until Day 14.
"""
    },
    {
        "title": "When Can I Wear a Hat? A Timeline for Headwear After Surgery",
        "category": "Lifestyle",
        "excerpt": "Navigating social interactions and sun protection with headwear.",
        "content": """
## The Cover-Up

We know you want to hide the surgery signs, but patience is required.

### The Timeline
*   **Days 0-5**: **NO HATS.** The grafts are essentially "glue drying." Any contact will rip them out.
*   **Days 6-14**: **Loose Bucket Hat / Fedora**. Only hard, structured hats that rest on the forehead and don't touch the grafts.
*   **Day 15+**: **Baseball Caps / Beanies**. Once the grafts are anchored (after 2 weeks), you can wear normal caps.
*   **Wool Hats**: Wait 1 month, as wool fibers can snag on new hairs.

Always put the hat on using two hands, stretching it wide to avoid scraping.
"""
    },
    {
        "title": "Exercise and Sweating: When Is It Safe to Hit the Gym Again?",
        "category": "Lifestyle",
        "excerpt": "How blood pressure and sweat affect your new hair grafts.",
        "content": """
## No Pain, No Gain? Not Yet.

Exercise raises heart rate and blood pressure. High blood pressure can literally "pop" grafts out of their channels in the first few days.

### The Gym Timeline
*   **Week 1**: Couch potato mode. Short, slow walks only.
*   **Week 2**: Light cardio (elliptical, walking). No heavy sweating.
*   **Week 4**: Heavy weights and running.
*   **Week 6**: Contact sports (Basketball, MMA, Football).

Sweat contains bacteria and salt, which can irritate the healing scalp. If you do sweat, shower immediately with lukewarm water.
"""
    },
    {
        "title": "Alcohol, Caffeine, and Smoking: How Vices Affect Your Graft Survival",
        "category": "Lifestyle",
        "excerpt": "The impact of lifestyle choices on your transplant success rate.",
        "content": """
## Clean Living for Better Growth

### Smoking (Nicotine)
*   **The Killer**: Nicotine constricts blood vessels. Tiny new grafts need maximum blood flow to survive. Smoking chokes them.
*   **Rule**: Stop 1 week before, 2 weeks after.

### Alcohol
*   **The Thinner**: Alcohol thins blood, causing more bleeding during surgery (longer surgery time) and more bruising after.
*   **Rule**: Stop 3 days before, 5 days after.

### Caffeine
*   **The Pressure**: Raises blood pressure.
*   **Rule**: Skip coffee on surgery day. Resume the next day.
"""
    },
    {
        "title": "Dealing with Itchiness and Swelling: Tips for Comfort During Healing",
        "category": "Recovery",
        "excerpt": "Practical remedies for the two most annoying post-op side effects.",
        "content": """
## The Itch Means Healing

Itching is a sign that nerves are regenerating and skin is knitting together. But it can drive you crazy.

### Managing Itch
*   **Saline Spray**: Keep the scalp moist. Spray every 30-60 mins.
*   **Aloe Vera**: Only on the donor area (back).
*   **Don't Scratch**: Tap gently with fingertips.

### Managing Swelling
*   **Ice**: Apply to forehead (not grafts).
*   **Hydrate**: Drink 3L of water.
*   **Massage**: Gently massage the forehead (lymphatic drainage) to push fluid to the ears.
"""
    },
    {
        "title": "Month 3 vs. Month 12: A Visual Timeline of Hair Growth",
        "category": "Results",
        "excerpt": "Managing expectations: What to see in the mirror at each stage.",
        "content": """
## The Waiting Game

### Months 1-3: The Dormant Phase
You look like you never had surgery. The roots are resting.
*   *Vibe*: Disappointment / Anxiety.

### Month 4: The Sprouting
Acne-like bumps might appear as hairs push through. Thin, baby hairs visible.
*   *Vibe*: Excitement.

### Month 6: The Texture Change
Coverage is at 50-60%. Hair gets thicker and coarser.
*   *Vibe*: Confidence returning.

### Month 12: The Final Result
100% density. Hair texture softens and matches native hair.
*   *Vibe*: Transformation complete.
"""
    },
    {
        "title": "Finasteride and Minoxidil: Do You Need Meds Forever After a Transplant?",
        "category": "Medication",
        "excerpt": "The role of medication in protecting your investment.",
        "content": """
## Protecting the Investment

A transplant replaces lost hair, but it **does not** stop the genetic process of balding.

### The Native Hair Risk
If you have aggressive hair loss and get a transplant but take no meds, the transplanted hair will stay, but the *native* hair behind it will recede. You will be left with an island of transplanted hair.

### The Strategy
*   **Finasteride**: Stops the loss. Essential for young patients.
*   **Minoxidil**: Boosts thickness.

We generally recommend staying on medication for at least 1 year post-op to maximize density.
"""
    },
    {
        "title": "Can You Dye or Cut Your Transplanted Hair? Styling Rules to Follow",
        "category": "Lifestyle",
        "excerpt": "When to visit the barber and how to style your new hair.",
        "content": """
## Styling Freedom

The best part of a transplant is treating it like real hair—because it IS real hair.

### Haircuts
*   **Day 15**: Scissor cut only on the sides.
*   **Month 1**: Scissor cut on top.
*   **Month 3**: Clippers/Buzz cut allowed on donor area.
*   **Month 6**: Clippers allowed on recipient area.

### Dye and Chemicals
Chemicals are harsh. Wait **6 weeks** before dyeing your hair. The scalp skin needs to be fully healed and desensitized.
"""
    },
    {
        "title": "Second Hair Transplants: When and Why You Might Need a Touch-Up",
        "category": "Planning",
        "excerpt": "Understanding density passes and multi-stage surgeries.",
        "content": """
## The Two-Stage Strategy

For advanced hair loss (Norwood 5-6), one session cannot cover everything with high density.

### The Strategy
*   **Session 1**: Restore the hairline and mid-scalp.
*   **Session 2 (1 year later)**: Restore the crown (vertex) and add density to the front if needed.

Waiting 1 year allows the donor area to heal fully and the blood supply to completely recover, ensuring high survival rates for the second round.
"""
    },
    {
        "title": "Celebrity Hair Transformations: Analyzing the Best (and Worst) Results",
        "category": "Trends",
        "excerpt": "What we can learn from Elon Musk, Wayne Rooney, and Machine Gun Kelly.",
        "content": """
## Star Power

Celebrities have normalized hair transplants.

### The Good: Elon Musk
From Norwood 4 to a full head.
*   **Why it works**: High density, conservative hairline height suitable for his age. A textbook success.

### The Good: Wayne Rooney
*   **Why it works**: He started early. He has had multiple FUE surgeries to maintain pace with his natural loss.

### The Controversial: Machine Gun Kelly
*   **The look**: Extremely dense, straight, unnatural hairline.
*   **Verdict**: It fits his punk-rock persona, but for the average professional, it might look too artificial.

Lesson: Choose a style that fits *your* life, not a celebrity's.
"""
    },
    {
        "title": "Psychological Impact: How Hair Restoration Boosts Confidence and Career",
        "category": "Wellness",
        "excerpt": "The mental health benefits of restoring your hair frame.",
        "content": """
## More Than Just Vanity

Hair loss is often dismissed as cosmetic, but its psychological toll is real.

### The "Aging" Effect
Premature balding can make men look 10-15 years older. Restoring the hairline resets the facial frame, restoring a youthful energy.

### Professional Confidence
Studies show that men with full heads of hair are perceived as more dominant and successful. Many patients report a surge in career confidence post-procedure.

### The Mirror Check
The biggest change isn't how others see you; it's how you see yourself. Stopping the obsession with checking mirrors or hiding under hats is true freedom.
"""
    }
]

# Write files
for p in posts:
    filename = f"{posts_dir}/{slugify(p['title'])}.md"
    # Stagger dates to look natural over the last 2 months
    date_str = get_date(posts.index(p) * 2) 
    
    # Use the existing working image
    cover_image = "/blog/post1.jpg"

    md_content = f"""---
title: "{p['title']}"
excerpt: "{p['excerpt']}"
date: "{date_str}"
category: "{p['category']}"
coverImage: "{cover_image}"
---

{p['content']}
"""
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"Created {filename}")

print("Successfully generated 30 blog posts.")
