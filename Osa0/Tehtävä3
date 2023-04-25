sequenceDiagram

    participant browser
    participant server

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server ->> browser: Json {"message":"note created"}
    Note right of browser: payload is the typed text, file containing notes is then  updated by the server if successful
