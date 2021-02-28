var myQuestions =[{
		"question": " Which of these best describes an array?",
		"answers": {
			"a": "A data structure that shows a hierarchical behavior",
			"b": "Container of objects of similar types",
			"c": "Arrays are immutable once initialised",
            "d":"Array is not a data structure"
		},
		"correctAnswer": "b"
	},
	{
		"question": " How do you initialize an array in C?",
		"answers": {
			"a":"int arr[3] = (1,2,3);",
			"b":"int arr(3) = {1,2,3};",
			"c":"int arr[3] = {1,2,3};",
            "d":"int arr(3) = (1,2,3);"
		},
		"correctAnswer": "c"
	},
	{
		"question": "How do you instantiate an array in Java?",
		"answers": {
			"a":"int arr[] = new int(3);",
			"b":"int arr[];",
			"c":"int arr[] = new int[3];",
            "d":"int arr() = new int(3);"
		},
		"correctAnswer": "c"
	},
	{
		"question": "What are the advantages of arrays?",
		"answers": {
			"a":"Objects of mixed data types can be stored",
			"b":"Elements in an array cannot be sorted",
			"c":"Index of first element of an array is 1",
            "d":"Easier to store elements of same data type"
		},
		"correctAnswer": "d"
	},
	{
		"question": "What are the disadvantages of arrays?",
		"answers": {
			"a":"Data structure like queue or stack cannot be implemented",
			"b":"There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
			"c":"Index value of an array can be negative",
            "d":"Elements are sequentially accessed"
		},
		"correctAnswer": "b"
	},
	{
		"question": "Assuming int is of 4bytes, what is the size of int arr[15];?",
		"answers": {
			"a":"15",
			"b":"19",
			"c":"11",
            "d":"60"
		},
		"correctAnswer": "d"
	},
	{
		"question": "In general, the index of the first element in an array is __________",
		"answers": {
			"a":"0",
			"b":"-1",
			"c":"2",
            "d":"1"
		},
		"correctAnswer": "a"
	},
	{
		"question": "Elements in an array are accessed _____________",
		"answers": {
			"a":"randomly",
			"b":"sequentially",
			"c":"exponentially",
            "d":"logarithmically"
		},
		"correctAnswer": "a"
	},
	{
		"question": "Process of inserting an element in stack is called ____________",
		"answers": {
			"a":"Create",
			"b":"Push",
			"c":"Evaluation",
            "d":"Pop"
		},
		"correctAnswer": "b"
	},
	{
		"question": "Process of removing an element from stack is called __________",
		"answers": {
			"a":"Create",
			"b":"Push",
			"c":"Evaluation",
            "d":"Pop"
		},
		"correctAnswer": "d"
	},
	{
		"question": "In a stack, if a user tries to remove an element from an empty stack it is called _________",
		"answers": {
			"a":"Underflow",
			"b":"Empty collection",
			"c":"Overflow",
            "d":"Garbage Collection"
		},
		"correctAnswer": "a"
	},
	{
		"question": "Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________",
		"answers": {
			"a":"Overflow",
			"b":"Crash",
			"c":"Underflow",
            "d":"User flow"
		},
		"correctAnswer": "a"
	},
	{
		"question": "Entries in a stack are “ordered”. What is the meaning of this statement?",
		"answers": {
			"a":"A collection of stacks is sortable",
			"b":"Stack entries may be compared with the ‘<‘ operation",
			"c":"The entries are stored in a linked list",
            "d":"There is a Sequential entry that is one by one"
		},
		"correctAnswer": "d"
	},
	{
		"question": "Which of the following is not the application of stack?",
		"answers": {
			"a":"A parentheses balancing program",
			"b":"Tracking of local variables at run time",
			"c":"Compiler Syntax Analyzer",
            "d":"Data Transfer between two asynchronous process"
		},
		"correctAnswer": "d"
	},
	{
		"question": "Consider the usual algorithm for determining whether a sequence of parentheses is balanced. The maximum number of parentheses that appear on the stack AT ANY ONE TIME when the algorithm analyzes: (()(())(()))?",
		"answers": {
			"a":"1",
			"b":"2",
			"c":"3",
            "d":"4 or more"
		},
		"correctAnswer": "c"
	},
	{
		"question": "Consider the usual algorithm for determining whether a sequence of parentheses is balanced. Suppose that you run the algorithm on a sequence that contains 2 left parentheses and 3 right parentheses (in some order). The maximum number of parentheses that appear on the stack AT ANY ONE TIME during the computation?",
		"answers": {
			"a":"1",
			"b":"2",
			"c":"3",
            "d":"4 or more"
		},
		"correctAnswer": "b"
	},
	{
		"question": "What is the value of the postfix expression 6 3 2 4 + – *?",
		"answers": {
			"a":"1",
			"b":"40",
			"c":"74",
            "d":"-18"
		},
		"correctAnswer": "d"
	},
	{
		"question": "Here is an infix expression: 4 + 3*(6*3-12). Suppose that we are using the usual stack algorithm to convert the expression from infix to postfix notation. The maximum number of symbols that will appear on the stack AT ONE TIME during the conversion of this expression?",
		"answers": {
			"a":"1",
			"b":"2",
			"c":"3",
            "d":"4"
		},
		"correctAnswer": "d"
	},
	{
		"question": "The data structure required to check whether an expression contains a balanced parenthesis is?",
		"answers": {
			"a":"Stack",
			"b":"Queue",
			"c":"Array",
            "d":"Tree"
		},
		"correctAnswer": "a"
	},
	{
		"question": "What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?",
		"answers": {
			"a":"Linked List",
			"b":"Stack",
			"c":"Queue",
            "d":"Tree"
		},
		"correctAnswer": "b"
	},
	{
		"question": "The process of accessing data stored in a serial access memory is similar to manipulating data on a ________",
		"answers": {
			"a":"Heap",
			"b":"Binary Tree",
			"c":"Array",
            "d":"Stack"
		},
		"correctAnswer": "d"
	},
	{
		"question": "Which data structure is used for implementing recursion?",
		"answers": {
			"a":"Queue",
			"b":"Stack",
			"c":"Array",
            "d":"List"
		},
		"correctAnswer": "b"
	},
	{
		"question": "Which of the following statement(s) about stack data structure is/are NOT correct?",
		"answers": {
			"a":"Linked List are used for implementing Stacks",
			"b":"Top of the Stack always contain the new node",
			"c":"Stack is the FIFO data structure",
            "d":"Null link is present in the last node at the bottom of the stack"
		},
		"correctAnswer": "c"
	},
	{
		"question": "Consider the following operation performed on a stack of size 5.</br>Push(1);</br>Pop();</br>Push(2);</br>Push(3);</br>Pop();</br>Push(4);</br>Pop();</br>Pop();</br>Push(5);</br>After the completion of all operation, the number of elements present in stack is?",
		"answers": {
			"a":"1",
			"b":"2",
			"c":"3",
            "d":"4"
		},
		"correctAnswer": "a"
	},
	{
		"question": "Which of the following is not an inherent application of stack?",
		"answers": {
			"a":"Reversing a string",
			"b":"Evaluation of postfix expression",
			"c":"Implementation of recursion",
            "d":"Job scheduling"
		},
		"correctAnswer": "d"
	}
];