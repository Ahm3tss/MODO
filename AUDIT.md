# UI Audit Checklist

> **Phase 1: Stabilization**

## Mobile Responsiveness
- [ ] **Horizontal Overflow**: Scroll right on mobile (375px width). Page should NOT scroll horizontally.
    - *Check*: "TRANSFORMATIONS" heading, WhatsApp button, Footer.
- [ ] **Padding**: Ensure 16px+ padding on left/right of all text containers.

## Visual Glitches
- [ ] **BlurFadeIn Visibility**: Scroll down slowly. Text should become **fully sharp (0px blur)** and **fully opaque** when it hits the center of the viewport. It should NOT remain slightly blurry.
- [ ] **CTA Button**: Verify "Start Your Journey" button in "How It Works".
    - *Check*: Rounded pill shape.
    - *Check*: No orange square background or "tail".
    - *Check*: Hover effect adds glow/shadow but doesn't break shape.

## Interactions
- [ ] **WhatsApp Button**: Tapping opens WhatsApp. Pulse animation does not cause overflow.
- [ ] **Navigation**: Links work and don't cause layout shifts.

## Performance
- [ ] **Console Errors**: No hydration mismatches or 404s in DevTools console.
