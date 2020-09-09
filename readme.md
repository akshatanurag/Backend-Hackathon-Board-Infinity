# Broad Infinity Hackathon API

### USAGE

```
    1.  /list - GET
        - gets all the todos stored in the database

    2.  /add - POST
        - accepted parameters
            - task_name (String,Required)
            - task_description (String,Required)
            - creator (String,Required)
            - duration (Number,Required)
        - returns the saved todo in JSON format

```

### Daily Progress

```
    DAY-1
    ---
    - setup express sever and mongodb
    - complete /list and /add endpoints
    - Used mongoDB TTL to delete todo after the given time interval

    DAY-2
    ---
    - Made git repo
    - Deployed to heroku
    - Added schema validation with joi (npm package)
    
```