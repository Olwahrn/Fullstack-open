sequenceDiagram

    participant browser
    participant server

    browser ->> server: https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server ->> browser: HTML file
    deactivate server

    browser ->> server: https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server ->> browser: CSS file
    deactivate server

    browser ->> server: https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server ->> browser: JS file
    deactivate server

    browser ->> server: https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server ->> browser: Json file
    deactivate server

    browser ->> server: https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server ->> browser: HTML file / course stats
    deactivate server

