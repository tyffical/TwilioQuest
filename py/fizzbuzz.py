import sys

nums = sys.argv 
nums.pop(0)

for n in nums:
    n = int(n)
    if n%3==0 and n%5==0:
        print("fizzbuzz")
    elif n%3==0:
        print("fizz")
    elif n%5==0:
        print("buzz")
    else:
        print(n)

