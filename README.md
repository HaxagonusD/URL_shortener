# URL Shortener

---

### Click here to try it yourself

- [Url Shortener](https://securityshort.herokuapp.com/)
-

### Algorithm

- Create a unique string (we used the id of the document from mongodb)
- Take the Long form of the url and append the unique string
- Hash the resulting string with MD5
- Take the first 6 characters of the resulting hash
- Store that digest in mongodb along with the url
- The hash is the url parameter that redirects to the long url

### Steps to Run

1. clone this repo
2. Run these commands

```
npm install  && cd client && npm install
```

3. Run the following commands in the base directory and in the client/ directory in 2 seperate terminals

```
npm start

```

4. Short some URLs!
