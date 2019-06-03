// Write greeting function here

var greetingClosure = greeting('Henry');
greetingClosure('Hello') // should return 'Hello Henry'


Using closure and only the arguments from greeting and greetingClosure's invocations, write a function that will make this code work. 
When greetingClosure is invoked with 'Hello', it should return 'Hello Henry' ('Henry' coming from the argument given to the function named greeting).

(Hint: Don't forget your spacing!)
