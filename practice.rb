# Write a method that prints out every number from 1 to 100. 

def one_to_hunnit
numba = 1   

100.times do      
  p numba          
  numba += 1   
end   
end 

one_to_hunnit


# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 ... 99).

def every_other_number
  number = 0
  while number < 100
    if number % 2 != 0
      puts number
    end 
    number += 1
  end
end

every_other_number


# Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.
def method(arr)
  count = 0

  arr.each do |number|
  if number == 55
    count +=1
  end 
end
  count
end 

puts method([1,22,55,3,4,6,55,55])

# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

def method(string)
  new_array = []
  length = string.length
  index = 0

  length.times do 
    new_array << string[index]
    if index != length - 1
      new_array << "awesomesauce"
    end
    index += 1 
  end 

  return new_array
end 

p method([1,5,6,8,9,10])


# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
 # The final result should be: {chair: 3, table: 2}

item_amounts = {chair: 5, table: 2}
item_amounts[:chair] = 3
p item_amounts

 # Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

item_amounts = {chair: 5, table: 2}
item_amounts[:desk] = 7
p item_amounts

 # Write a method that accepts a number and returns its factorial.
 # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

def factorial(num)
num.downto(1).reduce(:*)
end 

p factorial(5)
###################

def factorial(num)
  product = 1

  num.times do
    if num > 0
      product *= num
      num -= 1
    # num += 1 (this would end up in an endless loop)
    end
  end
  return product
end

p factorial(5)
##################

# def factorial(num)
#   product = 1
#   while num > 0
#     product *= num
#     num -= 1
#   end
#   return product
# end

# puts factorial(5)