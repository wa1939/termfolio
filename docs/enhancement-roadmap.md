# Termfolio Enhancement Roadmap

## Design Plan

Keep the current terminal identity, but balance it with clearer professional signals. The site should still feel like Waleed, not a generic executive portfolio, while making the first impression safer to share with Saudi, enterprise, and senior audiences.

Current pass:

- Preserve the terminal hero, themes, widgets, vCard, and playful utilities.
- Add a professional signal panel beside the portrait so the casual image has context.
- Add Arabic routes with the same layout and the Thmanyah typeface.
- Keep terminal copy and terminal commands in English across languages.
- Add article digest cards for skim-first readers.
- Add a lab bench for experiments instead of presenting them as polished client projects.
- Add a practical no-login splitter tool as a reason to return.

## Enhancement Roadmap

1. Tighten first impression
   - Keep the portrait and terminal, but make the role, credibility, and work domains visible within the first viewport.
   - Avoid over-explaining. Use short proof signals: People Lab, AI products, analytics, shipped outcomes.

2. Improve reading experience
   - Add skim cards above each article: the point, the map, and three words.
   - Keep full reading controls: focus mode, theme, font size, spacing, progress, and table of contents.
   - Add Arabic UI labels and Arabic typography while respecting the article's original language.

3. Build bilingual trust
   - Mirror the main routes in Arabic: home, about, blog, post, contact, lab, splitter, and digital card.
   - Use Thmanyah for Arabic UI and reading.
   - Keep terminal interactions English to preserve the site's core concept.

4. Reframe projects as experiments
   - Use "lab" and "experiments" language, not "projects" or "case studies."
   - Link to public GitHub repos with short context about why each experiment exists.

5. Polish quality tells
   - Remove heavy side-tab borders.
   - Reduce repetitive AI-ish copy cadence.
   - Strengthen typography hierarchy with mono UI, serif reading, and Thmanyah Arabic surfaces.

## Feature Roadmap

1. Useful public tools
   - Bill splitter, shipped in this pass.
   - Next candidates: meeting note cleaner, Saudi salary/benefits calculator, Arabic PDF text cleaner, decision matrix, and quick Arabic word cloud generator.

2. Return hooks without accounts
   - Save tool state locally.
   - Copy/share outputs cleanly.
   - Add "recent tools" or "pin this tool" using localStorage only.

3. Portfolio-native utility paths
   - Let terminal commands open tools.
   - Keep tools discoverable from home and lab, not hidden behind a portfolio-only nav.
   - Make each tool useful even if the visitor does not care about the portfolio yet.

4. Arabic-first expansions
   - Add original Arabic articles rather than only translating chrome.
   - Add Arabic-specific tools that fit the site: OCR cleanup, PDF extraction, Arabic word-cloud generation.

5. Proof without over-claiming
   - Add a "systems shipped" strip with concise outcomes.
   - Keep experiments separate from professional experience.
   - Link to CV and vCard from clearer contexts.
