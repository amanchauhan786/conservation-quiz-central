
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface WeekContent {
  id: number;
  title: string;
  description: string;
  content: string;
}

export interface Week {
  id: number;
  title: string;
  description: string;
  questions: Question[];
  content: WeekContent;
}

export const weeks: Week[] = [
  {
    id: 1,
    title: "Introduction to Conservation Economics",
    description: "Basic concepts and principles of conservation economics",
    questions: [
      {
        id: "w1q1",
        text: "In the word root for conservation, con stands for",
        options: ["together", "to keep", "house", "manage"],
        correctAnswer: "together"
      },
      {
        id: "w1q2",
        text: "\"the ability of a single economic actor (or small group of actors) to have a substantial influence on market prices\" is known as",
        options: ["price power", "market power", "externality", "economic power"],
        correctAnswer: "market power"
      },
      {
        id: "w1q3",
        text: "\"an economy that allocates resources through the decentralised decisions of many firms and households as they interact in markets for goods and services\" is a / an",
        options: ["urban economy", "rural economy", "planned economy", "market economy"],
        correctAnswer: "market economy"
      },
      {
        id: "w1q4",
        text: "In the word root for conservation, servare stands for",
        options: ["together", "to keep", "house", "manage"],
        correctAnswer: "to keep"
      },
      {
        id: "w1q5",
        text: "Which of these is true?",
        options: ["Wants are unlimited, resources are unlimited", "Wants are limited, resources are limited", "Wants are unlimited, resources are limited", "Wants are limited, resources are unlimited"],
        correctAnswer: "Wants are unlimited, resources are limited"
      },
      {
        id: "w1q6",
        text: "\"an increase in the overall level of prices in the economy\" is",
        options: ["inflation", "deflation", "stagflation", "priceflation"],
        correctAnswer: "inflation"
      },
      {
        id: "w1q7",
        text: "Phillips curve shows the relation between",
        options: ["profit and loss", "marked price and selling price", "inflation rate and unemployment rate", "electricity consumption and heat output"],
        correctAnswer: "inflation rate and unemployment rate"
      },
      {
        id: "w1q8",
        text: "In the word root for Economics, oikos stands for",
        options: ["together", "to keep", "house", "manage"],
        correctAnswer: "house"
      },
      {
        id: "w1q9",
        text: "Most of rational thinking occurs",
        options: ["before the margin", "at the margin", "after the margin", "none of these"],
        correctAnswer: "at the margin"
      },
      {
        id: "w1q10",
        text: "Input costs that do not require an outlay of money are",
        options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"],
        correctAnswer: "implicit costs"
      }
    ],
    content: {
      id: 1,
      title: "Introduction to Conservation Economics",
      description: "This week covers the basic concepts and principles of conservation economics",
      content: `
        <h2 class="text-2xl font-bold mb-4">Introduction to Conservation Economics</h2>
        
        <p class="mb-4">Conservation Economics is a field that bridges economic principles with environmental conservation. It examines how economic activities interact with natural resources and ecosystems.</p>
        
        <h3 class="text-xl font-semibold mb-3">Key Concepts</h3>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Conservation:</strong> From Latin words "con" (together) and "servare" (to keep), meaning to keep together or protect from loss.</li>
          <li class="mb-2"><strong>Economics:</strong> From Greek word "oikos" (house) and "nomos" (managing), referring to household management or management of resources.</li>
          <li class="mb-2"><strong>Market Economy:</strong> An economy where resources are allocated through decentralized decisions of many firms and households interacting in markets.</li>
          <li class="mb-2"><strong>Market Power:</strong> The ability of a single economic actor to have substantial influence on market prices.</li>
          <li class="mb-2"><strong>Inflation:</strong> An increase in the overall level of prices in the economy.</li>
          <li class="mb-2"><strong>Phillips Curve:</strong> Shows the relationship between inflation rate and unemployment rate.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Economic Principles in Conservation</h3>
        
        <p class="mb-4">A fundamental concept in economics is that wants are unlimited while resources are limited. This principle is particularly relevant to conservation economics, as it directly addresses the tension between human desires and natural resource constraints.</p>
        
        <p class="mb-4">Rational thinking in economics often occurs "at the margin," meaning decisions are made by evaluating the costs and benefits of small changes rather than total amounts.</p>
        
        <p class="mb-4">Costs in economics can be categorized as:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Explicit costs:</strong> Costs that require an outlay of money</li>
          <li class="mb-2"><strong>Implicit costs:</strong> Costs that do not require an outlay of money but represent opportunity costs</li>
        </ul>
        
        <p class="font-semibold">These concepts form the foundation for understanding how economic systems interact with natural environments and how conservation efforts can be economically evaluated and justified.</p>
      `
    }
  },
  {
    id: 2,
    title: "Sustainability and Population Dynamics",
    description: "Concepts of sustainability and their relation to population dynamics",
    questions: [
      {
        id: "w2q1",
        text: "Which of these is not a pillar of sustainability?",
        options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"],
        correctAnswer: "trans-boundary sustainability"
      },
      {
        id: "w2q2",
        text: "The Trinity explosion of 1945 is taken as the beginning of the",
        options: ["Holocene", "Cenocene", "Anthropocene", "Eocene"],
        correctAnswer: "Anthropocene"
      },
      {
        id: "w2q3",
        text: "According to Malthusian model,",
        options: ["Population grows in geometric progression, food supply increases in arithmetic progression", "Population grows in geometric progression, food supply increases in geometric progression", "Population grows in arithmetic progression, food supply increases in arithmetic progression", "Population grows in arithmetic progression, food supply increases in geometric progression"],
        correctAnswer: "Population grows in geometric progression, food supply increases in arithmetic progression"
      },
      {
        id: "w2q4",
        text: "The demographic transition sees a society move from",
        options: ["high birth rate, low death rate to low birth rate, high death rate", "low birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, high death rate"],
        correctAnswer: "high birth rate, high death rate to low birth rate, low death rate"
      },
      {
        id: "w2q5",
        text: "Which of these is a pillar of sustainability",
        options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"],
        correctAnswer: "social sustainability"
      },
      {
        id: "w2q6",
        text: "Which of these is a preventive check according to Malthus?",
        options: ["foresight", "vice", "misery", "flood"],
        correctAnswer: "foresight"
      },
      {
        id: "w2q7",
        text: "The quantum of human impacts can be written as",
        options: ["I = P + A + T", "I = P X A + T", "I = P X A X T", "I = P + A X T"],
        correctAnswer: "I = P X A X T"
      },
      {
        id: "w2q8",
        text: "The book \"An Essay on the Principle of Population\" was written by",
        options: ["Darwin", "Malthus", "Spencer", "Owens"],
        correctAnswer: "Malthus"
      },
      {
        id: "w2q9",
        text: "The logistic growth equation curve is",
        options: ["I-shaped", "J-shaped", "S-shaped", "U-shaped"],
        correctAnswer: "S-shaped"
      },
      {
        id: "w2q10",
        text: "Which of these is a positive check according to Malthus?",
        options: ["late marriage", "war", "celibacy", "moral restraint"],
        correctAnswer: "war"
      }
    ],
    content: {
      id: 2,
      title: "Sustainability and Population Dynamics",
      description: "Exploring sustainability concepts and their relationship to population dynamics",
      content: `
        <h2 class="text-2xl font-bold mb-4">Sustainability and Population Dynamics</h2>
        
        <p class="mb-4">This week explores the concepts of sustainability and how they relate to population dynamics, with a focus on Malthusian theory and modern sustainability frameworks.</p>
        
        <h3 class="text-xl font-semibold mb-3">Pillars of Sustainability</h3>
        
        <p class="mb-4">Sustainability consists of three main pillars:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Environmental Sustainability:</strong> Maintaining the quality of the environment and natural resources</li>
          <li class="mb-2"><strong>Economic Sustainability:</strong> Ensuring economic growth without negatively impacting social, environmental, and cultural aspects of the community</li>
          <li class="mb-2"><strong>Social Sustainability:</strong> Ensuring the well-being of current and future generations by recognizing every person's right to fairness and access to livelihood</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">The Anthropocene</h3>
        
        <p class="mb-4">The Anthropocene is a proposed epoch dating from the commencement of significant human impact on Earth's geology and ecosystems. The Trinity explosion of 1945 (the first nuclear bomb test) is often taken as marking the beginning of this era.</p>
        
        <h3 class="text-xl font-semibold mb-3">Malthusian Theory</h3>
        
        <p class="mb-4">Thomas Malthus, in his 1798 book "An Essay on the Principle of Population," proposed that:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Population tends to grow in geometric progression (1, 2, 4, 8...)</li>
          <li class="mb-2">Food supply tends to grow in arithmetic progression (1, 2, 3, 4...)</li>
          <li class="mb-2">This leads to populations outstripping their food supply, resulting in checks on population growth</li>
        </ul>
        
        <p class="mb-4">Malthus identified two types of checks:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Preventive checks:</strong> Voluntary limits to population growth (foresight, late marriage, celibacy, moral restraint)</li>
          <li class="mb-2"><strong>Positive checks:</strong> Involuntary increases in mortality (war, famine, disease)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Demographic Transition</h3>
        
        <p class="mb-4">The demographic transition model shows how populations move from high birth rates and high death rates to low birth rates and low death rates as societies develop economically.</p>
        
        <h3 class="text-xl font-semibold mb-3">Human Impact Equation</h3>
        
        <p class="mb-4">The IPAT equation expresses human impact (I) as a product of:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>P:</strong> Population</li>
          <li class="mb-2"><strong>A:</strong> Affluence (consumption per person)</li>
          <li class="mb-2"><strong>T:</strong> Technology (environmental impact per unit of consumption)</li>
        </ul>
        
        <p class="mb-4">This gives us: I = P × A × T</p>
        
        <h3 class="text-xl font-semibold mb-3">Population Growth Patterns</h3>
        
        <p class="mb-4">The logistic growth equation produces an S-shaped curve showing how population growth is initially slow, then rapid, and finally levels off as it approaches carrying capacity.</p>
      `
    }
  },
  {
    id: 3,
    title: "Environmental Impact Assessment",
    description: "Frameworks for assessing environmental impacts",
    questions: [
      {
        id: "w3q1",
        text: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
        options: ["screening", "scoping", "reporting", "review"],
        correctAnswer: "scoping"
      },
      {
        id: "w3q2",
        text: "\"the potential or capacity of a material to have adverse effects on living organisms\" is",
        options: ["vulnerability", "susceptibility", "sustainability", "toxicity"],
        correctAnswer: "toxicity"
      },
      {
        id: "w3q3",
        text: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of",
        options: ["recovery", "restoration", "enhancement", "replacement"],
        correctAnswer: "restoration"
      },
      {
        id: "w3q4",
        text: "Hydrocarbons derived from incomplete burning of mineral oils are",
        options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
        correctAnswer: "pyrogenic hydrocarbons"
      },
      {
        id: "w3q5",
        text: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
        options: ["recovery", "restoration", "enhancement", "replacement"],
        correctAnswer: "replacement"
      },
      {
        id: "w3q6",
        text: "\"the relative effect of exposure\" is",
        options: ["vulnerability", "sensitivity", "sustainability", "toxicity"],
        correctAnswer: "sensitivity"
      },
      {
        id: "w3q7",
        text: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
        options: ["screening", "scoping", "reporting", "review"],
        correctAnswer: "screening"
      },
      {
        id: "w3q8",
        text: "\"the extent to which a chemical is available for uptake into an organism\" is",
        options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"],
        correctAnswer: "bioavailability"
      },
      {
        id: "w3q9",
        text: "Hydrocarbons derived from biological processes acting on mineral oils are",
        options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
        correctAnswer: "biogenic hydrocarbons"
      },
      {
        id: "w3q10",
        text: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition for",
        options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
        correctAnswer: "maladaptation"
      }
    ],
    content: {
      id: 3,
      title: "Environmental Impact Assessment",
      description: "Understanding frameworks for assessing environmental impacts",
      content: `
        <h2 class="text-2xl font-bold mb-4">Environmental Impact Assessment</h2>
        
        <p class="mb-4">Environmental Impact Assessment (EIA) is a process for evaluating the likely environmental effects of a proposed project or development, taking into account inter-related socio-economic, cultural and human-health impacts.</p>
        
        <h3 class="text-xl font-semibold mb-3">EIA Process</h3>
        
        <p class="mb-4">The EIA process typically involves several key steps:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Screening:</strong> Determines which projects or developments require a full or partial impact assessment study.</li>
          <li class="mb-2"><strong>Scoping:</strong> Identifies which potential impacts are relevant to assess.</li>
          <li class="mb-2"><strong>Assessment:</strong> Predicts and evaluates the significance of the impacts.</li>
          <li class="mb-2"><strong>Mitigation:</strong> Proposes measures to avoid, reduce, remedy or compensate for significant impacts.</li>
          <li class="mb-2"><strong>Reporting:</strong> Presents the findings in an Environmental Impact Statement (EIS).</li>
          <li class="mb-2"><strong>Review:</strong> Examines the adequacy of the EIS.</li>
          <li class="mb-2"><strong>Decision-making:</strong> Approves or rejects the project based on the EIS and other considerations.</li>
          <li class="mb-2"><strong>Monitoring:</strong> Ensures that the conditions of approval are met during project implementation.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Environmental Toxicology Concepts</h3>
        
        <p class="mb-4">Several key concepts in environmental toxicology are relevant to impact assessment:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Toxicity:</strong> The potential or capacity of a material to have adverse effects on living organisms.</li>
          <li class="mb-2"><strong>Sensitivity:</strong> The relative effect of exposure on an organism.</li>
          <li class="mb-2"><strong>Bioavailability:</strong> The extent to which a chemical is available for uptake into an organism.</li>
          <li class="mb-2"><strong>Hydrocarbons:</strong> Can be categorized as:
            <ul class="list-disc pl-6 mt-2">
              <li><strong>Petrogenic:</strong> Derived directly from petroleum products</li>
              <li><strong>Pyrogenic:</strong> Derived from incomplete burning of mineral oils</li>
              <li><strong>Biogenic:</strong> Derived from biological processes acting on mineral oils</li>
            </ul>
          </li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Environmental Restoration and Adaptation</h3>
        
        <p class="mb-4">When environments are degraded by human activities, several approaches may be used:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Restoration:</strong> Returning an ecosystem to its original state (e.g., filling mine pits and replanting native vegetation).</li>
          <li class="mb-2"><strong>Replacement:</strong> Creating a different but valuable ecosystem (e.g., converting a mine into a lake that supports migratory birds).</li>
          <li class="mb-2"><strong>Enhancement:</strong> Improving upon the original ecosystem.</li>
          <li class="mb-2"><strong>Recovery:</strong> Allowing natural processes to heal the ecosystem over time.</li>
        </ul>
        
        <p class="mb-4">In climate adaptation efforts, it's important to avoid <strong>maladaptation</strong>: changes that inadvertently increase vulnerability to climatic stimuli rather than reducing it.</p>
        
        <p class="font-semibold">Environmental impact assessment is a crucial tool for sustainable development, helping to ensure that environmental considerations are incorporated into decision-making processes.</p>
      `
    }
  },
  {
    id: 4,
    title: "Population Ecology and Management",
    description: "Understanding population dynamics and management strategies",
    questions: [
      {
        id: "w4q1",
        text: "Which of these is a deterministic factor?",
        options: ["environmental variation", "forest fire", "death rate", "diseases"],
        correctAnswer: "death rate"
      },
      {
        id: "w4q2",
        text: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
        options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
        correctAnswer: "allelopathy"
      },
      {
        id: "w4q3",
        text: "The movement of lions across the Gir landscape is an example of",
        options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
        correctAnswer: "diffusion"
      },
      {
        id: "w4q4",
        text: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
        options: ["Liebig's law of the minimum", "Liebig's law of the maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"],
        correctAnswer: "Shelford's law of tolerance"
      },
      {
        id: "w4q5",
        text: "The regular, seasonal movement of animals, often along fixed routes is called",
        options: ["translocation", "migration", "dispersal", "drifting"],
        correctAnswer: "migration"
      },
      {
        id: "w4q6",
        text: "Which of these is a stochastic factor?",
        options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
        correctAnswer: "environmental fluctuation"
      },
      {
        id: "w4q7",
        text: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
        options: ["translocation", "migration", "dispersal", "drifting"],
        correctAnswer: "dispersal"
      },
      {
        id: "w4q8",
        text: "Scarcity of food is a",
        options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
        correctAnswer: "push factor"
      },
      {
        id: "w4q9",
        text: "Which of these correctly represents the process of habitat fragmentation and loss?",
        options: ["Original forest → Dissection → Perforation → Fragmentation → Attrition", "Original forest → Dissection → Attrition → Fragmentation → Perforation", "Original forest → Dissection → Perforation → Attrition → Fragmentation", "Original forest → Dissection → Fragmentation → Perforation → Attrition"],
        correctAnswer: "Original forest → Dissection → Perforation → Fragmentation → Attrition"
      },
      {
        id: "w4q10",
        text: "A root zone treatment plant is an example of",
        options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
        correctAnswer: "phytoremediation"
      }
    ],
    content: {
      id: 4,
      title: "Population Ecology and Management",
      description: "Understanding population dynamics and management strategies",
      content: `
        <h2 class="text-2xl font-bold mb-4">Population Ecology and Management</h2>
        
        <p class="mb-4">Population ecology is the study of how populations interact with their environment, including the processes that influence population size, structure, and distribution.</p>
        
        <h3 class="text-xl font-semibold mb-3">Population Dynamics Factors</h3>
        
        <p class="mb-4">Population dynamics are influenced by both deterministic and stochastic factors:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Deterministic factors:</strong> Predictable factors like birth rate and death rate that follow mathematical laws.</li>
          <li class="mb-2"><strong>Stochastic factors:</strong> Random or unpredictable factors like environmental fluctuation, forest fires, or disease outbreaks.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Movement Patterns</h3>
        
        <p class="mb-4">Different types of movement patterns in populations:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Dispersal:</strong> Movement of individuals away from their birthplace into new habitats.</li>
          <li class="mb-2"><strong>Migration:</strong> Regular, seasonal movement, often along fixed routes.</li>
          <li class="mb-2"><strong>Diffusion:</strong> Gradual spread across a landscape, like lions moving across the Gir landscape.</li>
        </ul>
        
        <p class="mb-4">Movement can be influenced by:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Push factors:</strong> Negative conditions that drive animals away, like food scarcity.</li>
          <li class="mb-2"><strong>Pull factors:</strong> Positive conditions that attract animals to new areas.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Ecological Laws</h3>
        
        <p class="mb-4"><strong>Shelford's Law of Tolerance:</strong> The geographical distribution of a species will be controlled by the environmental factor for which the organism has the narrowest range of tolerance.</p>
        
        <h3 class="text-xl font-semibold mb-3">Plant-Plant Interactions</h3>
        
        <p class="mb-4"><strong>Allelopathy:</strong> A phenomenon where one plant inhibits the growth of another through the release of chemical compounds. For example, teak trees release compounds that can prevent vegetables from growing beneath them.</p>
        
        <h3 class="text-xl font-semibold mb-3">Habitat Fragmentation</h3>
        
        <p class="mb-4">The process of habitat fragmentation and loss typically follows this sequence:</p>
        <ol class="list-decimal pl-6 mb-4">
          <li class="mb-2"><strong>Original forest:</strong> Intact habitat</li>
          <li class="mb-2"><strong>Dissection:</strong> Creation of roads or other linear clearings</li>
          <li class="mb-2"><strong>Perforation:</strong> Creation of holes or clearings within the habitat</li>
          <li class="mb-2"><strong>Fragmentation:</strong> Breaking up of habitat into isolated patches</li>
          <li class="mb-2"><strong>Attrition:</strong> Gradual disappearance of remnant patches</li>
        </ol>
        
        <h3 class="text-xl font-semibold mb-3">Environmental Remediation</h3>
        
        <p class="mb-4"><strong>Phytoremediation:</strong> The use of plants to remove, degrade, or contain contaminants in soil, water, or air. A root zone treatment plant is an example where plants are used to clean wastewater.</p>
        
        <p class="font-semibold">Understanding these principles of population ecology is essential for effective conservation management and sustainable development practices.</p>
      `
    }
  },
  {
    id: 5,
    title: "Economic Models and Sustainability",
    description: "Economic models applied to environmental sustainability",
    questions: [
      {
        id: "w5q1",
        text: "\"a measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants\" is",
        options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
        correctAnswer: "elasticity"
      },
      {
        id: "w5q2",
        text: "\"the ability to produce a good using fewer inputs than another producer\" is",
        options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
        correctAnswer: "absolute advantage"
      },
      {
        id: "w5q3",
        text: "Common resource goods are",
        options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
        correctAnswer: "non-excludable, rival in consumption"
      },
      {
        id: "w5q4",
        text: "\"If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own.\" This is a statement for",
        options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
        correctAnswer: "Coase theorem"
      },
      {
        id: "w5q5",
        text: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
        options: ["Good development", "Sustainable development", "Futuristic development", "Gandhian development"],
        correctAnswer: "Sustainable development"
      },
      {
        id: "w5q6",
        text: "Club goods are",
        options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
        correctAnswer: "excludable, non-rival in consumption"
      },
      {
        id: "w5q7",
        text: "Which of these is not a method of internalisation of externalities?",
        options: ["tradable pollution permits", "charities to social causes", "command-and-control policies", "free market"],
        correctAnswer: "free market"
      },
      {
        id: "w5q8",
        text: "Private goods are",
        options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
        correctAnswer: "excludable, rival in consumption"
      },
      {
        id: "w5q9",
        text: "\"a simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions\" is the definition of a / an",
        options: ["equation", "model", "philosophy", "process dynamics"],
        correctAnswer: "model"
      },
      {
        id: "w5q10",
        text: "\"the impact of one person's actions on the well-being of a bystander\" is",
        options: ["actor-observer effect", "externality", "internality", "benefits principle"],
        correctAnswer: "externality"
      }
    ],
    content: {
      id: 5,
      title: "Economic Models and Sustainability",
      description: "Economic models applied to environmental sustainability",
      content: `
        <h2 class="text-2xl font-bold mb-4">Economic Models and Sustainability</h2>
        
        <p class="mb-4">This week explores the relationship between economic models and environmental sustainability, focusing on key economic concepts and how they apply to environmental management.</p>
        
        <h3 class="text-xl font-semibold mb-3">Economic Concepts</h3>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Model:</strong> A simplified description, especially a mathematical one, of a system or process, used to assist calculations and predictions.</li>
          <li class="mb-2"><strong>Elasticity:</strong> A measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants.</li>
          <li class="mb-2"><strong>Absolute Advantage:</strong> The ability to produce a good using fewer inputs than another producer.</li>
          <li class="mb-2"><strong>Externality:</strong> The impact of one person's actions on the well-being of a bystander, which can be positive or negative.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Types of Goods</h3>
        
        <p class="mb-4">Goods can be classified based on two characteristics:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Excludability:</strong> Whether people can be prevented from using the good</li>
          <li class="mb-2"><strong>Rivalry in consumption:</strong> Whether one person's use of the good diminishes another's use</li>
        </ul>
        
        <p class="mb-4">This creates four categories of goods:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Private goods:</strong> Excludable, rival in consumption (e.g., food, clothing)</li>
          <li class="mb-2"><strong>Club goods:</strong> Excludable, non-rival in consumption (e.g., cable TV, private parks)</li>
          <li class="mb-2"><strong>Common resource goods:</strong> Non-excludable, rival in consumption (e.g., fish in the ocean, timber in unprotected forests)</li>
          <li class="mb-2"><strong>Public goods:</strong> Non-excludable, non-rival in consumption (e.g., national defense, clean air)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Internalizing Externalities</h3>
        
        <p class="mb-4">Several methods exist to address externalities:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Command-and-control policies:</strong> Direct regulation of an activity by legislation</li>
          <li class="mb-2"><strong>Tradable pollution permits:</strong> Allows firms to buy and sell the right to emit specific quantities of pollutants</li>
          <li class="mb-2"><strong>Charities to social causes:</strong> Voluntary contributions to address negative externalities</li>
        </ul>
        
        <p class="mb-4">The free market alone is not an effective method for internalizing externalities.</p>
        
        <h3 class="text-xl font-semibold mb-3">Coase Theorem</h3>
        
        <p class="mb-4">The Coase theorem states that "If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own." However, in reality, transaction costs are often significant, limiting the practical application of this theorem.</p>
        
        <h3 class="text-xl font-semibold mb-3">Sustainable Development</h3>
        
        <p class="mb-4">Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. It attempts to balance the economic, social, and environmental aspects of development.</p>
        
        <p class="font-semibold">Understanding these economic concepts is crucial for developing effective environmental policies and sustainable management practices that balance economic growth with environmental protection.</p>
      `
    }
  },
  {
    id: 6,
    title: "Supply, Demand, and Price Mechanisms",
    description: "The role of supply, demand, and price in resource allocation",
    questions: [
      {
        id: "w6q1",
        text: "\"the claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises\" is a statement of",
        options: ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
        correctAnswer: "law of demand"
      },
      {
        id: "w6q2",
        text: "\"a legal maximum on the price at which a good can be sold\" is",
        options: ["price ceiling", "price floor", "selling ceiling", "selling floor"],
        correctAnswer: "price ceiling"
      },
      {
        id: "w6q3",
        text: "\"a good for which, other things being equal, an increase in income leads to a decrease in demand\" is",
        options: ["normal good", "inferior good", "Giffen good", "common good"],
        correctAnswer: "inferior good"
      },
      {
        id: "w6q4",
        text: "\"a table that shows the relationship between the price of a good and the quantity supplied\" is",
        options: ["demand table", "demand schedule", "supply table", "supply schedule"],
        correctAnswer: "supply schedule"
      },
      {
        id: "w6q5",
        text: "\"a graph of the relationship between the price of a good and the quantity demanded\" is",
        options: ["demand curve", "supply curve", "Laffer's curve", "Phillips curve"],
        correctAnswer: "demand curve"
      },
      {
        id: "w6q6",
        text: "\"a table that shows the relationship between the price of a good and the quantity demanded\" is",
        options: ["demand table", "demand schedule", "supply table", "supply schedule"],
        correctAnswer: "demand schedule"
      },
      {
        id: "w6q7",
        text: "\"a measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good\" is",
        options: ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
        correctAnswer: "cross-price elasticity of demand"
      },
      {
        id: "w6q8",
        text: "Rice and wheat are",
        options: ["substitutes", "complements", "club goods", "public goods"],
        correctAnswer: "substitutes"
      },
      {
        id: "w6q9",
        text: "\"a good for which, other things being equal, an increase in income leads to an increase in demand\" is",
        options: ["normal good", "inferior good", "Giffen good", "common good"],
        correctAnswer: "normal good"
      },
      {
        id: "w6q10",
        text: "\"a measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price\" is",
        options: ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
        correctAnswer: "price elasticity of demand"
      }
    ],
    content: {
      id: 6,
      title: "Supply, Demand, and Price Mechanisms",
      description: "The role of supply, demand, and price in resource allocation",
      content: `
        <h2 class="text-2xl font-bold mb-4">Supply, Demand, and Price Mechanisms</h2>
        
        <p class="mb-4">This week explores the fundamental economic concepts of supply, demand, and price mechanisms, and how they affect resource allocation.</p>
        
        <h3 class="text-xl font-semibold mb-3">Law of Demand</h3>
        
        <p class="mb-4">The law of demand states that, other things being equal, the quantity demanded of a good falls when the price of the good rises. This relationship is represented by:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Demand Schedule:</strong> A table that shows the relationship between the price of a good and the quantity demanded</li>
          <li class="mb-2"><strong>Demand Curve:</strong> A graph of the relationship between the price of a good and the quantity demanded (typically downward sloping)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Law of Supply</h3>
        
        <p class="mb-4">Similarly, the supply side of the market is represented by:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Supply Schedule:</strong> A table that shows the relationship between the price of a good and the quantity supplied</li>
          <li class="mb-2"><strong>Supply Curve:</strong> A graph showing the relationship between price and quantity supplied (typically upward sloping)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Types of Goods</h3>
        
        <p class="mb-4">Goods can be categorized based on how demand changes with income:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Normal Good:</strong> A good for which demand increases as income increases</li>
          <li class="mb-2"><strong>Inferior Good:</strong> A good for which demand decreases as income increases</li>
          <li class="mb-2"><strong>Giffen Good:</strong> A special type of inferior good whose demand increases as its price increases (very rare)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Relationships Between Goods</h3>
        
        <p class="mb-4">Goods can also be related to each other in different ways:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Substitutes:</strong> Goods that can be used in place of each other (e.g., rice and wheat)</li>
          <li class="mb-2"><strong>Complements:</strong> Goods that are used together (e.g., cars and gasoline)</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Elasticity Measures</h3>
        
        <p class="mb-4">Several measures help us understand how sensitive demand is to various factors:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Price Elasticity of Demand:</strong> How much the quantity demanded responds to a change in the price of that good</li>
          <li class="mb-2"><strong>Income Elasticity of Demand:</strong> How much the quantity demanded responds to a change in income</li>
          <li class="mb-2"><strong>Cross-Price Elasticity of Demand:</strong> How much the quantity demanded of one good responds to a change in the price of another good</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Price Controls</h3>
        
        <p class="mb-4">Governments sometimes intervene in markets by imposing price controls:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Price Ceiling:</strong> A legal maximum on the price at which a good can be sold (e.g., rent control)</li>
          <li class="mb-2"><strong>Price Floor:</strong> A legal minimum on the price at which a good can be sold (e.g., minimum wage)</li>
        </ul>
        
        <p class="font-semibold">Understanding these economic principles is essential for analyzing how markets allocate resources and how policy interventions might affect market outcomes, especially in environmental contexts.</p>
      `
    }
  },
  {
    id: 7,
    title: "Market Efficiency and Government Policy",
    description: "Evaluating market efficiency and government interventions",
    questions: [
      {
        id: "w7q1",
        text: "\"the price of a good that prevails in the world market for that good\" is the definition of",
        options: ["export price", "import price", "world price", "domestic price"],
        correctAnswer: "world price"
      },
      {
        id: "w7q2",
        text: "The area between the demand curve and the price is an indicator of",
        options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
        correctAnswer: "consumer surplus"
      },
      {
        id: "w7q3",
        text: "\"the amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it\" is",
        options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
        correctAnswer: "consumer surplus"
      },
      {
        id: "w7q4",
        text: "\"the amount a seller is paid for a good minus the seller's cost of providing it\" is",
        options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
        correctAnswer: "producer surplus"
      },
      {
        id: "w7q5",
        text: "Value to buyers - Cost to sellers is",
        options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
        correctAnswer: "total surplus"
      },
      {
        id: "w7q6",
        text: "\"the fall in total surplus that results from a market distortion, such as a tax\" is",
        options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
        correctAnswer: "deadweight loss"
      },
      {
        id: "w7q7",
        text: "Laffer's curve is the relationship between",
        options: ["inflation and unemployment", "tax size and tax revenue", "producer surplus and consumer surplus", "tax size and deadweight loss"],
        correctAnswer: "tax size and tax revenue"
      },
      {
        id: "w7q8",
        text: "Imposition of tariff",
        options: ["increases producer surplus and government revenue", "increases consumer surplus and government revenue", "increases producer surplus, consumer surplus and government revenue", "increases total surplus"],
        correctAnswer: "increases producer surplus and government revenue"
      },
      {
        id: "w7q9",
        text: "\"the maximum amount that a buyer will pay for a good\" is",
        options: ["willingness to pay", "market demand", "demand curve", "buyer's surplus"],
        correctAnswer: "willingness to pay"
      },
      {
        id: "w7q10",
        text: "The area between the supply curve and the price is an indicator of",
        options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
        correctAnswer: "producer surplus"
      }
    ],
    content: {
      id: 7,
      title: "Market Efficiency and Government Policy",
      description: "Evaluating market efficiency and government interventions",
      content: `
        <h2 class="text-2xl font-bold mb-4">Market Efficiency and Government Policy</h2>
        
        <p class="mb-4">This week explores concepts related to market efficiency, welfare analysis, and the impacts of government interventions in markets.</p>
        
        <h3 class="text-xl font-semibold mb-3">Market Welfare Analysis</h3>
        
        <p class="mb-4">Several key concepts help us analyze the welfare effects of markets:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Willingness to Pay:</strong> The maximum amount that a buyer will pay for a good.</li>
          <li class="mb-2"><strong>Consumer Surplus:</strong> The amount a buyer is willing to pay for a good minus the amount actually paid. Graphically, this is the area between the demand curve and the price.</li>
          <li class="mb-2"><strong>Producer Surplus:</strong> The amount a seller is paid for a good minus the seller's cost of providing it. Graphically, this is the area between the price and the supply curve.</li>
          <li class="mb-2"><strong>Total Surplus:</strong> The sum of consumer surplus and producer surplus, or equivalently, the value to buyers minus the cost to sellers.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Market Distortions</h3>
        
        <p class="mb-4">When markets are distorted by taxes, subsidies, or other interventions, they can create inefficiencies:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Deadweight Loss:</strong> The fall in total surplus that results from a market distortion, representing the economic inefficiency caused by the distortion.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">International Trade Concepts</h3>
        
        <p class="mb-4">For goods traded internationally:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>World Price:</strong> The price of a good that prevails in the world market.</li>
          <li class="mb-2"><strong>Tariffs:</strong> Taxes on imported goods that typically increase producer surplus and government revenue but reduce consumer surplus and create deadweight loss.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Tax Policy</h3>
        
        <p class="mb-4">Taxation and its effects on markets:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Laffer Curve:</strong> A theoretical relationship between tax rates and tax revenue, suggesting that there is an optimal tax rate that maximizes revenue.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Impact of Government Interventions</h3>
        
        <p class="mb-4">Different government interventions affect market participants differently:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Tariffs:</strong> Typically increase producer surplus and government revenue at the expense of consumer surplus.</li>
          <li class="mb-2"><strong>Taxes:</strong> Generally create deadweight loss and redistribute surplus among market participants and the government.</li>
          <li class="mb-2"><strong>Subsidies:</strong> Usually benefit producers and/or consumers but cost the government revenue and may create deadweight loss.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Application to Environmental Resources</h3>
        
        <p class="mb-4">In environmental contexts, these concepts help us understand:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">How markets for natural resources operate</li>
          <li class="mb-2">Why markets often fail to efficiently allocate environmental goods</li>
          <li class="mb-2">How government interventions like pollution taxes, cap-and-trade systems, or resource extraction limits might affect different stakeholders</li>
        </ul>
        
        <p class="font-semibold">Understanding these economic welfare concepts provides a framework for evaluating the efficiency and equity implications of various market structures and government policies, particularly in the context of environmental resource management.</p>
      `
    }
  },
  {
    id: 8,
    title: "Externalities and Market Failures",
    description: "Understanding how externalities affect market outcomes",
    questions: [
      {
        id: "w8q1",
        text: "For a positive consumption externality,",
        options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
        correctAnswer: "SMB = PMB + MB"
      },
      {
        id: "w8q2",
        text: "For a positive production externality,",
        options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
        correctAnswer: "SMB = PMB"
      },
      {
        id: "w8q3",
        text: "\"The direct cost to producers of producing an additional unit of a good\" is",
        options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
        correctAnswer: "private marginal cost (PMC)"
      },
      {
        id: "w8q4",
        text: "For a negative production externality,",
        options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
        correctAnswer: "SMC = PMC + MD"
      },
      {
        id: "w8q5",
        text: "\"The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others\" is",
        options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
        correctAnswer: "social marginal cost (SMC)"
      },
      {
        id: "w8q6",
        text: "Partying with loud noise is an example of",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "negative consumption externality"
      },
      {
        id: "w8q7",
        text: "\"When an individual's consumption increases the well-being of others, but the individual is not compensated by those others,\" we have",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "positive consumption externality"
      },
      {
        id: "w8q8",
        text: "\"When a firm's production increases the well-being of others but the firm is not compensated by those others,\" we have",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "positive production externality"
      },
      {
        id: "w8q9",
        text: "\"When an individual's consumption reduces the well-being of others who are not compensated by the individual,\" we have",
        options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
        correctAnswer: "negative consumption externality"
      },
      {
        id: "w8q10",
        text: "For a negative consumption externality,",
        options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
        correctAnswer: "SMB = PMB − MD"
      }
    ],
    content: {
      id: 8,
      title: "Externalities and Market Failures",
      description: "Understanding how externalities affect market outcomes",
      content: `
        <h2 class="text-2xl font-bold mb-4">Externalities and Market Failures</h2>
        
        <p class="mb-4">This week explores externalities, which are costs or benefits affecting someone who did not choose to incur them. Externalities are a major cause of market failure, particularly in environmental contexts.</p>
        
        <h3 class="text-xl font-semibold mb-3">Types of Externalities</h3>
        
        <p class="mb-4">Externalities can be categorized based on whether they arise from production or consumption, and whether they create positive or negative effects:</p>
        
        <h4 class="text-lg font-medium mb-2">Negative Production Externalities</h4>
        <p class="mb-4">"When a firm's production reduces the well-being of others who are not compensated by the firm." Examples include:
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Factory pollution affecting nearby residents</li>
          <li class="mb-2">Agricultural runoff contaminating water supplies</li>
        </ul>
        </p>
        
        <h4 class="text-lg font-medium mb-2">Positive Production Externalities</h4>
        <p class="mb-4">"When a firm's production increases the well-being of others but the firm is not compensated by those others." Examples include:
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Research and development creating knowledge spillovers</li>
          <li class="mb-2">Beekeepers whose bees pollinate nearby crops</li>
        </ul>
        </p>
        
        <h4 class="text-lg font-medium mb-2">Negative Consumption Externalities</h4>
        <p class="mb-4">"When an individual's consumption reduces the well-being of others who are not compensated by the individual." Examples include:
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Partying with loud noise disturbing neighbors</li>
          <li class="mb-2">Smoking in public spaces</li>
        </ul>
        </p>
        
        <h4 class="text-lg font-medium mb-2">Positive Consumption Externalities</h4>
        <p class="mb-4">"When an individual's consumption increases the well-being of others, but the individual is not compensated by those others." Examples include:
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Getting vaccinated, which protects others from disease</li>
          <li class="mb-2">Restoring a historic home, which beautifies the neighborhood</li>
        </ul>
        </p>
        
        <h3 class="text-xl font-semibold mb-3">Marginal Analysis of Externalities</h3>
        
        <p class="mb-4">Key concepts in analyzing externalities:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Private Marginal Cost (PMC):</strong> The direct cost to producers of producing an additional unit of a good.</li>
          <li class="mb-2"><strong>Social Marginal Cost (SMC):</strong> The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others.</li>
          <li class="mb-2"><strong>Private Marginal Benefit (PMB):</strong> The direct benefit to consumers of consuming an additional unit of a good.</li>
          <li class="mb-2"><strong>Social Marginal Benefit (SMB):</strong> The private marginal benefit to consumers plus any benefits associated with the consumption of the good that accrue to others.</li>
          <li class="mb-2"><strong>Marginal Damage (MD):</strong> The additional harm caused by one more unit of production or consumption.</li>
          <li class="mb-2"><strong>Marginal Benefit (MB):</strong> The additional benefit created by one more unit of production or consumption.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Relationships Between Social and Private Costs/Benefits</h3>
        
        <p class="mb-4">For different types of externalities, the relationships between social and private costs/benefits are as follows:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Negative Production Externality:</strong> SMC = PMC + MD</li>
          <li class="mb-2"><strong>Positive Production Externality:</strong> SMB = PMB</li>
          <li class="mb-2"><strong>Negative Consumption Externality:</strong> SMB = PMB − MD</li>
          <li class="mb-2"><strong>Positive Consumption Externality:</strong> SMB = PMB + MB</li>
        </ul>
        
        <p class="font-semibold">Understanding externalities is crucial for environmental economics, as many environmental problems—such as pollution, resource depletion, and habitat destruction—involve significant externalities that markets fail to address efficiently without intervention.</p>
      `
    }
  },
  {
    id: 9,
    title: "Firm Behavior and Market Structures",
    description: "Analysis of different market structures and firm behavior",
    questions: [
      {
        id: "w9q1",
        text: "\"costs that have already been committed and cannot be recovered\" are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "sunk costs"
      },
      {
        id: "w9q2",
        text: "\"total revenue minus total cost, including both explicit and implicit costs\" is a definition of",
        options: ["economic profit", "accounting profit", "profit", "loss"],
        correctAnswer: "economic profit"
      },
      {
        id: "w9q3",
        text: "\"the increase in total cost that arises from an extra unit of production\" are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "marginal costs"
      },
      {
        id: "w9q4",
        text: "A monopolist firm's profit is given by",
        options: ["(Price - ATC) × Q", "(Price - Q) × ATC", "(ATC - Q) × Price", "Price × Q - ATC"],
        correctAnswer: "(Price - ATC) × Q"
      },
      {
        id: "w9q5",
        text: "Which of the following is true for a competitive firm?",
        options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
        correctAnswer: "MR = MC"
      },
      {
        id: "w9q6",
        text: "\"the amount a firm receives for the sale of its output\" is a definition of",
        options: ["total revenue", "total cost", "profit", "loss"],
        correctAnswer: "total revenue"
      },
      {
        id: "w9q7",
        text: "When the cost of production for a single firm is much lesser than the cost of production for competitive firms, we have a / an",
        options: ["natural monopoly", "artificial monopoly", "oligopoly", "duopoly"],
        correctAnswer: "natural monopoly"
      },
      {
        id: "w9q8",
        text: "\"costs that do not vary with the quantity of output produced\" are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "fixed costs"
      },
      {
        id: "w9q9",
        text: "\"costs that vary with the quantity of output produced\" are",
        options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
        correctAnswer: "variable costs"
      },
      {
        id: "w9q10",
        text: "\"the increase in output that arises from an additional unit of input\" is",
        options: ["marginal product", "marginal profit", "marginal loss", "marginal cost"],
        correctAnswer: "marginal product"
      }
    ],
    content: {
      id: 9,
      title: "Firm Behavior and Market Structures",
      description: "Analysis of different market structures and firm behavior",
      content: `
        <h2 class="text-2xl font-bold mb-4">Firm Behavior and Market Structures</h2>
        
        <p class="mb-4">This week explores how firms make production decisions under different market structures, with a focus on costs, revenue, and profit maximization.</p>
        
        <h3 class="text-xl font-semibold mb-3">Cost Concepts</h3>
        
        <p class="mb-4">Understanding different types of costs is fundamental to analyzing firm behavior:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Fixed Costs:</strong> Costs that do not vary with the quantity of output produced (e.g., rent, insurance).</li>
          <li class="mb-2"><strong>Variable Costs:</strong> Costs that vary with the quantity of output produced (e.g., raw materials, labor).</li>
          <li class="mb-2"><strong>Marginal Costs:</strong> The increase in total cost that arises from producing an extra unit of output.</li>
          <li class="mb-2"><strong>Sunk Costs:</strong> Costs that have already been committed and cannot be recovered, regardless of future decisions.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Revenue and Profit</h3>
        
        <p class="mb-4">Key concepts related to firm revenue and profit:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Total Revenue:</strong> The amount a firm receives for the sale of its output (Price × Quantity).</li>
          <li class="mb-2"><strong>Marginal Revenue (MR):</strong> The additional revenue from selling one more unit of output.</li>
          <li class="mb-2"><strong>Economic Profit:</strong> Total revenue minus total cost, including both explicit and implicit costs.</li>
          <li class="mb-2"><strong>Accounting Profit:</strong> Total revenue minus explicit costs only.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Profit Maximization</h3>
        
        <p class="mb-4">Firms maximize profit by producing where marginal revenue equals marginal cost (MR = MC):</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">In a perfectly competitive market, price equals marginal revenue (P = MR), so profit maximization occurs where P = MC.</li>
          <li class="mb-2">In a monopoly, price exceeds marginal revenue (P > MR), so profit maximization occurs where MR = MC, but price is set above MC.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Market Structures</h3>
        
        <p class="mb-4">Different market structures lead to different firm behaviors:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Perfect Competition:</strong> Many small firms, homogeneous products, free entry and exit, perfect information.</li>
          <li class="mb-2"><strong>Monopoly:</strong> Single firm, no close substitutes, barriers to entry.</li>
          <li class="mb-2"><strong>Natural Monopoly:</strong> Occurs when the cost of production for a single firm is much less than the cost of production for multiple competitive firms, often due to high fixed costs and economies of scale.</li>
          <li class="mb-2"><strong>Oligopoly:</strong> Few large firms, barriers to entry, strategic interaction.</li>
          <li class="mb-2"><strong>Monopolistic Competition:</strong> Many firms, differentiated products, free entry and exit.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Production Concepts</h3>
        
        <p class="mb-4">Key concepts related to production:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Marginal Product:</strong> The increase in output that arises from an additional unit of input.</li>
          <li class="mb-2"><strong>Average Total Cost (ATC):</strong> Total cost divided by quantity produced.</li>
          <li class="mb-2"><strong>Economies of Scale:</strong> The decrease in average cost as output increases.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Monopoly Profit</h3>
        
        <p class="mb-4">A monopolist's profit can be calculated as:</p>
        <p class="mb-4">Profit = (Price - ATC) × Q</p>
        <p class="mb-4">where ATC is the average total cost and Q is the quantity produced.</p>
        
        <p class="font-semibold">Understanding firm behavior and market structures is important for analyzing how resource markets function and how different market conditions might affect resource allocation, particularly for natural resources and environmental services.</p>
      `
    }
  },
  {
    id: 10,
    title: "Labor Markets and Poverty",
    description: "Analysis of labor markets and their relationship to poverty",
    questions: [
      {
        id: "w10q1",
        text: "\"an absolute level of income set by the government for each family size below which a family is deemed to be in poverty\" is known as",
        options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
        correctAnswer: "poverty line"
      },
      {
        id: "w10q2",
        text: "Absolute poverty depends",
        options: ["on income but not on access to social services", "not on income but on access to social services", "on income and on access to social services", "neither on income nor on access to social services"],
        correctAnswer: "on income and on access to social services"
      },
      {
        id: "w10q3",
        text: "\"the equipment and structures used to produce goods and services\" is the definition of",
        options: ["tools", "machinery", "capital", "factors of production"],
        correctAnswer: "capital"
      },
      {
        id: "w10q4",
        text: "\"above-equilibrium wages paid by firms to increase worker productivity\" are known as",
        options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
        correctAnswer: "efficiency wage"
      },
      {
        id: "w10q5",
        text: "\"government policy aimed at protecting people against the risk of adverse events\" is",
        options: ["Social protection", "Social insurance", "Social security", "Socialism"],
        correctAnswer: "Social insurance"
      },
      {
        id: "w10q6",
        text: "\"a difference in wages that arises to offset the non-monetary characteristics of different jobs\" is known as",
        options: ["differentiating differential", "compensating differential", "differentiating integral", "compensating integral"],
        correctAnswer: "compensating differential"
      },
      {
        id: "w10q7",
        text: "For a competitive and profit-maximising firm,",
        options: ["each factor's rental price < the value of the marginal product for that factor", "each factor's rental price = the value of the marginal product for that factor", "each factor's rental price > the value of the marginal product for that factor", "each factor's rental price = the value of the average product for that factor"],
        correctAnswer: "each factor's rental price = the value of the marginal product for that factor"
      },
      {
        id: "w10q8",
        text: "\"a condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information\" is known as",
        options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
        correctAnswer: "absolute poverty"
      },
      {
        id: "w10q9",
        text: "\"a condition where a household's income is lower than the median income in the particular country\" is known as",
        options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
        correctAnswer: "relative poverty"
      },
      {
        id: "w10q10",
        text: "\"the increase in the amount of output from an additional unit of labor\" is",
        options: ["marginal product of labour", "marginal product of input", "average product of labour", "average product of input"],
        correctAnswer: "marginal product of labour"
      }
    ],
    content: {
      id: 10,
      title: "Labor Markets and Poverty",
      description: "Analysis of labor markets and their relationship to poverty",
      content: `
        <h2 class="text-2xl font-bold mb-4">Labor Markets and Poverty</h2>
        
        <p class="mb-4">This week explores labor markets and their relationship to poverty, examining how labor market conditions affect income distribution and poverty rates.</p>
        
        <h3 class="text-xl font-semibold mb-3">Labor Market Concepts</h3>
        
        <p class="mb-4">Key concepts in labor economics:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Marginal Product of Labor:</strong> The increase in the amount of output from an additional unit of labor.</li>
          <li class="mb-2"><strong>Efficiency Wages:</strong> Above-equilibrium wages paid by firms to increase worker productivity, reduce turnover, or attract higher-quality workers.</li>
          <li class="mb-2"><strong>Compensating Differential:</strong> A difference in wages that arises to offset the non-monetary characteristics of different jobs (e.g., higher pay for dangerous or unpleasant work).</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Profit-Maximizing Hiring</h3>
        
        <p class="mb-4">In a competitive labor market with profit-maximizing firms:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Each factor's rental price equals the value of the marginal product for that factor.</li>
          <li class="mb-2">For labor, this means the wage equals the value of the marginal product of labor (i.e., the marginal product of labor multiplied by the price of the output).</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Capital and Factors of Production</h3>
        
        <p class="mb-4">In economics, several factors contribute to production:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Capital:</strong> The equipment and structures used to produce goods and services.</li>
          <li class="mb-2"><strong>Labor:</strong> The time and effort of workers.</li>
          <li class="mb-2"><strong>Land:</strong> Natural resources and the physical space used in production.</li>
          <li class="mb-2"><strong>Entrepreneurship:</strong> The initiative to combine the other factors into a business venture.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Poverty Concepts</h3>
        
        <p class="mb-4">Different definitions and measures of poverty:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Poverty Line:</strong> An absolute level of income set by the government for each family size below which a family is deemed to be in poverty.</li>
          <li class="mb-2"><strong>Absolute Poverty:</strong> A condition characterized by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education, and information. It depends on both income and access to social services.</li>
          <li class="mb-2"><strong>Relative Poverty:</strong> A condition where a household's income is lower than the median income in the particular country, reflecting inequality rather than absolute deprivation.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Social Safety Nets</h3>
        
        <p class="mb-4">Government policies to address poverty and economic insecurity:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Social Insurance:</strong> Government policy aimed at protecting people against the risk of adverse events such as unemployment, disability, or old age.</li>
          <li class="mb-2"><strong>Social Protection:</strong> Broader systems that help individuals and families cope with crises and economic shocks, build resilience, and improve access to opportunities.</li>
          <li class="mb-2"><strong>Social Security:</strong> Specific programs that provide income support to individuals, particularly the elderly, disabled, and families with children.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Environmental Dimensions of Poverty</h3>
        
        <p class="mb-4">The relationship between poverty and environmental issues:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">The poor often depend most directly on natural resources for their livelihoods.</li>
          <li class="mb-2">Environmental degradation disproportionately affects the poor, who often lack resources to adapt or relocate.</li>
          <li class="mb-2">Poverty can drive unsustainable resource use when short-term survival needs outweigh long-term sustainability considerations.</li>
          <li class="mb-2">Sustainable development strategies aim to address both poverty alleviation and environmental protection simultaneously.</li>
        </ul>
        
        <p class="font-semibold">Understanding labor markets and poverty is crucial for developing environmental policies that are both effective and equitable, recognizing the interconnections between economic welfare, social justice, and environmental sustainability.</p>
      `
    }
  },
  {
    id: 11,
    title: "Consumer Behavior and Decision Making",
    description: "Analysis of consumer behavior and decision-making processes",
    questions: [
      {
        id: "w11q1",
        text: "\"an action taken by an uninformed party to induce an informed party to reveal information\" is known as",
        options: ["signalling", "screening", "informing", "heuristics"],
        correctAnswer: "screening"
      },
      {
        id: "w11q2",
        text: "\"the part of actual resources that can be developed profitably in the future\" are",
        options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
        correctAnswer: "reserve resources"
      },
      {
        id: "w11q3",
        text: "\"the limit on the consumption bundles that a consumer can afford\" is known as",
        options: ["consumption constraint", "budget constraint", "bundle constraint", "affordability constraint"],
        correctAnswer: "budget constraint"
      },
      {
        id: "w11q4",
        text: "\"mental short cut using emotion (gut feeling) to influences the decision\" is",
        options: ["affect heuristic", "availability heuristic", "effort heuristic", "familiarity heuristic"],
        correctAnswer: "affect heuristic"
      },
      {
        id: "w11q5",
        text: "\"those resources that are currently being used after surveying, quantification and qualification\" are",
        options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
        correctAnswer: "actual resources"
      },
      {
        id: "w11q6",
        text: "\"the change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution\" is known as",
        options: ["income effect", "substitution effect", "indifference effect", "budget effect"],
        correctAnswer: "substitution effect"
      },
      {
        id: "w11q7",
        text: "An inferior good whose demand increases with price is called as",
        options: ["Normal good", "Veblen good", "Giffen good", "Demand good"],
        correctAnswer: "Giffen good"
      },
      {
        id: "w11q8",
        text: "Which of these is not a property of indifference curves?",
        options: ["Higher indifference curves are preferred to lower ones", "Indifference curves are downward-sloping", "Indifference curves cross at right angles", "Indifference curves are bowed inwards"],
        correctAnswer: "Indifference curves cross at right angles"
      },
      {
        id: "w11q9",
        text: "\"an action taken by an informed party to reveal private information to an uninformed party\" is known as",
        options: ["signalling", "screening", "informing", "heuristics"],
        correctAnswer: "signalling"
      },
      {
        id: "w11q10",
        text: "\"simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems\" is known as",
        options: ["signalling", "screening", "informing", "heuristics"],
        correctAnswer: "heuristics"
      }
    ],
    content: {
      id: 11,
      title: "Consumer Behavior and Decision Making",
      description: "Analysis of consumer behavior and decision-making processes",
      content: `
        <h2 class="text-2xl font-bold mb-4">Consumer Behavior and Decision Making</h2>
        
        <p class="mb-4">This week explores how consumers make decisions, with a focus on both traditional economic models and behavioral economics insights.</p>
        
        <h3 class="text-xl font-semibold mb-3">Consumer Choice Theory</h3>
        
        <p class="mb-4">Key concepts in traditional consumer choice theory:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Budget Constraint:</strong> The limit on the consumption bundles that a consumer can afford given their income and prices.</li>
          <li class="mb-2"><strong>Indifference Curves:</strong> Curves that represent all combinations of goods that provide the consumer with the same level of satisfaction or utility.</li>
          <li class="mb-2"><strong>Properties of Indifference Curves:</strong>
            <ul class="list-disc pl-6 mt-2">
              <li>Higher indifference curves are preferred to lower ones</li>
              <li>Indifference curves are downward-sloping</li>
              <li>Indifference curves do not cross (this is a fundamental property—if they crossed, it would violate the transitivity of preferences)</li>
              <li>Indifference curves are bowed inwards (convex to the origin), reflecting diminishing marginal rate of substitution</li>
            </ul>
          </li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Price Effects</h3>
        
        <p class="mb-4">When the price of a good changes, it affects consumption through two channels:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Substitution Effect:</strong> The change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution. Essentially, consumers substitute away from goods that become relatively more expensive.</li>
          <li class="mb-2"><strong>Income Effect:</strong> The change in consumption that results from the change in purchasing power caused by a price change, holding preferences constant.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Special Types of Goods</h3>
        
        <p class="mb-4">Some goods exhibit unusual demand behavior:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Giffen Good:</strong> An inferior good whose demand increases with price. This occurs when the income effect of a price change is stronger than and works in the opposite direction of the substitution effect.</li>
          <li class="mb-2"><strong>Veblen Good:</strong> A good whose demand increases with price due to its status as a positional or prestige good.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Behavioral Economics</h3>
        
        <p class="mb-4">Behavioral economics recognizes that people often use mental shortcuts (heuristics) rather than fully rational optimization:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Heuristics:</strong> Simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems.</li>
          <li class="mb-2"><strong>Affect Heuristic:</strong> Mental shortcut using emotion (gut feeling) to influence decisions.</li>
          <li class="mb-2"><strong>Availability Heuristic:</strong> Judging probability based on how easily examples come to mind.</li>
          <li class="mb-2"><strong>Effort Heuristic:</strong> Valuing things more if they require more effort to obtain.</li>
          <li class="mb-2"><strong>Familiarity Heuristic:</strong> Preferring the familiar over the unfamiliar.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Information Economics</h3>
        
        <p class="mb-4">When different parties have different information, various strategies can be used:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Signaling:</strong> An action taken by an informed party to reveal private information to an uninformed party.</li>
          <li class="mb-2"><strong>Screening:</strong> An action taken by an uninformed party to induce an informed party to reveal information.</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Resource Classification</h3>
        
        <p class="mb-4">Resources can be classified based on their development status:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Actual Resources:</strong> Those resources that are currently being used after surveying, quantification, and qualification.</li>
          <li class="mb-2"><strong>Reserve Resources:</strong> The part of actual resources that can be developed profitably in the future.</li>
          <li class="mb-2"><strong>Potential Resources:</strong> Resources that exist in a region but have not been utilized.</li>
        </ul>
        
        <p class="font-semibold">Understanding consumer behavior and decision-making processes is crucial for designing effective environmental policies, as it helps predict how individuals will respond to incentives, information, and nudges aimed at promoting sustainable behavior.</p>
      `
    }
  },
{
  id: 12,
  title: "Conservation Economics and Wildlife Protection",
  description: "Understanding ecosystem services, conservation types, and species roles",
  questions: [
    {
      id: "w12q1",
      text: "As per Wildlife Protection Act 1972 (WPA 1972), wild life includes any animal, aquatic or land vegetation which forms part of any _____ .",
      options: ["ecosystem", "state", "country", "habitat"],
      correctAnswer: "habitat"
    },
    {
      id: "w12q2",
      text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
      options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
      correctAnswer: "all of the above"
    },
    {
      id: "w12q3",
      text: "Soil formation is an example of",
      options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
      correctAnswer: "supporting service"
    },
    {
      id: "w12q4",
      text: "Zoo is an example of",
      options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"],
      correctAnswer: "ex-situ conservation"
    },
    {
      id: "w12q5",
      text: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
      options: ["least concern species", "keystone species", "flagship species", "extinct species"],
      correctAnswer: "keystone species"
    },
    {
      id: "w12q6",
      text: "Nutrient cycling is an example of",
      options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
      correctAnswer: "supporting service"
    },
    {
      id: "w12q7",
      text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
      options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
      correctAnswer: "flagship species"
    },
    {
      id: "w12q8",
      text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
      options: ["very high", "medium", "very low", "non-existent"],
      correctAnswer: "medium"
    },
    {
      id: "w12q9",
      text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
      options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
      correctAnswer: "all of the above"
    },
    {
      id: "w12q10",
      text: "Biological control of pest populations is an example of",
      options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
      correctAnswer: "regulating service"
    }
  ],
  content: {
    id: 12,
    title: "Conservation Economics and Wildlife Protection",
    description: "Understanding ecosystem services, conservation types, and species roles",
    content: `
      <h2 class="text-2xl font-bold mb-4">Week 12: Conservation Economics and Wildlife Protection</h2>

      <p class="mb-4">This week covers the ecological and economic significance of biodiversity conservation and ecosystem services.</p>

      <h3 class="text-xl font-semibold mb-3">Ecosystem Services</h3>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Provisioning Services:</strong> Products obtained from ecosystems (e.g., food, water, timber).</li>
        <li class="mb-2"><strong>Regulating Services:</strong> Benefits obtained from regulation of ecosystem processes (e.g., biological pest control).</li>
        <li class="mb-2"><strong>Supporting Services:</strong> Services necessary for the production of all other services (e.g., soil formation, nutrient cycling).</li>
        <li class="mb-2"><strong>Cultural Services:</strong> Non-material benefits (e.g., spiritual, recreational, and aesthetic experiences).</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">Conservation Strategies</h3>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>In-situ Conservation:</strong> Conservation of species in their natural habitat (e.g., biosphere reserves).</li>
        <li class="mb-2"><strong>Ex-situ Conservation:</strong> Conservation outside the natural habitat (e.g., zoos, botanical gardens).</li>
        <li class="mb-2">Conservation reserves are ideally created in areas where the level of threat is <strong>medium</strong>.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">Species Importance</h3>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2"><strong>Keystone Species:</strong> Species that have a disproportionately large effect on their ecosystems (e.g., fig tree, elephant).</li>
        <li class="mb-2"><strong>Flagship Species:</strong> Species used to represent an environmental cause or habitat (e.g., orchids, tiger, elephant).</li>
        <li class="mb-2"><strong>Umbrella Species:</strong> Protecting them indirectly protects many other species (e.g., tiger, elephant).</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3">Legal Framework</h3>
      <p class="mb-4">As per the <strong>Wildlife Protection Act 1972</strong>, wild life includes any animal or plant (aquatic or terrestrial) that forms part of any <strong>habitat</strong>.</p>

      <p class="font-semibold">Understanding these classifications helps in policy-making, planning conservation efforts, and ensuring ecosystem sustainability.</p>
    `
  }
}
];

export default weeks;

export function getWeekbyId(id: number): Week | undefined {
  return weeks.find(week => week.id === id);
}

export function getAllQuestions(): Question[] {
  return weeks.flatMap(week => week.questions);
}
