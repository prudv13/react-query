# React Query

- Library for fetching data in a react application
- Since React is a UI library, there is no specific pattern for data fetching
- State Management libraries are not great for working with asynchronous or server state

# Client vs Server State

### Client State
- persisted in your app memory and accessing or updating it is synchronous.

### Server State
- Persisted remotely and requires asynchronous APIs for fetching or updating
- Has shared ownership
- Data can be updated by someone else without your knowledge
- UI data may not be in sync with the remote data
- Challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimizations etc.