# EasyState

Easy State management for React!

### Old

```js
import { useState, useEffect } from "react";

function Example() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		alert("Changed~");
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
```

### New

```js
import easyState from "easystate";
import { useEffect } from "react";

function Example() {
	const count = easyState(0);

	useEffect(() => {
		alert("Changed~");
	}, [count.effect]);

	return (
		<div>
			<p>You clicked {count.$} times</p>
			<button onClick={() => count.$++}>Click me</button>
		</div>
	);
}
```

## Getting started

Install the package,

```
npm i easystate
```

Import it

```js
import easyState from "easystate";
```

Use it

```js
const name = easyState(InitialValue)

// Use it
name.$

// Update
name.$ = value
```