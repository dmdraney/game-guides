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
    'Stun Grenades',
  ],
  
  // Steps with enhanced features
  steps: [
    {
      id: 1,
      title: 'Restore Ol\' Tessie',
      description: 'Janus Towers Plaza',
      
      // Visual customization per step
      icon: '🤖',  // Optional emoji icon
      color: '#fbbf24',  // Optional custom color for this step
      
      // Step content
      substeps: [
        'Open the door to the server room (1,250 essence)',
        'Melee the circular grate in the floor and retrieve T.E.D.D.\'s head',
        'Install T.E.D.D.\'s head onto Ol\' Tessie, the pickup truck'
      ],
      
      // Tips specific to this step
      tips: [
        
      ],
      
      // Warnings (shown in red/orange)
      warnings: [
        
      ],
      
      // Optional: Images or videos
      media: [
        // { type: 'image', url: '/images/power-switch.jpg', caption: 'Power switch location' },
        // { type: 'video', url: 'https://youtube.com/embed/...', caption: 'Video walkthrough' }
      ],
      
      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Kill 11-14 zombies',  // Note for first substep
      }
    },
    
    {
      id: 2,
      title: 'Drive',
      description: 'Fog-Shrouded Zones',
      icon: '🌫️',
      
      substeps: [
        'Get in Ol\' Tessie, turn left (southwest), and drive through the wooden barrier',
        'Follow the path to the next zone, Blackwater Lake',
        'Crash through the gate and exit the vehicle'
      ],
      
      tips: [
        'Drive over yellow clusters to heal Ol\' Tessie'
      ],

      // Warnings (shown in red/orange)
      warnings: [
        'Stay in the truck! Agile, four-legged Ravagers prowl the fog-shrouded areas between points of interest. They will latch onto moving vehicles, even at high speeds, and can quickly damage Ol\' Tessie and players.',
        'Avoid orange clusters! Impact will cause an explosion, which will damage Ol\' Tessie'
      ],
      
      // Optional: Show a map or reference image
      media: [
        // { type: 'image', url: '/images/artifact-locations.jpg', caption: 'All artifact locations marked' }
      ]
    },
    
    {
      id: 3,
      title: 'Restore Power to the Cabin',
      description: 'Blackwater Lake',
      icon: '🏠',
      color: '#8b5cf6',
      
      substeps: [
        'Clear the infestation off the power pump',
        'Open the cabin door (1,750 essence)',
        'Turn on the power',
        'Collect the Jar of Spores',
        'Drive to Ashwood'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Shoot the orange clusters on the sides and then the top',
        2: 'The switch is on a boarded-up window on the second floor of the cabin',
        3: 'Located in the cabin\'s kitchen on a shelf under the counter'
      },
      
      tips: [

      ],

      // Warnings (shown in red/orange)
      warnings: [
        'Timed event! You will only have 30 seconds to clear the infestation. The timer starts after dealing any damage to a cluster. If you fail, you must wait until the next round to try again.',
      ],
      
      // Optional: Step variations
      alternatives: [
        
      ]
    },
    
    {
      id: 4,
      title: 'Restore Power to Ashwood',
      description: 'Ashwood',
      icon: '🚚',
      color: '#ef4444',
      
      substeps: [
        'Open the first door (1,000 essence)',
        'Clear the floating debris (1,750)',
        'Clear the infestation off the power pump',
        'Turn on the power',
        'Install the Pack-a-Punch machine on Ol\' Tessie',
        'Drive to Exit 115'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Go up the east zipline and turn right',
        1: 'Go through the first unlocked door and turn right after exiting the house',
        2: 'On a bridge past the cleared debris',
        3: 'The switch is located on a nearby platform overlooking the pump',
        4: 'Park Tessie in the now-open garage and interact with the workbench inside'
      },
      
      tips: [

      ],
      
      warnings: [

      ]
    },
    
    {
      id: 5,
      title: 'Install the Abomination Beam',
      description: 'Exit 115',
      icon: '☄️',
      color: '#dc2626',
      
      substeps: [
        'Open the door to Reba\'s Diner (1,500 essence)',
        'Obtain the Freeze Key',
        'Obtain the Abomination Carcass',
        'Obtain a Combat Axe',
        'Install the Abomination Beam'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Kill zombies in the diner until one drops the orange-glowing key (1-2 rounds)',
        2: 'Use the freeze key to unlock the freezer in the back corner of the diner',
        3: 'Collect one from the meat on the diner kitchen counter or craft one (300 salvage)',
        4: 'Drive back to Ashwood and use the vehicle upgrade bench in the garage'
      },
      
      tips: [

      ],
      
      warnings: [

      ],
      
      // Boss strategy
      strategy: ''
    }
  ],
  
  // Rewards/Completion info
  rewards: [

  ],
  
  // Related guides (optional)
  relatedGuides: [

  ],
  
  // Credits (optional)
  credits: 'Guide by GameGuides. Last updated: December 2025',
  
  // Version for tracking updates
  version: '1.0',
  lastUpdated: '2025-12-04'
};