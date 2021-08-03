function Todo() {
	const [todos, setTodos] = React.useState([
		{
			text: "learn react",
			isCompleted: false,
		},
		{
			text: "meet friend for lunch",
			isCompleted: false,
		},
		{
			text: "build todo app",
			isCompleted: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text: text, isCompleted: false }];
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	console.log(todos);
	return (
		<div className="p-4 rounded-lg shadow-md bg-white">
			{todos.map((todo, i) => (
				<TodoItem item={todo} index={i} remove={removeTodo} key={i} />
			))}
			<TodoForm addTodo={addTodo} />
		</div>
	);
}
