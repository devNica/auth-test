import re

regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'

#check email format 
def check_email_format(email):
    if re.search(regex, email):
        return True
    else:
        return False