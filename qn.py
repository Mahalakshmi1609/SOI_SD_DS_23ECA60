arr=[1,2,3,3,5,5,6,7,8,8]
print(set(arr))
palindrome=input("Enter a string:")
case=palindrome.lower()
reverse1=case[::-1]
print(reverse1)
if (case==reverse1):
    print("It is a palindrome")