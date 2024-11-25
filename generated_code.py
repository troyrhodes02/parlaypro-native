def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def main():
    print("Welcome to the calculator!")
    print("Available operations: add, subtract, multiply, divide")
    while True:
        operation = input("Enter operation (add, subtract, multiply, divide) or 'quit' to exit: ").strip().lower()
        if operation == 'quit':
            break
        if operation in ['add', 'subtract', 'multiply', 'divide']:
            a = float(input("Enter first number: "))
            b = float(input("Enter second number: "))
            if operation == 'add':
                print(f"The result is: {add(a, b)}")
            elif operation == 'subtract':
                print(f"The result is: {subtract(a, b)}")
            elif operation == 'multiply':
                print(f"The result is: {multiply(a, b)}")
            elif operation == 'divide':
                try:
                    print(f"The result is: {divide(a, b)}")
                except ValueError as e:
                    print(e)
        else:
            print("Invalid operation. Please try again.")

if __name__ == "__main__":
    main()
