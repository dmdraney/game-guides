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
        'Collect the Jar of Spores'
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
        'Drive to Ashwood',
        'Open the first door (1,000 essence)',
        'Clear the floating debris (1,750)',
        'Clear the infestation off the power pump',
        'Turn on the power',
        'Install the Pack-a-Punch machine on Ol\' Tessie'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Go up the east zipline and turn right',
        2: 'Go through the first unlocked door and turn right after exiting the house',
        3: 'On a bridge past the cleared debris',
        4: 'The switch is located on a nearby platform overlooking the pump',
        5: 'Park Tessie in the now-open garage at the center of Ashwood, and interact with the workbench inside'
      },
      
      tips: [

      ],
      
      warnings: [

      ]
    },
    
    {
      id: 5,
      title: 'Install the Abomination Beam',
      description: 'Exit 115 & Ashwood',
      icon: '☄️',
      color: '#dc2626',
      
      substeps: [
        'Drive to Exit 115',
        'Open the door to Reba\'s Diner (1,500 essence)',
        'Obtain the Freeze Key',
        'Obtain the Abomination Carcass',
        'Obtain a Combat Axe',
        'Install the Abomination Beam',
        'Obtain a Molotov'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        2: 'Kill zombies in the diner until one (named "Cook") drops the orange-glowing key (1-2 rounds)',
        3: 'Use the freeze key to unlock the freezer in the back corner of the diner',
        4: 'Collect one from the meat on the diner kitchen counter or craft one (300 salvage)',
        5: 'Drive back to Ashwood and use the vehicle upgrade bench in the garage',
        6: 'Collect one from the barrel outside the garage or craft one (350 salvage)'
      },
      
      tips: [

      ],
      
      warnings: [

      ],
      
      // Boss strategy
      strategy: ''
    },

    {
      id: 6,
      title: 'Restore Power to Vandorn Farm',
      description: 'Vandorn Farm',
      icon: '🚜',
      color: '#dc2626',
      
      substeps: [
        'Drive to Vandorn Farm',
        'Clear the infestation off the power pump',
        'Open the door to the Barn (2,000 essence)',
        'Turn on the power'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        3: 'The switch is located on the barn\'s second floor by the front windows',
        4: 'Drive back to Ashwood and use the vehicle upgrade bench in the garage'
      },
      
      tips: [

      ],
      
      warnings: [

      ]
    },

    {
      id: 7,
      title: 'Collect the Human Bones',
      description: 'Vandorn Farm',
      icon: '🦴',
      color: '#dc2626',
      
      substeps: [
        'Chop off the leg',
        'Burn the leg',
        'Collect the Human Bones'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Throw the Combat Axe at the right leg of the Zombie hanging from the center of the Barn',
        1: 'Throw the Molotov at the severed leg on the ground to burn off the flesh'
      },
      
      tips: [

      ],
      
      warnings: [

      ]
    },

    {
      id: 8,
      title: 'Collect the Widow\'s Lantern',
      description: 'Vandorn Farm',
      icon: '🏮',
      color: '#dc2626',
      
      substeps: [
        'Use the Jar of Spores on the horse carcass',
        'Collect the Widow\'s Lantern'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Located on the road outside the farm (red particles will appear after successful use)',
        1: 'Spawns on the horse carcass after three rounds'
      },
      
      tips: [
        'This step takes three rounds. Try to complete the next step (Ravager Eyes) while you wait.'
      ],
      
      warnings: [

      ]
    },

    {
      id: 9,
      title: 'Collect the Ravager Eyes',
      description: 'Vandorn Farm',
      icon: '👁️',
      color: '#dc2626',
      
      substeps: [
        'Activate the Saw Trap to kill a Ravager',
        'Collect the Ravager Eyes dropped by the Ravager'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: ''
      },
      
      tips: [
        'Do this step on Round 5 or 10, which are both special Ravager rounds'
      ],
      
      warnings: [

      ]
    },

    {
      id: 10,
      title: 'Defeat Uber Klaus',
      description: 'Janus Towers Plaza',
      icon: '🐻',
      color: '#dc2626',
      
      substeps: [
        'Drive to Janus Towers Plaza',
        'Summon Uber Klaus',
        'Defeat Uber Klaus',
        'Defeat Uber Klaus Core',
        'Collect the Stabilizer Chip'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Approach the shipping container on the ledge by the gate to Blackwater Lake'
      },
      
      tips: [
        'Prepare by pack-a-punching a weapon and upgrading its rarity',
        'The Napalm Burst ammo mod is very effective against Uber Klaus'
      ],
      
      warnings: [
        'Mini boss! Only spawns from round 8 onward.'
      ],

      // Boss strategy
      strategy: 'Keep your distance! Uber Klause will charge at players who get too close. Keep moving to avoid his AoE jump attack. Aim at the purple glowing parts on his shoulders, which weaken him when broken. '
    },

    {
      id: 11,
      title: 'Activate Friendly Klaus',
      description: 'Ashwood',
      icon: '🤝',
      color: '#dc2626',
      
      substeps: [
        'Drive to Ashwood',
        'Ascend the zipline to Market Square',
        'Open the door to the Ashwood Sheriff\'s Office (500 essence)',
        'Install the Stabilizer Chip',
        'Restart Friendly Klaus'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'East zipline',
        2: 'Located at the back of the Square to the left',
        3: 'Interact with the device on the cell door (screen will read, "update requires restart")',
        4:  'Throw 2-4 stun grenades at Klaus in quick succession until he is activated and moving about the cell'
      },
      
      tips: [
        'If you brought Stun Grenades in your loadout and haven\'t used them, they should be full from the max ammo powerup after Ravager rounds.',
        'If you need more Stun Grenades, craft them at a work bench (250 salvage) or collect the free Stun Grenade on the shelf next to the Jugger-Nog machine.',
        'Klaus will take the place of your Tactical slot and can be called anywhere on the map for assistance.'
      ],
      
      warnings: [

      ]
    },

    {
      id: 12,
      title: 'Collect the Aether Barrel',
      description: 'Zarya Cosmodrome',
      icon: '🛢️',
      color: '#dc2626',
      
      substeps: [
        'Drive to Zarya Cosmodrome',
        'Purchase the Wisp Tea perk-a-cola',
        'Open the door leading down (1,000 essence)',
        'Restore the broken machine',
        'Complete the Scan Progress challenge',
        'Collect the Aether Barrel'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Required to obtain the serum ingredient',
        2: 'Head left from the Wisp Tea machine and go down the stairs',
        3: 'Look at the ground in front of the machine on the wall to your right and summon or direct Klaus (Tactical slot) who will stomp the ground and cause a green light to appear on the machine',
        4: 'The player who activated the scanner must stay in the red circle that appears on the ground for 60 seconds',
        5: 'Appears in a compartment next to the scanner'
      },
      
      tips: [
        'If you\'ve already used Klaus or otherwise cannot summon him, use the radio (2,000 essence) to summon him',
        'The timer will go faster when facing the scanner. Balance facing the scanner and defending yourself.',
        'Use tacticals, turrets, field upgrades, and other defensive tools to help survive the challenge.'
      ],
      
      warnings: [
        'Stay in the circle! Moving out of the red circle will cause you to fail the Scan Progress challenge, and you will need to wait until the next round to try again.'
      ]
    },

    {
      id: 13,
      title: 'Fill the Aether Barrel at Blackwater Lake',
      description: 'Blackwater Lake',
      icon: '🏠',
      color: '#dc2626',
      
      substeps: [
        'Drive to Blackwater Lake',
        'Insert the Aether Barrel into the Power Pump',
        'Collect the filled Aether Barrel'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Remain in the vicinity and defeat incoming zombies while the progress bar fills'
      },
      
      tips: [
        'The player holding the barrel cannot sprint. Have Ol\' Tessie ready for transport.'
      ],
      
      warnings: [
        'Don\'t fast travel! Using Jump Pads will cause you to drop the Aether Barrel.',
        'Don\'t delay! You have until the timer runs out to fill the barrel at all three locations. If you fail, you must repeat the Scanner Progress challenge again.'
      ]
    },

    {
      id: 14,
      title: 'Fill the Aether Barrel at Ashwood',
      description: 'Ashwood',
      icon: '🚚',
      color: '#dc2626',
      
      substeps: [
        'Drive to Ashwood',
        'Insert the Aether Barrel into the Power Pump',
        'Collect the filled Aether Barrel'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Remain in the vicinity and defeat incoming zombies while the progress bar fills'
      },
      
      tips: [

      ],
      
      warnings: [
        
      ]
    },

    {
      id: 15,
      title: 'Fill the Aether Barrel at Vandorn Farm',
      description: 'Vandorn Farm',
      icon: '🚜',
      color: '#dc2626',
      
      substeps: [
        'Drive to Vandorn Farm',
        'Insert the Aether Barrel into the Power Pump',
        'Collect the filled Aether Barrel'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Remain in the vicinity and defeat incoming zombies while the progress bar fills'
      },
      
      tips: [

      ],
      
      warnings: [
        
      ]
    },

    {
      id: 16,
      title: 'Activate the Mysterious Box',
      description: 'Vandorn Farm',
      icon: '📦',
      color: '#dc2626',
      
      substeps: [
        'Go to the cellar under the barn',
        'Interact with the Mysterious Box'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        
      },
      
      tips: [

      ],
      
      warnings: [
        
      ]
    },

    {
      id: 17,
      title: 'Find the Symbols for the Mysterious Box',
      description: 'Vandorn Farm',
      icon: '⚛️',
      color: '#dc2626',
      
      substeps: [
        'Note the symbol on the barn roof',
        'Note the symbol on the farmhouse roof',
        'Note the symbol on the silo',
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        2: 'Take the Jump Pad to Janus Towers Plaza (500 essence) and look back at Vandorn Farm to see the silo symbol clearly'
      },
      
      tips: [
        'Take a screenshot after using the Jump Pad while viewing the farm rooftops to help remember the symbols'
      ],
      
      warnings: [
        
      ],

      interactiveFields: [
        {
          id: 'symbols',
          type: 'image-select',
          label: 'Mysterious Box Symbols',
          description: 'Select the symbols displayed on the farm building rooftops',
          options: [
            { value: 'symbol1', label: 'Symbol', image: '/images/bo7z-symbol1.png' },
            { value: 'symbol2', label: 'Symbol', image: '/images/bo7z-symbol2.png' },
            { value: 'symbol3', label: 'Symbol', image: '/images/bo7z-symbol3.png' },
            { value: 'symbol4', label: 'Symbol', image: '/images/bo7z-symbol4.png' },
            { value: 'symbol5', label: 'Symbol', image: '/images/bo7z-symbol5.png' },
            { value: 'symbol6', label: 'Symbol', image: '/images/bo7z-symbol6.png' },
            { value: 'symbol7', label: 'Symbol', image: '/images/bo7z-symbol7.png' },
            { value: 'symbol8', label: 'Symbol', image: '/images/bo7z-symbol8.png' },
            { value: 'symbol9', label: 'Symbol', image: '/images/bo7z-symbol9.png' },
            { value: 'symbol10', label: 'Symbol', image: '/images/bo7z-symbol10.png' },
            { value: 'symbol11', label: 'Symbol', image: '/images/bo7z-symbol11.png' },
          ],
          positions: 3
        }
      ]
    },

    {
      id: 18,
      title: 'Complete the Gauntlet Trial',
      description: 'Vandorn Farm',
      icon: '🥊',
      color: '#dc2626',
      
      substeps: [
        'Input symbols into the Mysterious Box',
        'Start the Gauntlet Trial',
        'Complete the Gauntlet Trial'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Interact with the sides of the box so each displays one of the three symbols',
        1: 'Interact with the red eye on the box and collect the Necrofluid Gauntlet Wonder Weapon',
        2: 'Remain in the green area and fire a spike from the Gauntlet at each of the 6 glowing green orbs, reloading the recall the spikes and destroy the orbs'
      },
      
      tips: [
        
      ],
      
      warnings: [
        'Be prepared! The trial will start as soon as a player collects the Necrofluid Gauntlet.'
      ]
    },

    {
      id: 19,
      title: 'Collect the Hoard Husk Chunks',
      description: 'Fog-Shrouded Zones',
      icon: '🌫️',
      color: '#dc2626',
      
      substeps: [
        'Drive into the fog-shrouded zones between points of interest',
        'Find a Hoard Husk',
        'Destroy a Hoard Husk',
        'Collect the Hoard Husk Chunks dropped by the Hoard Husk'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Glowing purple masses along the road',
        2: 'Use Ol\' Tessie\'s Abomination Beam to destroy the Husk'
        
      },
      
      tips: [
        
      ],
      
      warnings: [
        'Be careful! You must exit the car to pick up the Hoard Husk Chunks. Clear the area of enemies and minimize time outside the vehicle.'
      ]
    },

    {
      id: 20,
      title: 'Collect the Mysterious Limb',
      description: 'Anywhere',
      icon: '💪',
      color: '#dc2626',
      
      substeps: [
        'Kill Zursa',
        'Collect the Mysterious Limb'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Use the Abomination Beam to deal the final blow',
        1: 'Dropped on the ground after killing Zursa'
        
      },
      
      tips: [
        'Zursa spawns at Round 16 and every few rounds thereafter. It can appear anywhere on the map.'
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 21,
      title: 'Collect the Powder of the Forgotten',
      description: 'Ashwood',
      icon: '💪',
      color: '#dc2626',
      
      substeps: [
        'Drive to Ashwood',
        'Ascend the zipline to Market Square',
        'Open the door to the Tailor Shop (1,250 essence)',
        'Activate your Wisp',
        'Activate the mirror',
        'Shatter the mirror',
        'Collect the Powder of the Forgotten'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        2: 'Next to the Arsenal machine',
        3: 'Kill zombies until your Wisp appears',
        4: 'Approach the mirror in the Tailor Shop and watch as your Wisp enters it',
        5: 'Shoot the mirror with the Necrofluid Gauntlet to shatter it',
        6: 'Appears on the ground after shattering the mirror'
        
      },
      
      tips: [
        'Ensure you have the Wisp Tea perk-a-cola before attempting this step.'
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 22,
      title: 'Craft the Serum',
      description: 'Zarya Cosmodrome',
      icon: '🧪',
      color: '#dc2626',
      
      substeps: [
        'Drive to Zarya Cosmodrome',
        'Open the door to Yuri\'s Lab (2,000 essence)',
        'Interact with the Powder of the Forgotten',
        'Solve the Pigpen Cipher',
        'Interact with the ingredients in the correct order'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Located next to the M15 MOD 0 wall buy in a building marked by a red star',
        2: 'White powder located in a dish on the lab table in the back corner of the garage',
        3: 'Three encoded ingredients will appear on the chalkboard above the table.',
        4: 'If you fail, you must wait until the next round to try again.'
        
      },
      
      tips: [
        
      ],
      
      warnings: [
        
      ],

      interactiveFields: [
        {
          id: 'ingredients',
          type: 'image-select',
          label: 'Serum Ingredients',
          description: 'Select the ingredients in the correct order',
          options: [
            { value: 'ingredient1', label: 'Talus/Human Bones', image: '/images/talus.png' },
            { value: 'ingredient2', label: 'Conch/Hoard Husk Chunks', image: '/images/conch.png' },
            { value: 'ingredient3', label: 'Fungi/Widow\'s Lantern', image: '/images/fungi.png' },
            { value: 'ingredient4', label: 'Oculi/Ravager Eyes', image: '/images/oculi.png' },
            { value: 'ingredient5', label: 'Limbs/Mysterious Limb', image: '/images/limbs.png' }
          ],
          positions: 3
        }
      ]
    },

    {
      id: 23,
      title: 'Survive the Lockdown',
      description: 'Zarya Cosmodrome',
      icon: '🚨',
      color: '#dc2626',
      
      substeps: [
        'Add blood to the beaker',
        'Fend off zombies for one minute'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Interact with the beaker on the lab table',
        1: 'The smoke will dissipate, doors unlock, and satellite dishes will begin moving outside upon successful completion'
        
      },
      
      tips: [
        'Prepare yourself before starting this step. Buy tier 3 armor, pack-a-punch the Necrofluid Gauntlet twice, buy Jugger-Nog and other colas, buy a self-revive kit, buy a point turret, and buy stun grenades.'
      ],
      
      warnings: [
        'Incoming! Zombies and Ravagers will spawn continuously during this step.',
        'Protect the president! The player who adds blood to the beaker will have their health reduced to 75 and it will not regenerate. Should they go down, lockdown will fail and you will need to wait until the next round to try again.'
      ]
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