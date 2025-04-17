import { Question } from "@/types";

export interface Week {
  id: number;
  title: string;
  description: string;
  content: {
    title: string;
    content: string;
  };
  questions: Question[];
}

export const weeks: Week[] = [
  {
    id: 1,
    title: "Introduction to NPTEL",
    description: "Overview of the NPTEL program and its benefits.",
    content: {
      title: "Welcome to NPTEL",
      content: `
        <h2>Introduction to NPTEL</h2>
        <p>NPTEL (National Programme on Technology Enhanced Learning) is an initiative by the MHRD, Government of India to enhance the quality of engineering education in the country by providing free online courseware.</p>
        
        <h3>Benefits of NPTEL</h3>
        <ul>
          <li>Access to high-quality learning resources</li>
          <li>Learn from the best professors in India</li>
          <li>Enhance your skills and knowledge</li>
          <li>Get certified by NPTEL</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What does NPTEL stand for?",
        options: ["National Programme on Technology Enhanced Learning", "National Programme on Technical Education Learning", "National Programme on Technology Education Learning", "National Programme on Technical Enhanced Learning"],
        correctAnswer: "National Programme on Technology Enhanced Learning",
        weekId: 1
      },
      {
        id: 2,
        text: "Who provides the free online courseware in NPTEL?",
        options: ["Private Companies", "MHRD, Government of India", "AICTE", "UGC"],
        correctAnswer: "MHRD, Government of India",
        weekId: 1
      },
      {
        id: 3,
        text: "What is the primary goal of NPTEL?",
        options: ["To provide paid courses", "To enhance the quality of engineering education", "To promote private education", "To reduce the number of engineers"],
        correctAnswer: "To enhance the quality of engineering education",
        weekId: 1
      }
    ]
  },
  {
    id: 2,
    title: "Ecology - Introduction",
    description: "Basic Ecological Principles",
    content: {
      title: "Basic Ecological Principles",
      content: `
        <h2>Ecology - Introduction</h2>
        <p>Ecology is the study of the relationships between living organisms, including humans, and their physical environment. It seeks to understand the vital connections between plants and animals and the world around them.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Biotic Factors:</strong> Living components of an ecosystem (e.g., plants, animals, bacteria).</li>
          <li><strong>Abiotic Factors:</strong> Non-living components of an ecosystem (e.g., sunlight, water, temperature).</li>
          <li><strong>Ecosystem:</strong> A community of living organisms interacting with each other and their physical environment.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is Ecology?",
        options: ["Study of the origin of universe", "Study of the relationships between living organisms and their environment", "Study of rocks", "Study of human behavior"],
        correctAnswer: "Study of the relationships between living organisms and their environment",
        weekId: 2
      },
      {
        id: 2,
        text: "Which of the following is a biotic factor?",
        options: ["Sunlight", "Water", "Plants", "Temperature"],
        correctAnswer: "Plants",
        weekId: 2
      },
      {
        id: 3,
        text: "Which of the following is an abiotic factor?",
        options: ["Animals", "Bacteria", "Sunlight", "Fungi"],
        correctAnswer: "Sunlight",
        weekId: 2
      }
    ]
  },
  {
    id: 3,
    title: "Ecosystem Structure and Function",
    description: "Components and Processes in Ecosystems",
    content: {
      title: "Ecosystem Structure and Function",
      content: `
        <h2>Ecosystem Structure and Function</h2>
        <p>Ecosystems are complex systems with interacting components that perform various functions necessary for life. Understanding the structure and function of ecosystems is crucial for conservation and management.</p>
        
        <h3>Key Components</h3>
        <ul>
          <li><strong>Producers:</strong> Organisms that produce their own food (e.g., plants).</li>
          <li><strong>Consumers:</strong> Organisms that obtain energy by consuming other organisms (e.g., herbivores, carnivores).</li>
          <li><strong>Decomposers:</strong> Organisms that break down dead organic matter (e.g., bacteria, fungi).</li>
        </ul>
        
        <h3>Ecosystem Functions</h3>
        <ul>
          <li><strong>Energy Flow:</strong> The movement of energy through an ecosystem.</li>
          <li><strong>Nutrient Cycling:</strong> The circulation of nutrients within an ecosystem.</li>
          <li><strong>Decomposition:</strong> The breakdown of organic matter.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a producer in an ecosystem?",
        options: ["Herbivore", "Carnivore", "Plant", "Fungi"],
        correctAnswer: "Plant",
        weekId: 3
      },
      {
        id: 2,
        text: "What is the role of decomposers in an ecosystem?",
        options: ["Produce food", "Consume other organisms", "Break down dead organic matter", "Provide shelter"],
        correctAnswer: "Break down dead organic matter",
        weekId: 3
      },
      {
        id: 3,
        text: "What is nutrient cycling?",
        options: ["The movement of energy", "The circulation of nutrients", "The breakdown of organic matter", "The process of photosynthesis"],
        correctAnswer: "The circulation of nutrients",
        weekId: 3
      }
    ]
  },
  {
    id: 4,
    title: "Population Ecology",
    description: "Dynamics of Populations",
    content: {
      title: "Population Ecology",
      content: `
        <h2>Population Ecology</h2>
        <p>Population ecology is the study of populations and how they interact with their environment. It examines factors that affect population size, density, and distribution.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Population Size:</strong> The number of individuals in a population.</li>
          <li><strong>Population Density:</strong> The number of individuals per unit area or volume.</li>
          <li><strong>Population Distribution:</strong> The spatial arrangement of individuals within a population.</li>
        </ul>
        
        <h3>Factors Affecting Population</h3>
        <ul>
          <li><strong>Birth Rate:</strong> The number of births in a population per unit time.</li>
          <li><strong>Death Rate:</strong> The number of deaths in a population per unit time.</li>
          <li><strong>Immigration:</strong> The movement of individuals into a population.</li>
          <li><strong>Emigration:</strong> The movement of individuals out of a population.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is population size?",
        options: ["The number of species in an ecosystem", "The number of individuals in a population", "The area occupied by a population", "The biomass of a population"],
        correctAnswer: "The number of individuals in a population",
        weekId: 4
      },
      {
        id: 2,
        text: "What is population density?",
        options: ["The number of species per unit area", "The number of individuals per unit area", "The distribution of individuals", "The age structure of a population"],
        correctAnswer: "The number of individuals per unit area",
        weekId: 4
      },
      {
        id: 3,
        text: "Which factor does NOT affect population size?",
        options: ["Birth Rate", "Death Rate", "Immigration", "Color"],
        correctAnswer: "Color",
        weekId: 4
      }
    ]
  },
  {
    id: 5,
    title: "Community Ecology",
    description: "Interactions Between Species",
    content: {
      title: "Community Ecology",
      content: `
        <h2>Community Ecology</h2>
        <p>Community ecology is the study of interactions between different species living in the same area. These interactions can have significant impacts on the structure and function of ecological communities.</p>
        
        <h3>Types of Interactions</h3>
        <ul>
          <li><strong>Competition:</strong> Interaction where species compete for the same resources.</li>
          <li><strong>Predation:</strong> Interaction where one species (predator) feeds on another species (prey).</li>
          <li><strong>Mutualism:</strong> Interaction where both species benefit.</li>
          <li><strong>Commensalism:</strong> Interaction where one species benefits and the other is neither harmed nor helped.</li>
          <li><strong>Parasitism:</strong> Interaction where one species (parasite) benefits and the other is harmed.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What type of interaction occurs when both species benefit?",
        options: ["Competition", "Predation", "Mutualism", "Parasitism"],
        correctAnswer: "Mutualism",
        weekId: 5
      },
      {
        id: 2,
        text: "What type of interaction occurs when one species feeds on another?",
        options: ["Competition", "Predation", "Mutualism", "Commensalism"],
        correctAnswer: "Predation",
        weekId: 5
      },
      {
        id: 3,
        text: "What type of interaction occurs when one species benefits and the other is harmed?",
        options: ["Competition", "Predation", "Mutualism", "Parasitism"],
        correctAnswer: "Parasitism",
        weekId: 5
      }
    ]
  },
  {
    id: 6,
    title: "Ecosystem Services",
    description: "Benefits Provided by Ecosystems",
    content: {
      title: "Ecosystem Services",
      content: `
        <h2>Ecosystem Services</h2>
        <p>Ecosystem services are the many and varied benefits that humans freely gain from the natural environment and from properly-functioning ecosystems. These services are crucial for human well-being and economic prosperity.</p>
        
        <h3>Types of Ecosystem Services</h3>
        <ul>
          <li><strong>Provisioning Services:</strong> Products obtained from ecosystems (e.g., food, water, timber).</li>
          <li><strong>Regulating Services:</strong> Benefits obtained from the regulation of ecosystem processes (e.g., climate regulation, water purification).</li>
          <li><strong>Supporting Services:</strong> Services necessary for the production of all other ecosystem services (e.g., nutrient cycling, soil formation).</li>
          <li><strong>Cultural Services:</strong> Non-material benefits people obtain from ecosystems (e.g., recreation, aesthetic enjoyment).</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "Which of the following is a provisioning service?",
        options: ["Climate regulation", "Water purification", "Food production", "Nutrient cycling"],
        correctAnswer: "Food production",
        weekId: 6
      },
      {
        id: 2,
        text: "Which of the following is a regulating service?",
        options: ["Water purification", "Soil formation", "Recreation", "Timber production"],
        correctAnswer: "Water purification",
        weekId: 6
      },
      {
        id: 3,
        text: "Which of the following is a supporting service?",
        options: ["Recreation", "Nutrient cycling", "Food production", "Climate regulation"],
        correctAnswer: "Nutrient cycling",
        weekId: 6
      }
    ]
  },
  {
    id: 7,
    title: "Biodiversity and Conservation",
    description: "Importance of Biodiversity and Conservation Strategies",
    content: {
      title: "Biodiversity and Conservation",
      content: `
        <h2>Biodiversity and Conservation</h2>
        <p>Biodiversity refers to the variety of life on Earth at all its levels, from genes to ecosystems, and can encompass the evolutionary, ecological, and cultural processes that sustain life. Conservation is the protection, preservation, management, or restoration of wildlife and natural resources such as forests, soil, and water.</p>
        
        <h3>Importance of Biodiversity</h3>
        <ul>
          <li><strong>Ecosystem Stability:</strong> Biodiversity enhances the stability and resilience of ecosystems.</li>
          <li><strong>Economic Benefits:</strong> Many industries rely on biodiversity, including agriculture, forestry, and tourism.</li>
          <li><strong>Human Well-being:</strong> Biodiversity provides essential resources and services that support human health and livelihoods.</li>
        </ul>
        
        <h3>Conservation Strategies</h3>
        <ul>
          <li><strong>In-situ Conservation:</strong> Protecting species in their natural habitats.</li>
          <li><strong>Ex-situ Conservation:</strong> Protecting species outside their natural habitats (e.g., zoos, botanical gardens).</li>
          <li><strong>Habitat Restoration:</strong> Restoring degraded habitats to support biodiversity.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What does biodiversity refer to?",
        options: ["The number of species in an area", "The variety of life on Earth", "The study of ecosystems", "The conservation of natural resources"],
        correctAnswer: "The variety of life on Earth",
        weekId: 7
      },
      {
        id: 2,
        text: "Which of the following is an in-situ conservation strategy?",
        options: ["Zoos", "Botanical gardens", "Protecting species in their natural habitats", "Seed banks"],
        correctAnswer: "Protecting species in their natural habitats",
        weekId: 7
      },
      {
        id: 3,
        text: "Which of the following is an ex-situ conservation strategy?",
        options: ["National parks", "Wildlife sanctuaries", "Zoos", "Biosphere reserves"],
        correctAnswer: "Zoos",
        weekId: 7
      }
    ]
  },
  {
    id: 8,
    title: "Climate Change and Its Impacts",
    description: "Understanding Climate Change and Its Effects on Ecosystems",
    content: {
      title: "Climate Change and Its Impacts",
      content: `
        <h2>Climate Change and Its Impacts</h2>
        <p>Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels (like coal, oil and gas), which produces heat-trapping gases.</p>
        
        <h3>Impacts of Climate Change</h3>
        <ul>
          <li><strong>Rising Temperatures:</strong> Increased global temperatures leading to heatwaves and altered weather patterns.</li>
          <li><strong>Sea Level Rise:</strong> Melting glaciers and ice sheets causing sea levels to rise, threatening coastal communities.</li>
          <li><strong>Extreme Weather Events:</strong> More frequent and intense hurricanes, droughts, and floods.</li>
          <li><strong>Ecosystem Disruption:</strong> Changes in species distribution, altered migration patterns, and increased risk of extinction.</li>
        </ul>
        
        <h3>Mitigation and Adaptation</h3>
        <ul>
          <li><strong>Mitigation:</strong> Reducing greenhouse gas emissions to slow down climate change.</li>
          <li><strong>Adaptation:</strong> Adjusting to the current and future effects of climate change.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is the main driver of climate change since the 1800s?",
        options: ["Volcanic eruptions", "Solar activity", "Human activities", "Natural climate variability"],
        correctAnswer: "Human activities",
        weekId: 8
      },
      {
        id: 2,
        text: "Which of the following is an impact of climate change?",
        options: ["Decreased global temperatures", "Sea level fall", "More frequent extreme weather events", "Decreased risk of extinction"],
        correctAnswer: "More frequent extreme weather events",
        weekId: 8
      },
      {
        id: 3,
        text: "What is mitigation in the context of climate change?",
        options: ["Adjusting to the effects of climate change", "Reducing greenhouse gas emissions", "Increasing fossil fuel consumption", "Ignoring climate change"],
        correctAnswer: "Reducing greenhouse gas emissions",
        weekId: 8
      }
    ]
  },
  {
    id: 9,
    title: "Pollution and Its Effects",
    description: "Types of Pollution and Their Impacts on the Environment",
    content: {
      title: "Pollution and Its Effects",
      content: `
        <h2>Pollution and Its Effects</h2>
        <p>Pollution is the introduction of harmful materials into the environment. These materials, called pollutants, can be natural or man-made. Pollution can affect air, water, and land, and can harm human health and the environment.</p>
        
        <h3>Types of Pollution</h3>
        <ul>
          <li><strong>Air Pollution:</strong> Contamination of the air by pollutants such as smoke, gases, and particulate matter.</li>
          <li><strong>Water Pollution:</strong> Contamination of water bodies by pollutants such as chemicals, sewage, and plastic.</li>
          <li><strong>Land Pollution:</strong> Contamination of land by pollutants such as waste, chemicals, and pesticides.</li>
        </ul>
        
        <h3>Effects of Pollution</h3>
        <ul>
          <li><strong>Human Health:</strong> Respiratory problems, cancer, and other health issues.</li>
          <li><strong>Ecosystem Damage:</strong> Harm to plants, animals, and ecosystems.</li>
          <li><strong>Climate Change:</strong> Contribution to greenhouse gas emissions and global warming.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is pollution?",
        options: ["The conservation of natural resources", "The introduction of harmful materials into the environment", "The study of ecosystems", "The protection of wildlife"],
        correctAnswer: "The introduction of harmful materials into the environment",
        weekId: 9
      },
      {
        id: 2,
        text: "Which of the following is a type of pollution?",
        options: ["Conservation", "Restoration", "Air pollution", "Preservation"],
        correctAnswer: "Air pollution",
        weekId: 9
      },
      {
        id: 3,
        text: "Which of the following is an effect of pollution?",
        options: ["Improved human health", "Ecosystem stability", "Climate change", "Increased biodiversity"],
        correctAnswer: "Climate change",
        weekId: 9
      }
    ]
  },
  {
    id: 10,
    title: "Waste Management",
    description: "Strategies for Managing and Reducing Waste",
    content: {
      title: "Waste Management",
      content: `
        <h2>Waste Management</h2>
        <p>Waste management includes the activities and actions required to manage waste from its inception to its final disposal. This includes the collection, transport, treatment, and disposal of waste, together with monitoring and regulation.</p>
        
        <h3>Strategies for Waste Management</h3>
        <ul>
          <li><strong>Reduce:</strong> Minimizing the amount of waste generated.</li>
          <li><strong>Reuse:</strong> Using items more than once.</li>
          <li><strong>Recycle:</strong> Converting waste materials into new products.</li>
          <li><strong>Proper Disposal:</strong> Disposing of waste in an environmentally sound manner.</li>
        </ul>
        
        <h3>Benefits of Effective Waste Management</h3>
        <ul>
          <li><strong>Environmental Protection:</strong> Reducing pollution and conserving natural resources.</li>
          <li><strong>Public Health:</strong> Preventing the spread of disease and improving sanitation.</li>
          <li><strong>Economic Benefits:</strong> Creating jobs and reducing the cost of waste disposal.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What does waste management include?",
        options: ["The study of ecosystems", "The conservation of natural resources", "The activities required to manage waste from inception to disposal", "The protection of wildlife"],
        correctAnswer: "The activities required to manage waste from inception to disposal",
        weekId: 10
      },
      {
        id: 2,
        text: "Which of the following is a strategy for waste management?",
        options: ["Pollution", "Deforestation", "Reduce", "Exploitation"],
        correctAnswer: "Reduce",
        weekId: 10
      },
      {
        id: 3,
        text: "Which of the following is a benefit of effective waste management?",
        options: ["Increased pollution", "Environmental protection", "Climate change", "Loss of biodiversity"],
        correctAnswer: "Environmental protection",
        weekId: 10
      }
    ]
  },
  {
    id: 11,
    title: "Sustainable Development",
    description: "Principles and Goals of Sustainable Development",
    content: {
      title: "Sustainable Development",
      content: `
        <h2>Sustainable Development</h2>
        <p>Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. It involves integrating environmental, social, and economic considerations to achieve long-term well-being.</p>
        
        <h3>Principles of Sustainable Development</h3>
        <ul>
          <li><strong>Environmental Sustainability:</strong> Protecting and conserving natural resources.</li>
          <li><strong>Social Equity:</strong> Ensuring fair and just distribution of resources and opportunities.</li>
          <li><strong>Economic Viability:</strong> Promoting economic growth that is environmentally and socially responsible.</li>
        </ul>
        
        <h3>Goals of Sustainable Development</h3>
        <ul>
          <li><strong>Poverty Reduction:</strong> Eradicating poverty and improving living standards.</li>
          <li><strong>Environmental Protection:</strong> Conserving biodiversity and mitigating climate change.</li>
          <li><strong>Social Justice:</strong> Promoting equality and human rights.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "What is sustainable development?",
        options: ["Development that meets the needs of the present without compromising future generations", "Exploitation of natural resources for economic growth", "Ignoring environmental concerns for short-term gains", "Development that benefits only the current generation"],
        correctAnswer: "Development that meets the needs of the present without compromising future generations",
        weekId: 11
      },
      {
        id: 2,
        text: "Which of the following is a principle of sustainable development?",
        options: ["Environmental degradation", "Social inequality", "Economic viability", "Resource depletion"],
        correctAnswer: "Economic viability",
        weekId: 11
      },
      {
        id: 3,
        text: "Which of the following is a goal of sustainable development?",
        options: ["Increased pollution", "Poverty reduction", "Climate change", "Loss of biodiversity"],
        correctAnswer: "Poverty reduction",
        weekId: 11
      }
    ]
  },
  
  // Add Week 12
  {
    id: 12,
    title: "Wildlife Conservation",
    description: "Learn about the key concepts in wildlife conservation and ecosystem services.",
    content: {
      title: "Wildlife Conservation and Ecosystem Services",
      content: `
        <h2>Wildlife Conservation</h2>
        <p>Wildlife conservation involves the practice of protecting wild plant and animal species and their habitats. The goal is to ensure that nature will be around for future generations to enjoy and to recognize the importance of wildlife and wilderness for humans and other species alike.</p>
        
        <h3>Key Conservation Concepts</h3>
        <ul>
          <li><strong>Habitat:</strong> As per Wildlife Protection Act 1972 (WPA 1972), wildlife includes any animal, aquatic or land vegetation which forms part of any habitat.</li>
          <li><strong>In-situ Conservation:</strong> Conservation of species in their natural habitats.</li>
          <li><strong>Ex-situ Conservation:</strong> Conservation of components of biological diversity outside their natural habitats, such as zoos and botanical gardens.</li>
          <li><strong>Conservation Reserve:</strong> Areas are selected for conservation reserves based on the level of threat, with medium threat levels being preferable.</li>
        </ul>
        
        <h3>Species Classification in Conservation</h3>
        <ul>
          <li><strong>Umbrella Species:</strong> Species with large home ranges that, if protected, indirectly protect many other species.</li>
          <li><strong>Keystone Species:</strong> Species that have a disproportionately large effect on their environment relative to their abundance, such as the fig tree that bears fruit when food is scarce.</li>
          <li><strong>Flagship Species:</strong> Species selected to act as an ambassador or symbol for a defined habitat or environmental cause, such as orchids in Sessa orchid sanctuary.</li>
        </ul>
        
        <p>Some species like tigers and elephants can be classified in multiple categories:</p>
        <ul>
          <li><strong>Tigers:</strong> Have large home ranges, regulate ecosystems through controlling herbivore populations, and attract tourists to reserves - making them umbrella, keystone, and flagship species.</li>
          <li><strong>Elephants:</strong> Have extensive home ranges, regulate ecosystems through their destructive feeding habits, and are charismatic animals that people can relate to - also making them umbrella, keystone, and flagship species.</li>
        </ul>
        
        <h2>Ecosystem Services</h2>
        <p>Ecosystem services are the many and varied benefits that humans freely gain from the natural environment and properly functioning ecosystems. They can be categorized into four main types:</p>
        
        <ul>
          <li><strong>Provisioning Services:</strong> Products obtained from ecosystems such as food, fresh water, fuel, and genetic resources.</li>
          <li><strong>Regulating Services:</strong> Benefits obtained from regulation of ecosystem processes such as climate regulation, water purification, and biological control of pest populations.</li>
          <li><strong>Supporting Services:</strong> Services necessary for the production of all other ecosystem services such as soil formation, nutrient cycling, and primary production.</li>
          <li><strong>Cultural Services:</strong> Non-material benefits people obtain from ecosystems such as recreation, aesthetic experiences, and spiritual enrichment.</li>
        </ul>
      `
    },
    questions: [
      {
        id: 1,
        text: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
        options: ["ecosystem", "state", "country", "habitat"],
        correctAnswer: "habitat",
        weekId: 12
      },
      {
        id: 2,
        text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
        correctAnswer: "all of the above",
        weekId: 12
      },
      {
        id: 3,
        text: "Soil formation is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "supporting service",
        weekId: 12
      },
      {
        id: 4,
        text: "Zoo is an example of",
        options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
        correctAnswer: "ex-situ conservation",
        weekId: 12
      },
      {
        id: 5,
        text: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
        options: ["least concern species", "keystone species", "flagship species", "extinct species"],
        correctAnswer: "keystone species",
        weekId: 12
      },
      {
        id: 6,
        text: "Nutrient cycling is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "supporting service",
        weekId: 12
      },
      {
        id: 7,
        text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
        options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
        correctAnswer: "flagship species",
        weekId: 12
      },
      {
        id: 8,
        text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        options: ["very high", "medium", "very low", "non-existent"],
        correctAnswer: "medium",
        weekId: 12
      },
      {
        id: 9,
        text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
        correctAnswer: "all of the above",
        weekId: 12
      },
      {
        id: 10,
        text: "Biological control of pest populations is an example of",
        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
        correctAnswer: "regulating service",
        weekId: 12
      }
    ]
  }
];

export const getWeekbyId = (id: number): Week | undefined => {
  return weeks.find(week => week.id === id);
};
