participant browser
participant server

browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server ->> browser: HTML document
deactivate server

browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note right of browser: Requests server to post the typed text, server then updates the notes document

browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server ->> browser: Javascript file
deactivate server

Note right of browser: Javascript file executes, then the rest of the files are requested from the server

browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server ->> browser: CSS file
deactivate server

browser ->> server: GET https://studies.cs.helsinki.fi/favicon.ico
activate server
server ->> browser: HTML file, course stats
deactivate server

browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server ->> browser: Json file
deactivate server
