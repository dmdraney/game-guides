export default {
  // Basic Info
  slug: 'bo7-zombies-easter-egg',
  title: 'Black Ops 7 Zombies: Ashes of the Damned',
  subtitle: 'Complete Walkthrough',
  description: 'Step-by-step guide to completing the main easter egg quest with all secrets revealed',
  
  // Visual Customization
  image: null,  // Emoji icon for card
  coverImage: '/images/bo7z_logo.png',  // Optional: URL to cover image (e.g., '/images/bo7-cover.jpg')
  
  // Theme Colors (customize per guide)
  theme: {
    primary: '#b858eb',      // Main accent color (green for zombies)
    secondary: '#7121ab',    // Darker shade
    background: '#0a0e10',   // Page background
    card: '#1d2123',         // Card/section background
    text: '#f1f5f9',         // Text color
    accent: '#b858eb',       // Optional: highlights, badges
  },
  
  // Layout Options
  layout: {
    style: 'default',        // Options: 'default', 'compact', 'detailed'
    showTips: true,          // Show tips section
    showProgress: true,      // Show progress indicators
    autoExpand: false,       // Auto-expand all steps
    sidebarPosition: 'none', // Options: 'left', 'right', 'none'
  },
  
  // Meta Information
  difficulty: 'Hard',        // Shown on homepage card
  estimatedTime: '45-60 min', // Completion time estimate
  players: '1-4',            // Number of players
  category: 'Easter Egg',    // Guide category
  
  // Requirements (optional)
  requirements: [
    'Level 30+ recommended',
    'Pack-a-Punch unlocked',
    'Ray Gun or Wonder Weapon helpful'
  ],
  
  // Steps with enhanced features
  steps: [
    {
      id: 1,
      title: 'Power Activation',
      description: 'Turn on the power to enable key map features',
      
      // Visual customization per step
      icon: '⚡',  // Optional emoji icon
      color: '#fbbf24',  // Optional custom color for this step
      
      // Step content
      substeps: [
        'Locate the power switch in the spawn room',
        'Clear zombies around the power area',
        'Activate the power switch',
        'Verify all electronics are now active'
      ],
      
      // Tips specific to this step
      tips: [
        'Use a weapon with good ammo capacity',
        'Consider buying Quick Revive before activating power'
      ],
      
      // Warnings (shown in red/orange)
      warnings: [
        'Zombies spawn faster after power is activated'
      ],
      
      // Optional: Images or videos
      media: [
        // { type: 'image', url: '/images/power-switch.jpg', caption: 'Power switch location' },
        // { type: 'video', url: 'https://youtube.com/embed/...', caption: 'Video walkthrough' }
      ],
      
      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Look for the red glowing switch',  // Note for first substep
        2: 'Hold interact button for 3 seconds'
      }
    },
    
    {
      id: 2,
      title: 'Collect the Ancient Artifacts',
      description: 'Find and collect all 4 ancient artifacts scattered across the map',
      icon: '💎',
      
      substeps: [
        'Artifact 1: Located in the Laboratory basement',
        'Artifact 2: Hidden in the Chapel behind the altar',
        'Artifact 3: Found in the Courtyard near the fountain',
        'Artifact 4: Inside the Armory, upper level'
      ],
      
      tips: [
        'Artifacts only spawn after power is activated',
        'You may need Pack-a-Punch weapons for some areas',
        'Use the map to track which artifacts you\'ve collected'
      ],
      
      // Optional: Show a map or reference image
      media: [
        // { type: 'image', url: '/images/artifact-locations.jpg', caption: 'All artifact locations marked' }
      ]
    },
    
    {
      id: 3,
      title: 'Musical Cipher Puzzle',
      description: 'Complete the musical sequence puzzle',
      icon: '🎵',
      color: '#8b5cf6',
      
      substeps: [
        'Find the 3 musical instruments on the map',
        'Listen to the melody played in the main hall',
        'Play the instruments in the correct order: Piano, Violin, Drums',
        'Confirm the door to the crypt opens'
      ],
      
      tips: [
        'Record or remember the melody - it\'s always the same',
        'All players can interact with instruments',
        'The melody is: C, E, G, B flat'
      ],
      
      // Optional: Step variations
      alternatives: [
        'If playing solo, you have 10 seconds between each instrument',
        'In co-op, coordinate with teammates to play simultaneously'
      ]
    },
    
    {
      id: 4,
      title: 'Boss Fight Preparation',
      description: 'Prepare for the final boss encounter',
      icon: '🛡️',
      color: '#ef4444',
      
      substeps: [
        'Pack-a-Punch your primary weapons',
        'Stock up on max ammo and equipment',
        'Ensure all players have Ray Gun or Wonder Weapon',
        'Position near the boss arena entrance'
      ],
      
      tips: [
        'Keep at least 2000 points for emergencies',
        'Juggernog and Speed Cola are essential',
        'Buy armor if available'
      ],
      
      warnings: [
        'This is a point of no return - make sure you\'re ready',
        'Cannot leave boss arena once entered'
      ]
    },
    
    {
      id: 5,
      title: 'Final Boss Battle',
      description: 'Defeat the Ancient Guardian',
      icon: '👹',
      color: '#dc2626',
      
      substeps: [
        'Enter the boss arena through the crypt',
        'Target the glowing weak points on the boss',
        'Survive 3 waves while damaging the boss',
        'Watch the final cutscene'
      ],
      
      tips: [
        'Keep moving - don\'t stay still',
        'Focus weak points during vulnerability phases',
        'Use monkey bombs to manage zombies',
        'Boss has three phases with different attack patterns'
      ],
      
      warnings: [
        'Boss one-hit kills if you get grabbed',
        'Area gets smaller as fight progresses'
      ],
      
      // Boss strategy
      strategy: 'Focus on dodging attacks in Phase 1. In Phase 2, use cover. Phase 3 requires constant movement.'
    }
  ],
  
  // Rewards/Completion info
  rewards: [
    'Dark Ops calling card',
    'Exclusive zombie skin',
    '1000 XP bonus'
  ],
  
  // Related guides (optional)
  relatedGuides: [
    'bo7-zombies-weapons',
    'bo7-zombies-perks'
  ],
  
  // Credits (optional)
  credits: 'Guide created by [Your Name]. Last updated: December 2024',
  
  // Version for tracking updates
  version: '1.0',
  lastUpdated: '2024-12-04'
};