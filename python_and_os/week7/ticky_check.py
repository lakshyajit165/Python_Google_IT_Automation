#!/usr/bin/env python3

import re
import operator
import csv


per_user = []
errors = {}

# Handling errors

def generate_error_csv(errors):
    # sort in desc acc to values
    sorted_errors = {k: v for k, v in sorted(errors.items(), reverse=True, key=lambda item: item[1])}
    header = ['Error', 'Count']

    with open('error_message.csv', 'a', newline='') as file:
        writer = csv.writer(file, delimiter=',')
        writer.writerow(i for i in header)

        for key in sorted_errors.keys():
            writer.writerow((key,sorted_errors[key]))


# generating error count

def error_count(error_name):
    errors[error_name] = errors.get(error_name, 0) + 1


# Handling users' info and errors

# generating user statistics csv

def generate_user_statistics_csv(per_user):

    header = ['Username', 'INFO', 'ERROR']

    with open('user_statistics.csv', 'a', newline='') as file:
        writer = csv.writer(file, delimiter=',')
        writer.writerow(i for i in header)

        for user in per_user:
            writer.writerow((user['user'],user['INFO'],user['ERROR']))


# function called when per_user is empty(to insert the first entry)

def insert_first_user(username, msg_type):
    user_dict = {}
    user_dict['user'] = username
    if(msg_type == 'INFO'):
        user_dict[msg_type] = user_dict.get(msg_type, 0) + 1
        user_dict['ERROR'] = user_dict.get('ERROR', 0)
    else:
        user_dict[msg_type] = user_dict.get(msg_type, 0) + 1
        user_dict['INFO'] = user_dict.get('INFO', 0)
    
    per_user.append(user_dict)

def user_info(username, msg_type):
    
    # case when per_user is empty/first entry
    if len(per_user) == 0:
        insert_first_user(username, msg_type)
    
    else:
        flag = 0
        for users in per_user:
            # user name present in array of objects
            if users['user'] == username: 
                flag = 1
                if msg_type == 'INFO':
                    users['INFO'] = users['INFO'] + 1
                else:
                    users['ERROR'] = users['ERROR'] + 1

        # username not present in array of objects
        if(flag == 0):
            insert_first_user(username, msg_type)



with open("syslog.log") as f:
    for line in f:
        if "ERROR" in line:

            # extracting username using regex

            username = re.search('\(([^)]+)', line).group(1)
            user_info(username, "ERROR")
            
            
            result = re.search('ERROR(.*)(\(([^)]+))', line)
            error_name = result.group(1)

            error_count(error_name)


        elif "INFO" in line:
            username = re.search('\(([^)]+)', line).group(1)
            user_info(username, "INFO")

# print(per_user)
# print("\n -------------------------------------------------- \n ")
# print(errors)

generate_error_csv(errors)

generate_user_statistics_csv(per_user)
