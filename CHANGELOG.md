# Changelog

## Eric Changes - 2025-08-04

### Added
- Dynamic page-based data loading system for memory game
- Game state tracking (gameStarted flag)
- Automatic card shuffling on restart
- ES6 module support across all HTML pages
- Responsive layout improvements
- New game header layout with integrated controls

### Changed

#### Game Logic Updates
- **Restructured data.js** - Converted from flat arrays to nested `pageData` object with page-specific methods and examples
  - *Why*: Allows different pages (array, date, string, etc.) to have their own unique card sets
- **Updated memory game flow** - Cards now load face-down, requiring user to click "Start Game"
  - *Why*: Gives players control over when to begin memorizing, improving user experience
  - Increased to 2000ms to allow CSS flip animation (1.5s) to complete properly
  - *Why*: Better visual experience ensuring animation finishes before cards flip back
- **Enhanced matching logic** - Now properly matches methods with their corresponding examples
  - *Why*: Fixed bug where two methods or two examples could incorrectly match

#### UI/UX Improvements
- **Reorganized game layout** - Moved game info and controls into top orange bar
  - *Why*: Better visibility of game stats without scrolling
- **Removed redundant headers** - Eliminated duplicate h1 "main-header" elements
  - *Why*: Cleaner interface with more space for game content
- **Updated button behavior** - Dynamic text changes between "Start Game" and "Restart Game"
  - *Why*: Clearer indication of game state
- **Optimized card sizing** - Changed from 350x350px to 220x220px with better typography
  - Initial reduction to 180x180px, then increased to 220x220px for better readability
  - Increased font sizes: front cards (18px), back card headings (16px), back card text (12px)
  - *Why*: Balance between screen real estate and text readability

#### Technical Improvements
- **Added ES6 module support** - Added `type="module"` to all script tags
  - *Why*: Required for import/export syntax to work in browsers
- **Fixed import paths** - Added .js extension to import statements
  - *Why*: ES6 modules require explicit file extensions
- **Updated image paths** - Changed from `./images/` to `../images/` for pages directory
  - *Why*: Corrected relative paths for Devslopes logo 

#### CSS Enhancements
- **Fixed layout issues** - Resolved overlapping content and horizontal scrolling
  - *Why*: Improved responsive design and prevented UI breaking on smaller screens
- **Added overflow controls** - Set overflow-x: hidden and overflow-y: auto
  - *Why*: Prevents unwanted horizontal scrolling while allowing vertical scroll
- **Improved card styling** - Added flex-shrink: 0 and adjusted gaps
  - *Why*: Prevents card distortion and improves grid layout
- **Enhanced button styling** - New hover effects and transitions
  - *Why*: Better visual feedback and modern appearance
- **CSS cleanup and optimization** - Removed redundant rules and implemented proper CSS Grid
  - Removed conflicting `#card-area` flexbox styles
  - Eliminated unused `.main` and `.main-header` CSS rules
  - Replaced flexbox card layout with CSS Grid using fixed 4-column layout (`repeat(4, 1fr)`)
  - Added comprehensive responsive breakpoints: 4 columns (desktop), 3 columns (1200px), 2 columns (768px), 1 column (480px)
  - *Why*: Eliminates style conflicts, improves performance, and provides consistent 4-column layout with proper responsive behavior
- **Improved sidebar alignment** - Fixed off-center icons and numbers in collapsed sidebar view
  - Added flexbox centering to sidebar icons and collapse button
  - Improved list item alignment and consistent spacing
  - Enhanced hover states and visual consistency
  - Removed conflicting centering methods (text-align vs flexbox)
  - Changed list items to full width (100%) to eliminate margin offsets
  - Removed redundant line-height properties that interfered with flexbox centering
  - Fixed expanded sidebar layout with proper text alignment and spacing
  - Added different justify-content values for collapsed (center) vs expanded (flex-start) states
  - Prevented text wrapping with white-space: nowrap in expanded mode
  - Implemented consistent icon column width (60px) for uniform left alignment regardless of text length
  - Added `justify-content: center` to anchor tags for perfect icon centering in collapsed mode
  - Overridden with `justify-content: flex-start` in expanded mode for left-aligned text layout
  - *Why*: Better visual alignment and professional appearance in both collapsed and expanded navigation states

### Fixed
- Card flipping animation not working (missing event listeners)
- Incorrect data-symbol attributes for card matching
- Image paths not resolving correctly from pages subdirectory
- Horizontal scrolling issues on smaller viewports
- Card area overlapping with other content
- Memory game starting automatically without user interaction
- Horizontal scrolling caused by main-content width calculation with collapsed sidebar
  - Changed from `width: 100%` to `width: calc(100% - 80px)` to account for 80px collapsed sidebar width
  - Ensures total layout width equals exactly 100vw without overflow

### Technical Details
- Migrated from script-based card creation to module-based dynamic loading
- Implemented proper event delegation for dynamically created cards
- Added game state management to track initialization and active games
- Improved CSS specificity to prevent style conflicts

