### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

\*\*1. getElementById() : getElementById is a unique key used to find just a single element or section or a div element.

\*\*2. getElementsByClassName() : GetElementByClassName is how I can find multiple sections or divs or elements with the same class name.

\*\*3. querySelector: By Using query selectors, we can find out how many child elements are inside a parent element using a query selector.

\*\*4. querySelectorAll: By Using the querySelectorAll we can get all the sections or div elements as an array, which gives me a nodelist.

### How do you create and insert a new element into the DOM?

**1. I am creating a new element into the DOM with "document.createElement(new element name)"
**2. And insert a new element into the DOM with "insert.innerHTML = new element"

### What is Event Bubbling? And how does it work

\*\*1 : Event Bubbling : Event bubbling is when an event is triggered on a child element, it will also be triggered on its parent element, meaning the event is triggered from the child to the parent element.

\*\*2 : And It works with capture phase(parent to child) , target phase(reaching out the child) and the last part bubbling phase(child to parent)

### What is Event Delegation in JavaScript? Why is it useful?

\*\*1 : Event Delegation: Event delegation means add an event to the parent element but the event will be triggered when it reaches out the child.

\*\*2: It is useful because at a time we need multiple event handler into the same parent of child, instead using of multiple handler we provide a single handler into my parent and it will handle all the child element event handler

### What is the difference between preventDefault() and stopPropagation() methods?

\*\*1: preventDefault() : preventDefault() method is used for prevent any type of event with its default behavior.

\*\*2: stopPropagation() : stopPropagation() method is used for immediate break or close any type of events.
