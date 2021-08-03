function App() {
	return (
		<div className="app bg-gray-50">
			<TodoTitle />
			<Todo />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
