const quotes = [
    {
        quote: `All human beings are entrepreneurs. When we were in the caves, we were all self-employed... finding our food, feeding ourselves. That's where human history began. As civilization came, we suppressed it. We became 'labor' because they stamped us, 'You are labor.' We forgot that we are entrepreneurs.`,
        author: `Muhammad Yunus, Nobel Peace Prize winner and microfinance pioneer.`
    }, // 1
    {
        quote: `Once you make a decision, the universe conspires to make it happen.`,
        author: `Ralph Waldo Emerson`
    }, // 2
    {
        quote: `Love doesn't make the world go 'round.' Love is what makes the ride worthwhile.`,
        author: `Franklin P Jones`
    }, // 3
    {
        quote: `The first and most important factor in building a successful business is that you have to love it.`,
        author: `Darren Hardy`
    }, // 4
    {
        quote: `Starting a company is like staring into the abyss and eating glass.`,
        author: `Elon Musk`
    }, // 5
    {
        quote: `Can't find your passion? Don't check between the couch cushions. It's already in you!`,
        author: `Darren Hardy`
    }, // 6
    {
        quote: `Work is gonna suck 95% of the time. But that other 5% is freaking awesome!`,
        author: `Darren Hardy`
    }, // 7
    {
        quote: `The two most important days in your life are the day you are born and the day you find out why.`,
        author: `Mark Twain`
    }, // 8
    {
        quote: `Do you need to find your passion, or do you need to bring it into what you already do?`,
        author: `Darren Hardy`
    }, //9
    {
        quote: `If you haven't found something you are willing to die for, you aren't fit to live.`,
        author: `Martin Luther King Jr.`
    }, // 10
    {
        quote: `Almost every great achievement began with someone finally getting ticked off, saying, 'Enough!' and standing up to fight.`,
        author: `Darren Hardy`
    }, // 11
    {
        quote: `One of the best days of your life can be when you finally say 'I've had it!' then stand up and fight.`,
        author: `Darren Hardy`
    }, // 12
    {
        quote: `DNA has nothing to do with success. Turn your genes into overalls and get to work.`,
        author: `Darren Hardy`
    }, // 13
    {
        quote: `The thought, 'I can't' is a lie. We use it to excuse ourselves from trying.`,
        author: `Darren Hardy`
    }, // 14
    {
        quote: `Everyone has talent, but ability takes hard work.`,
        author: `Michael Jordan`
    }, // 15
    {
        quote: `Great spirits have always encountered violent opposition from mediocre minds.`,
        author: `Albert Einstein`
    }, // 16
    {
        quote: `People scorn your entrepreneurial choice in hope of dragging you back into the herd so they can feel better about themselves.`,
        author: `Darren Hardy`
    }, // 17
    {
        quote: `When you step outside the status quo, you become a giant mirror for those who stay, reflecting back their cowardice.`,
        author: `Darren Hardy`
    }, // 18
    {
        quote: `People don't resent you for being brave. They resent themselves for being afraid.`,
        author: `Darren Hardy`
    }, // 19
    {
        quote: `If all the people around you are happy with you, you are not doing great work. Progress is disruption and change.`,
        author: `Darren Hardy`
    }, // 20
    {
        quote: `Have you ever WRITTEN DOWN your definite of success? Prepare to be surprised.`,
        author: `Darren Hardy`
    }, // 21
    {
        quote: `Don't let the noise of others' opinions drown out your own inner voice, heart, and intuition.`,
        author: `Steve JObs`
    }, // 22
    {
        quote: `We all get knocked down. How quickly we get up is what separates us.`,
        author: `Darren Hardy`
    }, // 23
    {
        quote: `If you're going to get better, you have to push yourself, you're going to fall. If you're not falling, you're not pushing. Falling is part of getting better.`,
        author: `Jerry Hardy`
    }, // 24
    {
        quote: `There's only one certainty in business: You can't succeed if you quit.`,
        author: `Darren Hardy`
    }, // 25
    {
        quote: `Put that coffee down! Coffee is for closers only. Oh, have I got your attention now? Good.`,
        author: `Glengarry Glen Ross`
    }, // 26
    {
        quote: `The person who knows how to get, keep, and cultivate a customer gets paid the most. Period.`,
        author: `Darren Hardy`
    }, // 27
    {
        quote: `You don't have a business until you sell something.`,
        author: `Darren Hardy`
    }, // 28
    {
        quote: `In today's age you're not competing only with competitors. You're competing with prospects, friends, and their adorable baby pictures.`,
        author: `Darren Hardy`
    }, // 29
    {
        quote: `Want to sell more? Stop selling. Help instead.`,
        author: `Darren Hardy`
    }, // 30
    {
        quote: `Sales is filling a customer's perceived need, not your need to sell something.`,
        author: `Darren Hardy`
    }, // 31
    {
        quote: `Cold Calls are for rookies and weirdos. Don't be a rookie or weirdo. Find a relationship bridge.`,
        author: `Darren Hardy`
    }, // 32
    {
        quote: `You lose 1 out of 5 prospects for being too aggressive. But you win the other 4!`,
        author: `Darren Hardy`
    }, // 33
    {
        quote: `You are one or two dream clients away from changing your future. Go get 'em!`,
        author: `Darren Hardy`
    }, // 34
    {
        quote: `If each of us hires people who are smaller than we are, we shall become a company of dwarfs. But if each of us hires people who are bigger than we are, we shall become a company of giants.`,
        author: `David Ogilvy`
    }, // 35
    {
        quote: `Entrepreneurs are hopeless romantics. Which makes us terrible hiring managers. Get help!`,
        author: `Darren Hardy`
    }, // 36
    {
        quote: `By keeping bad employees you are cutting them a check to make you broke and miserable.`,
        author: `Darren Hardy`
    }, // 37
    {
        quote: `'A' players hire 'A' players, and 'B' players hire 'C' players. We only want 'A' players here.`,
        author: `Steve Jobs`
    }, // 38
    {
        quote: `The one thing that hasn't changed is the team that fields the best players wins.`,
        author: `Jack Welch`
    }, // 39
    {
        quote: `To have a high-performance culture, you need to hire and maintain high-performing people.`,
        author: `Darren Hardy`
    }, // 40
    {
        quote: `The single most important thing you need to do is pick the right people and keep them. There is NOTHING more important than this.`,
        author: `Jim Collins`
    }, // 41
    {
        quote: `Your goal is to be the dumbest one in the room. Hire people BETTER than you.`,
        author: `Darren Hardy`
    }, // 42
    {
        quote: `You don't train your people to be successful. You hire successful people.`,
        author: `Darren Hardy`
    }, // 43
    {
        quote: `The right person in the wrong culture (for them) is the wrong person.`,
        author: `Darren Hardy`
    }, // 44
    {
        quote: `Money is not the primary motivator for an A-Player. Don't just recruit with a paycheck.`,
        author: `Darren Hardy`
    }, // 45
    {
        quote: `What makes work fun is doing meaningful work.`,
        author: `Cody G Foster`
    }, // 46
    {
        quote: `Your business will only be as good as the people you recruit to join it.`,
        author: `Darren Hardy`
    }, // 47
    {
        quote: `Leadership is the ability to get extraordinary achievement from ordinary people.`,
        author: `Brian Tracy`
    }, // 48
    {
        quote: `The number one bottleneck or constraint to the growth of any organization is the leader.`,
        author: `Darren Hardy`
    }, // 49
    {
        quote: `As the leader, you ultimately have 100% responsibility for everything. Don't waste your time blaming.`,
        author: `Darren Hardy`
    }, // 50
    {
        quote: `People don't go as fast as they can. They only go as fast as the leader. You set the pace.`,
        author: `Darren Hardy`
    }, // 51
    {
        quote: `To lead, you only need to say 'Follow me.' Make your action your instruction.`,
        author: `Darren Hardy`
    }, // 52
    {
        quote: `Ask only for others to do what you have done yourself first.`,
        author: `Darren Hardy`
    }, // 53
    {
        quote: `Your people don't listen to you, but they do watch you. They are always watching. BE the example.`,
        author: `Darren Hardy`
    }, // 54
    {
        quote: `When people are calling you out and calling you names, they're really just calling you a leader.`,
        author: `Darren Hardy`
    }, // 55
    {
        quote: `The leader's responsibility is to draw out the talent, drive, and capability of the people on your team. Your job as a leader is to grow your people.`,
        author: `Darren Hardy`
    }, // 56
    {
        quote: `You can't be a great leader if you spend your time doing tasks that aren't actually leadership.`,
        author: `Darren Hardy`
    }, // 57
    {
        quote: `We are a team, not a family. It is the coach's job at every level to hire, develop, and cut smartly so we have starts in every position.`,
        author: `Reed Hastings`
    }, // 58
    {
        quote: `Everyone in your organization is learning how to think, act, and react from YOU. Lead by example.`,
        author: `Darren Hardy`
    }, // 59
    {
        quote: `Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.`,
        author: `Paul J. Meyer`
    }, // 60
    {
        quote: `The big secret of how to get it all done? Don't. Just do the vital functions (amazingly well) and build a great team who are excellent at the rest.`,
        author: `Darren Hardy`
    }, // 61
    {
        quote: `Success has less to do with what we can get ourselves to do and more with keeping ourselves from doing what we shouldn't.`,
        author: `Darren Hardy`
    }, // 62
    {
        quote: `Your inbox is nothing more than a modern day mailroom. Is that really where you want to be working?`,
        author: `Darren Hardy`
    }, // 63
    {
        quote: `Any time you feel overwhelmed, there's a good chance the culprit is a lack of clear priorities.`,
        author: `Darren Hardy`
    }, // 64
    {
        quote: `How do the superachievers do it all? The secret is they DON'T. What's your ONE priority?`,
        author: `Darren Hardy`
    }, // 65
    {
        quote: `If you have more than three priorities, you don't have any.`,
        author: `Darren Hardy`
    }, // 66
    {
        quote: `What's the master skill of productivity? Learning to say No.`,
        author: `Darren Hardy`
    }, // 67
    {
        quote: `You are only one or two key habits away from a massive transformation in any area of your life.`,
        author: `Darren Hardy`
    }, // 68
    {
        quote: `It's not what you learn or what you know; it's what you do with what you know and learn.`,
        author: `Darren Hardy`
    }, // 69
    {
        quote: `Productivity isn't magic. It's discipline.`,
        author: `Darren Hardy`
    }, // 70
    {
        quote: `The dangers of life are infinite, and among them is safety.`,
        author: `Johann von Goethe`
    }, // 71
    {
        quote: `Fear is not real. it's an illusion, a phenomenon that resides entirely within your own brain.`,
        author: `Darren Hardy`
    }, // 72
    {
        quote: `It's fear of fear you fear. The fear itself hurts more than the thing you are scared of.`,
        author: `Darren Hardy`
    }, // 73
    {
        quote: `The activities you are most afraid of are the activities that can cause a breakthrough in your success. Step into them.`,
        author: `Darren Hardy`
    }, // 74
    {
        quote: `The key to success is massive failure. Your goal is to out-fail your competition.`,
        author: `Darren Hardy`
    }, // 75
    {
        quote: `The most successful person in the room is also the one who has failed the most. Go fail!`,
        author: `Darren Hardy`
    }, // 76
    {
        quote: `Risk means acting without certainty. It's scary. But it's also what makes the entrepreneur roller coaster so thrilling.`,
        author: `Darren Hardy`
    }, // 77
    {
        quote: `It's never too late to be what you might have been.`,
        author: `George Eliot`
    }, // 78
    {
        quote: `Follow your own path not the Joneses'. Listen to your own gut, your own heart, not the ambitions of others. Don't let fear, envy, or social pressure cloud your vision.`,
        author: `Darren Hardy`
    }, // 79
    {
        quote: `Don't miss the point. Spend your day pursuing the things you want said in your eulogy.`,
        author: `Darren Hardy`
    }, // 80
    {
        quote: `Bigger is only better if it's making that smile on your face wider, brighter, and fills the journey with joy. Live today as you want to be remembered in the end.`,
        author: `Darren Hardy`
    }, // 81
    {
        quote: `Be the person you 'could have been' now.`,
        author: `Darren Hardy`
    }, // 82
    {
        quote: `Approach your goals like this, 'This is my mountain, and I'm going all the way to the top! You are either going to see me waving from the summit or lying dead on the side. I am not coming back!`,
        author: `Darren Hardy`
    }, // 83
    {
        quote: `Giving is better than receiving because giving starts the receiving process.`,
        author: `Jim Rohn`
    }, // 84
    {
        quote: `Knowing is not enough; we must apply. Willing is not enough; we must do.`,
        author: `Johann von Goethe`
    }, // 85
    {
        quote: `The price of greatness is responsibility.`,
        author: `Winston Churchill`
    }, // 86
    {
        quote: `Every choice carries a consequence. For better or worse, each choice is the unavoidable consequence of its predecessor. There are not exceptions. If you can accept that a bad choice carries the seed of its own punishment, why not accept the fact that a good choice yields desirable fruit?`,
        author: `Gary Ryan Blair`
    }, // 87
    {
        quote: `The greatest power that a person possesses is the power to choose.`,
        author: `J. Martin Kohe`
    }, // 88
    {
        quote: `Be the change you want to see in the world.`,
        author: `Gandhi`
    }, // 89
    {
        quote: `Nobody can hurt me without my permission.`,
        author: `Gandhi`
    }, // 90
    {
        quote: `It is easy enough to be friendly to one's friends. But to befriend the one who regards himself as your enemy is the quintessence of true religion.`,
        author: `Gandhi`
    }, // 91
    {
        quote: `I do not think there is any thrill that can go through the human heart like that felt by the inventor.`,
        author: `Nikola Tesla`
    }, // 92
    {
        quote: `Some regard private enterprise as if it were a predatory tiger to be shot. Others look upon it as a cow that they can milk. Only a handful see it for what it really is - the strong horse that pulls the whole cart.`,
        author: `Winston Churchill`
    }, // 93
    {
        quote: `The more you share profits with your associates - whether it's in salaries or incentives or bonuses or stock discounts - the more profit will accrue to the company.`,
        author: `Sam Walton, founder of Wal-Mart`
    }, // 94
    {
        quote: `As we enjoy great advantages from the inventions of others, we should be glad of an opportunity to serve others by any invention of ours; and this we should do freely and generously.`,
        author: `Benjamin Franklin`
    }, // 95
    {
        quote: `Every handout has a price and that price is a loss of freedom. We must preserve our talents of self-sufficiency, our ability to create things for ourselves, and out true love of independence.`,
        author: `Cameron C. Taylor`
    }, // 96
    {
        quote: `Charity is injurious unless it helps the recipient to become independent of it.`,
        author: `John D. Rockefeller, Jr.`
    }, // 97
    {
        quote: `Everything you want is just outside your comfort zone.`,
        author: `Robert Allen`
    }, // 98
    {
        quote: `When a man is wrapped up in himself, he makes a pretty small package.`,
        author: `John Ruskin`
    }, // 99
    {
        quote: `True nobility is in being superior to your own previous self.`,
        author: `Hindu Proverb`
    }, // 100
    {
        quote: `Constantly seek ways to do better whatever needs to be done. If a person with this quality will continue positive application of this negative factor, that person will have a leadership role. The quality: dissatisfaction. To make the unsatisfactory satisfactory or better is the mark of leadership. Never be satisfied with less than top performance, and progress will be the reward.`,
        author: `Vince Lombardi`
    }, // 101
    {
        quote: `Listen to advice and accept instruction, and in the end you will be wise.`,
        author: `Proverbs 19:20`
    }, // 102
    {
        quote: `Humility is the most difficult of all virtues to achieve; nothing dies harder than the desire to think well of oneself.`,
        author: `T.S. Eliot`
    }, // 103
    {
        quote: `Trust is the glue of life.`,
        author: `Stephen R. Covey`
    }, // 104
    {
        quote: `The supreme quality for a leader is unquestionably integrity. Without it, no real success is possible.`,
        author: `Dwight D. Eisenhower`
    }, // 105
    {
        quote: `Optimism is the faith that leads to achievement.`,
        author: `Helen Keller`
    }, // 106
    {
        quote: `The world is moving so fast these days that the man who says it can't be done is generally interrupted by someone doing it.`,
        author: `Elbert Hubbard`
    }, // 107
    {
        quote: `Leadership is the ability to make goodness operate in the lives of others.`,
        author: `Sterling Sill`
    }, // 108
    {
        quote: `If we did all the things we are capable of doing, we would literally astound ourselves.`,
        author: `Thomas Edison`
    }, // 109
    {
        quote: `You are never too old to set another goal or to dream a new dream.`,
        author: `C.S. Lewis`
    }, // 110
    {
        quote: `The greater danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.`,
        author: `Michelangelo`
    }, // 111
    {
        quote: `Of all the things I've done, the most viral is coordinating the talents of those who work for us and pointing them towards a certain goal.`,
        author: `Walt Disney`
    }, // 112
    {
        quote: `If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.`,
        author: `Andrew Carnegie`
    }, // 113
    {
        quote: `What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal.`,
        author: `Viktor E. Frankl, author of Man's Search for Meaning`
    }, // 114
    {
        quote: `Every adversity, every failure, and every heartache carries with it the seed of an equivalent or a greater benefit.`,
        author: `Napoleon Hill`
    }, // 115
    {
        quote: `Like most other overnight successes, it was about twenty years in the making.`,
        author: `Sam Walton, Founder of Wal-Mart`
    }, // 116
    {
        quote: `Persistence in spite of all obstacles, discouragement, and impossibilities: It is this that in all things distinguishes the strong soul from the weak.`,
        author: `Thomas Carlyle`
    }, // 117
    {
        quote: `Always bear in mind that your own resolution to succeed is more important that any other.`,
        author: `Abraham Lincoln`
    }, // 118
    {
        quote: `Surely what a man does when he is taken off his guard is the best evidence for what sort of a man he is? Surely what pops out before the man has time to put on a disguise is the truth? If there are rats in a cellar you are most likely to see them if you go in very suddenly. But the suddenness does not create the rats; it only prevents them from hiding. In the same way suddenness of the provocation does not make an ill-tempered man: it only shows me what an ill-tempered man I am.`,
        author: `C.S. Lewis`
    }, // 119
    // {
    //     quote: ``,
    //     author: ``
    // }, // 120
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
    // {
    //     quote: ``,
    //     author: ``
    // },
];