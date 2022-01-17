from django.core.management.base import BaseCommand

from backend.factories import QuestionFactory, AnswerFactory, ResultFactory


class Command(BaseCommand):
    help = "Seeds the database."

    def handle(self, *args, **options):
        """
        -------------
        Questions
        -------------
        """

        question1 = QuestionFactory.create(
            content="A friend calls you after a long, exhausting day at work. He wants to go out to grab a beer. More oftenly, you will:"
        )
        question2 = QuestionFactory.create(
            content="Weekend time! All the week's work is done; what are you doing with your free time? Most likely, you will:"
        )
        question3 = QuestionFactory.create(
            content="A bunch of people just appeared in your house! What's happening?"
        )
        question4 = QuestionFactory.create(
            content="There's a big family/friend reunion in the works for a special occasion, and people are waiting for your response. What is it?"
        )
        question5 = QuestionFactory.create(
            content="A friend of yours is late for the plan you had set up, in the local restaurant. Most likely, you will:"
        )

        """
        -------------
        Answers
        -------------
        """

        # question 1
        AnswerFactory.create(
            question=question1,
            personality_level=1,
            content="Refuse. The daily grind is too much, man! Time for some Netflix and chill under the blankets.",
        )
        AnswerFactory.create(
            question=question1,
            personality_level=-1,
            content="Accept. It feels good to have a beer with friends after work, to unwind.",
        )
        AnswerFactory.create(
            question=question1,
            personality_level=0,
            content="Consider it. You commonly reserve such plans for a Friday night, but a beer is always just a beer. Right?",
        )

        # question 2
        AnswerFactory.create(
            question=question2,
            personality_level=0,
            content="Get some fresh air and meet some friends one day, and use the other to just re-energize and relax at home.",
        )
        AnswerFactory.create(
            question=question2,
            personality_level=-1,
            content="Go out! You have a plan with friends or family, or maybe something you want to do by yourself.",
        )
        AnswerFactory.create(
            question=question2,
            personality_level=1,
            content="Stay home, enjoying some well-deserved R&R or focusing on some of your favorite hobbies",
        )

        # question 3
        AnswerFactory.create(
            question=question3,
            personality_level=-1,
            content="I have a dinner party planned, what else?",
        )
        AnswerFactory.create(
            question=question3,
            personality_level=1,
            content="I have no ideia, it's scream-and-panic o'clock just about now.",
        )
        AnswerFactory.create(
            question=question3,
            personality_level=0,
            content="Don't know, but I guess it's time to open the bubbly?",
        )

        # question 4
        AnswerFactory.create(
            question=question4,
            personality_level=0,
            content="I'll wait and see how enthusiastic I am when the day comes.",
        )
        AnswerFactory.create(
            question=question4,
            personality_level=1,
            content="I dunno man, I haven't talked with these people in forever, might be weird, y'know?",
        )
        AnswerFactory.create(
            question=question4,
            personality_level=-1,
            content="Let's go! No better time to be with friends/family than for a celebration!",
        )

        # question 5
        AnswerFactory.create(
            question=question5,
            personality_level=0,
            content="Pull out that phone, baby! Read some articles or watch some youtube.",
        )
        AnswerFactory.create(
            question=question5,
            personality_level=-1,
            content="Strike a conversation with some random strangers.",
        )
        AnswerFactory.create(
            question=question5,
            personality_level=1,
            content="Lock yourself in the bathroom, and not come out until your friend arrives.",
        )

        """
        -------------
        Results
        -------------
        """
        ResultFactory.create(
            value=-5,
            personality_class="Life of the Party",
            description="It's just not the same without you there! You want to know everyone! You love to interact with just about anyone and anything, and the more you do it, the more you want to do it. Being alone is the worst possible thing for you, but there's so many people in this world to arrange plans with, so, who cares? You go!",
        )

        ResultFactory.create(
            value=-4,
            personality_class="Enthusiastic Extrovert",
            description="You rarely have a moment of downtime in your life. Things are just better on the go, and the more people you can involve in your plans, the merrier! You love being around people and taking front-and-center stage in most occasions. Sometimes, there might be some burnout, but other than that, you're golden! You go!",
        )

        ResultFactory.create(
            value=-3,
            personality_class="Spontaneous Socialite",
            description="Staying home is boring, and you know it, and as a result, you're neither home nor alone too frequently. It's rare for people to catch you in a quieter or brooder mood. You love hanging out with your friends, doing all kinds of activities. You go!",
        )

        ResultFactory.create(
            value=-2,
            personality_class="Pleased by People",
            description="You definitely enjoy other people's presence in your life. Though not the most outgoing person out there, you take a good amount of joy from social gatherings and group work. However, a little quiet moment from time to time is also appreciated, and you use those breaks to good effect. You go!",
        )

        ResultFactory.create(
            value=-1,
            personality_class="Introverted Extrovert",
            description="You're definitely tending more onto the extroverted side of the scale, but you still enjoy some good peace and quiet from time to time. People never overstay their welcome, but sometimes you wish you had a bit more time for yourself. As long as you're aware of that, everything will be fine. You go!",
        )

        ResultFactory.create(
            value=0,
            personality_class="Half and Half",
            description="You're a balanced person: on one hand you enjoy social gatherings and interacting with people; on the other, you also rejoice in a bit of quiet and alone time. As long as no boundaries are too heavily crossed, this balance is sure to bring you great peace of mind. You go!",
        )

        ResultFactory.create(
            value=1,
            personality_class="Extroverted Introvert",
            description="You're definitely tending more onto the introverted side of the scale, but you still enjoy going out with friends or family. People never overstay their welcome, but sometimes you wish you had a bit more time for yourself. As long as you're aware of that, everything will be fine. You go!",
        )

        ResultFactory.create(
            value=2,
            personality_class="Discreet Outgoer",
            description="You're more introverted than most, but not a lot. You enjoy social gatherings, but mostly prefer to not be the center of attention. You much rather have deep one-on-one conversations, than partake in group small talk. Maybe everyone knows you to be a bit quieter than most, but that also means that when you talk, it's usually in a considerate, thoughtful way. You go!",
        )

        ResultFactory.create(
            value=3,
            personality_class="Inconsistent Interactor",
            description="You're the kind of person that likes to be mostly by themselves. You don't take too much enjoyment out of big social gatherings, and even with your closest circle of friends, you might not accept all plans they throw at you. However, focusing on being your best, by yourself often seeps into your relationships, and approaching each one ina more meaningful way means they tend to be more fulfilling as a result. You go!",
        )

        ResultFactory.create(
            value=4,
            personality_class="Honed Homebody",
            description="Staying in is the new normal, and gladly so. Really, who even needs to go outside anymore? You don't love interacting with people, and much prefer being in peaceful, quiet solitude. You might occasionally partake in social gatherings, but only with people you an extreme degree of confidence in. As such, your friends are true companions. You enjoy your quiet times with or without them, and you're usually very self-reliant. You go!",
        )

        ResultFactory.create(
            value=5,
            personality_class="Incessant Introvert",
            description="You're the kind of person that might just get a heart attack from interacting with other people. Social avoidance and peaceful contemplative moments are your bread and butter, and you rarely leave those confort zones of yours. However, that often allows you to focus more on your personal goals and hobbies, and your journey of interior self-discovery holds many rewards, as long as you're not afraid to pursue it. You go!",
        )
