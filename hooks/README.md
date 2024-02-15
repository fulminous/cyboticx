# Hooks
This package contains common react hooks used and shared among various projects

### Installation
```
yarn add @cyboticx/hooks

# or

npm install @cyboticx/hooks
```

### Usage
To use the useLocalStorage hook in a react component, just import it from the package and use as follows:
```ts
import { useLocalStorage } from '@cyboticx/hooks';

const App = () => {
	const [counter, setCounter] = useLocalStorage('counter', '100');

	return (
		<div>
			<p>The value of counter is {counter}.</p>
		</div>
	);
}
```