#!/usr/bin/env python3
import csv
import datetime
import requests

FILE_URL="http://marga.com.ar/employees-with-date.csv"

def get_start_date():
    """Interactively get the start date to query for."""

    print()
    print('Getting the first start date to query for.')
    print()
    print('The date must be greater than Jan 1st, 2018')
    year = int(input('Enter a value for the year: '))
    month = int(input('Enter a value for the month: '))
    day = int(input('Enter a value for the day: '))
    print()

    return datetime.datetime(year, month, day)

def get_file_lines(url):
    """Returns the lines contained in the file at the given URL"""

    # Download the file over the internet
    response = requests.get(url, stream=True)

    # Decode all lines into strings
    lines = []
    for line in response.iter_lines():
        lines.append(line.decode("UTF-8"))
    return lines



    

def get_same_or_newer(start_date):
    """Returns the employees that started on the given date, or the closest one."""
    data = get_file_lines(FILE_URL)
    reader = csv.reader(data[1:])

    min_date_employees = {}
    today = datetime.datetime.today()
    for row in reader: 
        row_date = datetime.datetime.strptime(row[3], '%Y-%m-%d')
        

        # If this date is smaller than the one we're looking for,
        # we skip this row
        if row_date < start_date:
            continue
        elif row_date >= start_date and row_date <= today:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            # min_date_employees.append("{} {} {}".format(row[0], row[1], row[3]))
            name = row[0] + ' ' + row[1]
            year = row_date.strftime("%Y")
            month = row_date.strftime("%b")
            day = row_date.strftime("%d")
            
            date_formatted = month + ' ' + day + ', ' + year
            name_formatted = '[\'' + name + '\']'
            min_date_employees[name_formatted] = date_formatted


     

    return min_date_employees

def list_newer(start_date):
    
    employees = get_same_or_newer(start_date)

   

    for name, date_started in employees.items():
        
        print("Started on {}: {}".format(date_started, name))

    # while start_date < datetime.datetime.today():
        
    #     print("Started on {}: {}".format(start_date.strftime("%b %d, %Y"), employees))

    #     # Now move the date to the next one
    #     start_date = start_date + datetime.timedelta(days=1)

def main():
    start_date = get_start_date()
    list_newer(start_date)

if __name__ == "__main__":
    main()

