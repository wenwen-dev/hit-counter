# My reflections

1. Using const out of habit  
   In this case, using `const` out of habit is not a good idea, because we need to read AND write files.

2. Repeating logic  
   Repeating accessing file when reading and then when writing into. A better approach is not to separate them into 2 functions and reuse the line to read the value.#

3. Object destructuring & object short form  
   Better code: destructuring the data object to get number of hits, with only 1 line.
   `JSON.stringify({hits})` where `{hits}` is the shorter form of `{hits: hits}`

4. JSON conversions  
   `JSON.parse()`: string -> object (so that can be manipulated as an object using JavaScript)  
   `JSON.stringify()`: object -> string (so that can be stored in database.json)

5. Using React Server Component  
   Because RSC runs only on the server, doesn't re-render on the client side, we don't need to worry about those concerns and can write code e.g. `hits += 1`

6. Component ownership  
   A Server component cannot be owned by Client components, because it's rendered first on the server. However, owning and using are 2 different things.

```
   <AClientComponent>
      <AServerComponent />
   </AClientComponent>
```

## This code might work, if the client component takes the server component as prop (children), using whatever it returns as children, to return something which doesn't include creating a server component.

# Hit Counter exercise

Your mission is to add a working hit counter to the homepage, by using `database.json` as the source of truth.

## Running a development server

First, install the dependencies:

```bash
$ npm install
```

Then, start a local development server:

```bash
$ npm run dev
```

**Note:** Unlike create-react-app, we need to run the `dev` command, not `start`. The `start` command is used to run a _production_ server; we'll learn more about that later in the course.
