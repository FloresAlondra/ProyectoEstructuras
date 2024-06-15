class Stack 
{
    constructor() 
    {
        this.items = [];
    }

    push(element)
    {
        this.items.push(element);
    }

    pop() 
    {
        if (this.isEmpty()) 
        {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek()
    {
        return this.items[this.items.length - 1];
    }

    isEmpty() 
    {
        return this.items.length === 0;
    }

    printStack() 
    {
        return this.items.map(item => JSON.stringify(item)).join(", ");
    }
}

const stack = new Stack();

function pushData() 
{
    const dataInput = document.getElementById('dataInput').value;
    if (dataInput === "") 
    {
        alert("Por favor, ingrese un dato.");
        return;
    }
    
    const parsedInput = isNaN(dataInput) ? dataInput : Number(dataInput);
    stack.push(parsedInput);
    document.getElementById('dataInput').value = "";
    displayStack();
}

function popData()
{
    if (stack.isEmpty())
    {
        alert("La pila está vacía.");
    } 
    else 
    {
        stack.pop();
        displayStack();
    }
}

function displayStack() 
{
    const stackDisplay = document.getElementById('stackDisplay');
    stackDisplay.innerHTML = `Datos Contenidos: [ ${stack.printStack()} ]`;
}

document.addEventListener('DOMContentLoaded', displayStack);
