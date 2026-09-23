# Lecture 10 In-Class Activity: DOM Events

Work with a partner for this one. We'll stop three times during class to go over what everyone found, so when you hit a **Stop** line, finish what you're typing and wait for the rest of the class before moving on.

Open `index.html` with Live Server (or run `npx http-server`) and put all of your code in `script.js`. Keep the browser console open the whole time (F12, then the Console tab).

## Part 1: Listening for a click (about 5 minutes)

There is a button on the page with the id `greet-btn`.

1. Add a click listener to it that changes the text of the `<p id="output">` element.
2. Change your callback so it takes the event object as a parameter, and log it to the console.
3. Expand the event object in the console and look through it. Find at least two properties that tell you something about the click that just happened.

There are a lot of properties in there, so don't try to understand all of them. Look for the ones that seem useful.

**Stop.** When we come back together, be ready to tell the class one property you found and what it tells you.

## Part 2: One click, three listeners (about 6 minutes)

In the Part 2 box on the page there are three elements nested inside each other. `#outer` contains `#inner`, and `#inner` contains a button, `#deep-btn`.

Add a separate click listener to each of the three. Each one should log its own name to the console (`"outer"`, `"inner"`, or `"button"`).

Before you click anything, talk it over with your partner and write your guess in a comment in `script.js`: if you click only the button, how many lines will show up in the console, and in what order?

Then click the button and check.

**Stop.** Be ready to share what you guessed and what actually happened. We'll take a quick vote before we talk about why.

## Part 3: Tasks added later (about 7 minutes)

The Part 3 box has a list of tasks and an **Add a Task** button. The code for that button is already in `script.js` and it works, so leave it alone.

Your job is to make it so clicking a task toggles the `done` class on it. The CSS is already there, so a finished task will show up crossed out.

1. Get this working for the two tasks that are already on the page.
2. Click **Add a Task** to make a new one, then try clicking the new task.

If the new task doesn't respond, that's fine. Leave it broken for now and we'll talk about it.

**Stop.** Be ready to say whether clicking the new task worked. If it didn't, what do you think is different about it?

## If you finish a part early

Stay on the part you're on and try one of these instead of moving ahead:

- In your Part 2 button listener, call `event.stopPropagation()`. What gets logged now when you click the button?
- Pass `{ capture: true }` as a third argument when you add the `#outer` listener. Does the order change?
- There's a sign up form in the Bonus box. Make it so submitting the form doesn't reload the page, and logs whatever was typed into the username field instead.

## Before you leave

Put both of your names in a comment at the top of `script.js`, then commit and push it before the end of class.
