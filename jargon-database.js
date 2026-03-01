const JARGON = [
  {
    "jargon": "30,000-foot view",
    "plain": "Looking at the big picture rather than the detail"
  },
  {
    "jargon": "30-60-90 day plan",
    "plain": "A structured goal plan covering a new employee's first three months"
  },
  {
    "jargon": "360 feedback",
    "plain": "Feedback gathered from peers, direct reports, and managers — not just one person"
  },
  {
    "jargon": "800-pound gorilla",
    "plain": "The dominant issue or problem everyone is avoiding"
  },
  {
    "jargon": "A bad apple",
    "plain": "a morally questionable person within a group who might corrupt the others"
  },
  {
    "jargon": "A baker's dozen",
    "plain": "thirteen"
  },
  {
    "jargon": "A bird in the hand is worth two in the bush",
    "plain": "what you have now is worth more than what you might get later"
  },
  {
    "jargon": "A blessing in disguise",
    "plain": "it seems bad at first but ends up having a positive outcome"
  },
  {
    "jargon": "A breath of fresh air",
    "plain": "a person who is refreshingly different from others in a positive way"
  },
  {
    "jargon": "A bunch of",
    "plain": "a group"
  },
  {
    "jargon": "A day late and a dollar short",
    "plain": "too little and too late"
  },
  {
    "jargon": "A doozy",
    "plain": "incredibly surprising, usually in a negative way"
  },
  {
    "jargon": "A flash in the pan",
    "plain": "it seems promising at first but ultimately delivers nothing"
  },
  {
    "jargon": "A fool and his money are easily parted",
    "plain": "foolish people are easily convinced to give away their money"
  },
  {
    "jargon": "A for effort",
    "plain": "an excellent effort even if the results weren't great"
  },
  {
    "jargon": "A hang",
    "plain": "it irrational that consistently worries a person"
  },
  {
    "jargon": "A hard nut to crack",
    "plain": "a person who is difficult to understand or deal with"
  },
  {
    "jargon": "A hot potato",
    "plain": "a controversial issue that's difficult to handle"
  },
  {
    "jargon": "A kickback",
    "plain": "a bribe or illegal payment to get a person to do it"
  },
  {
    "jargon": "A penny saved is a penny earned",
    "plain": "saving money now means having more later"
  },
  {
    "jargon": "A perfect storm",
    "plain": "when several things go wrong at once creating the worst situation"
  },
  {
    "jargon": "A smart cookie",
    "plain": "a clever and quick-thinking person"
  },
  {
    "jargon": "A snowball effect",
    "plain": "when events gain momentum and build upon each other"
  },
  {
    "jargon": "A stitch in time saves nine",
    "plain": "dealing with a problem now prevents it from getting worse"
  },
  {
    "jargon": "A storm is brewing",
    "plain": "likely to be significant trouble in the near future"
  },
  {
    "jargon": "Above my pay grade",
    "plain": "Outside my authority or responsibility — someone higher up needs to decide this"
  },
  {
    "jargon": "Accounting standards codification",
    "plain": "The FASB's official system for organising US accounting standards",
    "abbrev": "ASC"
  },
  {
    "jargon": "Accounts payable",
    "plain": "Money a company owes to its suppliers",
    "abbrev": "AP"
  },
  {
    "jargon": "Accounts receivable",
    "plain": "Money owed to a company by its customers",
    "abbrev": "AR"
  },
  {
    "jargon": "Accounts receivable",
    "plain": "Money owed to a company by its customers",
    "abbrev": "A/R"
  },
  {
    "jargon": "Ace in the hole",
    "plain": "a hidden but very effective advantage"
  },
  {
    "jargon": "Ace up the sleeve",
    "plain": "a hidden advantage in a competition"
  },
  {
    "jargon": "Achilles' heel",
    "plain": "a significant weakness"
  },
  {
    "jargon": "Action items",
    "plain": "Tasks to complete"
  },
  {
    "jargon": "Actionable",
    "plain": "Something you can actually do"
  },
  {
    "jargon": "Actions speak louder than words",
    "plain": "what a person does reveals their character better than what they say"
  },
  {
    "jargon": "Activity based costing",
    "plain": "A costing method that assigns costs based on the activities that drive them",
    "abbrev": "ABC"
  },
  {
    "jargon": "Actual period",
    "plain": "Stands for actual period — usually a column name in financial reports",
    "abbrev": "ACT"
  },
  {
    "jargon": "Actuals",
    "plain": "Real numbers, as opposed to estimates"
  },
  {
    "jargon": "Add fuel to the fire",
    "plain": "making it even worse"
  },
  {
    "jargon": "Add insult to injury",
    "plain": "worsening an already bad situation"
  },
  {
    "jargon": "Advance pricing agreement",
    "plain": "A deal with tax authorities fixing how transfer prices are set in advance",
    "abbrev": "APA"
  },
  {
    "jargon": "Agile",
    "plain": "Flexible, quick to adapt"
  },
  {
    "jargon": "Align",
    "plain": "Agree / get on the same page"
  },
  {
    "jargon": "Alignment",
    "plain": "Everyone agreeing on the plan"
  },
  {
    "jargon": "All bark and no bite",
    "plain": "more intimidating than they actually are"
  },
  {
    "jargon": "All bets are off",
    "plain": "any existing agreements are discarded"
  },
  {
    "jargon": "All heart",
    "plain": "very kind and loving to others"
  },
  {
    "jargon": "All in the same boat",
    "plain": "all in the same situation"
  },
  {
    "jargon": "All kidding aside",
    "plain": "joking before but now speaking seriously"
  },
  {
    "jargon": "All over the map",
    "plain": "scattered in different directions without staying on topic"
  },
  {
    "jargon": "All thumbs",
    "plain": "clumsy with intricate tasks requiring dexterity"
  },
  {
    "jargon": "Along for the ride",
    "plain": "present when it happens without actually participating"
  },
  {
    "jargon": "Altman Z-score",
    "plain": "A formula predicting the likelihood of a company going bankrupt",
    "abbrev": "Z-Score"
  },
  {
    "jargon": "An about",
    "plain": "a sudden change in the opposite direction"
  },
  {
    "jargon": "An apple a day keeps the doctor away",
    "plain": "eating healthfully prevents illness"
  },
  {
    "jargon": "An ounce of prevention is worth a pound of cure",
    "plain": "better to deal with a problem early than wait"
  },
  {
    "jargon": "Analysis paralysis",
    "plain": "Overthinking a decision until nothing gets done"
  },
  {
    "jargon": "Annual recurring revenues",
    "plain": "Predictable revenue expected every year",
    "abbrev": "ARR"
  },
  {
    "jargon": "Anti-money laundering",
    "plain": "Rules and processes to prevent hiding illegally obtained money",
    "abbrev": "AML"
  },
  {
    "jargon": "Applicant tracking system",
    "plain": "Software used to manage job applications and candidates through hiring",
    "abbrev": "ATS"
  },
  {
    "jargon": "Are you kidding me?",
    "plain": "expressing disbelief about what was just said"
  },
  {
    "jargon": "As genuine as a three",
    "plain": "not genuine"
  },
  {
    "jargon": "As right as rain",
    "plain": "perfect"
  },
  {
    "jargon": "As the crow flies",
    "plain": "directly"
  },
  {
    "jargon": "As white as a sheet/as white as a ghost",
    "plain": "extremely pale"
  },
  {
    "jargon": "ASAP",
    "plain": "As soon as possible",
    "abbrev": "ASAP"
  },
  {
    "jargon": "Assembled workforce",
    "plain": "The value placed on an existing team of trained employees",
    "abbrev": "AWF"
  },
  {
    "jargon": "Asset-backed security",
    "plain": "A financial security backed by a pool of assets like loans or receivables",
    "abbrev": "ABS"
  },
  {
    "jargon": "Assets under management",
    "plain": "Total market value of assets a firm manages on behalf of clients",
    "abbrev": "AUM"
  },
  {
    "jargon": "Async",
    "plain": "Not at the same time — done on your own schedule",
    "abbrev": "Async"
  },
  {
    "jargon": "At best",
    "plain": "in the best-case scenario"
  },
  {
    "jargon": "At least",
    "plain": "at a minimum"
  },
  {
    "jargon": "At the bottom of the totem pole",
    "plain": "having a low-status position"
  },
  {
    "jargon": "At the drop of a hat",
    "plain": "right away and without hesitation"
  },
  {
    "jargon": "At the end of the day",
    "plain": "Ultimately / when all is said and done"
  },
  {
    "jargon": "Ate / Ate that up",
    "plain": "did something exceptionally well, killed it"
  },
  {
    "jargon": "Attrition",
    "plain": "The gradual reduction of staff through resignations and retirements without immediate replacement"
  },
  {
    "jargon": "Available for sale",
    "plain": "Financial assets not held to maturity and not for active trading",
    "abbrev": "AFS"
  },
  {
    "jargon": "Average revenue per user",
    "plain": "Total revenue divided by number of users",
    "abbrev": "ARPU"
  },
  {
    "jargon": "B2B",
    "plain": "Business to business — selling to other companies",
    "abbrev": "B2B"
  },
  {
    "jargon": "B2C",
    "plain": "Business to consumer — selling directly to individuals",
    "abbrev": "B2C"
  },
  {
    "jargon": "Baby boomer",
    "plain": "a person born before 1960"
  },
  {
    "jargon": "Back burner",
    "plain": "Something deprioritised to be returned to later"
  },
  {
    "jargon": "Back to basics",
    "plain": "going back to thinking about the basic elements of it"
  },
  {
    "jargon": "Back to the drawing board",
    "plain": "Start over from scratch after something fails"
  },
  {
    "jargon": "Back to the drawing board",
    "plain": "time to start over from scratch after experiencing failure"
  },
  {
    "jargon": "Back-of-the-envelope",
    "plain": "A rough, quick calculation"
  },
  {
    "jargon": "Backhanded compliment",
    "plain": "a compliment that is really meant as an insult"
  },
  {
    "jargon": "Bad blood",
    "plain": "negative feelings"
  },
  {
    "jargon": "Balance sheet",
    "plain": "A financial snapshot showing assets, liabilities, and equity",
    "abbrev": "BS"
  },
  {
    "jargon": "Balance sheet",
    "plain": "A financial snapshot of assets, liabilities, and equity at a point in time",
    "abbrev": "B/S"
  },
  {
    "jargon": "Ballpark figure",
    "plain": "A rough estimate"
  },
  {
    "jargon": "Bandwidth",
    "plain": "Time and energy available to take on work"
  },
  {
    "jargon": "Base erosion and profit shifting",
    "plain": "Tax strategies that shift profits to low-tax countries",
    "abbrev": "BEPS"
  },
  {
    "jargon": "Based",
    "plain": "being yourself unapologetically, having strong opinions regardless of what others think"
  },
  {
    "jargon": "Baseline",
    "plain": "The starting point used for comparison"
  },
  {
    "jargon": "Be my guest",
    "plain": "go ahead"
  },
  {
    "jargon": "Bear in mind/keep in mind",
    "plain": "remembering it while thinking about other things"
  },
  {
    "jargon": "Beat a hasty retreat",
    "plain": "leaving really quickly to flee a difficult situation"
  },
  {
    "jargon": "Beat around the bush",
    "plain": "trying to avoid saying it directly because the truth is uncomfortable"
  },
  {
    "jargon": "Beat someone to the punch",
    "plain": "accomplishing it before another person does"
  },
  {
    "jargon": "Bed of roses",
    "plain": "a blissfully happy and comfortable situation"
  },
  {
    "jargon": "Benchmarking",
    "plain": "Comparing your results to others in the field"
  },
  {
    "jargon": "Bend over backward",
    "plain": "trying extremely hard to help a person"
  },
  {
    "jargon": "Beside the point",
    "plain": "irrelevant to the discussion"
  },
  {
    "jargon": "Best practice",
    "plain": "The recommended or most effective way to do something"
  },
  {
    "jargon": "Bestie",
    "plain": "a person's best friend"
  },
  {
    "jargon": "Bestie",
    "plain": "best friend, can also be used ironically for strangers"
  },
  {
    "jargon": "Bet",
    "plain": "agreement, confirmation, or \"okay\""
  },
  {
    "jargon": "Beta coefficient",
    "plain": "A measure of how much a stock moves relative to the market",
    "abbrev": "BC"
  },
  {
    "jargon": "Better late than never",
    "plain": "preferable to do it late than never"
  },
  {
    "jargon": "Between a rock and a hard place",
    "plain": "having to choose between two inadequate options"
  },
  {
    "jargon": "Between the devil and the deep blue sea",
    "plain": "facing two difficult possible outcomes"
  },
  {
    "jargon": "Big cheese",
    "plain": "a very important person in an organization"
  },
  {
    "jargon": "Big picture",
    "plain": "The overall view, not the fine details"
  },
  {
    "jargon": "Big wheel",
    "plain": "an influential, powerful person"
  },
  {
    "jargon": "Bill of materials",
    "plain": "A list of all parts and materials needed to make a product",
    "abbrev": "BOM"
  },
  {
    "jargon": "Birds of a feather flock together",
    "plain": "friends are often alike"
  },
  {
    "jargon": "Bite off more than you can chew",
    "plain": "Take on more than you can realistically handle"
  },
  {
    "jargon": "Bite the bullet",
    "plain": "Face a tough situation with courage and just get on with it"
  },
  {
    "jargon": "Bite the bullet",
    "plain": "to commence with it even though it's unpleasant"
  },
  {
    "jargon": "Bite your tongue",
    "plain": "to stop talking"
  },
  {
    "jargon": "Black sheep",
    "plain": "not fitting in within a specific group"
  },
  {
    "jargon": "Bleeding edge",
    "plain": "Even more cutting-edge than leading edge — sometimes riskily so"
  },
  {
    "jargon": "Blew me away",
    "plain": "incredibly impressed"
  },
  {
    "jargon": "Blow off steam",
    "plain": "to vent energy or frustration"
  },
  {
    "jargon": "Blowing smoke",
    "plain": "exaggerating or making false claims about oneself"
  },
  {
    "jargon": "Blue blood",
    "plain": "being a member of the aristocracy"
  },
  {
    "jargon": "Blue law",
    "plain": "a law meant to regulate personal behavior"
  },
  {
    "jargon": "Blue ocean strategy",
    "plain": "Creating a new market rather than competing in an existing crowded one"
  },
  {
    "jargon": "Blue-sky thinking",
    "plain": "Imaginative ideas unconstrained by reality or current resources"
  },
  {
    "jargon": "Boil the ocean",
    "plain": "Try to solve everything at once — usually a bad idea"
  },
  {
    "jargon": "Boilerplate",
    "plain": "Standard reusable text or terms used repeatedly without change"
  },
  {
    "jargon": "Book value",
    "plain": "A company's asset value according to its balance sheet",
    "abbrev": "BV"
  },
  {
    "jargon": "Bookworm",
    "plain": "a person who reads books very frequently"
  },
  {
    "jargon": "Boots on the ground",
    "plain": "People physically present doing the actual work"
  },
  {
    "jargon": "Bop",
    "plain": "a really good song"
  },
  {
    "jargon": "Bottom line",
    "plain": "The final result, or the most important point"
  },
  {
    "jargon": "Bottom-up",
    "plain": "Starting from the details and building up to the big picture"
  },
  {
    "jargon": "Brain dump",
    "plain": "Getting all your thoughts out of your head and onto paper"
  },
  {
    "jargon": "Brainstorm",
    "plain": "Throw out ideas freely without judging them yet"
  },
  {
    "jargon": "Bread and butter",
    "plain": "a job that allows a person to make a living"
  },
  {
    "jargon": "Break a leg",
    "plain": "a wish of good luck"
  },
  {
    "jargon": "Break down silos",
    "plain": "Remove barriers between departments to improve communication and collaboration"
  },
  {
    "jargon": "Break even",
    "plain": "neither gaining nor losing money"
  },
  {
    "jargon": "Break the bank",
    "plain": "costing a huge amount of money"
  },
  {
    "jargon": "Bring down the house",
    "plain": "extremely successful, usually in a performance"
  },
  {
    "jargon": "Bring home the bacon",
    "plain": "earning most or all of the family's income"
  },
  {
    "jargon": "Bring my A game",
    "plain": "making your best effort"
  },
  {
    "jargon": "Bring to the table",
    "plain": "The skills, ideas, or value someone contributes"
  },
  {
    "jargon": "Brownie points",
    "plain": "being good and kind to others"
  },
  {
    "jargon": "Budgeted period",
    "plain": "Stands for budgeted period — usually a column name in financial reports",
    "abbrev": "BUD"
  },
  {
    "jargon": "Burn rate",
    "plain": "How fast money is being spent"
  },
  {
    "jargon": "Burn the candle at both ends",
    "plain": "living a frantic sort of life, going to bed too late and having to wake up too early"
  },
  {
    "jargon": "Burn the midnight oil",
    "plain": "Work very late to meet a deadline"
  },
  {
    "jargon": "Bury the hatchet",
    "plain": "letting go of a disagreement or grudge and calling a truce"
  },
  {
    "jargon": "Bury your head in the sand",
    "plain": "pretending it doesn't exist or completely ignoring it"
  },
  {
    "jargon": "Bussin",
    "plain": "really good, especially describing food"
  },
  {
    "jargon": "Busy bee",
    "plain": "a person who always seems to be busy"
  },
  {
    "jargon": "Butter someone up",
    "plain": "flattering and being excessively nice to a person in an attempt to make them see things your way"
  },
  {
    "jargon": "Buy a lemon",
    "plain": "buying a car that ends up being highly faulty or nonfunctioning"
  },
  {
    "jargon": "Buy-in",
    "plain": "Agreement and support from the people involved"
  },
  {
    "jargon": "By hook or by crook",
    "plain": "no matter what, or by any means"
  },
  {
    "jargon": "By the book",
    "plain": "Following rules and procedures strictly"
  },
  {
    "jargon": "By the skin of my teeth",
    "plain": "barely making it"
  },
  {
    "jargon": "C-suite",
    "plain": "The top executives of a company"
  },
  {
    "jargon": "Cadence",
    "plain": "A regular rhythm or schedule"
  },
  {
    "jargon": "Call a spade a spade",
    "plain": "identifying what it or a person really is, honestly and directly"
  },
  {
    "jargon": "Call the shots",
    "plain": "making decisions, especially for other people"
  },
  {
    "jargon": "Call their bluff",
    "plain": "trying to force a person to show that they are lying"
  },
  {
    "jargon": "Calm before the storm",
    "plain": "calm right now but with something bad coming"
  },
  {
    "jargon": "Can't judge a book by its cover",
    "plain": "judging a person or it just by how it looks"
  },
  {
    "jargon": "Can't put a face to the name",
    "plain": "hearing a name you recognize but not remembering what the person looks like"
  },
  {
    "jargon": "Cap / No cap",
    "plain": "cap means lying; no cap means you're being honest"
  },
  {
    "jargon": "Capital asset pricing model",
    "plain": "A model linking expected investment return to risk",
    "abbrev": "CAPM"
  },
  {
    "jargon": "Capital expenditures",
    "plain": "Money spent on physical assets like equipment or buildings",
    "abbrev": "CAPEX"
  },
  {
    "jargon": "Capital gain tax",
    "plain": "Tax paid on profit from selling an asset",
    "abbrev": "CTG"
  },
  {
    "jargon": "Carry the ball",
    "plain": "taking on greater responsibility to help ensure a project continues"
  },
  {
    "jargon": "Cash conversion cycle",
    "plain": "How long it takes to turn inventory into cash",
    "abbrev": "CCC"
  },
  {
    "jargon": "Cash flow",
    "plain": "Money moving in and out of a business",
    "abbrev": "CF"
  },
  {
    "jargon": "Cash flow from operations",
    "plain": "Cash generated by a company's core business activities",
    "abbrev": "CFO"
  },
  {
    "jargon": "Cash flow margin",
    "plain": "Cash flow from operations as a percentage of revenue",
    "abbrev": "CFM"
  },
  {
    "jargon": "Cash flow return on investment",
    "plain": "A measure of how well a company generates cash relative to its investment",
    "abbrev": "CFROI"
  },
  {
    "jargon": "Cast",
    "plain": "a stomach that never gets upset regardless of what a person eats"
  },
  {
    "jargon": "Cast pearls before swine",
    "plain": "displaying fine attributes to people incapable of appreciating them"
  },
  {
    "jargon": "Castle in the sky",
    "plain": "a hope or daydream that will probably never come true"
  },
  {
    "jargon": "Catch",
    "plain": "an illogical obstacle that creates a trap"
  },
  {
    "jargon": "Catch someone's eye",
    "plain": "attracting a person's interest, usually romantically"
  },
  {
    "jargon": "Caught in 4K",
    "plain": "caught red-handed with evidence"
  },
  {
    "jargon": "Caught red",
    "plain": "caught in the act of doing it wrong"
  },
  {
    "jargon": "Caught with your hand in the cookie jar",
    "plain": "caught doing it when you shouldn't be"
  },
  {
    "jargon": "Certified public accountant",
    "plain": "A licensed accountant who has passed the CPA exam",
    "abbrev": "CPA"
  },
  {
    "jargon": "Change management",
    "plain": "The process of communicating and managing organisational changes"
  },
  {
    "jargon": "Charmed life",
    "plain": "a life that seems extraordinarily lucky"
  },
  {
    "jargon": "Chasing rainbows",
    "plain": "pursuing unrealistic dreams"
  },
  {
    "jargon": "Checkered past",
    "plain": "a questionable past with many frowned upon activities"
  },
  {
    "jargon": "Cheugy",
    "plain": "outdated, trying too hard, or uncool (especially for millennial trends)"
  },
  {
    "jargon": "Chewing the fat",
    "plain": "chatting or talking casually"
  },
  {
    "jargon": "Churn rate",
    "plain": "The rate at which customers or employees leave"
  },
  {
    "jargon": "Circle back",
    "plain": "Follow up on this later"
  },
  {
    "jargon": "Clarity",
    "plain": "Being clear and easy to understand"
  },
  {
    "jargon": "Clear as mud",
    "plain": "not clear at all and difficult to understand"
  },
  {
    "jargon": "Climb the walls",
    "plain": "feeling restless and closed in"
  },
  {
    "jargon": "Clock watcher",
    "plain": "An employee who watches the time waiting for the day to end"
  },
  {
    "jargon": "Close but no cigar",
    "plain": "closely approaching success but not quite there"
  },
  {
    "jargon": "Close the loop",
    "plain": "Finish what was started / follow up"
  },
  {
    "jargon": "Clown around",
    "plain": "joking around and being silly"
  },
  {
    "jargon": "Cold feet",
    "plain": "feeling nervous to the point of wanting to back out"
  },
  {
    "jargon": "Collaborate",
    "plain": "Work together"
  },
  {
    "jargon": "Collateralized debt obligation",
    "plain": "A complex financial product backed by a pool of loans",
    "abbrev": "CDO"
  },
  {
    "jargon": "Come clean",
    "plain": "telling the truth about it after doing wrong"
  },
  {
    "jargon": "Come clean",
    "plain": "telling the truth about it when you've done it wrong"
  },
  {
    "jargon": "Come hell or high water",
    "plain": "no matter what happens"
  },
  {
    "jargon": "Come out smelling like a rose",
    "plain": "coming out seeming like a wonderful person when it's not fair"
  },
  {
    "jargon": "Come rain or shine",
    "plain": "getting it accomplished no matter what"
  },
  {
    "jargon": "Comfort food",
    "plain": "food that makes you feel better"
  },
  {
    "jargon": "Commercial margin",
    "plain": "The profit made on sales after direct costs",
    "abbrev": "CM"
  },
  {
    "jargon": "Comparable uncontrolled price",
    "plain": "A transfer pricing method comparing to similar arm's-length transactions",
    "abbrev": "CUP"
  },
  {
    "jargon": "Comparing apples to oranges",
    "plain": "comparing two entirely different things that shouldn't be compared"
  },
  {
    "jargon": "Compliance training",
    "plain": "Mandatory training covering legal, safety, and policy requirements"
  },
  {
    "jargon": "Compounded annual growth rate",
    "plain": "The steady annual growth rate needed to go from one value to another over time",
    "abbrev": "CAGR"
  },
  {
    "jargon": "Computer crashed",
    "plain": "a computer that's no longer working"
  },
  {
    "jargon": "Contributory asset charges",
    "plain": "Charges applied to assets that contribute to generating income",
    "abbrev": "CAC"
  },
  {
    "jargon": "Controlled foreign company",
    "plain": "A foreign subsidiary controlled by a home-country parent for tax purposes",
    "abbrev": "CFC"
  },
  {
    "jargon": "Cooked the books",
    "plain": "doing bookkeeping in a dishonest way to avoid taxes"
  },
  {
    "jargon": "Cope",
    "plain": "dealing with loss or disappointment, often used mockingly"
  },
  {
    "jargon": "Core competency",
    "plain": "What a person or company is genuinely good at"
  },
  {
    "jargon": "Corporate income tax",
    "plain": "Tax a company pays on its profits",
    "abbrev": "CIT"
  },
  {
    "jargon": "Cost of goods sold",
    "plain": "The direct cost of producing what a company sells",
    "abbrev": "COGS"
  },
  {
    "jargon": "Cost of products sold",
    "plain": "Similar to COGS — the cost of the products sold",
    "abbrev": "COPS"
  },
  {
    "jargon": "Cost plus",
    "plain": "A pricing method that adds a markup on top of costs",
    "abbrev": "CP"
  },
  {
    "jargon": "Cost plus method",
    "plain": "A transfer pricing method based on cost plus a margin",
    "abbrev": "CPM"
  },
  {
    "jargon": "Couldn't care less",
    "plain": "having complete lack of interest in it"
  },
  {
    "jargon": "Country by country reporting",
    "plain": "Tax reporting that breaks down a company's financials by each country",
    "abbrev": "CbCr"
  },
  {
    "jargon": "Cover a lot of ground",
    "plain": "getting a lot of things done in various areas"
  },
  {
    "jargon": "Crack open a cold one",
    "plain": "opening a cold can of beer"
  },
  {
    "jargon": "Crank out a paper",
    "plain": "writing a paper in a mechanical way, probably rushed"
  },
  {
    "jargon": "Credit default swap",
    "plain": "A financial contract that acts like insurance against a borrower defaulting",
    "abbrev": "CDS"
  },
  {
    "jargon": "Cringe",
    "plain": "embarrassing or awkward"
  },
  {
    "jargon": "Crocodile tears",
    "plain": "fake crying"
  },
  {
    "jargon": "Cross that bridge when you come to it",
    "plain": "dealing with a problem when it becomes an obstacle"
  },
  {
    "jargon": "Cross-functional",
    "plain": "Involving people from different departments"
  },
  {
    "jargon": "Curiosity killed the cat",
    "plain": "being dangerously curious and asking too many questions"
  },
  {
    "jargon": "Current ratio",
    "plain": "Current assets divided by current liabilities — a measure of short-term liquidity",
    "abbrev": "CR"
  },
  {
    "jargon": "Customer lifetime value",
    "plain": "The total revenue expected from a customer over their relationship with the business",
    "abbrev": "LTV"
  },
  {
    "jargon": "Customer relationship management",
    "plain": "Software and strategies for managing interactions with customers",
    "abbrev": "CRM"
  },
  {
    "jargon": "Cut and dried",
    "plain": "unequivocal, clear, or routine"
  },
  {
    "jargon": "Cut corners",
    "plain": "Do something the quickest way, often sacrificing quality"
  },
  {
    "jargon": "Cut the mustard",
    "plain": "doing it well or up to standard"
  },
  {
    "jargon": "Cut to the chase",
    "plain": "Skip the preamble and get to the point"
  },
  {
    "jargon": "Cut to the chase",
    "plain": "getting to the point quickly"
  },
  {
    "jargon": "Cutting-edge",
    "plain": "The most advanced or up-to-date"
  },
  {
    "jargon": "Days inventories outstanding",
    "plain": "Average number of days inventory is held before being sold",
    "abbrev": "DIO"
  },
  {
    "jargon": "Days payable outstanding",
    "plain": "Average number of days a company takes to pay its suppliers",
    "abbrev": "DPO"
  },
  {
    "jargon": "Days sales outstanding",
    "plain": "Average number of days to collect payment after a sale",
    "abbrev": "DSO"
  },
  {
    "jargon": "Dead quiet",
    "plain": "extremely silent"
  },
  {
    "jargon": "Debt ratio",
    "plain": "Total debt divided by total assets",
    "abbrev": "DR"
  },
  {
    "jargon": "Debt service coverage ratio",
    "plain": "A measure of a company's ability to cover its debt payments",
    "abbrev": "DSCR"
  },
  {
    "jargon": "Debt to equity ratio",
    "plain": "How much debt a company uses compared to equity",
    "abbrev": "D/E"
  },
  {
    "jargon": "Deck",
    "plain": "A PowerPoint or slides presentation"
  },
  {
    "jargon": "Ded / Dead",
    "plain": "extremely funny, laughing so hard"
  },
  {
    "jargon": "Deep dive",
    "plain": "Look at something in great detail"
  },
  {
    "jargon": "Deep down",
    "plain": "how a person really feels inside"
  },
  {
    "jargon": "Deferred tax assets",
    "plain": "Tax savings expected to be used in future periods",
    "abbrev": "DTA"
  },
  {
    "jargon": "Deferred tax liabilities",
    "plain": "Taxes owed in the future due to timing differences",
    "abbrev": "DTL"
  },
  {
    "jargon": "Deliverable",
    "plain": "A finished piece of work handed over to someone"
  },
  {
    "jargon": "Delulu",
    "plain": "delusional, but often used affectionately"
  },
  {
    "jargon": "Depreciation and amortization",
    "plain": "Spreading the cost of assets over their useful life",
    "abbrev": "D&A"
  },
  {
    "jargon": "Diamond in the rough",
    "plain": "a person with hidden potential"
  },
  {
    "jargon": "Different strokes for different folks",
    "plain": "different people do things in ways that suit their personalities"
  },
  {
    "jargon": "Discount dividend method",
    "plain": "Values a stock based on expected future dividends",
    "abbrev": "DDM"
  },
  {
    "jargon": "Discounted cash flow",
    "plain": "A valuation method based on the present value of future cash flows",
    "abbrev": "DCF"
  },
  {
    "jargon": "Dish the dirt",
    "plain": "revealing an embarrassing secret about a person"
  },
  {
    "jargon": "Disrupt",
    "plain": "Fundamentally change how an industry works"
  },
  {
    "jargon": "Disruptive",
    "plain": "Changing how things are done in a big way"
  },
  {
    "jargon": "Dividend yield",
    "plain": "Annual dividend as a percentage of share price",
    "abbrev": "DY"
  },
  {
    "jargon": "Do or die",
    "plain": "doing it no matter what the obstacles"
  },
  {
    "jargon": "Do someone a good turn",
    "plain": "doing something kind for a person"
  },
  {
    "jargon": "Do something at the drop of a hat",
    "plain": "doing it right away without any planning"
  },
  {
    "jargon": "Doesn't know beans about it",
    "plain": "knowing very little or nothing about it"
  },
  {
    "jargon": "Dollars for doughnuts",
    "plain": "a certainty or sure bet"
  },
  {
    "jargon": "Don't beat a dead horse",
    "plain": "a subject that's over and it's time to move on"
  },
  {
    "jargon": "Don't give up your day job",
    "plain": "not being very competent at a task"
  },
  {
    "jargon": "Don't know if I'm coming or going",
    "plain": "extremely confused about a situation"
  },
  {
    "jargon": "Don't put all your eggs in one basket",
    "plain": "making everything depend on one circumstance"
  },
  {
    "jargon": "Don't quote me on that",
    "plain": "might be the answer but I'm not completely sure"
  },
  {
    "jargon": "Don't throw the baby out with the bath water",
    "plain": "thow everything away when there might be beneficial elements to keep"
  },
  {
    "jargon": "Don't want to hear that",
    "plain": "not liking what's being said even though you acknowledge it could be real"
  },
  {
    "jargon": "Don’t sweat the small stuff",
    "plain": "do not spend time worrying about insignificant issues"
  },
  {
    "jargon": "Double down",
    "plain": "Commit even more strongly to a course of action"
  },
  {
    "jargon": "Double tax treaties",
    "plain": "Agreements between countries to prevent double taxation",
    "abbrev": "DTT"
  },
  {
    "jargon": "Double-click on that",
    "plain": "Look at that more closely"
  },
  {
    "jargon": "Down the tube",
    "plain": "going wrong, especially an exciting plan"
  },
  {
    "jargon": "Dragging your feet",
    "plain": "putting off doing it"
  },
  {
    "jargon": "Drastic times call for drastic measures",
    "plain": "difficult circumstances calling for decisive action"
  },
  {
    "jargon": "Drill down",
    "plain": "Get into the details"
  },
  {
    "jargon": "Drink the Kool-Aid",
    "plain": "Blindly follow a company's direction without question"
  },
  {
    "jargon": "Drip",
    "plain": "stylish outfit or fashion sense"
  },
  {
    "jargon": "Drive",
    "plain": "Lead or push something forward"
  },
  {
    "jargon": "Driving her nuts",
    "plain": "making her extremely annoyed and frustrated"
  },
  {
    "jargon": "Driving him nuts",
    "plain": "making him extremely annoyed and frustrated"
  },
  {
    "jargon": "Driving me nuts",
    "plain": "making me extremely annoyed and frustrated"
  },
  {
    "jargon": "Drop someone a line",
    "plain": "writing to a person a message"
  },
  {
    "jargon": "Ducks in a row",
    "plain": "Everything organised and in order before proceeding"
  },
  {
    "jargon": "Dumpster fire",
    "plain": "A situation that is catastrophically bad"
  },
  {
    "jargon": "Earning after tax",
    "plain": "Profit remaining after all taxes are paid",
    "abbrev": "EAT"
  },
  {
    "jargon": "Earnings before interest and taxes",
    "plain": "Profit before interest and tax costs are deducted",
    "abbrev": "EBIT"
  },
  {
    "jargon": "Earnings per share",
    "plain": "Company profit divided by number of shares",
    "abbrev": "EPS"
  },
  {
    "jargon": "Easy come, easy go",
    "plain": "getting it easily and losing it easily"
  },
  {
    "jargon": "Easy does it",
    "plain": "moving or acting more slowly and carefully"
  },
  {
    "jargon": "Eat like a bird",
    "plain": "eating very little"
  },
  {
    "jargon": "Eat my hat",
    "plain": "thinking it will not happen"
  },
  {
    "jargon": "Eat the frog",
    "plain": "Tackle the hardest or most unpleasant task first"
  },
  {
    "jargon": "EBITDA",
    "plain": "Earnings before interest, taxes, depreciation, and amortisation — a rough measure of profit",
    "abbrev": "EBITDA"
  },
  {
    "jargon": "Economic value added",
    "plain": "Profit after subtracting the cost of capital",
    "abbrev": "EVA"
  },
  {
    "jargon": "Ecosystem",
    "plain": "All the interconnected players in a space"
  },
  {
    "jargon": "Egg on your face",
    "plain": "seeming or being embarrassed"
  },
  {
    "jargon": "Elevator pitch",
    "plain": "a very short speech in which you promote your capabilities and discuss how you can benefit an individual or organization"
  },
  {
    "jargon": "Employee engagement",
    "plain": "How emotionally committed and motivated an employee is in their work"
  },
  {
    "jargon": "Employee lifecycle",
    "plain": "The stages an employee goes through from hire to departure"
  },
  {
    "jargon": "Employee stock ownership plan",
    "plain": "A scheme giving employees ownership stakes in the company",
    "abbrev": "ESOP"
  },
  {
    "jargon": "Empower",
    "plain": "Give someone the tools and authority to act"
  },
  {
    "jargon": "End-to-end",
    "plain": "From start to finish, covering everything",
    "abbrev": "E2E"
  },
  {
    "jargon": "Engage",
    "plain": "Get involved with / talk to"
  },
  {
    "jargon": "Enterprise resource planning",
    "plain": "Business management software integrating core company processes",
    "abbrev": "ERP"
  },
  {
    "jargon": "EOD",
    "plain": "End of day",
    "abbrev": "EOD"
  },
  {
    "jargon": "EOW",
    "plain": "End of week",
    "abbrev": "EOW"
  },
  {
    "jargon": "Equity value",
    "plain": "The total value of a company's shares",
    "abbrev": "EV"
  },
  {
    "jargon": "Era",
    "plain": "a phase or period of life/behavior"
  },
  {
    "jargon": "ETA",
    "plain": "Estimated time of arrival — when something is expected",
    "abbrev": "ETA"
  },
  {
    "jargon": "Evangelize",
    "plain": "Enthusiastically promote an idea internally"
  },
  {
    "jargon": "Every cloud has a silver lining",
    "plain": "good things arising after bad things"
  },
  {
    "jargon": "Every dog has his day",
    "plain": "everyone having a chance of some success"
  },
  {
    "jargon": "Execution",
    "plain": "Actually doing the work and delivering results"
  },
  {
    "jargon": "Extra",
    "plain": "over the top, doing too much"
  },
  {
    "jargon": "Facts",
    "plain": "agreement, truth"
  },
  {
    "jargon": "Fail fast",
    "plain": "Try things quickly, learn from failure, and move on"
  },
  {
    "jargon": "Fair and square",
    "plain": "being done fairly and correctly"
  },
  {
    "jargon": "Fair market value",
    "plain": "The price an asset would sell for in an open market",
    "abbrev": "FMV"
  },
  {
    "jargon": "Fair value",
    "plain": "The estimated worth of an asset in a transaction",
    "abbrev": "FV"
  },
  {
    "jargon": "Fall off the wagon",
    "plain": "failing to stick to a determination to do it"
  },
  {
    "jargon": "Fashion victim",
    "plain": "a person who is obsessed with fashion to the point where they go overboard"
  },
  {
    "jargon": "Fast-track",
    "plain": "Speed something up / prioritize it"
  },
  {
    "jargon": "Fat cat",
    "plain": "a wealthy but also pretty lazy person"
  },
  {
    "jargon": "Feather one's nest",
    "plain": "gathering up resources to ensure future comfort"
  },
  {
    "jargon": "Feeding frenzy",
    "plain": "eating a large amount of food in a frantic manner"
  },
  {
    "jargon": "Feel/look like death warmed over",
    "plain": "feeling or looking extremely tired and drained"
  },
  {
    "jargon": "Fender bender",
    "plain": "a minor car accident"
  },
  {
    "jargon": "Fight tooth and nail",
    "plain": "fighting hard and determinedly"
  },
  {
    "jargon": "Financial Accounting Standards Board",
    "plain": "The US body that sets accounting standards",
    "abbrev": "FASB"
  },
  {
    "jargon": "Financial planning and analysis",
    "plain": "The team or function that handles budgets, forecasts, and analysis",
    "abbrev": "FP&A"
  },
  {
    "jargon": "Financial statements",
    "plain": "Formal reports of a company's financial position and performance",
    "abbrev": "FS"
  },
  {
    "jargon": "Find your feet",
    "plain": "adjusting and becoming accustomed to new circumstances"
  },
  {
    "jargon": "Fire / Fye",
    "plain": "excellent, amazing"
  },
  {
    "jargon": "Fire drill",
    "plain": "An urgent unexpected task that disrupts normal work"
  },
  {
    "jargon": "First in first out",
    "plain": "Inventory method where oldest stock is used or sold first",
    "abbrev": "FIFO"
  },
  {
    "jargon": "Fit as a fiddle",
    "plain": "in excellent health"
  },
  {
    "jargon": "Fix someone's wagon",
    "plain": "ruining a person's chance of success in revenge"
  },
  {
    "jargon": "Fixed charge coverage ratio",
    "plain": "A measure of a company's ability to cover fixed costs like interest after capital expenditure",
    "abbrev": "FCCR"
  },
  {
    "jargon": "Flag",
    "plain": "Point something out / raise a concern"
  },
  {
    "jargon": "Flavor of the month",
    "plain": "trendy or fashionable at the moment"
  },
  {
    "jargon": "Flea market",
    "plain": "a market for secondhand and inexpensive goods"
  },
  {
    "jargon": "Flesh and blood",
    "plain": "people who are related to you"
  },
  {
    "jargon": "Flex",
    "plain": "to show off"
  },
  {
    "jargon": "Fly off the handle",
    "plain": "suddenly becoming extremely angry"
  },
  {
    "jargon": "Follow in someone's footsteps",
    "plain": "following the same path in life as a person else"
  },
  {
    "jargon": "FOMO",
    "plain": "fear Of Missing Out"
  },
  {
    "jargon": "Food for thought",
    "plain": "worth carefully thinking about"
  },
  {
    "jargon": "Fool around",
    "plain": "joking around and acting silly"
  },
  {
    "jargon": "Fool's gold",
    "plain": "looks valuable but isn't"
  },
  {
    "jargon": "Foot in the door",
    "plain": "an opportunity to make progress in a desired direction"
  },
  {
    "jargon": "Footloose and fancy",
    "plain": "free of care and worry"
  },
  {
    "jargon": "For goodness' sake",
    "plain": "an expression of frustration or disbelief"
  },
  {
    "jargon": "For heaven's sake",
    "plain": "an expression of frustration or disbelief"
  },
  {
    "jargon": "For the birds",
    "plain": "a waste of energy and time"
  },
  {
    "jargon": "For the long haul",
    "plain": "Committed for a long period of time"
  },
  {
    "jargon": "Forecast",
    "plain": "An estimate of what's coming"
  },
  {
    "jargon": "Forecast of some category",
    "plain": "An estimate of a specific financial figure",
    "abbrev": "FCST"
  },
  {
    "jargon": "Foreign exchange",
    "plain": "Converting one currency to another",
    "abbrev": "FX"
  },
  {
    "jargon": "Forty winks",
    "plain": "a very short nap"
  },
  {
    "jargon": "FR / For real",
    "plain": "expressing agreement or emphasis"
  },
  {
    "jargon": "Freak out",
    "plain": "becoming very angry or worried"
  },
  {
    "jargon": "Free cash flow",
    "plain": "Cash left after operating expenses and capital spending",
    "abbrev": "FCF"
  },
  {
    "jargon": "Friction",
    "plain": "Anything that slows things down or causes problems"
  },
  {
    "jargon": "From time to time",
    "plain": "occasionally"
  },
  {
    "jargon": "Full disclosure",
    "plain": "Declaring a personal connection or conflict of interest upfront"
  },
  {
    "jargon": "Full of crap",
    "plain": "doesn't know what they're talking about"
  },
  {
    "jargon": "Full steam ahead",
    "plain": "enthusiastic forward movement"
  },
  {
    "jargon": "Full time equivalent",
    "plain": "A measure of workload equal to one full-time employee",
    "abbrev": "FTE"
  },
  {
    "jargon": "Full year forecast",
    "plain": "A projection for the entire financial year",
    "abbrev": "FYF"
  },
  {
    "jargon": "FYI",
    "plain": "For your information",
    "abbrev": "FYI"
  },
  {
    "jargon": "Gain traction",
    "plain": "Start making real progress"
  },
  {
    "jargon": "Gas / Gassed up",
    "plain": "to hype someone up or be overly confident"
  },
  {
    "jargon": "Gatekeep",
    "plain": "keeping something exclusive or hidden from others"
  },
  {
    "jargon": "General and administration costs",
    "plain": "Overhead costs not tied to making products",
    "abbrev": "G&A"
  },
  {
    "jargon": "General ledger",
    "plain": "The master record of all a company's financial transactions",
    "abbrev": "GL"
  },
  {
    "jargon": "Generally accepted accounting principles",
    "plain": "The standard accounting rules used in the US",
    "abbrev": "GAAP"
  },
  {
    "jargon": "Generally accepted accounting principles (US)",
    "plain": "The accounting standards required for US public companies",
    "abbrev": "US GAAP"
  },
  {
    "jargon": "Get a move on",
    "plain": "starting to be active again"
  },
  {
    "jargon": "Get a taste of your own medicine",
    "plain": "experiencing bad treatment like you've given others"
  },
  {
    "jargon": "Get back to someone",
    "plain": "contacting a person again soon"
  },
  {
    "jargon": "Get hold of someone",
    "plain": "getting in contact with a person"
  },
  {
    "jargon": "Get off on the wrong foot",
    "plain": "starting it the wrong way"
  },
  {
    "jargon": "Get one's feet wet",
    "plain": "starting a new activity or job"
  },
  {
    "jargon": "Get something for peanuts",
    "plain": "getting it for very little money"
  },
  {
    "jargon": "Get something out of your system",
    "plain": "doing it to feel relieved and move on"
  },
  {
    "jargon": "Get the ball rolling",
    "plain": "Make a start on something"
  },
  {
    "jargon": "Get the sack",
    "plain": "being fired from your job"
  },
  {
    "jargon": "Get with it",
    "plain": "becoming more alert and making an effort"
  },
  {
    "jargon": "Get your foot in the door",
    "plain": "Take a first step toward a bigger opportunity"
  },
  {
    "jargon": "Getting by",
    "plain": "managing to survive financially"
  },
  {
    "jargon": "Getting on my last nerve",
    "plain": "annoying you to the point of losing your temper"
  },
  {
    "jargon": "Ghosting",
    "plain": "suddenly cutting off all communication with someone"
  },
  {
    "jargon": "Give someone a song and dance",
    "plain": "wasting a person's time instead of giving proper explanation"
  },
  {
    "jargon": "Give someone the cold shoulder",
    "plain": "ignoring or acting dismissively toward a person"
  },
  {
    "jargon": "Give the green light",
    "plain": "Give approval for something to proceed"
  },
  {
    "jargon": "Give them the slip",
    "plain": "escaping or getting away from a person"
  },
  {
    "jargon": "Glow up",
    "plain": "a positive transformation, especially physical appearance"
  },
  {
    "jargon": "Go against the grain",
    "plain": "acting differently from others and following your own path"
  },
  {
    "jargon": "Go around in circles",
    "plain": "trying the same thing with little progress"
  },
  {
    "jargon": "Go cold turkey",
    "plain": "suddenly and completely stopping a practice"
  },
  {
    "jargon": "Go down in flames",
    "plain": "failing in a spectacular way"
  },
  {
    "jargon": "Go fry an egg",
    "plain": "telling a person to go away or leave you alone"
  },
  {
    "jargon": "Go it alone",
    "plain": "doing it alone with little or no help"
  },
  {
    "jargon": "Go out of one's way",
    "plain": "making an extra effort to do it for a person else"
  },
  {
    "jargon": "Go out on a limb",
    "plain": "putting yourself in a difficult position just to help a person else or assist with it"
  },
  {
    "jargon": "Go south",
    "plain": "when it starts to go badly"
  },
  {
    "jargon": "Go through it with a fine",
    "plain": "exploring a topic or object thoroughly"
  },
  {
    "jargon": "Go with the flow",
    "plain": "taking an easygoing attitude and just going along with whatever is happening"
  },
  {
    "jargon": "GOAT",
    "plain": "greatest Of All Time"
  },
  {
    "jargon": "Going viral",
    "plain": "Content spreading rapidly across the internet"
  },
  {
    "jargon": "Good egg",
    "plain": "a person who is generally good and reliable but has some peculiarities"
  },
  {
    "jargon": "Good things come to those who wait",
    "plain": "if you're patient, you are likely to eventually be rewarded"
  },
  {
    "jargon": "Good to know",
    "plain": "useful to be aware of"
  },
  {
    "jargon": "Goods receipt not invoiced",
    "plain": "Goods received but not yet billed by the supplier",
    "abbrev": "GRNI"
  },
  {
    "jargon": "Goody two shoes",
    "plain": "a girl who is very good and never misbehaves"
  },
  {
    "jargon": "Granular",
    "plain": "Very detailed"
  },
  {
    "jargon": "Grasping at straws",
    "plain": "desperate to find solutions"
  },
  {
    "jargon": "Graveyard shift",
    "plain": "a work shift when most other people are asleep"
  },
  {
    "jargon": "Gravy train",
    "plain": "allowing people to make lots of money with hardly any or no effort"
  },
  {
    "jargon": "Great minds think alike",
    "plain": "intelligent people often have the same ideas"
  },
  {
    "jargon": "Green around the gills",
    "plain": "feeling nauseous or sick to your stomach"
  },
  {
    "jargon": "Gross margin",
    "plain": "Revenue minus the cost of goods sold",
    "abbrev": "GM"
  },
  {
    "jargon": "Gross profit",
    "plain": "Revenue minus the direct cost of producing goods",
    "abbrev": "GP"
  },
  {
    "jargon": "Gross profit margin",
    "plain": "Gross profit as a percentage of revenue",
    "abbrev": "GPM"
  },
  {
    "jargon": "GTM",
    "plain": "Go-to-market — the plan for launching something",
    "abbrev": "GTM"
  },
  {
    "jargon": "Guardrails",
    "plain": "Boundaries or limits put in place"
  },
  {
    "jargon": "Gucci",
    "plain": "good, cool, fine"
  },
  {
    "jargon": "Hair of the dog",
    "plain": "an alcoholic beverage taken in an attempt to cure a hangover"
  },
  {
    "jargon": "Half the battle",
    "plain": "half of the effort or work required"
  },
  {
    "jargon": "Half-assed",
    "plain": "inadequately thought-out or planned"
  },
  {
    "jargon": "Handle someone with kid gloves",
    "plain": "treating a person with extreme gentleness and respect"
  },
  {
    "jargon": "Hard stop",
    "plain": "A firm, non-negotiable end time for a meeting"
  },
  {
    "jargon": "Hardcoded",
    "plain": "Fixed and not easy to change"
  },
  {
    "jargon": "Haste makes waste",
    "plain": "rushing through it will likely lead to mistakes"
  },
  {
    "jargon": "Have two left feet",
    "plain": "being clumsy"
  },
  {
    "jargon": "He who laughs last laughs loudest",
    "plain": "getting revenge will come to those who wait"
  },
  {
    "jargon": "He's a chip off the old block",
    "plain": "a son similar to his father"
  },
  {
    "jargon": "He's not playing with a full deck",
    "plain": "not very smart"
  },
  {
    "jargon": "He's off his rocker",
    "plain": "very irrational or crazy"
  },
  {
    "jargon": "Head honcho",
    "plain": "the person in the highest position of power"
  },
  {
    "jargon": "Head over heels",
    "plain": "completely in love"
  },
  {
    "jargon": "Head's up",
    "plain": "Advance warning that something needs attention"
  },
  {
    "jargon": "Headcount",
    "plain": "Number of employees"
  },
  {
    "jargon": "Hear it on the grapevine",
    "plain": "hearing a rumor through gossip"
  },
  {
    "jargon": "Hear something straight from the horse's mouth",
    "plain": "hearing information directly from the source"
  },
  {
    "jargon": "Heavy lifting",
    "plain": "Taking on the hardest, most time-consuming work"
  },
  {
    "jargon": "Heebie Jeebies",
    "plain": "a creepy feeling that makes you shudder"
  },
  {
    "jargon": "Helicopter view",
    "plain": "A high-level overview without the fine detail"
  },
  {
    "jargon": "Herding cats",
    "plain": "Trying to organise an inherently difficult or uncooperative group"
  },
  {
    "jargon": "Here and there",
    "plain": "sometimes or in various places"
  },
  {
    "jargon": "High",
    "plain": "searching everywhere thoroughly"
  },
  {
    "jargon": "High on the hog",
    "plain": "living in a luxurious way"
  },
  {
    "jargon": "High-level",
    "plain": "A general overview, not detailed"
  },
  {
    "jargon": "Hissy fit",
    "plain": "getting really upset and showing it dramatically"
  },
  {
    "jargon": "Hit it on the nose",
    "plain": "doing it perfectly"
  },
  {
    "jargon": "Hit me up",
    "plain": "getting in contact with a person"
  },
  {
    "jargon": "Hit someone below the belt",
    "plain": "insulting or treating a person unfairly"
  },
  {
    "jargon": "Hit the ceiling",
    "plain": "getting extremely angry"
  },
  {
    "jargon": "Hit the ground running",
    "plain": "Start a new role or project with energy and enthusiasm from day one"
  },
  {
    "jargon": "Hit the jackpot",
    "plain": "coming into possession of wealth or great value"
  },
  {
    "jargon": "Hit the nail on the head",
    "plain": "figuring out the exact truth"
  },
  {
    "jargon": "Hits different",
    "plain": "has a unique or special impact"
  },
  {
    "jargon": "Hocus",
    "plain": "magic or trickery"
  },
  {
    "jargon": "Hold your tongue",
    "plain": "stopping your talking"
  },
  {
    "jargon": "Holistic",
    "plain": "Looking at the whole thing, not just parts"
  },
  {
    "jargon": "Horizon",
    "plain": "The time period you're planning for"
  },
  {
    "jargon": "Horse of a different color",
    "plain": "it that is very different"
  },
  {
    "jargon": "Hot desking",
    "plain": "Sharing unassigned desks in an office on a first-come, first-served basis"
  },
  {
    "jargon": "How do you like them apples",
    "plain": "an expression of boasting or surprise"
  },
  {
    "jargon": "Icing on the cake",
    "plain": "it extra and good"
  },
  {
    "jargon": "Ideation",
    "plain": "Coming up with ideas"
  },
  {
    "jargon": "Idle hands are the devil's tools",
    "plain": "idleness leading to bad things"
  },
  {
    "jargon": "If I had a nickel for every time something happened",
    "plain": "it that happens a lot"
  },
  {
    "jargon": "If worst comes to worst",
    "plain": "the worst possible scenario happening"
  },
  {
    "jargon": "If you can't stand the heat",
    "plain": "not wanting to deal with difficulties"
  },
  {
    "jargon": "If you play your cards right",
    "plain": "doing the right things"
  },
  {
    "jargon": "Immaterial",
    "plain": "Too small to significantly affect financial statements",
    "abbrev": "IMM"
  },
  {
    "jargon": "Impact",
    "plain": "The real-world difference something makes"
  },
  {
    "jargon": "In a nutshell",
    "plain": "a concise way"
  },
  {
    "jargon": "In a pinch",
    "plain": "if necessary"
  },
  {
    "jargon": "In charge of",
    "plain": "having ultimate authority over it"
  },
  {
    "jargon": "In hot water",
    "plain": "being in trouble"
  },
  {
    "jargon": "In my book",
    "plain": "in my opinion"
  },
  {
    "jargon": "In my element",
    "plain": "being in your comfortable area"
  },
  {
    "jargon": "In seventh heaven",
    "plain": "feeling blissfully happy"
  },
  {
    "jargon": "In the bag",
    "plain": "certain to be successful"
  },
  {
    "jargon": "In the black",
    "plain": "Operating at a profit"
  },
  {
    "jargon": "In the boondocks",
    "plain": "a very isolated rural area"
  },
  {
    "jargon": "In the chips/money",
    "plain": "having received a large amount"
  },
  {
    "jargon": "In the long run",
    "plain": "after a while"
  },
  {
    "jargon": "In the loop",
    "plain": "Kept informed and up to date on something"
  },
  {
    "jargon": "In the loop",
    "plain": "aware of what is going on"
  },
  {
    "jargon": "In the weeds",
    "plain": "Stuck on fine details instead of the big picture"
  },
  {
    "jargon": "Incentivize",
    "plain": "Give people a reason to do something"
  },
  {
    "jargon": "Income statement",
    "plain": "A report showing revenues, costs, and profit over a period",
    "abbrev": "IS"
  },
  {
    "jargon": "Initial public offering",
    "plain": "When a company first sells shares to the public",
    "abbrev": "IPO"
  },
  {
    "jargon": "Intellectual property",
    "plain": "Creations of the mind protected by law, like patents or trademarks",
    "abbrev": "IP"
  },
  {
    "jargon": "Intercompany",
    "plain": "Transactions between entities within the same corporate group",
    "abbrev": "IC"
  },
  {
    "jargon": "Internal rate of return",
    "plain": "The growth rate at which an investment breaks even in present value terms",
    "abbrev": "IRR"
  },
  {
    "jargon": "International accounting standards",
    "plain": "Accounting rules issued by the IASB",
    "abbrev": "IAS"
  },
  {
    "jargon": "International accounting standards board",
    "plain": "The global body that issues IFRS accounting standards",
    "abbrev": "IASB"
  },
  {
    "jargon": "International financial reporting standards",
    "plain": "Global accounting standards issued by the IASB",
    "abbrev": "IFRS"
  },
  {
    "jargon": "It ain't over till the fat lady sings",
    "plain": "not ended yet"
  },
  {
    "jargon": "It is always darkest before the dawn",
    "plain": "the most difficult times come before much better ones"
  },
  {
    "jargon": "It is what it is",
    "plain": "Accepting a situation you cannot change"
  },
  {
    "jargon": "It takes one to know one",
    "plain": "if a person calls me a name, they must be what they have called me"
  },
  {
    "jargon": "It takes two to tango",
    "plain": "both people are responsible; you cannot place the blame on just one person"
  },
  {
    "jargon": "It's giving...",
    "plain": "it has the vibe of, it reminds me of"
  },
  {
    "jargon": "It's no skin off my nose",
    "plain": "it doesn't bother"
  },
  {
    "jargon": "Itchy feet",
    "plain": "feeling restless and wanting to get up and move around"
  },
  {
    "jargon": "Iterate",
    "plain": "Improve something step by step"
  },
  {
    "jargon": "IYKYK",
    "plain": "if You Know, You Know (insider knowledge)"
  },
  {
    "jargon": "Jaywalking",
    "plain": "crossing the street at a place other than the crosswalk"
  },
  {
    "jargon": "Joined at the hip",
    "plain": "always or almost always together"
  },
  {
    "jargon": "Joint",
    "plain": "can refer to almost anything (song, place, thing)"
  },
  {
    "jargon": "Joint venture",
    "plain": "A business arrangement where two or more parties pool resources for a project",
    "abbrev": "JV"
  },
  {
    "jargon": "Jump down someone's throat",
    "plain": "to get really angry with a person and express that emotion, perhaps in an aggressive way"
  },
  {
    "jargon": "Jump on the bandwagon",
    "plain": "to do what everyone else is doing or to follow a trend"
  },
  {
    "jargon": "Jump the gun",
    "plain": "to start too quickly, either without adequate preparation or at the wrong time"
  },
  {
    "jargon": "Jump the shark",
    "plain": "Reach the point where quality or relevance starts to decline"
  },
  {
    "jargon": "Jump through hoops",
    "plain": "to do things that don't seem to make much sense just because they're required"
  },
  {
    "jargon": "Junk food",
    "plain": "unhealthy, usually heavily processed food"
  },
  {
    "jargon": "Jury is still out",
    "plain": "a decision hasn't been made yet"
  },
  {
    "jargon": "Just a moment",
    "plain": "please wait a moment or two"
  },
  {
    "jargon": "Just around the corner",
    "plain": "very close by"
  },
  {
    "jargon": "Just now",
    "plain": "it has recently occurred, perhaps within the last few seconds or minutes"
  },
  {
    "jargon": "Karen",
    "plain": "entitled person who complains to managers, often middle-aged white women"
  },
  {
    "jargon": "Keep body and soul together",
    "plain": "to earn enough money to stay alive"
  },
  {
    "jargon": "Keep my head above water",
    "plain": "managing to survive financial difficulties"
  },
  {
    "jargon": "Keep something at bay",
    "plain": "keeping it at a distance"
  },
  {
    "jargon": "Keep the ball rolling",
    "plain": "keeping it going or making sure it continues"
  },
  {
    "jargon": "Keep your head",
    "plain": "maintaining your sense of logic and being sensible"
  },
  {
    "jargon": "Keep your nose clean",
    "plain": "behaving well and staying out of trouble"
  },
  {
    "jargon": "Keeping up with the Joneses",
    "plain": "trying to keep up with other people in terms of wealth and material possessions"
  },
  {
    "jargon": "Kept in the dark",
    "plain": "being kept unaware of it"
  },
  {
    "jargon": "Key performance indicator",
    "plain": "A number used to measure success",
    "abbrev": "KPI"
  },
  {
    "jargon": "Key takeaway",
    "plain": "The most important thing to remember"
  },
  {
    "jargon": "Keyed up",
    "plain": "being tense and anxious, perhaps in anticipation of it"
  },
  {
    "jargon": "Kick up your heels",
    "plain": "celebrating"
  },
  {
    "jargon": "Kill two birds with one stone",
    "plain": "accomplishing two tasks with one action"
  },
  {
    "jargon": "Killing it",
    "plain": "Performing exceptionally well"
  },
  {
    "jargon": "Kit and caboodle",
    "plain": "everything or all things",
    "example": "not wanting to be talked to"
  },
  {
    "jargon": "Knee Jerk",
    "plain": "an automatic, unthinking reaction"
  },
  {
    "jargon": "Know which way the wind is blowing",
    "plain": "comprehending a situation, generally a negative one"
  },
  {
    "jargon": "Know your client",
    "plain": "Due diligence process to verify a customer's identity",
    "abbrev": "KYC"
  },
  {
    "jargon": "Know your onions",
    "plain": "being extremely knowledgeable on a topic"
  },
  {
    "jargon": "Knuckle under",
    "plain": "giving in"
  },
  {
    "jargon": "Labor of love",
    "plain": "doing it because you love to for the benefit of a person you love"
  },
  {
    "jargon": "Ladder up",
    "plain": "Connect this smaller thing to the bigger goal"
  },
  {
    "jargon": "Laid off",
    "plain": "losing your job"
  },
  {
    "jargon": "Laser focus",
    "plain": "Extreme, narrow concentration on one specific thing"
  },
  {
    "jargon": "Last but not least",
    "plain": "saved for last but not necessarily less important"
  },
  {
    "jargon": "Last financial year",
    "plain": "The most recently completed financial year",
    "abbrev": "LFY"
  },
  {
    "jargon": "Last in first out",
    "plain": "Inventory method where the newest stock is used or sold first",
    "abbrev": "LIFO"
  },
  {
    "jargon": "Last year",
    "plain": "Stands for last year — usually a column name in reports",
    "abbrev": "LY"
  },
  {
    "jargon": "Laugh all the way to the bank",
    "plain": "gaining lots of easy money"
  },
  {
    "jargon": "Lay down the law",
    "plain": "setting strict rules"
  },
  {
    "jargon": "Lean in",
    "plain": "Commit more fully / get more involved"
  },
  {
    "jargon": "Learn by rote",
    "plain": "memorizing it"
  },
  {
    "jargon": "Learn the ropes",
    "plain": "Learn how things work in a new role or environment"
  },
  {
    "jargon": "Learn the ropes",
    "plain": "learning how to do a new job"
  },
  {
    "jargon": "Learned my lesson",
    "plain": "learning from a mistake"
  },
  {
    "jargon": "Leave me alone",
    "plain": "wanting to be alone, so please stop talking to me"
  },
  {
    "jargon": "Left out in the cold",
    "plain": "being left excluded from an opportunity"
  },
  {
    "jargon": "Lend me your ear",
    "plain": "asking a person to listen"
  },
  {
    "jargon": "Let bygones be bygones",
    "plain": "leaving past grievances in the past"
  },
  {
    "jargon": "Let someone off the hook",
    "plain": "refraining from holding a person accountable for it"
  },
  {
    "jargon": "Let the cat out of the bag",
    "plain": "revealing a secret"
  },
  {
    "jargon": "Level playing field",
    "plain": "fair and even circumstances, especially in competition"
  },
  {
    "jargon": "Leverage",
    "plain": "Use something to your advantage"
  },
  {
    "jargon": "Leveraged buyout",
    "plain": "Acquiring a company using mostly borrowed money",
    "abbrev": "LBO"
  },
  {
    "jargon": "Lewk",
    "plain": "a distinctive, fashionable look"
  },
  {
    "jargon": "Life of Riley",
    "plain": "a very comfortable and probably luxurious lifestyle"
  },
  {
    "jargon": "Like clockwork",
    "plain": "happening on a very regular basis"
  },
  {
    "jargon": "Like riding a bicycle",
    "plain": "it you never forget or stop knowing"
  },
  {
    "jargon": "Like taking candy from a baby",
    "plain": "extremely easy to do, especially convincing a person"
  },
  {
    "jargon": "Like there is no tomorrow",
    "plain": "living in the moment without concern for the future"
  },
  {
    "jargon": "Limited partner",
    "plain": "A partner whose liability is limited to their investment",
    "abbrev": "LP"
  },
  {
    "jargon": "Lit",
    "plain": "exciting, amazing, fun"
  },
  {
    "jargon": "Living the dream",
    "plain": "living a wonderful life, the type one would dream of"
  },
  {
    "jargon": "Lock",
    "plain": "completely and entirely"
  },
  {
    "jargon": "Long shot",
    "plain": "An attempt with a small chance of success"
  },
  {
    "jargon": "Long term",
    "plain": "Referring to an extended time period, usually over one year",
    "abbrev": "LT"
  },
  {
    "jargon": "Long term growth rate",
    "plain": "The expected rate of growth over the long run",
    "abbrev": "LGR"
  },
  {
    "jargon": "Look like a million bucks/dollars",
    "plain": "looking very attractive, usually well-dressed"
  },
  {
    "jargon": "Loop someone in",
    "plain": "Keep someone informed about what is happening"
  },
  {
    "jargon": "Loose cannon",
    "plain": "a person who is unpredictable and will probably cause problems"
  },
  {
    "jargon": "Lose one's shirt",
    "plain": "losing a large amount of money or financial security"
  },
  {
    "jargon": "Lose touch",
    "plain": "discontinuing contact with a person, often unintentionally"
  },
  {
    "jargon": "Lost at sea",
    "plain": "feeling confused about a situation and not knowing what to do"
  },
  {
    "jargon": "Lots of moving parts",
    "plain": "A complex situation with many interdependencies"
  },
  {
    "jargon": "Low-hanging fruit",
    "plain": "Easy wins that are quick to achieve"
  },
  {
    "jargon": "Low-key / High-key",
    "plain": "low-key: somewhat, secretly; High-key: very much, obviously"
  },
  {
    "jargon": "Luck out",
    "plain": "being very lucky"
  },
  {
    "jargon": "Main character",
    "plain": "acting like the protagonist of a movie, centering yourself"
  },
  {
    "jargon": "Make a beeline for",
    "plain": "going directly toward it"
  },
  {
    "jargon": "Make a long story short",
    "plain": "recounting it briefly, leaving out unnecessary details"
  },
  {
    "jargon": "Make a pit stop",
    "plain": "stopping somewhere for a short time during a long journey"
  },
  {
    "jargon": "Make a scene",
    "plain": "creating a fuss that draws negative attention from others"
  },
  {
    "jargon": "Make hay while the sun shines",
    "plain": "making full use of a good situation"
  },
  {
    "jargon": "Make out like a bandit",
    "plain": "having success in a venture involving money or benefits"
  },
  {
    "jargon": "Make the grade",
    "plain": "being satisfactory or meeting necessary standards"
  },
  {
    "jargon": "Make tracks",
    "plain": "promptly or quickly leaving"
  },
  {
    "jargon": "Make waves",
    "plain": "creating controversy or trouble"
  },
  {
    "jargon": "Make yourself at home",
    "plain": "an invitation to feel comfortable in a person's home"
  },
  {
    "jargon": "Man's best friend",
    "plain": "a dog"
  },
  {
    "jargon": "Mark time",
    "plain": "waiting out the minimum time you need to put in"
  },
  {
    "jargon": "Meet halfway",
    "plain": "understanding each other's positions and making compromises"
  },
  {
    "jargon": "Mergers and acquisitions",
    "plain": "Buying, selling, or combining companies",
    "abbrev": "M&A"
  },
  {
    "jargon": "Mickey mouse job",
    "plain": "a job that is considered insignificant or useless"
  },
  {
    "jargon": "Micromanager",
    "plain": "A boss who excessively monitors and controls every detail of their team's work"
  },
  {
    "jargon": "Mid",
    "plain": "mediocre, average, not impressive"
  },
  {
    "jargon": "Middle of the road",
    "plain": "a position that is not at either end"
  },
  {
    "jargon": "Mom and Pop",
    "plain": "a small family-run business"
  },
  {
    "jargon": "Money to burn",
    "plain": "having large amounts of extra money"
  },
  {
    "jargon": "Month on month growth",
    "plain": "Growth compared to the previous month",
    "abbrev": "MoM"
  },
  {
    "jargon": "Month to date",
    "plain": "Figures accumulated from the start of the current month",
    "abbrev": "MTD"
  },
  {
    "jargon": "Monthly recurring revenues",
    "plain": "Predictable revenue expected every month",
    "abbrev": "MRR"
  },
  {
    "jargon": "Mood",
    "plain": "relatable feeling"
  },
  {
    "jargon": "Move fast and break things",
    "plain": "Prioritise speed and innovation over caution"
  },
  {
    "jargon": "Move the needle",
    "plain": "Make a noticeable difference"
  },
  {
    "jargon": "Moving the goalposts",
    "plain": "Changing the rules mid-task to make it harder for others"
  },
  {
    "jargon": "Multi-period excess earning method",
    "plain": "An intangible asset valuation method based on excess earnings over time",
    "abbrev": "MPEEM"
  },
  {
    "jargon": "Mum's the word",
    "plain": "staying quiet and not talking about it"
  },
  {
    "jargon": "Mumbo jumbo",
    "plain": "meaningless words or nonsense"
  },
  {
    "jargon": "MVP",
    "plain": "Minimum viable product — the simplest version that can be tested",
    "abbrev": "MVP"
  },
  {
    "jargon": "My eyes are bigger than my stomach",
    "plain": "wanting to eat more than your stomach can handle"
  },
  {
    "jargon": "NDA",
    "plain": "Non-disclosure agreement — a legal promise to keep information private",
    "abbrev": "NDA"
  },
  {
    "jargon": "Needle in a haystack",
    "plain": "Something very difficult to find among many other things"
  },
  {
    "jargon": "Net asset value",
    "plain": "Total assets minus total liabilities",
    "abbrev": "NAV"
  },
  {
    "jargon": "Net financial position",
    "plain": "Total debt minus cash — shows net borrowing",
    "abbrev": "NFP"
  },
  {
    "jargon": "Net operating loss",
    "plain": "A tax loss that can be carried forward to offset future profits",
    "abbrev": "NOL"
  },
  {
    "jargon": "Net operating profit after tax",
    "plain": "Operating profit after tax, used in valuation models",
    "abbrev": "NOPLAT"
  },
  {
    "jargon": "Net present value",
    "plain": "The current value of future cash flows after discounting",
    "abbrev": "NPV"
  },
  {
    "jargon": "Net promoting score",
    "plain": "A measure of how likely customers are to recommend you",
    "abbrev": "NPS"
  },
  {
    "jargon": "Net working capital",
    "plain": "Current assets minus current liabilities",
    "abbrev": "NWC"
  },
  {
    "jargon": "Net-net",
    "plain": "All things considered / the bottom line"
  },
  {
    "jargon": "Never bite the hand that feeds you",
    "plain": "not hurting a person who helps you"
  },
  {
    "jargon": "New kid on the block",
    "plain": "a new person in an area or newly involved in it"
  },
  {
    "jargon": "Nimble",
    "plain": "Quick and able to change direction easily"
  },
  {
    "jargon": "Nip something in the bud",
    "plain": "preventing it from getting worse by cutting it off at the very beginning"
  },
  {
    "jargon": "Nitty",
    "plain": "the most fundamental aspects of it"
  },
  {
    "jargon": "No",
    "plain": "easy and simple"
  },
  {
    "jargon": "No dice",
    "plain": "not going to happen"
  },
  {
    "jargon": "No pain",
    "plain": "needing to exert yourself to accomplish things"
  },
  {
    "jargon": "No rhyme or reason",
    "plain": "without explanation or logic"
  },
  {
    "jargon": "Non-performing loan",
    "plain": "A loan where the borrower has stopped making payments",
    "abbrev": "NPL"
  },
  {
    "jargon": "North Star",
    "plain": "The main goal everything else points toward"
  },
  {
    "jargon": "Not a spark of decency",
    "plain": "having no consideration at all"
  },
  {
    "jargon": "Not one's cup of tea",
    "plain": "not fitting one's taste"
  },
  {
    "jargon": "Not what it's cracked up to be",
    "plain": "not as good or impressive as people have implied"
  },
  {
    "jargon": "Not worth a red cent",
    "plain": "lacking any value"
  },
  {
    "jargon": "Nothing to write home about",
    "plain": "not exciting or extraordinary"
  },
  {
    "jargon": "NPC",
    "plain": "non-playable character; someone who seems to lack independent thought or personality"
  },
  {
    "jargon": "Number cruncher",
    "plain": "person who works with numbers, especially in a tedious way"
  },
  {
    "jargon": "Off the cuff",
    "plain": "done spontaneously or without much preparation"
  },
  {
    "jargon": "Off the record",
    "plain": "confidential information not meant to be shared"
  },
  {
    "jargon": "Off the top of my head",
    "plain": "without thinking about it first"
  },
  {
    "jargon": "Offboarding",
    "plain": "The structured process of managing an employee's departure from a company"
  },
  {
    "jargon": "Office drone",
    "plain": "Someone doing repetitive, mundane work every day"
  },
  {
    "jargon": "Og / OG",
    "plain": "original Gangster; the original or a veteran"
  },
  {
    "jargon": "OKR",
    "plain": "Objectives and key results — a goal-setting method",
    "abbrev": "OKR"
  },
  {
    "jargon": "On a shoestring",
    "plain": "done with very little money"
  },
  {
    "jargon": "On a tear",
    "plain": "a period of high energy or emotional intensity"
  },
  {
    "jargon": "On pins and needles",
    "plain": "very nervous or anxious"
  },
  {
    "jargon": "On the cheap",
    "plain": "done with little money"
  },
  {
    "jargon": "On the fly",
    "plain": "done quickly while doing other things"
  },
  {
    "jargon": "On the house",
    "plain": "free from the establishment"
  },
  {
    "jargon": "On the radar",
    "plain": "Being watched or considered"
  },
  {
    "jargon": "On the same page",
    "plain": "Everyone sharing the same understanding or agreement"
  },
  {
    "jargon": "On the spot",
    "plain": "right here and now"
  },
  {
    "jargon": "On the up and up",
    "plain": "honest and legitimate"
  },
  {
    "jargon": "On thin ice",
    "plain": "in a risky situation where another mistake will cause trouble"
  },
  {
    "jargon": "Onboarding",
    "plain": "The process of integrating a new employee into a company"
  },
  {
    "jargon": "Once and for all",
    "plain": "permanently and finally"
  },
  {
    "jargon": "Once bitten",
    "plain": "being cautious after a bad experience"
  },
  {
    "jargon": "Once in a blue moon",
    "plain": "very rarely"
  },
  {
    "jargon": "Oof",
    "plain": "expression of sympathy, pain, or awkwardness"
  },
  {
    "jargon": "Oomf",
    "plain": "one Of My Followers (subtweeting someone)"
  },
  {
    "jargon": "OOO",
    "plain": "Out of office",
    "abbrev": "OOO"
  },
  {
    "jargon": "Open a can of worms",
    "plain": "starting discussion of a complicated problem"
  },
  {
    "jargon": "Open the kimono",
    "plain": "Share information that is usually kept private"
  },
  {
    "jargon": "Operating expenses",
    "plain": "Day-to-day costs of running a business",
    "abbrev": "OPEX"
  },
  {
    "jargon": "Operating line of credit",
    "plain": "A flexible loan for short-term business cash needs",
    "abbrev": "OLC"
  },
  {
    "jargon": "Operationalize",
    "plain": "Put a plan into actual practice"
  },
  {
    "jargon": "Optics",
    "plain": "How something looks to others — the public perception of a decision"
  },
  {
    "jargon": "Optimize",
    "plain": "Make something work as well as possible"
  },
  {
    "jargon": "Organic growth",
    "plain": "Growth that comes from within, not from buying other companies"
  },
  {
    "jargon": "Out of date",
    "plain": "no longer current or relevant"
  },
  {
    "jargon": "Out of left field",
    "plain": "completely unexpected and unrelated"
  },
  {
    "jargon": "Out of order",
    "plain": "not working properly"
  },
  {
    "jargon": "Out of the box",
    "plain": "Ready to use as-is, without changes"
  },
  {
    "jargon": "Out of the frying pan and into the fire",
    "plain": "escaping one problem only to face a worse one"
  },
  {
    "jargon": "Out of the woods",
    "plain": "past the most difficult part but not completely safe yet"
  },
  {
    "jargon": "Out on a limb",
    "plain": "Doing or saying something risky without support"
  },
  {
    "jargon": "Out on the town",
    "plain": "going out to enjoy yourself at clubs and bars"
  },
  {
    "jargon": "Out to lunch",
    "plain": "confused or unaware of reality"
  },
  {
    "jargon": "Outcome",
    "plain": "The result of doing something"
  },
  {
    "jargon": "Ownership",
    "plain": "Taking full responsibility for something"
  },
  {
    "jargon": "P&L",
    "plain": "Profit and loss — a summary of income and expenses",
    "abbrev": "P&L"
  },
  {
    "jargon": "Pain point",
    "plain": "A frustration or problem people have"
  },
  {
    "jargon": "Pandora's box",
    "plain": "a situation involving unexpected consequences and problems"
  },
  {
    "jargon": "Par for the course",
    "plain": "What is normally expected — the standard outcome"
  },
  {
    "jargon": "Paradigm shift",
    "plain": "A fundamental change in how things are done"
  },
  {
    "jargon": "Party animal",
    "plain": "a person who goes to parties frequently and acts wildly"
  },
  {
    "jargon": "Pay an arm and a leg",
    "plain": "paying a huge amount of money for it"
  },
  {
    "jargon": "Pay as you earn",
    "plain": "A system where income tax is deducted from wages before payment",
    "abbrev": "PAYE"
  },
  {
    "jargon": "Pedal to the metal",
    "plain": "going really fast"
  },
  {
    "jargon": "Peel back the onion",
    "plain": "Dig deeper to find what's really going on"
  },
  {
    "jargon": "Peg out",
    "plain": "dying"
  },
  {
    "jargon": "Pencil pusher",
    "plain": "person who works in an office doing mainly paperwork"
  },
  {
    "jargon": "People analytics",
    "plain": "Using data to understand and make decisions about employees"
  },
  {
    "jargon": "Per my last email",
    "plain": "Politely pointing out something already addressed in a previous message"
  },
  {
    "jargon": "Performance review",
    "plain": "A formal evaluation of an employee's work and progress"
  },
  {
    "jargon": "Periodi / Periodt",
    "plain": "emphasis, end of discussion, that's that"
  },
  {
    "jargon": "Personal income tax",
    "plain": "Tax individuals pay on their earnings",
    "abbrev": "PIT"
  },
  {
    "jargon": "Pick up the tab",
    "plain": "paying for things that other people have consumed"
  },
  {
    "jargon": "Pick up your ears",
    "plain": "listening more closely and carefully"
  },
  {
    "jargon": "Pie in the sky",
    "plain": "an unrealistic dream"
  },
  {
    "jargon": "Pig out",
    "plain": "eating too much food in one sitting"
  },
  {
    "jargon": "Piggyback",
    "plain": "Build on an existing idea rather than starting from scratch"
  },
  {
    "jargon": "Ping",
    "plain": "Send a quick message to someone"
  },
  {
    "jargon": "Pipe down",
    "plain": "being more quiet or stopping talking completely"
  },
  {
    "jargon": "Pipe dream",
    "plain": "an unrealistic dream"
  },
  {
    "jargon": "Pipeline",
    "plain": "Work or deals that are in progress"
  },
  {
    "jargon": "Pivot",
    "plain": "Change direction significantly"
  },
  {
    "jargon": "Play devil's advocate",
    "plain": "arguing for the opposite side simply for argument's sake"
  },
  {
    "jargon": "Play hardball",
    "plain": "acting in a competitive and aggressive way"
  },
  {
    "jargon": "Playing with fire",
    "plain": "doing it in a careless way that could lead to a dangerous situation"
  },
  {
    "jargon": "POC",
    "plain": "Proof of concept — a test to show something could work",
    "abbrev": "POC"
  },
  {
    "jargon": "Poker face",
    "plain": "a face without any expression that hides a person's thoughts"
  },
  {
    "jargon": "Pound the pavement",
    "plain": "looking for a job by going from place to place"
  },
  {
    "jargon": "Preboarding",
    "plain": "Preparing a new hire before their first day — paperwork, access, welcome messages"
  },
  {
    "jargon": "Present value",
    "plain": "What a future sum of money is worth today",
    "abbrev": "PV"
  },
  {
    "jargon": "Pressed",
    "plain": "upset, bothered, stressed"
  },
  {
    "jargon": "Price to book ratio",
    "plain": "Share price divided by book value per share",
    "abbrev": "P/B"
  },
  {
    "jargon": "Price to earnings ratio",
    "plain": "Share price divided by earnings per share",
    "abbrev": "P/E"
  },
  {
    "jargon": "Price to sales ratio",
    "plain": "Share price divided by revenue per share",
    "abbrev": "P/S"
  },
  {
    "jargon": "Pride comes before a fall",
    "plain": "being too arrogant leading to significant problems"
  },
  {
    "jargon": "Private equity",
    "plain": "Investment in companies not listed on a stock exchange",
    "abbrev": "PE"
  },
  {
    "jargon": "Proactive",
    "plain": "Acting before problems arise, not waiting"
  },
  {
    "jargon": "Profit level indicator",
    "plain": "A ratio used in transfer pricing to measure profitability",
    "abbrev": "PLI"
  },
  {
    "jargon": "Profit margin",
    "plain": "Net profit as a percentage of revenue",
    "abbrev": "PM"
  },
  {
    "jargon": "Profit split method",
    "plain": "A transfer pricing method splitting combined profits between related entities",
    "abbrev": "PSM"
  },
  {
    "jargon": "Property plant and equipment",
    "plain": "Long-term physical assets used in operations",
    "abbrev": "PPE"
  },
  {
    "jargon": "Pull your chain",
    "plain": "annoying a person in some way"
  },
  {
    "jargon": "Pull yourself together",
    "plain": "calming yourself and becoming focused again"
  },
  {
    "jargon": "Pulling my leg",
    "plain": "joking with a person or playing a joke on them"
  },
  {
    "jargon": "Pulse check",
    "plain": "A quick, regular check-in on employee wellbeing or project progress"
  },
  {
    "jargon": "Punch a puppy",
    "plain": "Do something unpleasant but necessary for the good of the business"
  },
  {
    "jargon": "Punt",
    "plain": "Delay or postpone a decision"
  },
  {
    "jargon": "Purchase price allocation",
    "plain": "Assigning values to assets and liabilities when a company is acquired",
    "abbrev": "PPA"
  },
  {
    "jargon": "Purchasing power parity",
    "plain": "A theory comparing currencies based on what they can buy",
    "abbrev": "PPP"
  },
  {
    "jargon": "Push the envelope",
    "plain": "Go beyond what's been done before"
  },
  {
    "jargon": "Put a pin in it",
    "plain": "Set this aside for now"
  },
  {
    "jargon": "Put on my thinking cap",
    "plain": "trying to think more intensely and carefully about it"
  },
  {
    "jargon": "Put out a fire",
    "plain": "Deal with an urgent unexpected problem"
  },
  {
    "jargon": "Put someone on the spot",
    "plain": "putting a person in a tricky situation to embarrass them"
  },
  {
    "jargon": "Put something on ice",
    "plain": "putting it on hold with the plan to resume it later"
  },
  {
    "jargon": "Put the squeeze/screws on someone",
    "plain": "putting intense pressure on a person"
  },
  {
    "jargon": "Quality time",
    "plain": "time spent with a person you care about"
  },
  {
    "jargon": "Quarter-over-quarter",
    "plain": "Compared to the previous three-month period",
    "abbrev": "QoQ"
  },
  {
    "jargon": "Quick ratio",
    "plain": "A strict measure of short-term liquidity using only the most liquid assets",
    "abbrev": "QR"
  },
  {
    "jargon": "Quick win",
    "plain": "Something small that can be done fast to show progress"
  },
  {
    "jargon": "Racking my brain",
    "plain": "thinking intensely trying to recall or remember it"
  },
  {
    "jargon": "Rain on someone's parade",
    "plain": "ruining a person's enthusiasm with a negative opinion"
  },
  {
    "jargon": "Rain or shine",
    "plain": "no matter what"
  },
  {
    "jargon": "Ratio",
    "plain": "when a reply gets more likes than the original post; means you won the argument"
  },
  {
    "jargon": "Reach out",
    "plain": "Contact someone"
  },
  {
    "jargon": "Real McCoy",
    "plain": "a genuine thing"
  },
  {
    "jargon": "Reboarding",
    "plain": "Reintegrating an employee returning from extended leave"
  },
  {
    "jargon": "Red flag",
    "plain": "a sign that acts as a warning"
  },
  {
    "jargon": "Red flag",
    "plain": "warning sign in a person or situation"
  },
  {
    "jargon": "Red letter day",
    "plain": "a memorable day, probably a pleasant one"
  },
  {
    "jargon": "Reinvent the wheel",
    "plain": "Redo something that already exists and works"
  },
  {
    "jargon": "Rent-free",
    "plain": "can't stop thinking about something"
  },
  {
    "jargon": "Resale price method",
    "plain": "A transfer pricing method based on resale price minus a margin",
    "abbrev": "RPM"
  },
  {
    "jargon": "Research and development",
    "plain": "Work done to create new products or improve existing ones",
    "abbrev": "R&D"
  },
  {
    "jargon": "Rest on one's laurels",
    "plain": "relying on prestige from previous accomplishments without doing more"
  },
  {
    "jargon": "Return on assets",
    "plain": "How efficiently a company uses its assets to generate profit",
    "abbrev": "ROA"
  },
  {
    "jargon": "Return on capital employed",
    "plain": "Profit as a percentage of the capital used to generate it",
    "abbrev": "ROCE"
  },
  {
    "jargon": "Return on equity",
    "plain": "Profit as a percentage of shareholders' equity",
    "abbrev": "ROE"
  },
  {
    "jargon": "Return on invested capital",
    "plain": "How effectively a company uses invested capital to generate profit",
    "abbrev": "ROIC"
  },
  {
    "jargon": "Return on sales",
    "plain": "Operating profit as a percentage of revenue",
    "abbrev": "ROS"
  },
  {
    "jargon": "Reverse mentoring",
    "plain": "Younger employees mentoring older ones, often on technology or culture"
  },
  {
    "jargon": "Risk-adjusted return on capital",
    "plain": "A performance measure that accounts for the risk taken to generate returns",
    "abbrev": "RAROC"
  },
  {
    "jargon": "Rizz",
    "plain": "charisma, especially in flirting or attracting romantic interest"
  },
  {
    "jargon": "Roadmap",
    "plain": "A plan showing what will be done and when"
  },
  {
    "jargon": "Robust",
    "plain": "Strong and reliable"
  },
  {
    "jargon": "ROI",
    "plain": "Return on investment — what you got back for what you spent",
    "abbrev": "ROI"
  },
  {
    "jargon": "Rome wasn't built in a day",
    "plain": "a big task can't be accomplished in too short a time"
  },
  {
    "jargon": "Ruffle feathers",
    "plain": "causing annoyance or irritation"
  },
  {
    "jargon": "Run",
    "plain": "common and ordinary"
  },
  {
    "jargon": "Run circles around someone",
    "plain": "being more knowledgeable or skilled than a person"
  },
  {
    "jargon": "Run errands",
    "plain": "going out and doing things you need to do"
  },
  {
    "jargon": "Run it up the flagpole",
    "plain": "Share an idea to see how people react before committing"
  },
  {
    "jargon": "Run one's mouth off",
    "plain": "speaking too much about it when you shouldn't"
  },
  {
    "jargon": "Run out of steam",
    "plain": "running out of energy"
  },
  {
    "jargon": "Run rate",
    "plain": "What results would be if the current pace continued all year"
  },
  {
    "jargon": "Run the numbers",
    "plain": "Perform the financial or data calculations"
  },
  {
    "jargon": "Salty",
    "plain": "bitter, upset, or annoyed"
  },
  {
    "jargon": "Same",
    "plain": "expression of agreement or shared experience"
  },
  {
    "jargon": "Sarbanes-Oxley",
    "plain": "A US law requiring strict financial reporting and internal controls",
    "abbrev": "SOX"
  },
  {
    "jargon": "Saving for a rainy day",
    "plain": "saving money for future difficulties"
  },
  {
    "jargon": "Say uncle",
    "plain": "admitting that you have been defeated"
  },
  {
    "jargon": "Say your piece",
    "plain": "saying what you want to say"
  },
  {
    "jargon": "Scalable",
    "plain": "Can grow or handle more without breaking down"
  },
  {
    "jargon": "Scapegoat",
    "plain": "a person who is blamed for things they're not responsible for"
  },
  {
    "jargon": "School of thought",
    "plain": "a way of thinking about an academic subject"
  },
  {
    "jargon": "Scope creep",
    "plain": "When a project quietly grows beyond what was agreed"
  },
  {
    "jargon": "scpilkies",
    "plain": "feeling restless and wanting to get up and move around"
  },
  {
    "jargon": "Sea legs",
    "plain": "maintaining your balance without feeling overwhelmed"
  },
  {
    "jargon": "Seamless",
    "plain": "Smooth, with no obvious joins or problems"
  },
  {
    "jargon": "Securities and exchange commission",
    "plain": "The US regulator overseeing securities markets",
    "abbrev": "SEC"
  },
  {
    "jargon": "Security blanket",
    "plain": "it that makes you feel safe and secure"
  },
  {
    "jargon": "See eye to eye",
    "plain": "perceiving and thinking about it in the same way"
  },
  {
    "jargon": "See someone's true colors",
    "plain": "seeing a person's real character"
  },
  {
    "jargon": "See through someone/something",
    "plain": "having the perceptiveness to not be fooled by a false appearance"
  },
  {
    "jargon": "Sell someone short",
    "plain": "underestimating a person's capabilities"
  },
  {
    "jargon": "Selling general and administrative expenses",
    "plain": "All costs not directly tied to making a product",
    "abbrev": "SG&A"
  },
  {
    "jargon": "Send it / Full send",
    "plain": "go all out, commit completely"
  },
  {
    "jargon": "Set my teeth on edge",
    "plain": "it that makes you feel extremely annoyed"
  },
  {
    "jargon": "Shade",
    "plain": "subtle insult or disrespect"
  },
  {
    "jargon": "Shake a leg",
    "plain": "moving more quickly and hurrying"
  },
  {
    "jargon": "Shook",
    "plain": "shocked, surprised"
  },
  {
    "jargon": "Shoot from the hip",
    "plain": "saying it in a very direct and honest way"
  },
  {
    "jargon": "Shoot hoops",
    "plain": "playing basketball in an unstructured way"
  },
  {
    "jargon": "Short term debt",
    "plain": "Debt that must be repaid within a year",
    "abbrev": "STD"
  },
  {
    "jargon": "Shot in the arm",
    "plain": "it that suddenly energizes or renews interest"
  },
  {
    "jargon": "Shot in the dark",
    "plain": "making a guess based on limited information"
  },
  {
    "jargon": "Show of hands",
    "plain": "asking people to raise their hand if they agree"
  },
  {
    "jargon": "Sidebar",
    "plain": "An unplanned off-topic conversation that breaks out during a meeting"
  },
  {
    "jargon": "Silo",
    "plain": "A team or department that doesn't share with others"
  },
  {
    "jargon": "Silver bullet",
    "plain": "A simple fix that magically solves a complex problem"
  },
  {
    "jargon": "Simp",
    "plain": "someone who does too much for someone they like"
  },
  {
    "jargon": "Sit tight",
    "plain": "trying not to worry"
  },
  {
    "jargon": "Sitting like a bump on a log",
    "plain": "sitting around inactive while others are busy"
  },
  {
    "jargon": "Situationship",
    "plain": "undefined romantic relationship"
  },
  {
    "jargon": "Skeleton in the closet",
    "plain": "an embarrassing secret from a person's past"
  },
  {
    "jargon": "Skin in the game",
    "plain": "Having something personally at stake"
  },
  {
    "jargon": "Sksksk",
    "plain": "expression of laughter or excitement (typing equivalent of laughing)"
  },
  {
    "jargon": "SLA",
    "plain": "Service level agreement — a commitment about response times or quality",
    "abbrev": "SLA"
  },
  {
    "jargon": "Slap on the wrist",
    "plain": "a very minor punishment for the offense"
  },
  {
    "jargon": "Slaps",
    "plain": "really good, usually music"
  },
  {
    "jargon": "Slay",
    "plain": "to do something exceptionally well, to look amazing"
  },
  {
    "jargon": "Sleep on",
    "plain": "to underestimate or ignore something good"
  },
  {
    "jargon": "Sliving",
    "plain": "slaying + living your best life"
  },
  {
    "jargon": "Slow and steady wins the race",
    "plain": "being persistent rather than fast"
  },
  {
    "jargon": "Small and medium enterprises",
    "plain": "Businesses below a certain size threshold",
    "abbrev": "SME"
  },
  {
    "jargon": "Small world",
    "plain": "discovering mutual connections with others"
  },
  {
    "jargon": "Smoke like a chimney",
    "plain": "smoking too many cigarettes"
  },
  {
    "jargon": "Smol",
    "plain": "small and cute"
  },
  {
    "jargon": "Snack",
    "plain": "an attractive person"
  },
  {
    "jargon": "Software as a service",
    "plain": "Software delivered over the internet on a subscription basis",
    "abbrev": "SaaS"
  },
  {
    "jargon": "Something is killing me",
    "plain": "hurting or bothering a person"
  },
  {
    "jargon": "Something to crow about",
    "plain": "an accomplishment worth boasting about"
  },
  {
    "jargon": "Sour grapes",
    "plain": "criticizing out of jealousy"
  },
  {
    "jargon": "SOW",
    "plain": "Statement of work — a document spelling out what will be done",
    "abbrev": "SOW"
  },
  {
    "jargon": "Speak of the devil",
    "plain": "a person appearing right after being mentioned"
  },
  {
    "jargon": "Special purpose acquisition company",
    "plain": "A shell company raised to find and acquire a private business",
    "abbrev": "SPAC"
  },
  {
    "jargon": "Spice things up",
    "plain": "making it more exciting or interesting"
  },
  {
    "jargon": "Spin doctor",
    "plain": "a person who manipulates information"
  },
  {
    "jargon": "Splitting hairs",
    "plain": "arguing about insignificant details"
  },
  {
    "jargon": "Spread too thin",
    "plain": "having too many responsibilities at once"
  },
  {
    "jargon": "Square meal",
    "plain": "a complete healthy meal"
  },
  {
    "jargon": "Stakeholder",
    "plain": "Anyone affected by or with an interest in the outcome"
  },
  {
    "jargon": "Stan",
    "plain": "obsessive fan, or to strongly support"
  },
  {
    "jargon": "Stand my ground",
    "plain": "being firm in defending yourself"
  },
  {
    "jargon": "Standard operating procedures",
    "plain": "Documented step-by-step instructions for routine tasks",
    "abbrev": "SOPs"
  },
  {
    "jargon": "Steal someone's thunder",
    "plain": "taking credit or attention from a person"
  },
  {
    "jargon": "Stew in your own juices",
    "plain": "feeling annoyed or frustrated"
  },
  {
    "jargon": "Stick out like a sore thumb",
    "plain": "not fitting in with a group"
  },
  {
    "jargon": "Stock based compensation",
    "plain": "Paying employees with shares or stock options instead of cash",
    "abbrev": "SBC"
  },
  {
    "jargon": "Stop on a dime",
    "plain": "stopping accurately and promptly"
  },
  {
    "jargon": "Strategic",
    "plain": "Planned with the bigger goal in mind"
  },
  {
    "jargon": "Streamline",
    "plain": "Simplify and make more efficient"
  },
  {
    "jargon": "Strike it rich",
    "plain": "suddenly gaining a large amount of money and becoming wealthy"
  },
  {
    "jargon": "String someone along",
    "plain": "giving a person the false impression that it is going to happen"
  },
  {
    "jargon": "Succession planning",
    "plain": "Identifying and developing people to fill future leadership roles"
  },
  {
    "jargon": "Sunsetting",
    "plain": "Phasing something out gradually"
  },
  {
    "jargon": "Sus",
    "plain": "suspicious, sketchy"
  },
  {
    "jargon": "Sustainable growth rate",
    "plain": "Maximum growth a company can achieve without additional external financing",
    "abbrev": "SGR"
  },
  {
    "jargon": "Swallow your pride",
    "plain": "accepting and enduring it even though you find it humiliating"
  },
  {
    "jargon": "Sweat blood",
    "plain": "working extremely hard"
  },
  {
    "jargon": "Sync up",
    "plain": "Reconnect and realign briefly with a colleague or team"
  },
  {
    "jargon": "Synergy",
    "plain": "When working together produces better results than working apart"
  },
  {
    "jargon": "Table that",
    "plain": "Put it aside for now (US) / bring it up for discussion (UK)"
  },
  {
    "jargon": "Take a rain check",
    "plain": "postponing it"
  },
  {
    "jargon": "Take a shine to something/someone",
    "plain": "instantly liking a person or it"
  },
  {
    "jargon": "Take it easy",
    "plain": "relaxing and taking care of yourself"
  },
  {
    "jargon": "Take it offline",
    "plain": "Discuss this separately, not in this meeting"
  },
  {
    "jargon": "Take it with a grain of salt/a pinch of salt",
    "plain": "not assuming that it must be true"
  },
  {
    "jargon": "Take something by storm",
    "plain": "overwhelming it or a person"
  },
  {
    "jargon": "Take something in stride",
    "plain": "accepting some sort of trouble or difficulty and adjusting to it as needed"
  },
  {
    "jargon": "Take the cake",
    "plain": "amazing (probably in a negative way)"
  },
  {
    "jargon": "Take the plunge",
    "plain": "deciding to proceed with it suddenly and perhaps with apprehension"
  },
  {
    "jargon": "Takeaway",
    "plain": "The key point to remember"
  },
  {
    "jargon": "Talent management",
    "plain": "Identifying, hiring, developing, and retaining the right people"
  },
  {
    "jargon": "Talk someone's ear off",
    "plain": "talking to a person excessively, especially about something insignificant"
  },
  {
    "jargon": "Talk through one's hat",
    "plain": "speaking ignorantly or foolishly"
  },
  {
    "jargon": "Talk to someone like a Dutch uncle",
    "plain": "speaking to a person as if they are a close relative, offering perhaps stern advice"
  },
  {
    "jargon": "Talk turkey",
    "plain": "talking in a serious way, most often with regard to a business deal"
  },
  {
    "jargon": "Tall order",
    "plain": "difficult to do or achieve"
  },
  {
    "jargon": "Tar someone with the same brush",
    "plain": "assuming or saying that a person has the same bad characteristics as others in the same group"
  },
  {
    "jargon": "Tax amortization benefit",
    "plain": "The tax saving from amortising an intangible asset",
    "abbrev": "TAB"
  },
  {
    "jargon": "TBC",
    "plain": "To be confirmed",
    "abbrev": "TBC"
  },
  {
    "jargon": "TBD",
    "plain": "To be decided",
    "abbrev": "TBD"
  },
  {
    "jargon": "Tea",
    "plain": "gossip, drama"
  },
  {
    "jargon": "Term loan",
    "plain": "A bank loan with a fixed repayment schedule",
    "abbrev": "TL"
  },
  {
    "jargon": "Terminal value",
    "plain": "The value of a business beyond the forecast period",
    "abbrev": "TV"
  },
  {
    "jargon": "That hit the spot",
    "plain": "exactly what was desired or needed, especially with regard to food or drink"
  },
  {
    "jargon": "That is to say",
    "plain": "a person has a very small appetite"
  },
  {
    "jargon": "That ship has sailed",
    "plain": "that opportunity has past"
  },
  {
    "jargon": "That's wicked",
    "plain": "really cool"
  },
  {
    "jargon": "The best of both worlds",
    "plain": "getting the best of both worlds"
  },
  {
    "jargon": "The Big Apple",
    "plain": "new York City"
  },
  {
    "jargon": "The Big Easy",
    "plain": "new Orleans"
  },
  {
    "jargon": "The boys in blue",
    "plain": "police officers"
  },
  {
    "jargon": "The brush",
    "plain": "being dismissed or brushed off"
  },
  {
    "jargon": "The burning question",
    "plain": "the most important question"
  },
  {
    "jargon": "The devil is in the details",
    "plain": "when the devil is in the details"
  },
  {
    "jargon": "The early bird gets the worm",
    "plain": "if you hurry, you will get the best rewards"
  },
  {
    "jargon": "The elephant in the room",
    "plain": "a topic that is most important but is being avoided"
  },
  {
    "jargon": "The eleventh hour",
    "plain": "timed to barely make a deadline"
  },
  {
    "jargon": "The gift of the gab",
    "plain": "talks non-stop"
  },
  {
    "jargon": "The lion's share",
    "plain": "getting most of it"
  },
  {
    "jargon": "The long and short of it",
    "plain": "the whole story"
  },
  {
    "jargon": "The munchies",
    "plain": "wanting a snack"
  },
  {
    "jargon": "The other day",
    "plain": "just the other day"
  },
  {
    "jargon": "The pits",
    "plain": "feeling down"
  },
  {
    "jargon": "The same wavelength",
    "plain": "having the same ideas"
  },
  {
    "jargon": "The school of hard knocks",
    "plain": "learning by making mistakes"
  },
  {
    "jargon": "The shoe is on the other foot",
    "plain": "a person is in the same situation as another person they had previously judged"
  },
  {
    "jargon": "The short end of the stick",
    "plain": "getting the lesser amount of benefit while others get more"
  },
  {
    "jargon": "The squeaky wheel gets the grease",
    "plain": "you have to speak up to get the attention you need"
  },
  {
    "jargon": "The straight and narrow",
    "plain": "a path of good behavior and morality"
  },
  {
    "jargon": "The tide has turned",
    "plain": "things have changed significantly"
  },
  {
    "jargon": "There are clouds on the horizon",
    "plain": "trouble is approaching"
  },
  {
    "jargon": "There are other fish in the sea",
    "plain": "other opportunities will come along"
  },
  {
    "jargon": "There's a method to his madness",
    "plain": "there are actually clever reasons behind a person's seemingly crazy actions"
  },
  {
    "jargon": "Third time's a charm",
    "plain": "the third attempt might be successful"
  },
  {
    "jargon": "This is the life",
    "plain": "a wonderful or luxurious way to live"
  },
  {
    "jargon": "Those who live in glass houses shouldn't throw stones",
    "plain": "people with faults shouldn't criticize others"
  },
  {
    "jargon": "Thought leader",
    "plain": "Someone seen as an expert who shapes how others think"
  },
  {
    "jargon": "Thought shower",
    "plain": "Generating a burst of ideas together — an alternative to brainstorm"
  },
  {
    "jargon": "Through thick and thin",
    "plain": "staying loyal in both good and bad times"
  },
  {
    "jargon": "Throughput",
    "plain": "How much gets done in a given time"
  },
  {
    "jargon": "Throw a curveball/Throw a curve",
    "plain": "presenting a person with something difficult to handle unexpectedly"
  },
  {
    "jargon": "Throw in the towel",
    "plain": "Admit defeat and stop trying"
  },
  {
    "jargon": "Throw it at the wall and see what sticks",
    "plain": "Try various approaches and keep whatever works"
  },
  {
    "jargon": "Throws / Throwing",
    "plain": "to deliberately lose or mess up"
  },
  {
    "jargon": "Tiger team",
    "plain": "A specialist group assembled to tackle a specific problem"
  },
  {
    "jargon": "Tighten your belt (or belt",
    "plain": "spending less money and being more frugal"
  },
  {
    "jargon": "Tilt at windmills",
    "plain": "fighting against overwhelming odds while denying reality"
  },
  {
    "jargon": "Time is money",
    "plain": "wasting time amounts to wasting money"
  },
  {
    "jargon": "To be beside yourself",
    "plain": "feeling extremely emotional with worry or anxiety"
  },
  {
    "jargon": "To be named after",
    "plain": "being named in honor or memory of another person"
  },
  {
    "jargon": "To be out of the question",
    "plain": "impossible or unacceptable"
  },
  {
    "jargon": "To be up to something",
    "plain": "doing or planning to do something, often secretively"
  },
  {
    "jargon": "To beat the band",
    "plain": "doing it in an exaggerated or extreme way"
  },
  {
    "jargon": "To bend someone's ear",
    "plain": "speaking to a person eagerly to ask for a favor"
  },
  {
    "jargon": "To blow your own horn",
    "plain": "outwardly praising yourself for it"
  },
  {
    "jargon": "To box someone in",
    "plain": "trapping a person in a situation with limited options"
  },
  {
    "jargon": "To butt in",
    "plain": "interrupting in a rude manner"
  },
  {
    "jargon": "To call it a day",
    "plain": "stopping work for the day"
  },
  {
    "jargon": "To carry a torch for someone",
    "plain": "continuing to have an infatuation with a person"
  },
  {
    "jargon": "To come out swinging",
    "plain": "strongly defending yourself as a confrontation begins"
  },
  {
    "jargon": "To draw a blank",
    "plain": "forgetting it when you specifically wanted to remember"
  },
  {
    "jargon": "To follow up on something",
    "plain": "checking up on a person or it"
  },
  {
    "jargon": "To get rid of",
    "plain": "doing away with it"
  },
  {
    "jargon": "To give in",
    "plain": "deciding to go along with it due to pressure"
  },
  {
    "jargon": "To give someone the heads",
    "plain": "notifying a person of it to keep them updated"
  },
  {
    "jargon": "To go down like a lead balloon",
    "plain": "being terribly received by an audience"
  },
  {
    "jargon": "To go Dutch",
    "plain": "every individual paying for their own bill"
  },
  {
    "jargon": "To go for broke",
    "plain": "gambling all of your resources"
  },
  {
    "jargon": "To have another thing coming",
    "plain": "having an unexpected situation coming that you didn't think would happen"
  },
  {
    "jargon": "To have one's back to the wall",
    "plain": "feeling trapped with no real options"
  },
  {
    "jargon": "To hold out an olive branch",
    "plain": "offering a gesture of peace or asking for forgiveness"
  },
  {
    "jargon": "To know by sight",
    "plain": "knowing a person when you look at them"
  },
  {
    "jargon": "To make a long story short",
    "plain": "telling it in a brief and simple way"
  },
  {
    "jargon": "To make matters worse",
    "plain": "worsening a problem"
  },
  {
    "jargon": "To nix something",
    "plain": "canceling a plan"
  },
  {
    "jargon": "To paddle your own canoe",
    "plain": "being self-sufficient and thinking independently"
  },
  {
    "jargon": "To run hot and cold",
    "plain": "sometimes seeming enthusiastic and other times seeming the opposite"
  },
  {
    "jargon": "To stonewall",
    "plain": "being intentionally vague to avoid answering questions"
  },
  {
    "jargon": "To take something for granted",
    "plain": "assuming you will have it"
  },
  {
    "jargon": "To the hilt",
    "plain": "extremely thorough"
  },
  {
    "jargon": "Too many irons in the fire",
    "plain": "having too many activities taking up your time"
  },
  {
    "jargon": "Top line",
    "plain": "Total revenue"
  },
  {
    "jargon": "Touch base",
    "plain": "Check in briefly"
  },
  {
    "jargon": "Touch base",
    "plain": "getting in contact with a person"
  },
  {
    "jargon": "Touch grass",
    "plain": "go outside, disconnect from the internet"
  },
  {
    "jargon": "Town hall",
    "plain": "A company-wide meeting open to all employees"
  },
  {
    "jargon": "Toxic",
    "plain": "unhealthy, harmful behavior in relationships"
  },
  {
    "jargon": "Traction",
    "plain": "Early signs that something is working"
  },
  {
    "jargon": "Trailing twelve months",
    "plain": "The most recent twelve-month period, used as a performance measure",
    "abbrev": "TTM"
  },
  {
    "jargon": "Transactional net margin method",
    "plain": "A transfer pricing method comparing net profit margins",
    "abbrev": "TNMM"
  },
  {
    "jargon": "Transfer pricing",
    "plain": "Setting prices for transactions between related companies in different countries",
    "abbrev": "TP"
  },
  {
    "jargon": "Transparency",
    "plain": "Being open and honest about what's happening"
  },
  {
    "jargon": "Travel light",
    "plain": "traveling with very little luggage"
  },
  {
    "jargon": "Trial balance",
    "plain": "A list of all ledger accounts and their balances at a point in time",
    "abbrev": "TB"
  },
  {
    "jargon": "Trim the fat",
    "plain": "Remove unnecessary costs, people, or steps from a process"
  },
  {
    "jargon": "Troubled waters",
    "plain": "a difficult and unstable situation"
  },
  {
    "jargon": "Tuckered out",
    "plain": "very tired"
  },
  {
    "jargon": "Turn over a new leaf",
    "plain": "changing your life to make it better"
  },
  {
    "jargon": "Turn the other cheek",
    "plain": "refraining from retaliating against it"
  },
  {
    "jargon": "Turn the tables",
    "plain": "switching places with a person"
  },
  {
    "jargon": "Turned the place upside down",
    "plain": "searching everywhere for it"
  },
  {
    "jargon": "Twist someone's arm",
    "plain": "trying to coerce a person into doing it"
  },
  {
    "jargon": "Under someone's thumb",
    "plain": "being under the control of a person"
  },
  {
    "jargon": "Under the weather",
    "plain": "not feeling well"
  },
  {
    "jargon": "Understood the assignment",
    "plain": "did exactly what was needed, nailed it"
  },
  {
    "jargon": "Unpack",
    "plain": "Look at this more carefully and break it down"
  },
  {
    "jargon": "Up a blind alley",
    "plain": "taking a course of action that will lead to a negative outcome"
  },
  {
    "jargon": "Up a gum tree",
    "plain": "in a very difficult situation that might be impossible to get out of"
  },
  {
    "jargon": "Up to speed",
    "plain": "Familiar with the current situation or information"
  },
  {
    "jargon": "Uplift",
    "plain": "An improvement or increase"
  },
  {
    "jargon": "Upset the apple cart",
    "plain": "disturbing the current situation or status quo"
  },
  {
    "jargon": "Use case",
    "plain": "A specific situation where something is useful"
  },
  {
    "jargon": "Utilize",
    "plain": "Use"
  },
  {
    "jargon": "Value add",
    "plain": "Something that makes things better or more worthwhile"
  },
  {
    "jargon": "Value added tax",
    "plain": "A tax added at each stage of production and collected at the point of sale",
    "abbrev": "VAT"
  },
  {
    "jargon": "Value proposition",
    "plain": "The reason someone should choose you over others"
  },
  {
    "jargon": "Venture capital",
    "plain": "Funding provided to early-stage companies with high growth potential",
    "abbrev": "VC"
  },
  {
    "jargon": "Vertical",
    "plain": "A specific industry or market segment"
  },
  {
    "jargon": "Vibe / Vibing",
    "plain": "mood, atmosphere, or hanging out casually"
  },
  {
    "jargon": "Visibility",
    "plain": "How well something can be seen or understood"
  },
  {
    "jargon": "Voluntold",
    "plain": "Told to volunteer for something — not actually optional"
  },
  {
    "jargon": "Wallflower",
    "plain": "a person who is shy and doesn't receive attention, especially at social events"
  },
  {
    "jargon": "Washing my hands of it",
    "plain": "completely stopping caring about and dealing with it"
  },
  {
    "jargon": "Waste not, want not",
    "plain": "if you don't waste things, you won't lack them"
  },
  {
    "jargon": "Water under the bridge",
    "plain": "it's now in the past and isn't important anymore"
  },
  {
    "jargon": "Watercooler",
    "plain": "Informal social conversation between colleagues"
  },
  {
    "jargon": "We see eye to eye",
    "plain": "we agree and see things the same way"
  },
  {
    "jargon": "Weather the storm",
    "plain": "successfully coming through difficulty"
  },
  {
    "jargon": "Weighted average cost of capital",
    "plain": "The average rate a company is expected to pay to finance its assets",
    "abbrev": "WACC"
  },
  {
    "jargon": "Weighted average return on assets",
    "plain": "The average return across all assets, weighted by their value",
    "abbrev": "WARA"
  },
  {
    "jargon": "Well begun is half done",
    "plain": "getting a good start is very important"
  },
  {
    "jargon": "Wet my whistle",
    "plain": "have a drink when thirsty"
  },
  {
    "jargon": "WFH",
    "plain": "Working from home",
    "abbrev": "WFH"
  },
  {
    "jargon": "Wheelhouse",
    "plain": "Someone's area of expertise or comfort zone"
  },
  {
    "jargon": "When it rains, it pours",
    "plain": "lots of difficulties happening at the same time"
  },
  {
    "jargon": "When push comes to shove",
    "plain": "when it becomes necessary to act"
  },
  {
    "jargon": "White lie",
    "plain": "a slight lie that doesn't do harm"
  },
  {
    "jargon": "Whiteboarding",
    "plain": "Brainstorming and mapping ideas using a physical or virtual whiteboard"
  },
  {
    "jargon": "Whitespace",
    "plain": "An untapped opportunity or gap in the market"
  },
  {
    "jargon": "Whitewash",
    "plain": "trying to cover up something bad"
  },
  {
    "jargon": "Who asked you?",
    "plain": "no one asked for your opinion"
  },
  {
    "jargon": "whole ball of wax",
    "plain": "all of it"
  },
  {
    "jargon": "Wig / Wig flew",
    "plain": "so shocked or impressed your wig flew off"
  },
  {
    "jargon": "Wild and woolly",
    "plain": "untamed and wild looking"
  },
  {
    "jargon": "Winging it",
    "plain": "doing it without any preparation"
  },
  {
    "jargon": "Wins",
    "plain": "Successes, big or small"
  },
  {
    "jargon": "With bells on",
    "plain": "attending with enthusiasm"
  },
  {
    "jargon": "Withholding tax",
    "plain": "Tax deducted at source before income is paid out",
    "abbrev": "WHT"
  },
  {
    "jargon": "Wolf in sheep's clothing",
    "plain": "a person who appears good but has bad intentions"
  },
  {
    "jargon": "Wordsmithing",
    "plain": "Carefully tweaking the exact wording"
  },
  {
    "jargon": "Work in progress",
    "plain": "Goods or projects started but not yet complete",
    "abbrev": "WIP"
  },
  {
    "jargon": "Workflow",
    "plain": "The steps followed to get work done"
  },
  {
    "jargon": "Working capital",
    "plain": "Current assets minus current liabilities — funds available for day-to-day operations",
    "abbrev": "WC"
  },
  {
    "jargon": "Workshop",
    "plain": "A working session to solve a problem together"
  },
  {
    "jargon": "Wouldn't be caught dead",
    "plain": "never wanting to do it due to embarrassment"
  },
  {
    "jargon": "Wouldn't hurt a fly",
    "plain": "very gentle and harmless"
  },
  {
    "jargon": "Yap / Yapping",
    "plain": "talking too much, rambling"
  },
  {
    "jargon": "Year to date",
    "plain": "Figures accumulated from the start of the financial year",
    "abbrev": "YTD"
  },
  {
    "jargon": "Year-over-year",
    "plain": "Compared to the same time last year",
    "abbrev": "YoY"
  },
  {
    "jargon": "Yeet",
    "plain": "to throw forcefully; can also express excitement"
  },
  {
    "jargon": "Yield to maturity",
    "plain": "The total return expected on a bond if held until it matures",
    "abbrev": "YTM"
  },
  {
    "jargon": "You bet",
    "plain": "absolutely right"
  },
  {
    "jargon": "You can lead a horse to water",
    "plain": "you can't force a person to make the right decision"
  },
  {
    "jargon": "You can't have your cake and eat it too",
    "plain": "you can't have everything you want"
  },
  {
    "jargon": "You can't judge a book by its cover",
    "plain": "judge by appearance alone"
  },
  {
    "jargon": "You can't take it with you",
    "plain": "material possessions you can't keep after death"
  },
  {
    "jargon": "You can't teach an old dog new tricks",
    "plain": "harder for older people to learn new things"
  },
  {
    "jargon": "You get what you pay for",
    "plain": "low quality when you pay very little"
  },
  {
    "jargon": "You'll catch more flies with honey than with vinegar",
    "plain": "being nice to get what you want"
  },
  {
    "jargon": "You've sold me",
    "plain": "you've convinced me"
  },
  {
    "jargon": "Zero in on",
    "plain": "Focus closely on one specific thing"
  },
  {
    "jargon": "Zero-based budgeting",
    "plain": "A budgeting method where every expense must be justified from scratch each period",
    "abbrev": "ZBB"
  },
  {
    "jargon": "Zesty",
    "plain": "flamboyant, sassy, having attitude (often referring to behavior that's \"spicy\")"
  },
  {
    "jargon": "💯 / Hundo",
    "plain": "100%, completely agree, authentic, keeping it real"
  }
];
