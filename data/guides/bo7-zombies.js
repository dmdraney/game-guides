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
    'While not strictly required, one player with Stun Grenades in their loadout will reduce the time and salvage spent crafting them. Other players with Molotovs and Combat Axes will also relieve you of having to pick them up or craft them. The Frenzied Guard field upgrade is also helpful for crowd control during power pump clears, defense challenges, and the lockdown step.',
  ],
  
  // Steps with enhanced features
  steps: [
    {
      id: 1,
      title: 'Restore Ol\' Tessie',
      description: 'Janus Towers Plaza',
      
      // Visual customization per step
      icon: '🤖',  // Optional emoji icon
      color: '#f89603',  // Optional custom color for this step
      
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
      color: '#f89603',
      
      substeps: [
        'Get in Ol\' Tessie, turn left (southwest), and drive through the wooden barrier',
        'Follow the path to the next zone, Blackwater Lake',
        'Crash through the gate and exit the vehicle'
      ],
      
      tips: [
        'Drive over yellow clusters to heal Ol\' Tessie and gain essence or salvage'
      ],

      // Warnings (shown in red/orange)
      warnings: [
        'Stay in the truck! Agile, four-legged Ravagers prowl the areas between points of interest. They will latch onto moving vehicles, even at high speeds, and can quickly damage Ol\' Tessie and players.',
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
        'This step takes two full rounds. Try to complete the next step (Ravager Eyes) while you wait.'
      ],
      
      warnings: [

      ]
    },

    {
      id: 9,
      title: 'Collect the Ravager Eyes',
      description: 'Vandorn Farm',
      icon: '👁️',
      color: '#f89603',
      
      substeps: [
        'Activate any Saw Trap to kill a Ravager',
        'Collect the Ravager Eyes dropped by the Ravager'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: ''
      },
      
      tips: [
        'Do this step on Round 5-6 or 10-11, which are both special Ravager rounds'
      ],
      
      warnings: [

      ]
    },

    {
      id: 10,
      title: 'Defeat Uber Klaus',
      description: 'Janus Towers Plaza',
      icon: '🐻',
      color: '#f89603',
      
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
      strategy: 'Keep your distance! Uber Klause will charge at players who get too close. Keep moving to avoid his AoE jump attack and energy mines. Aim at the purple glowing parts on his shoulders, which weaken him when broken. '
    },

    {
      id: 11,
      title: 'Activate Friendly Klaus',
      description: 'Ashwood',
      icon: '🤝',
      color: '#f89603',
      
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
        4:  'Throw 2-4 stun grenades at Klaus in quick succession until he is activated (stunned) and moving about the cell'
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
      color: '#f89603',
      
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
        1: 'Required to obtain a serum ingredient',
        2: 'Head left from the Wisp Tea machine and go down the stairs',
        3: 'Look at the ground in front of the machine on the wall to your right and summon or direct Klaus (Tactical slot) who will stomp the ground and cause a green light to appear on the machine',
        4: 'The player who activated the scanner must stay in the red circle that appears on the ground for 60 seconds',
        5: 'Appears in a compartment next to the scanner'
      },
      
      tips: [
        'If you\'ve already used Klaus or otherwise cannot summon him, use the radio (2,000 essence) to summon him',
        'Use your tactical key/button when Klaus is already active to direct him to a specific location',
        'The timer will go faster when facing the scanner. Balance facing the scanner and defending yourself.',
        'Use tacticals, turrets, field upgrades, and other defensive tools to help survive the challenge.'
      ],
      
      warnings: [
        'Stay in the circle! If the player who activated the scanner moves out of the red circle, you will fail the Scan Progress challenge, and you will need to wait until the next round to try again.'
      ]
    },

    {
      id: 13,
      title: 'Fill the Aether Barrel at Blackwater Lake',
      description: 'Blackwater Lake',
      icon: '🏠',
      color: '#f89603',
      
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
        'Don\'t delay! After the first fill-up, you have until the timer runs out to fill the barrel at the other two locations. If you fail, you must repeat the Scanner Progress challenge again.'
      ]
    },

    {
      id: 14,
      title: 'Fill the Aether Barrel at Ashwood',
      description: 'Ashwood',
      icon: '🚚',
      color: '#f89603',
      
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
      color: '#f89603',
      
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
        'Take a screenshot after using the Jump Pad while viewing the farm rooftops if you have trouble remembering the symbols'
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
      color: '#f89603',
      
      substeps: [
        'Input symbols into the Mysterious Box',
        'Start the Gauntlet Trial',
        'Complete the Gauntlet Trial'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Interact with the sides of the box so each displays one of the three symbols',
        1: 'Interact with the red eye on the box and collect the Necrofluid Gauntlet Wonder Weapon',
        2: 'Fire a spike from the Gauntlet at each of the 6 glowing green orbs and reload to recall the spikes and destroy the orbs'
      },
      
      tips: [
        
      ],
      
      warnings: [
        'Be prepared! The trial will start as soon as a player collects the Necrofluid Gauntlet, and the player performing the challenge cannot leave the green circle.'
      ]
    },

    {
      id: 19,
      title: 'Collect the Hoard Husk Chunks',
      description: 'Fog-Shrouded Zones',
      icon: '🌫️',
      color: '#f89603',
      
      substeps: [
        'Drive into the fog-shrouded zones between points of interest',
        'Find a Hoard Husk',
        'Destroy a Hoard Husk',
        'Collect the Hoard Husk Chunks dropped by the Hoard Husk'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Glowing purple masses along the road between zones',
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
      color: '#f89603',
      
      substeps: [
        'Kill Zursa',
        'Collect the Mysterious Limb'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'The Abomination Beam must deal the final blow',
        1: 'Dropped on the ground after killing Zursa'
        
      },
      
      tips: [
        'Zursa spawns at Round 16 and every few rounds thereafter. It can appear anywhere on the map.',
        'If you collect the Powder of the Forgotten first, you can check the code in Yuri\'s Lab (step 22) to see if the limb is required. If not, you can skip this step.'
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 21,
      title: 'Collect the Powder of the Forgotten',
      description: 'Ashwood',
      icon: '💪',
      color: '#f89603',
      
      substeps: [
        'Drive to Ashwood',
        'Ascend the zipline to Market Square',
        'Go to the Tailor Shop',
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
        'Ensure you have the Wisp Tea perk-a-cola before attempting this step.',
        'Wisp Tea has a cooldown timer. If your wisp doesn\'t appear, wait a few minutes and kill again to summon it.'
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 22,
      title: 'Craft the Serum',
      description: 'Zarya Cosmodrome',
      icon: '🧪',
      color: '#f89603',
      
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
            { value: 'ingredient1', label: 'Talus/Human Bones', image: '/images/ingredient_talus.png' },
            { value: 'ingredient2', label: 'Conch/Hoard Husk Chunks', image: '/images/ingredient_conch.png' },
            { value: 'ingredient3', label: 'Fungi/Widow\'s Lantern', image: '/images/ingredient_fungi.png' },
            { value: 'ingredient4', label: 'Oculi/Ravager Eyes', image: '/images/ingredient_oculi.png' },
            { value: 'ingredient5', label: 'Limbs/Mysterious Limb', image: '/images/ingredient_limbs.png' }
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
      color: '#f89603',
      
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
        'Prepare yourself before starting this step. Buy tier 3 armor, pack-a-punch the Necrofluid Gauntlet twice, buy Jugger-Nog and other colas, buy a self-revive kit, buy a point turret, and buy stun grenades.',
        'The vulnerable player can stand in the corner adjacent to the lab table and by the room\'s entrance to maximize space between spawn areas.',
        'Fire preemptive barbs from the Necrofluid Gauntlet at the spawn areas and reload to recall them when zombies begin to appear.'
      ],
      
      warnings: [
        'Incoming! Zombies and Ravagers will spawn continuously during this step.',
        'Protect the president! The player who adds blood to the beaker will have their health reduced to 75 and it will not regenerate. Should they go down, lockdown will fail and you will need to wait until the next round to try again.'
      ]
    },

    {
      id: 24,
      title: 'Collect the Yellow Bruin Key',
      description: 'Fog-Shrouded Zones',
      icon: '🗝️',
      color: '#f89603',
      
      substeps: [
        'Drive to the crashed rocket site between Ashwood and Zarya Cosmodrome',
        'Search the metal tower fallen across the cliffs above road',
        'Search the satellite tower building',
        'Search the dirt ridge on the left side of the road when leaving Ashwood heading to Zarya Cosmodrome',
        'Collect the Yellow Bruin Key'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
                
      },
      
      tips: [
        'Shoot the Necrofluid Gauntlet at the key and reload to retrieve it.',
        'Keys and their debuffs can be offloaded by using them on the Mysterious Box (step 27) before hunting for the next key.'
      ],
      
      warnings: [
        'Debuffs! The player holding the Yellow Bruin Key will be forced to use melee only. Be careful not to get cornered.'
      ]
    },

    {
      id: 25,
      title: 'Collect the Red Nightbird Key',
      description: 'Fog-Shrouded Zones',
      icon: '🗝️',
      color: '#f89603',
      
      substeps: [
        'Drive to Orda Graveyard between Ashwood and Exit 115',
        'Search the large T-Rex skull on the ground',
        'Search the T-Rex skull hanging off the ledge above the road',
        'Search behind the black Janus truck outside of Exit 115',
        'Collect the Red Nightbird Key'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
                
      },
      
      tips: [
        'Shoot the Necrofluid Gauntlet at the key and reload to retrieve it.'
      ],
      
      warnings: [
        'Debuffs! The player holding the Red Nightbird Key will have their health reduced and health regeneration disabled. Have Ol\' Tessie ready for transport.'
      ]
    },

    {
      id: 26,
      title: 'Collect the Green Terapin Key',
      description: 'Fog-Shrouded Zones',
      icon: '🗝️',
      color: '#f89603',
      
      substeps: [
        'Drive to the Grounded Ship between Ashwood and Vandorn Farm',
        'Search the partially opened blue shipping container',
        'Search the window atop the ship next to the blue shipping container',
        'Search behind the barrels in the hull of the ship',
        'Collect the Green Terapin Key'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
                
      },
      
      tips: [
        'Shoot the Necrofluid Gauntlet at the key and reload to retrieve it.'
      ],
      
      warnings: [
        'Debuffs! The player holding the Green Terapin Key will be severely slowed. Have Ol\' Tessie ready for transport.'
      ]
    },

    {
      id: 27,
      title: 'Install the DG-2 Turret',
      description: 'Ashwood',
      icon: '🔧',
      color: '#f89603',
      
      substeps: [
        'Drive to Ashwood',
        'Interact with the Mysterious Cube in Rabbit Alley',
        'Collect the DG-2 Turret Barrel',
        'Install the DG-2 Turret on Ol\' Tessie'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        1: 'Each of the three keys unlocks a chain on the cube.',
        3: 'Use the garage workbench'       
      },
      
      tips: [
        
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 28,
      title: 'Charge the Necrofluid Gauntlet',
      description: 'Ashwood',
      icon: '🕙',
      color: '#f89603',
      
      substeps: [
        'Shoot the clock with the DG-2 Turret',
        'Shoot one of the clock faces with the Necrofluid Gauntlet',
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Floating above the garage',
        1: 'The Gauntlet will turn purple',      
      },
      
      tips: [
        'The charge only lasts for one shot. Return to Ashwood and charge the Gauntlet on the clock again.',
        'If a new round begins, you must shoot the clock again to recharge the Gauntlet.',
        'You can charge the Gauntlet up to three times per round (once per visible clock face). Spinning clock faces indicate the three charges are expended and you must progress to the next round.',
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 29,
      title: 'Complete the Exit 115 Wisp Easter Egg',
      description: 'Exit 115',
      icon: '⚡',
      color: '#f89603',
      
      substeps: [
        'Drive to Exit 115',
        'Summon Klaus at the diner',
        'Shoot the large clock above the gas station with the charged Necrofluid Gauntlet',
        'Wake the Trucker',
        'Lure the Trucker into the red lightning',
        'Wake the Waitress',
        'Lure the Waitress into the purple lightning',
        'Wake the machanic',
        'Lure the Mechanic into the yellow lightning'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        3: 'Shoot the door of the red shipping container with Ol\' Tessie\'s Abomination Beam',
        4: 'Found on the gas station roof',
        5: 'Melee the cash register in the diner',
        6: 'Found on the diner roof',
        7: 'Direct Klaus at the zombie beside the truck inside the service station',
        8: 'Found on the service station roof'
        
      },
      
      tips: [
        'You do not need to lure all three zombies into the lightning in one go. If you miss any, try again on the next even-numbered round.',
        'A wisp will appear when the easter egg has been completed successfully.'
      ],
      
      warnings: [
        'Round restricted! This step can only be completed on an even-numbered round. This is when lightning is present at Exit 115.',
        'Act quickly! You have limited time after shooting the clock with the Gauntlet to complete the steps before the purple effect wears off.',
        'Limited time! Time is stopped for one minute, leaving little time to lure the zombies into the lightning.'
      ]
    },

    {
      id: 30,
      title: 'Complete the Zarya Cosmodrome Wisp Easter Egg',
      description: 'Zarya Cosmodrome',
      icon: '🚀',
      color: '#f89603',
      
      substeps: [
        'Recharge the Necrofluid Gauntlet using the Ashwood clock',
        'Drive to Zarya Cosmodrome',
        'Shoot the two satellite dishes with the Necrofluid Gauntlet to slow them',
        'Solve the pigpen cipher on the screens in the control room',
        'Input the launch code on the bank of computers in the control room to launch the rocket'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        3: 'The symbols will spell a 6-letter word, and each letter in the word corresponds to a number in the launch code',
        4: 'Interact with each computer when the correct number appears'
      },
      
      tips: [
        'Use the section below to track your symbols and decipher the launch code. The code will be one of four words: Engine: (4, 13, 6, 8, 13, 4), Launch: (11, 0, 20, 13, 2, 7), Rocket: (17, 14, 2, 10, 4, 19), Weapon: (22, 4, 0, 15, 14, 13)'
      ],
      
      warnings: [
        
      ],

      interactiveFields: [
        {
          id: 'launch-symbols',
          type: 'image-select',
          label: 'Launch Code',
          description: 'Select the sequence of symbols to decipher the launch code',
          options: [
            { value: 'value1', label: 'Symbol 1', image: '/images/launch_code_a.png' },
            // { value: 'value2', label: 'Symbol 2', image: '/images/launch_code_b.png' },
            { value: 'value3', label: 'Symbol 3', image: '/images/launch_code_c.png' },
            // { value: 'value4', label: 'Symbol 4', image: '/images/launch_code_d.png' },
            { value: 'value5', label: 'Symbol 5', image: '/images/launch_code_e.png' },
            // { value: 'value6', label: 'Symbol 6', image: '/images/launch_code_f.png' },
            { value: 'value7', label: 'Symbol 7', image: '/images/launch_code_g.png' },
            { value: 'value8', label: 'Symbol 8', image: '/images/launch_code_h.png' },
            { value: 'value9', label: 'Symbol 9', image: '/images/launch_code_i.png' },
            // { value: 'value10', label: 'Symbol 10', image: '/images/launch_code_j.png' },
            { value: 'value11', label: 'Symbol 11', image: '/images/launch_code_k.png' },
            { value: 'value12', label: 'Symbol 12', image: '/images/launch_code_l.png' },
            // { value: 'value13', label: 'Symbol 13', image: '/images/launch_code_m.png' },
            { value: 'value14', label: 'Symbol 14', image: '/images/launch_code_n.png' },
            { value: 'value15', label: 'Symbol 15', image: '/images/launch_code_o.png' },
            { value: 'value16', label: 'Symbol 16', image: '/images/launch_code_p.png' },
            // { value: 'value17', label: 'Symbol 17', image: '/images/launch_code_q.png' },
            { value: 'value18', label: 'Symbol 18', image: '/images/launch_code_r.png' },
            // { value: 'value19', label: 'Symbol 19', image: '/images/launch_code_s.png' },
            { value: 'value20', label: 'Symbol 20', image: '/images/launch_code_t.png' },
            { value: 'value21', label: 'Symbol 21', image: '/images/launch_code_u.png' },
            // { value: 'value22', label: 'Symbol 22', image: '/images/launch_code_v.png' },
            { value: 'value23', label: 'Symbol 23', image: '/images/launch_code_w.png' },
            // { value: 'value24', label: 'Symbol 24', image: '/images/launch_code_x.png' },
            // { value: 'value25', label: 'Symbol 25', image: '/images/launch_code_y.png' },
            // { value: 'value26', label: 'Symbol 26', image: '/images/launch_code_z.png' }
          ],
          positions: 6
        }
      ]
    },

    {
      id: 31,
      title: 'Complete the Vandorn Farm Wisp Easter Egg',
      description: 'Vandorn Farm',
      icon: '👨‍🌾',
      color: '#f89603',
      
      substeps: [
        'Recharge the Necrofluid Gauntlet using the Ashwood clock',
        'Drive to Vandorn Farm',
        'Note the hour on the wall clock in the farmhouse dining room',
        'Stand on the roman numeral matching the hour',
        'Shoot the zombie at the head of the table with the Necrofluid Gauntlet after his eyes turn red',
        'Collect the Teddy Bear',
        'Collect the mask',
        'Collect the chalice',
        'Collect Pa\'s Pigsticker',
        'Place the four items in the glowing red circles at the center of the farm',
        'Interact with one of the items to start the Ritual defence challenge',
        'Complete the Ritual defence challenge'

      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        3: 'The numerals are on the floor around the dining table',
        4: 'Spawns items around the farm',
        5: 'Located on the bottom bunk, upstairs in the farmhouse',
        6: 'Located above the crafting bench on the second floor of the barn by the hay bales',
        7: 'Located in the cellar by the bathtub',
        8: 'Located under the workbench in the garage',
        11: 'Protect each item from waves of zombies until the ritual is complete'
        
      },
      
      tips: [
        'Use turrets, Cymbol Monkeys, and the Saw Trap to help defend the items during the ritual.',
        'Assign a player to each item if playing in a full squad. Otherwise, use the Necroflud Gauntlet to proactively fire spines at the items and reload to recall them when zombies get close.'
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 32,
      title: 'Complete the Blackwater Lake Wisp Easter Egg',
      description: 'Blackwater Lake',
      icon: '📽️',
      color: '#f89603',
      
      substeps: [
        'Recharge the Necrofluid Gauntlet using the Ashwood clock',
        'Drive to Blackwater Lake',
        'Interact with the wisp on the dock behind the cabin',
        'Shoot the film projector inside the cabin with the charged Necrofluid Gauntlet',
        'Memorize the sequence of locations displayed on the screen',
        'Shoot the film canister hidden at each location in the correct order with the Necrofluid Gauntlet',
        'Interact with the wisp on the second floor of the cabin',
        'Summon Klaus using the radio on the back porch',
        'Direct Klaus to where the wisp appeared in front of the box on the table at the foot of the bed',
        'Interact with the box'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        5: 'Locations are: on top of the second floor cabinet, on the toolshed shelf, in the boatshed rafters, and under the back cabin stairs by the ammo cache'
      },
      
      tips: [
        
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 33,
      title: 'Prepare for the Boss Fight',
      description: '',
      icon: '🛡️',
      color: '#f89603',
      
      substeps: [
        'Pack-a-Punch weapons',
        'Stock gear and ammo',
        'Charge field upgrades',
        'Stock gobblegum',
        'Purchase Perk-a-Colas'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        0: 'Recommended: Two Pack-a-Punch level III weapons, preferrably the Necrofluid Gauntlet or Ray Gun',
        1: 'Recommended: Stim Shot to mitigate the boss\'s significant damage and Cymbal Monkeys for crowd control',
        2: 'Recommended: Healing Aura to help with team healing',
        3: 'Recommended: Aftertaste, Phoenix Up, and Near Death Experience for revives, and Shields Up, Idle Eyes for protection'
      },
      
      tips: [
        
      ],
      
      warnings: [
        
      ]
    },

    {
      id: 34,
      title: 'Unlock the Boss Area',
      description: 'Fog-Shrouded Zones',
      icon: '🔓',
      color: '#f89603',
      
      substeps: [
        'Interact with Klaus behind the Blackwater Lake cabin',
        'Drive Ol\' Tessie toward Janus Towers Plaza',
        'Collect three red and white wisps in Monolith Forest',
        'Collect three wisps at the Collapsed Tower',
        'Collect three wisps at the Grounded Ship',
        'Collect three wisps at the Lost Cabins'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        
      },
      
      tips: [
        
      ],
      
      warnings: [
        'Collect them all! All three wisps must be collected in each area before moving to the next area.'
      ]
    },

    {
      id: 35,
      title: 'Defeat Vaytharion',
      description: '???',
      icon: '💀',
      color: '#f89603',
      
      substeps: [
        'Use the ramps to slam Ol\' Tessie into Vaytharion\'s glowing red spots or shoot them with the DG-2 Turret',
        'When Vaytharion becomes immune, drive Ol\' Tessie into the purple beam to gain a boost, then ram Vaytharion again',
        'After stunning Vaytharion, shoot the yellow weak spot underneath him',
        'When Vaytharion charges his purple beam at a quarter health, ram him to interrupt the attack',
        'Damage Vaytharion until defeated',
        'After the battle, choose to continue and return to Blackwater Lake to unlock Cursed mode by interacting with the Mysterious Object behind the dock'
      ],

      // Optional: Checklist items can have notes
      substepNotes: {
        
      },
      
      tips: [
        
      ],
      
      warnings: [
        
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
  lastUpdated: '2025-12-12'
};