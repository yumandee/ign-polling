# Code Foo 10 Application

**Applicant Name**: Mandy Yu

**Introduction Video**: [placeholder]()

## Step 2: Hisui's New Power Plant

### The Prompt 
Requested By: Professor Laventon

The Galaxy Team has decided that in order to advance the research on Pokemon and the Pokedex, Jubilife village needs a brand new power plant. Luckily, Professor Laventon has discovered that the Pokemon, Voltorb, is the best candidate to help power the village.

Voltorbs can cleanly and efficiently produce electricity. An average Voltorb is about 0.5m (1'08") tall and weighs 10.4 kg (22.8lbs). However, they are uncommon and are only found in the Sacred Plaza.

Objective: How many Voltorbs will you need to catch to fully power the village. Describe each step in your thought process.

### Thought Process

As a avid Pokemon fan, my first thought would be to catch two Voltorbs (or one Voltorb and a Ditto) and simply breed them. But, breeding was not yet introduced in Hisui, so that is not a possibility. 

Before answering this question, there are couple of other questions to ask first.
- How much electricity do we need to power Jubilife village?
- How much electricity does a single Voltorb produce?

Thanks to [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(move)), it is known that the move Thunderbolt has the alias 100,000 Volts. So, we can assume that a single thunderbolt from a Voltorb can produce 100,000 volts of electricity. The move Thunder is stronger, so it can probably produce more electricity than Thunderbolt. However, the move has only 70% accurracy, whereas Thunderbolt has 100%, making Thunderbolt the more reliable source of electricity. 

After doing some extensive research, it 

## Step 3: Polly

Polly is a real-time polling full-stack web application where users can create and view polls. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Instructions
To build and run the website locally, 
```
npm install
npm run dev
```

### Features
- Home: Users can view all polls that users have created.
- Create: Users can create a new poll with optional password protection.
- Results: Users can view the results of a poll in realtime.
- Poll: Users can vote in a poll.

### Challenges
For this project, I wanted to challenge myself to learn while creating a project, so I decided to use Next.js as my framework. Learning the framework and understanding how it works was a real challenge, but very rewarding. I wanted to include Pusher for real-time updates, but ran into too many issues. In the interest of time, I decided to use an interval and pull the data from MongoDB database every second to mimic the real-time aspect. Some of the things I didn't include as features in this polling application were editing and deleting. There was no authentication factor to the application and thus, editing and deleting was a bad idea to implement without forcing users to create accounts. The goal of the polling application was to allow users to create a simple and quick poll without aditional signup.
