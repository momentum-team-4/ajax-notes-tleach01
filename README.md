# Note-Taking App

## Directions

In today's project, you will use Ajax to make GET, POST, PUT/PATCH, and DELETE requests, making a one-page application in the process.

Your application is a note-taking app. It should display a list of all your notes and give you the ability to create new notes, edit old notes, and delete notes. Notes are made up of a title, text, and the date/time most recently updated.

No wireframe is provided. You will have to create a design yourself. Looking at Google Keep may provide some inspiration.

## Getting started

This application uses [json-server](https://github.com/typicode/json-server) to provide you with an API. To make sure it is installed, you will need to run the following commands:

```sh
npm install
cp sample-db.json db.json
```

To run json-server, run the following command:

```sh
npm start
```

This will start json-server and a web server. It should open a browser window at the same time. You will need to leave this running while you are working on this application.

The URL for your web application is `http://localhost:8080`.

The URL for your notes API is `http://localhost:3000/notes/`.

### Using the notes API

To get a list of all notes, make a `GET` request to `http://localhost:3000/notes/`.

To add a new note, make a `POST` request to `http://localhost:3000/notes/`. You will need to send a body and headers. Your request will look like this:

```js
fetch('http://localhost:3000/notes/', {
  method: 'POST', 
  headers: {"Content-Type": "application/json"}, 
  body: JSON.stringify({"title": "Hi", "body": "COOL"})
})
.then(r => r.json())
.then(
  // whatever you need to do next
)
```

The `headers` attribute lets json-server know you will be sending JSON to it for it to read. The `body` attribute is the JSON you are sending. If you have an object, then you must call `JSON.stringify` with that object.

To edit a note, make a `PATCH` request to `http://localhost:3000/notes/:id` where `:id` is the id of the note. This will also require the same headers and body as the above request.

To delete a note, make a `DELETE` request to `http://localhost:3000/notes/:id`.

## Resources

The following resources will be very helpful for making this application:

* [MDN - Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN - Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
* [How event delegation works](https://davidwalsh.name/event-delegate)
