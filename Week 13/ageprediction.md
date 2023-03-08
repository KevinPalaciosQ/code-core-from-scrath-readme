# Age Prediction API 👶-👴:

Create a simple REST API that tries to predict an age based on a name.

## API Requeriments:

- Use Express.JS to build the API.
- The API should be capable to response to any name.
- The API should use route parameters to get the name:

```bash
    # Request example
    # Here samsepiol is the name the API should try to
    # predict the age.
    http://localhost:3000/api/age/samsepiol
```

- The age should be a random number that satisfies the condition: `age > 0 && age < 100`
- The response should include the age in days.
- The response should look similar to this one:

```json
{
  "name": "samsepiol",
  "age": "62",
  "days": "19366"
}
```

- If no name is provided in the request, the API should return an error message  
  prompting you to use the correct parameters:

  ```json
  {
    "error": "Missing parameter 'name' was expected."
  }
  ```
##  Postman Output
![PredictionAge](https://user-images.githubusercontent.com/95326781/223586679-e5a1430a-7302-4044-b6ae-4aa40760d293.jpg)
