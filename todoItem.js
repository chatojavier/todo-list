function TodoItem({ item, index, remove }) {
	console.log(item);
	const handleOnClick = () => {
		remove(index);
	};
	return (
		<div className="todo shadow-none border-b pb-3" id={index}>
			<span className="todo__item">{item.text}</span>
			<span
				className="todo__item-delete cursor-pointer opacity-10 hover:opacity-100"
				onClick={handleOnClick}
			>
				<i className="fas fa-times-circle"></i>
			</span>
		</div>
	);
}
