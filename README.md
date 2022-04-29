# Code Foo 10 Application

**Applicant Name**: Mandy Yu

**Introduction Video**: [placeholder]()

## Step 2: Hisui's New Power Plant

### The Prompt 
Requested By: Professor Laventon

The Galaxy Team has decided that in order to advance the research on Pokemon and the Pokedex, Jubilife village needs a brand new power plant. Luckily, Professor Laventon has discovered that the Pokemon, Voltorb, is the best candidate to help power the village.

Voltorbs can cleanly and efficiently produce electricity. An average Voltorb is about 0.5m (1'08") tall and weighs 10.4 kg (22.8lbs). However, they are uncommon and are only found in the Sacred Plaza.

Objective: How many Voltorbs will you need to catch to fully power the village. Describe each step in your thought process.

###  Answer
One Voltorb (that knows Thunderbolt)!

### Thought Process

My first thought would be to catch two Voltorbs (or one Voltorb and a Ditto) and simply breed them to account for how uncommon the Voltorbs are. But, breeding was not yet introduced in Hisui, so that was not a possibility. 

Before answering this question, there are couple of other questions to ask first.
- How much electricity do we need to power Jubilife village?
- How much electricity does a single Voltorb produce?

Thanks to [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(move)), it is known that the move Thunderbolt has the alias 100,000 Volts. So, we can assume that a single thunderbolt from a Voltorb can produce 100,000 volts of electricity. The move Thunder is stronger, so it can probably produce more electricity than Thunderbolt. However, the move has only 70% accuracy, whereas Thunderbolt has 100%, making Thunderbolt the more reliable source of electricity. 

After extensive research, I was unable to find any known records of how much electricity a power plant produces in the Pokemon world. However, according to [Bulbapedia again](https://bulbapedia.bulbagarden.net/wiki/Jubilife_Village), Jubilife is based on the city of Sapporo in Japan. Also, according to [this source](https://www.thespruce.com/calculate-safe-electrical-load-capacities-1152361#:~:text=A%20relationship%20principle%20known%20as,amps%20x%20120%2Dvolts%20%3D%202%2C400), the modern home typically uses 15-amp circuits. 

Using these numbers, 100,000 volts of electricity from a single Thunderbolt and a 15-amp circuit, we can use Ohm's Law `amperage (A) x volts (V) = watts (W)`. We get that a single Thunderbolt from a Voltorb produces 1,500,000 watts of electricity! Converting 1,500,000 watts of electricity to kilowatt hours using the formula `(1,500,000 watts * 365 days * 24 hours/day)/1000` would mean a single Thunderbolt would produce 13,140,000 kWh per year. 


According to [Worlddata.info](https://www.worlddata.info/asia/japan/energy-consumption.php), Japan uses an average of 7,499 kWh (kilowatt hours) per year per capita. Since Jubilife City is based off Sapporo, let's assume the population is similar. In 2022, Sapporo has a population of 2,668,982. This means that, we need approximately 20 billion kWh (20,014,696,018) per year to support the energy usage of Jubilife Village. So dividing the needed amount by the amount that one thunderbolt can produce, we get that we would need approximately 1,523 thunderbolts per year.

1,523 thunderbolts seems realistic for one Voltorb to do as that would be a little more than 4 thunderbolts per day. So, we need only **one Voltorb** to power Jubilife village. 

That answer doesn't seem too realistic for one Voltorb to be powering the whole village, but it would be an ideal situation! Jubilife Village is nowhere as advanced as Jubilife City, meaning we wouldn't even need to produce as much electricity as we said we needed. And this solution of one Voltorb is definitely cost-efficient and scalable. If you get another Voltorb that has learned Thunderbolt, you could power even more villages or reduce the workload on the other Voltorb. 

## Step 3: Polly

Polly is a real-time polling full-stack web application where users can create and view polls. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Components are also styled with [Chakra UI](https://chakra-ui.com/)!

### Instructions
To build and run the website locally, type this in the command line:
```
npm install
npm run dev
```

### Implemented Features
- Home: Users can view all polls that users have created.
- Create: Users can create a new poll with optional password protection.
- Results: Users can view the results of a poll in realtime.
- Poll: Users can vote in a poll.

### Challenges
For this project, I wanted to challenge myself to learn while creating a project, so I decided to use Next.js as my framework. Learning the framework and understanding how it works was a real challenge, but very rewarding. I wanted to include Pusher for real-time updates, but ran into too many issues. In the interest of time, I decided to use an interval and pull the data from MongoDB database every second to mimic the real-time aspect. 

Some of the things I didn't include as features in this polling application were editing and deleting. There was no authentication factor to the application and thus, editing and deleting was a bad idea to implement without forcing users to create accounts. My goal for the polling application was to allow users to create a simple and quick poll without aditional signup.

